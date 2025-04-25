
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const TestimonialBanner = () => {
  return (
    <section className="bg-slate-50 py-8 border-y border-slate-200">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-4 text-center"
        >
          <Quote className="text-blue-600 h-8 w-8 flex-shrink-0" />
          <div>
            <p className="text-lg md:text-xl text-slate-700 font-medium mb-2">
              "HyperScriber transformed our content strategy. Their AI-powered approach delivered exceptional results."
            </p>
            <p className="text-sm text-slate-600">
              <span className="font-semibold">Sarah Johnson</span> • CEO at TechFlow
            </p>
          </div>
          <Quote className="text-blue-600 h-8 w-8 flex-shrink-0 rotate-180" />
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialBanner;
