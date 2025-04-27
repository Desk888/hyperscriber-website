
import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from './components/ServiceCard';
import ServicesHeader from './components/ServicesHeader';
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
        <ServicesHeader />
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-12"
        >
          {services.map((service, index) => (
            <ServiceCard 
              key={service.id}
              service={service}
              variants={itemVariants}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesList;
