import React from 'react';
import { ArrowRight, MessageSquare, FileText, Laptop, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'LinkedIn Ghostwriting For Founders',
    description: 'Build thought leadership and generate leads with professionally crafted LinkedIn content.',
    icon: <MessageSquare className="h-8 w-8" />,
    period: '/month',
    features: ['Daily posts', 'Audience growth', 'Performance metrics', 'Strategic planning'],
    color: 'from-blue-500 to-indigo-600',
    bgLight: 'bg-blue-50'
  },
  {
    title: 'SEO Blog Articles',
    description: 'Rank higher and drive more organic traffic with SEO-optimized blog content.',
    icon: <FileText className="h-8 w-8" />,
    period: '/month',
    features: ['Monthly articles', 'Keyword research', 'Competitive analysis', 'Internal linking'],
    color: 'from-purple-500 to-indigo-600',
    bgLight: 'bg-purple-50'
  },
  {
    title: 'Website & Ad Copywriting', 
    description: 'Convert more with persuasive website and ad copy that clearly communicates your value.',
    icon: <Laptop className="h-8 w-8" />,
    period: '/project',
    features: [
      'Conversion-Focused Copy', 
      'Landing Page Copy', 
      'SEO Optimized Pages', 
      'Brand Voice Consistency',
    ],
    color: 'from-teal-500 to-blue-500',
    bgLight: 'bg-teal-50'
  },
  {
    title: 'Email Marketing Solutions',
    description: 'Comprehensive email marketing services to nurture leads, drive conversions, and boost customer retention.',
    icon: <Mail className="h-8 w-8" />,
    period: '/month',
    features: ['Strategic newsletters', 'Email templates', 'Automation setup', 'Performance analytics'],
    color: 'from-blue-500 to-sky-400',
    bgLight: 'bg-sky-50'
  }
];

const ServicesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const childVariants = {
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
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 mb-5 text-xs font-semibold tracking-wider rounded-full bg-blue-50 text-blue-600">
            OUR SERVICES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Content Solutions for Every SaaS Need
          </h2>
          <p className="text-muted-foreground text-lg">
            We blend AI efficiency with human creativity to deliver content that connects with your audience and drives business results.
          </p>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={childVariants} className="group">
              <Card className="h-full flex flex-col border-0 bg-white shadow-md rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className={`h-1.5 w-full bg-gradient-to-r ${service.color}`}></div>
                <CardHeader className="pb-4">
                  <div className={`mb-3 w-14 h-14 flex items-center justify-center rounded-lg ${service.bgLight} text-blue-600`}>
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-0 grow">
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <div className="mr-2 p-0.5 rounded-full bg-green-100">
                          <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button 
                    variant="outline" 
                    className="w-full border border-blue-200 hover:bg-blue-50 text-blue-600 hover:text-blue-700 rounded-lg group"
                    size="sm"
                    asChild
                  >
                    <Link to={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      <span>Learn More</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-16">
          <Button 
            className="rounded-full px-8 py-6 shadow-md hover:shadow-lg bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 group"
            asChild
          >
            <Link to="/services">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
