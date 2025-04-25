
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const TestimonialBanner = () => {
  return (
    <section className="bg-gradient-to-r from-slate-50 to-blue-50 py-16 border-y border-slate-200">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-6 text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm"
        >
          <Quote className="text-blue-600 h-10 w-10 flex-shrink-0 opacity-80" />
          <div>
            <p className="text-xl md:text-2xl text-slate-700 font-medium mb-3 leading-relaxed">
              "HyperScriber transformed our content strategy. Their AI-powered approach delivered exceptional results."
            </p>
            <p className="text-sm md:text-base text-slate-600">
              <span className="font-semibold">Sarah Johnson</span> • <span className="text-blue-600">CEO at TechFlow</span>
            </p>
          </div>
          <Quote className="text-blue-600 h-10 w-10 flex-shrink-0 rotate-180 opacity-80" />
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialBanner;
