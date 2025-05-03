
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const packages = [
  {
    name: 'Starter Package',
    features: [
      'Brand Voice & Competitor Analysis',
      'Keyword & Audience Research',
      '2 Personalized LinkedIn Posts per week',
      '1 SEO optimized Blog articles per month',
      'Personalized Graphics for Articles',
      'Content Performance Analysis',
      '1 Review'
    ]
  },
  {
    name: 'Growth',
    features: [
      'Everything in Starter',
      '5 Personalized LinkedIn Posts per week',
      '2 Optimized Blog Posts per month',
      'Personalized Graphics for articles',
      'Content Performance Analysis',
      '2 Reviews'
    ],
    highlighted: true
  },
  {
    name: 'Custom Package',
    features: [
      'Keywords & Audience Analysis',
      'Weekly Personalized LinkedIn Posts',
      'Monthly Personalized SEO Blog Posts',
      'Reviews quantity to be agreed',
      'Personalized Graphics'
    ],
    isCustom: true
  }
];

const CompletePackages = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Complete Package
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose from our carefully designed packages or get a custom solution tailored to your specific needs.
          </p>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {packages.map((pkg, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="hover-scale"
            >
              <Card className={`h-full flex flex-col border-0 shadow-md rounded-xl overflow-hidden ${pkg.highlighted ? 'border-2 border-blue-500 relative' : ''}`}>
                {pkg.highlighted && (
                  <div className="absolute top-0 inset-x-0 transform translate-y-0">
                    <div className="bg-blue-500 text-white text-xs font-semibold py-1 text-center">
                      RECOMMENDED
                    </div>
                  </div>
                )}
                <CardHeader className={`pb-4 ${pkg.highlighted ? 'pt-8' : ''}`}>
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                </CardHeader>
                <CardContent className="pb-0 grow">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-8">
                  <a 
                    href="https://calendly.com/hyperscriber-info/free-introductory-call?preview_source=et_card&month=2025-04" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button 
                      variant="default"
                      className="w-full bg-blue-600 hover:bg-blue-700 rounded-lg group id-get-in-touch"
                      size="lg"
                    >
                      <span>Get In Touch</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CompletePackages;
