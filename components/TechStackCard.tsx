'use client';
import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { Space_Grotesk } from 'next/font/google';

// Initialize Space Grotesk font
const spaceGrotesk = Space_Grotesk({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

type TechCategory = {
  title: string;
  tags: string[];
};

const techStackData: TechCategory[] = [
  { title: 'Frontend', tags: ['Reactjs', 'Nextjs', 'Shadcn', 'Recoil', 'Tailwind CSS', 'Tanstack Query'] },
  { title: 'Backend', tags: ['Nodejs', 'Honosjs', 'Expressjs', 'NPM'] },
  { title: 'DB & Services', tags: ['Cloudflare Workers', 'Docker', 'Convex','Clerk', 'firebase', 'Prisma ORM', 'Postman', 'Postgres', 'MongoDB'] },
];

// Define parent and child variants for the staggered animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Adjust the delay between each tag's animation
    },
  },
};

const itemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const TechTag = ({ children }: { children: React.ReactNode }) => (
  // Use motion.span for each tag to apply the individual animation
  <motion.span 
    variants={itemVariants} 
    className="inline-block bg-white/10 text-white text-xs px-2.5 py-0.5 rounded-full border border-white/20 hover:bg-white/20 transition-colors duration-200"
  >
    {children}
  </motion.span>
);
// ... (imports and data remain the same)

export function TechStackCard() {
  return (
    <motion.div
      // Modify these properties to add the left-to-right animation
      initial={{ x: -70, opacity: 0 }} // Start 100px to the left and fully transparent
      animate={{ x: 0, opacity: 1 }}     // Animate to its final position (0) and full opacity
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }} // Adjust duration and delay as needed
      whileHover={{ scale: 1.01 }}
      className="col-span-2 row-span-2"
    >
      <Card className="relative bg-card/5 backdrop-blur-sm border border-white/10 p-5 
                hover:scale-[1.02] transition-transform duration-300 
                shadow-inner overflow-hidden group">
        {/* inner glow line */}
        <div className="absolute inset-0 pointer-events-none rounded-xl 
                  shadow-[inset_0_0_8px_rgba(255,255,255,0.1)] 
                  transition-all duration-500 group-hover:shadow-[inset_0_0_18px_rgba(255,255,255,0.25)]" />  
        
        {/* The rest of your component remains unchanged */}
        {/* Title with hover underline */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-5"
        >
          <div className="relative text-white text-3xl font-bold mb-2 leading-tight w-fit">
            <span className={spaceGrotesk.className}>
              <span className="text-purple-400">{'{}'}</span>
              <br />
              TECH
              <br />
              STACK
            </span>
            
            {/* underline animation */}
            <span className="absolute left-0 -bottom-1 h-[3px] w-0 bg-purple-400 
                             transition-all duration-500 group-hover:w-full"></span>
          </div>
        </motion.div>

        {/* Categories */}
        {techStackData.map((category) => (
          <div key={category.title} className="mb-3 last:mb-0">
            <h4 className="text-white text-base font-semibold mb-2">{category.title}:</h4>
            {/* Animate the container to stagger the children */}
            <motion.div 
              className="flex flex-wrap gap-2"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {category.tags.map((tag) => (
                <TechTag key={tag}>{tag}</TechTag>
              ))}
            </motion.div>
          </div>
        ))}
      </Card>
    </motion.div>
  );
}