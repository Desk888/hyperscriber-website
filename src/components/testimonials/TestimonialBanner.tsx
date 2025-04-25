
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const TestimonialBanner = () => {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-blue-50/50 to-slate-50 py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative bg-white rounded-3xl p-10 shadow-lg border border-blue-100"
        >
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-600 rounded-full p-3 shadow-lg">
            <Quote className="text-white h-6 w-6" />
          </div>
          
          <div className="max-w-3xl mx-auto text-center pt-4">
            <p className="text-2xl md:text-3xl text-slate-800 font-medium mb-6 leading-relaxed">
              "HyperScriber transformed our content strategy. Their AI-powered approach delivered exceptional results."
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-semibold text-lg">
                SJ
              </div>
              <div className="text-left">
                <p className="font-semibold text-slate-800">Sarah Johnson</p>
                <p className="text-blue-600 font-medium">CEO at TechFlow</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialBanner;
