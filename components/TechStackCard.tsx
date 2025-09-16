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
  { title: 'DB & Services', tags: ['Cloudflare Workers', 'Docker', 'Appwrite', 'Supabase', 'Prisma ORM', 'Postman', 'Postgres', 'MongoDB'] },
];

const TechTag = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block bg-white/10 text-white text-xs px-2.5 py-0.5 rounded-full border border-white/20 hover:bg-white/20 transition-colors duration-200">
    {children}
  </span>
);

export function TechStackCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      whileHover={{ scale: 1.01 }}
      className="col-span-2 row-span-2"
    >
      <Card className="bg-black/80 backdrop-blur-sm border border-white/10 p-6 flex flex-col justify-center">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-5"
        >
          <div className="text-white text-3xl font-bold mb-2 leading-tight">
            <span className={spaceGrotesk.className}>
              <span className="text-purple-400">{'{}'}</span>
              <br />
              TECH
              <br />
              STACK
            </span>
          </div>
        </motion.div>

        {techStackData.map((category) => (
          <div key={category.title} className="mb-3 last:mb-0">
            <h4 className="text-white text-base font-semibold mb-2">{category.title}:</h4>
            <div className="flex flex-wrap gap-2">
              {category.tags.map((tag) => (
                <TechTag key={tag}>{tag}</TechTag>
              ))}
            </div>
          </div>
        ))}
      </Card>
    </motion.div>
  );
}