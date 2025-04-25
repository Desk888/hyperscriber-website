
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO at TechFlow',
    image: '/placeholder.svg',
    content: 'ContentAI transformed our content strategy. Their blend of AI efficiency and human creativity has helped us consistently produce high-quality pieces that resonate with our audience.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Marketing Director at SaaSify',
    image: '/placeholder.svg',
    content: 'Working with ContentAI has been a game-changer. We\'ve seen a 40% increase in organic traffic and our lead generation has never been stronger. Their team truly understands SaaS.',
    rating: 5,
  },
  {
    name: 'Lisa Rodriguez',
    role: 'Founder at DataSmart',
    image: '/placeholder.svg',
    content: 'The LinkedIn ghostwriting service has positioned me as a thought leader in my industry. I\'m getting more connection requests and partnership opportunities than ever before.',
    rating: 5,
  },
  {
    name: 'David Wilson',
    role: 'CTO at CloudScale',
    image: '/placeholder.svg',
    content: 'Their content not only sounds great but actually drives results. Our blog posts are ranking on page one for several competitive keywords, bringing us qualified leads every day.',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="testimonials" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 mb-5 text-xs font-semibold tracking-wider rounded-full bg-blue-50 text-blue-600">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Here's what successful SaaS founders and marketing leaders have to say about our services.
          </p>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="h-full border-0 shadow-md hover-scale">
                <CardContent className="p-8">
                  {/* Stars */}
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg 
                        key={i} 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5 text-yellow-500 mr-1" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground mb-6 text-lg">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-4 border-2 border-white shadow-sm">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
