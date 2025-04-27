import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, FileText, Laptop, Mail, ArrowRight, CheckCircle, BarChart, Users, Target, Lightbulb, PenTool, ChevronRight, Layers, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const services = [
  {
    id: "linkedin",
    icon: <MessageSquare className="h-8 w-8" />,
    title: 'LinkedIn Ghostwriting for Founders',
    description: 'Position yourself as a thought leader and attract qualified leads.',
    details: [
      'Custom posts that match your tone and expertise',
      'Strategic content calendar aligned with your goals',
      'Audience engagement to grow your network',
      'Performance analytics and optimization recommendations',
    ],
    benefits: [
      'Increased audience engagement and network growth',
      'Consistent brand voice that resonates with your target audience',
      'Strategic content that addresses your audience\'s pain points',
      'Thought leadership to position you as an industry expert'
    ],
    process: [
      {
        title: "AI Content Foundation",
        icon: <Lightbulb className="h-6 w-6 text-blue-500" />,
        description: "We analyze trending topics and your audience's preferences to create initial content outlines."
      },
      {
        title: "Expert Human Refinement",
        icon: <PenTool className="h-6 w-6 text-blue-500" />,
        description: "Skilled content specialists refine the AI outputs, adding industry expertise and creative elements."
      },
      {
        title: "Strategic Publishing",
        icon: <Target className="h-6 w-6 text-blue-500" />,
        description: "Content is published at optimal times for maximum engagement based on analytics."
      },
      {
        title: "Performance Analysis",
        icon: <BarChart className="h-6 w-6 text-blue-500" />,
        description: "Comprehensive metrics tracking engagement, reach, and conversions to refine future content."
      }
    ],
    caseStudy: {
      client: "SaaS Analytics Platform",
      results: [
        "250% increase in LinkedIn engagement",
        "35% growth in qualified leads from LinkedIn",
        "15 new partnership opportunities"
      ]
    },
    color: 'from-blue-500 to-indigo-600',
    bgLight: 'bg-blue-50'
  },
  {
    id: "blog",
    icon: <FileText className="h-8 w-8" />,
    title: 'SEO Blog Articles',
    description: 'Boost rankings and turn traffic into customers with conversion-focused blog content.',
    details: [
      'In-depth keyword & competitor research',
      '1,500+ word SEO-optimized articles',
      'Smart internal linking & on-page SEO',
      'Regular performance reporting'
    ],
    benefits: [
      'Higher search engine rankings for targeted keywords',
      'Increased organic traffic to your website',
      'Established authority in your industry',
      'Long-term content assets that continue to drive traffic'
    ],
    process: [
      {
        title: "Keyword Research",
        icon: <Target className="h-6 w-6 text-purple-500" />,
        description: "Strategic identification of high-value keywords with reasonable competition levels."
      },
      {
        title: "AI-Assisted Drafting",
        icon: <Lightbulb className="h-6 w-6 text-purple-500" />,
        description: "Our AI creates comprehensive, SEO-friendly article drafts based on research and keywords."
      },
      {
        title: "Expert Editing",
        icon: <PenTool className="h-6 w-6 text-purple-500" />,
        description: "Content specialists refine and enhance the articles with industry expertise and engaging elements."
      },
      {
        title: "Optimization & Analysis",
        icon: <BarChart className="h-6 w-6 text-purple-500" />,
        description: "Continuous monitoring of article performance with data-driven improvements."
      }
    ],
    caseStudy: {
      client: "B2B SaaS Platform",
      results: [
        "First page rankings for 12 target keywords",
        "127% increase in organic traffic",
        "35% decrease in cost per lead"
      ]
    },
    color: 'from-purple-500 to-indigo-600',
    bgLight: 'bg-purple-50'
  },
  {
    id: "website",
    icon: <Laptop className="h-8 w-8" />,
    title: 'Website & Ad Copywriting', 
    description: 'Convert more with persuasive website and ad copy that communicates your value proposition.',
    details: [
      'Strategic website content audit and strategy',
      'Conversion-focused landing page copy',
      'UX writing for improved user experience',
      'SEO optimization for key pages',
      'A/B testing recommendations for continuous improvement',
      'Targeted ad copywriting for digital platforms', 
      'Ad copy optimized for different platforms (Google, Meta, LinkedIn)' 
    ],
    benefits: [
      'Higher conversion rates on landing pages',
      'Clearer communication of your unique value proposition',
      'Improved user experience through strategic copywriting',
      'Consistent brand voice across your digital presence',
      'Increased ad engagement and click-through rates' 
    ],
    process: [
      {
        title: "Website Analysis",
        icon: <Target className="h-6 w-6 text-teal-500" />,
        description: "Comprehensive audit of current website content and conversion performance."
      },
      {
        title: "AI-Powered Drafting",
        icon: <Lightbulb className="h-6 w-6 text-teal-500" />,
        description: "AI creates conversion-focused copy drafts based on your value proposition and target audience."
      },
      {
        title: "Conversion Optimization",
        icon: <PenTool className="h-6 w-6 text-teal-500" />,
        description: "Expert copywriters refine messaging to maximize clarity and persuasiveness."
      },
      {
        title: "A/B Testing & Refinement",
        icon: <BarChart className="h-6 w-6 text-teal-500" />,
        description: "Data-driven testing to continuously improve conversion rates and ad performance."
      }
    ],
    caseStudy: {
      client: "SaaS HR Platform",
      results: [
        "89% increase in demo requests",
        "42% improvement in page conversion rate",
        "25% reduction in bounce rate",
        "35% increase in ad click-through rates" 
      ]
    },
    color: 'from-teal-500 to-blue-500',
    bgLight: 'bg-teal-50'
  },
  {
    id: "email-marketing",
    icon: <Mail className="h-8 w-8" />,
    title: 'Email Marketing Solutions',
    description: 'Drive engagement and conversions with comprehensive email marketing services.',
    details: [
      'Strategic newsletter campaigns',
      'Custom email template design',
      'Automated workflow setup',
      'A/B testing strategies',
      'Email sequence creation',
      'List segmentation & management',
      'Performance analytics & optimization'
    ],
    benefits: [
      'Higher customer engagement and retention',
      'Improved lead nurturing and conversion rates',
      'Consistent brand messaging across email campaigns',
      'Data-driven optimization of email performance',
      'Automated customer journey touchpoints'
    ],
    process: [
      {
        title: "Strategy Development",
        icon: <Target className="h-6 w-6 text-sky-500" />,
        description: "Create comprehensive email marketing strategy aligned with business goals."
      },
      {
        title: "Content Creation",
        icon: <PenTool className="h-6 w-6 text-sky-500" />,
        description: "Design and write engaging email content and templates."
      },
      {
        title: "Automation Setup",
        icon: <Layers className="h-6 w-6 text-sky-500" />,
        description: "Implement automated workflows and triggered email sequences."
      },
      {
        title: "Performance Optimization",
        icon: <BarChart className="h-6 w-6 text-sky-500" />,
        description: "Continuous testing and refinement based on analytics data."
      }
    ],
    caseStudy: {
      client: "B2B SaaS Platform",
      results: [
        "45% average open rate (industry avg: 21%)",
        "15% click-through rate (industry avg: 2.5%)",
        "32% increase in customer retention",
        "28% boost in recurring revenue from email campaigns"
      ]
    },
    color: 'from-blue-500 to-sky-400',
    bgLight: 'bg-sky-50'
  }
];

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
            <motion.div 
              key={index} 
              variants={itemVariants} 
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
                        className={`rounded-full px-6 py-2 shadow-sm hover:shadow-md bg-gradient-to-r ${service.color} text-white hover:opacity-90`}
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
                    
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold mb-5">Process</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {service.process.map((step, i) => (
                          <div key={i} className="flex gap-4">
                            <div className="shrink-0 mt-1">
                              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                                {step.icon}
                              </div>
                            </div>
                            <div>
                              <h5 className="font-semibold">{step.title}</h5>
                              <p className="text-sm text-muted-foreground">{step.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
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
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-16"
        >
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesList;
