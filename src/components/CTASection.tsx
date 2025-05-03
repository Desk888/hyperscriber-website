
import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl overflow-hidden relative shadow-xl"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full"></div>
            <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-white/10 rounded-full"></div>
            <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-white/10 rounded-full"></div>
          </div>
          
          <div className="relative z-10 p-8 sm:p-10 md:p-14 lg:p-16 text-center">
            <span className="inline-block py-1 px-3 mb-5 text-xs font-semibold tracking-wider rounded-full bg-white/20 text-white">
              GET IN TOUCH
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white max-w-3xl mx-auto leading-tight tracking-tight">
              Ready to Transform Your SaaS Content Strategy?
            </h2>
            <p className="text-white/90 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
              Book a free consultation today to discuss your business needs.
            </p>
            
            {/* Social proof elements - made responsive */}
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center mb-10">
              <div className="flex items-center gap-2 bg-white/20 px-3 sm:px-4 py-2 rounded-full">
                <Check className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                <span className="text-white text-sm sm:text-base font-medium">No commitment required</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-3 sm:px-4 py-2 rounded-full">
                <Check className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                <span className="text-white text-sm sm:text-base font-medium">15-minute strategy session</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-3 sm:px-4 py-2 rounded-full">
                <Check className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                <span className="text-white text-sm sm:text-base font-medium">Custom growth plan</span>
              </div>
            </div>
            
            {/* Made button responsive */}
            <div className="flex justify-center">
              <a href="https://calendly.com/hyperscriber-info/free-introductory-call?preview_source=et_card&month=2025-04" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-white text-blue-700 hover:bg-blue-50 rounded-full px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base shadow-lg group transition-all duration-300 id-calendly-booking">
                  Book Your Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
