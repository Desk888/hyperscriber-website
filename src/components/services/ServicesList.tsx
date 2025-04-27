
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import ServiceCard from './components/ServiceCard';
import ServicesHeader from './components/ServicesHeader';
import { services } from './data/services';
import { useLocation } from 'react-router-dom';

const ServicesList = () => {
  const location = useLocation();
  
  useEffect(() => {
    // If there's a hash in the URL, scroll to the corresponding service
    if (location.hash) {
      const id = location.hash.slice(1); // Remove the # from the hash
      const element = document.getElementById(id);
      if (element) {
        // Add a small delay to ensure the page is fully loaded
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

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
          {services.map((service) => (
            <div 
              key={service.id} 
              id={service.title.toLowerCase().replace(/\s+/g, '-')}
            >
              <ServiceCard 
                service={service}
                variants={itemVariants}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesList;
