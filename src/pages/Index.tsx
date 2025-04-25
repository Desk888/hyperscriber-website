
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/hero/HeroSection';
import TestimonialBanner from '@/components/testimonials/TestimonialBanner';
import ServicesSection from '@/components/services/ServicesSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/layout/Footer';
import { Helmet } from 'react-helmet';
import PricingBenefits from '@/components/pricing/PricingBenefits';

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col"
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>HyperScriber | AI-Powered Content Agency</title>
        <meta name="description" content="Leveraging AI to create high-converting content that drives growth for SaaS companies. Content that converts, at scale." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
        <link rel="canonical" href="https://hyperscriber.com/" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <Navbar />
      <main 
        className="mt-0 flex-grow"
        style={{ paddingTop: 'calc(var(--banner-height, 0px) + 88px)' }} 
      >
        <HeroSection />
        <TestimonialBanner />
        <ServicesSection />
        <PricingBenefits />
        <CTASection />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Index;
