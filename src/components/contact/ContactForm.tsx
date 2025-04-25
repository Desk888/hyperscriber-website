
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { supabase } from '@/integrations/supabase/client';

// Enhanced schema with stricter validation
const contactFormSchema = z.object({
  name: z.string().trim().min(2, {
    message: "Name must be at least 2 characters."
  }).max(100, {
    message: "Name cannot exceed 100 characters."
  }).refine(val => /^[a-zA-Z\s\-'.]+$/.test(val), {
    message: "Name can only contain letters, spaces, hyphens, apostrophes, and periods."
  }),
  email: z.string().email({
    message: "Please enter a valid email address."
  }).max(254, {
    message: "Email cannot exceed 254 characters."
  }),
  company: z.string().optional().transform(val => val?.trim() || undefined)
    .refine(val => !val || val.length <= 200, {
      message: "Company name cannot exceed 200 characters."
    }),
  message: z.string().trim().min(10, {
    message: "Message must be at least 10 characters."
  }).max(2000, {
    message: "Message cannot exceed 2000 characters."
  })
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [csrfToken, setCsrfToken] = useState<string>('');

  React.useEffect(() => {
    // Generate a CSRF token on component mount
    const generateCSRFToken = () => {
      const token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      setCsrfToken(token);
      sessionStorage.setItem('csrfToken', token);
    };
    
    generateCSRFToken();
  }, []);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: ""
    }
  });

  const onSubmit = async (values: ContactFormValues) => {
    setIsSubmitting(true);
    
    try {
      // Validate CSRF token
      const storedToken = sessionStorage.getItem('csrfToken');
      if (storedToken !== csrfToken) {
        throw new Error("Security validation failed. Please refresh the page and try again.");
      }
      
      // Rate limiting check (simple implementation)
      const lastSubmitTime = localStorage.getItem('lastContactFormSubmit');
      const currentTime = Date.now();
      if (lastSubmitTime && (currentTime - parseInt(lastSubmitTime)) < 60000) {
        throw new Error("Please wait a minute before submitting again.");
      }
      
      // Sanitize inputs (using the validations from Zod)
      const sanitizedValues = contactFormSchema.parse(values);
      
      // Add timestamp and user agent for security monitoring
      const payload = {
        ...sanitizedValues,
        submittedAt: new Date().toISOString(),
        userAgent: navigator.userAgent,
        csrfToken
      };
      
      const response = await fetch('https://hyperscriber-ai.up.railway.app/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': csrfToken
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        let errorText = await response.text();
        let errorMessage = 'Failed to send message. Please try again.';
        try {
          const errorData = JSON.parse(errorText);
          errorMessage = errorData.message || errorText || errorMessage;
        } catch {
          if (errorText) errorMessage = errorText;
        }
        console.error('Server error response:', errorText);
        throw new Error(errorMessage);
      }

      // Set last submit time for rate limiting
      localStorage.setItem('lastContactFormSubmit', currentTime.toString());
      
      // Regenerate CSRF token after successful submission
      const newToken = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      setCsrfToken(newToken);
      sessionStorage.setItem('csrfToken', newToken);

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
        duration: 5000,
      });
      form.reset();
    } catch (error) {
      console.error('Contact Form Error:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className="bg-white shadow-lg border border-gray-100 h-full flex flex-col px-8 py-8 sm:p-8 md:p-10 rounded-xl"
    >
      <h2 className="text-2xl font-semibold mb-6 tracking-tight">Send us a message</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-grow flex flex-col">
          {/* Hidden CSRF token input */}
          <input type="hidden" name="csrfToken" value={csrfToken} />
          
          <FormField 
            control={form.control} 
            name="name" 
            render={({ field }) => (
              <FormItem className="mb-1">
                <FormLabel className="text-base font-medium">Full Name</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Your name" 
                    className="rounded-lg border-gray-200 focus:ring-blue-500 focus:border-blue-500" 
                    autoComplete="name"
                    maxLength={100}
                    {...field} 
                  />
                </FormControl>
                <FormMessage className="text-sm" />
              </FormItem>
            )} 
          />
          
          <FormField 
            control={form.control} 
            name="email" 
            render={({ field }) => (
              <FormItem className="mb-1">
                <FormLabel className="text-base font-medium">Email Address</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="email@example.com" 
                    className="rounded-lg border-gray-200 focus:ring-blue-500 focus:border-blue-500" 
                    autoComplete="email"
                    maxLength={254}
                    type="email"
                    {...field} 
                  />
                </FormControl>
                <FormMessage className="text-sm" />
              </FormItem>
            )} 
          />
          
          <FormField 
            control={form.control} 
            name="company" 
            render={({ field }) => (
              <FormItem className="mb-1">
                <FormLabel className="text-base font-medium">Company (optional)</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Your company name" 
                    className="rounded-lg border-gray-200 focus:ring-blue-500 focus:border-blue-500" 
                    autoComplete="organization"
                    maxLength={200}
                    {...field} 
                  />
                </FormControl>
                <FormMessage className="text-sm" />
              </FormItem>
            )} 
          />
          
          <FormField 
            control={form.control} 
            name="message" 
            render={({ field }) => (
              <FormItem className="mb-1 flex-grow">
                <FormLabel className="text-base font-medium">Your Message</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="How can we help you?" 
                    className="rounded-lg min-h-32 flex-grow border-gray-200 focus:ring-blue-500 focus:border-blue-500" 
                    maxLength={2000}
                    {...field} 
                  />
                </FormControl>
                <FormMessage className="text-sm" />
              </FormItem>
            )} 
          />
          
          <Button 
            type="submit" 
            disabled={isSubmitting} 
            className="w-full rounded-full py-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-300 mt-auto shadow-md hover:shadow-lg"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                Send Message <Send className="ml-2 h-4 w-4" />
              </span>
            )}
          </Button>
        </form>
      </Form>
    </motion.div>
  );
};

export default ContactForm;
