
import { MessageSquare, FileText, Laptop, Mail, Users, Target, Lightbulb, PenTool, BarChart, Layers } from 'lucide-react';
import { Service } from '../types/service';
import React from 'react';

export const services: Service[] = [
  {
    id: "linkedin",
    icon: React.createElement(MessageSquare, { className: "h-8 w-8" }),
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
        icon: React.createElement(Lightbulb, { className: "h-6 w-6 text-blue-500" }),
        description: "We analyze trending topics and your audience's preferences to create initial content outlines."
      },
      {
        title: "Expert Human Refinement",
        icon: React.createElement(PenTool, { className: "h-6 w-6 text-blue-500" }),
        description: "Skilled content specialists refine the AI outputs, adding industry expertise and creative elements."
      },
      {
        title: "Strategic Publishing",
        icon: React.createElement(Target, { className: "h-6 w-6 text-blue-500" }),
        description: "Content is published at optimal times for maximum engagement based on analytics."
      },
      {
        title: "Performance Analysis",
        icon: React.createElement(BarChart, { className: "h-6 w-6 text-blue-500" }),
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
    icon: React.createElement(FileText, { className: "h-8 w-8" }),
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
        icon: React.createElement(Target, { className: "h-6 w-6 text-purple-500" }),
        description: "Strategic identification of high-value keywords with reasonable competition levels."
      },
      {
        title: "AI-Assisted Drafting",
        icon: React.createElement(Lightbulb, { className: "h-6 w-6 text-purple-500" }),
        description: "Our AI creates comprehensive, SEO-friendly article drafts based on research and keywords."
      },
      {
        title: "Expert Editing",
        icon: React.createElement(PenTool, { className: "h-6 w-6 text-purple-500" }),
        description: "Content specialists refine and enhance the articles with industry expertise and engaging elements."
      },
      {
        title: "Optimization & Analysis",
        icon: React.createElement(BarChart, { className: "h-6 w-6 text-purple-500" }),
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
    icon: React.createElement(Laptop, { className: "h-8 w-8" }),
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
        icon: React.createElement(Target, { className: "h-6 w-6 text-teal-500" }),
        description: "Comprehensive audit of current website content and conversion performance."
      },
      {
        title: "AI-Powered Drafting",
        icon: React.createElement(Lightbulb, { className: "h-6 w-6 text-teal-500" }),
        description: "AI creates conversion-focused copy drafts based on your value proposition and target audience."
      },
      {
        title: "Conversion Optimization",
        icon: React.createElement(PenTool, { className: "h-6 w-6 text-teal-500" }),
        description: "Expert copywriters refine messaging to maximize clarity and persuasiveness."
      },
      {
        title: "A/B Testing & Refinement",
        icon: React.createElement(BarChart, { className: "h-6 w-6 text-teal-500" }),
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
    icon: React.createElement(Mail, { className: "h-8 w-8" }),
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
        icon: React.createElement(Target, { className: "h-6 w-6 text-sky-500" }),
        description: "Create comprehensive email marketing strategy aligned with business goals."
      },
      {
        title: "Content Creation",
        icon: React.createElement(PenTool, { className: "h-6 w-6 text-sky-500" }),
        description: "Design and write engaging email content and templates."
      },
      {
        title: "Automation Setup",
        icon: React.createElement(Layers, { className: "h-6 w-6 text-sky-500" }),
        description: "Implement automated workflows and triggered email sequences."
      },
      {
        title: "Performance Optimization",
        icon: React.createElement(BarChart, { className: "h-6 w-6 text-sky-500" }),
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
