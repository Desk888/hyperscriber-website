
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ServiceProcess } from './ServiceProcess';
import { Service } from '../types/service';

interface ServiceCardProps {
  service: Service;
  variants: any;
}

const ServiceCard = ({ service, variants }: ServiceCardProps) => {
  return (
    <motion.div 
      variants={variants} 
      className="group"
    >
      <Card className="overflow-hidden border-0 shadow-md transition-all duration-300 hover:shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          <div className={`lg:col-span-4 p-8 bg-gradient-to-br ${service.bgLight} relative`}>
            <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${service.color}`}></div>
            <div className="mb-6">
              <div className={`w-16 h-16 flex items-center justify-center rounded-lg bg-white shadow-sm text-blue-600`}>
                {service.icon}
              </div>
            </div>
            <CardTitle className="text-2xl font-bold mb-3">{service.title}</CardTitle>
            <CardDescription className="text-base mb-5">
              {service.description}
            </CardDescription>
            
            <div className="mt-8">
              <Button
                className={`rounded-full px-6 py-2 shadow-sm hover:shadow-md bg-gradient-to-r ${service.color} text-white hover:opacity-90 id-request-service`}
                asChild
              >
                <Link to="/contact" className="flex items-center gap-2">
                  <span>Request Service</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="lg:col-span-8 p-8 bg-white">
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-5">Key Features</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.details.map((detail, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 p-1 rounded-full bg-green-100">
                      <CheckCircle size={16} className="text-green-600" />
                    </div>
                    <span className="text-muted-foreground">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <ServiceProcess process={service.process} />
            
            <div className="mb-4">
              <Accordion type="single" collapsible className="border-0">
                <AccordionItem value={`benefits-${service.id}`} className="border-0">
                  <AccordionTrigger className="py-2 font-semibold text-lg">
                    Why Choose This Service?
                  </AccordionTrigger>
                  <AccordionContent className="pt-2">
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="flex items-center justify-center bg-blue-50 p-1 rounded-full mt-1">
                            <CheckCircle size={18} className="text-blue-500" />
                          </div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
