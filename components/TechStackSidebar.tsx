import { motion } from 'motion/react';
import { Badge } from './ui/badge';

const techStack = {
  Frontend: [
    'React', 'Next.js', 'TailwindCSS', 'SCSS', 'Shadcn', 
    'Framer-Motion', 'Recoil', 'Tanstack Query'
  ],
  Backend: [
    'Node.js', 'Hono.js', 'Express.js', 'Bun', 'NPM'
  ],
  'Db & Services': [
    'Cloudflare Workers', 'Docker', 'Appwrite', 'Supabase', 
    'Prisma ORM', 'PostgreSQL', 'MongoDB'
  ]
};

export function TechStackSidebar() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-card/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 h-fit"
      whileHover={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        transition: { duration: 0.3 }
      }}
    >
      <motion.div
        className="mb-6"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <h2 className="text-white font-bold text-lg">TECH STACK</h2>
      </motion.div>
      
      {Object.entries(techStack).map(([category, technologies], categoryIndex) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
          className="mb-5"
          whileHover={{
            y: -2,
            transition: { duration: 0.2 }
          }}
        >
          <h3 className="text-white font-medium text-sm mb-3">{category}:</h3>
          <motion.div 
            className="flex flex-wrap gap-2"
            variants={{
              hover: {
                transition: { staggerChildren: 0.05 }
              }
            }}
            whileHover="hover"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.3, 
                  delay: categoryIndex * 0.1 + index * 0.05 
                }}
                variants={{
                  hover: {
                    scale: 1.1,
                    y: -2,
                    transition: { duration: 0.2 }
                  }
                }}
                whileHover={{
                  scale: 1.15,
                  y: -3,
                  transition: { duration: 0.2 }
                }}
              >
                <Badge 
                  variant="secondary" 
                  className="bg-white/8 hover:bg-white/15 text-white border-white/20 transition-all duration-200 text-xs px-2 py-1"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
}