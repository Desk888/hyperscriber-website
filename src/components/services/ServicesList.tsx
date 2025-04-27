
import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from './components/ServiceCard';
import { services } from './data/services';

const ServicesList = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
            Comprehensive Content Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            From thought leadership to lead generation, we offer a full spectrum of content services designed specifically for SaaS companies.
          </p>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-12"
        >
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              service={service}
              variants={itemVariants}
            />
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-16"
        />
      </div>
    </section>
  );
};

export default ServicesList;
