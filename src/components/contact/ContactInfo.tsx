
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Calendar, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ContactInfo = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="space-y-6 h-full flex flex-col"
    >
      <Card className="bg-gradient-to-r from-blue-600 to-blue-700 border-0 shadow-lg overflow-hidden rounded-xl">
        <CardContent className="p-8 text-white">
          <h3 className="text-xl font-semibold mb-4 tracking-tight">Book a Consultation</h3>
          <p className="text-blue-50 mb-6">
            Ready to discuss your content needs? Schedule a free 15-minute consultation with our team.
          </p>
          <a href="https://calendly.com/hyperscriber-info/free-introductory-call?preview_source=et_card&month=2025-04" target="_blank" rel="noopener noreferrer">
            <Button 
              variant="default"
              className="w-full rounded-full py-6 bg-white hover:bg-blue-50 text-blue-700 transition-colors shadow-md hover:shadow-lg"
            >
              Book a Call <Calendar className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </CardContent>
      </Card>
      
      <Card className="bg-gradient-to-r from-blue-600 to-blue-700 border-0 rounded-xl mt-auto">
        <CardContent className="p-6 text-white">
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle className="h-5 w-5 text-white flex-shrink-0" />
            <h4 className="font-medium">Fast Turnaround Times</h4>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle className="h-5 w-5 text-white flex-shrink-0" />
            <h4 className="font-medium">Dedicated Account Manager</h4>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="h-5 w-5 text-white flex-shrink-0" />
            <h4 className="font-medium">Results-Driven Approach</h4>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ContactInfo;

