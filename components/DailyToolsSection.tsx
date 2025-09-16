'use client';
import { motion } from 'framer-motion';
import { Card } from './ui/card'; // Assuming this is your custom Card component
import { Code, Music } from 'lucide-react';

// Data for the Tech Stack card
const techStackData = [
  {
    title: 'Frontend',
    tags: ['Reactjs', 'Nextjs', 'Shadcn', 'Recoil', 'Tailwind CSS', 'Tanstack Query'],
  },
  {
    title: 'Backend',
    tags: ['Expressjs', 'FastAPI', 'Hono', 'Gin'],
  },
  {
    title: 'DB & Services',
    tags: ['Postgres', 'MongoDB', 'Redis', 'Kafka', 'Docker', 'Prisma ORM'],
  },
  {
    title: 'Extra',
    tags: ['Blockchain ETH', 'Solana'],
  },
];

// Data for the content cards on the right
const cardsData = [
  {
    id: 1,
    type: 'music',
    animationDelay: 1.0,
    title: 'Back to Friends of Sombra',
    artist: 'by Sombra',
    year: '2017',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/2/2f/Friends_of_Sombra.jpg',
    spotifyUrl: 'https://open.spotify.com/track/1Z8mH2zS6YyABt2GA4E745', // Example Spotify link
    gradient: 'from-red-600/20 to-orange-500/20',
    hoverGradient: 'hover:from-red-600/30 hover:to-orange-500/30',
  },
  {
    id: 2,
    type: 'quote',
    animationDelay: 1.2,
    quote: "I'm not seeking penance for what I've done, Father. I'm asking forgiveness for what I'm about to do.",
    author: '- Daredevil',
    imageUrl: 'https://image.api.playstation.com/vulcan/ap/rnd/202011/1717/R8g0r9lB0tE9x0bN7N7g7g7g.png',
    gradient: 'from-red-800/20 to-gray-900/20',
    hoverGradient: 'hover:from-red-800/30 hover:to-gray-900/30',
  },
];

// A small, reusable component for tech tags
const TechTag = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block bg-white/10 text-white text-xs px-3 py-1 rounded-full border border-white/20 hover:bg-white/20 transition-colors duration-200">
    {children}
  </span>
);

export function DailyToolsSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="space-y-4 w-full max-w-7xl mx-auto" // Added classes for a wider, centered layout
    >
      <div className="flex items-center gap-2 mb-6">
        <h3 className="text-white font-bold text-lg">DAILY</h3>
        <div className="text-white font-normal">Tool</div>
      </div>
      <div className="flex items-center gap-2 mb-6">
        <h3 className="text-white font-bold text-2xl">STACK.</h3>
      </div>

      {/* Main Content Grid - Adjusted for compact height */}
      <div className="grid grid-cols-4 grid-rows-2 gap-2">
        {/* Tech Stack Card (Left side) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          whileHover={{ scale: 1.01 }}
          className="col-span-2 row-span-2" // Changed row-span to 2
        >
          <Card className="bg-black/80 backdrop-blur-sm border border-white/10 p-6 h-full flex flex-col justify-center"> {/* Centered content */}
            <div>
              {/* Mapping over the tech stack data */}
              {techStackData.map((category) => (
                <div key={category.title} className="mb-4"> {/* Reduced margin */}
                  <h4 className="text-white text-lg font-semibold mb-3">{category.title}:</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.tags.map((tag) => (
                      <TechTag key={tag}>{tag}</TechTag>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Content Cards (Right side) - Mapped from array */}
        {cardsData.map((card) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: card.animationDelay }}
            whileHover={{ scale: 1.02 }}
            className="col-span-2" // Removed explicit row-span, grid places it automatically
          >
            <Card
              className={`backdrop-blur-sm border border-red-300/20 p-6 transition-all duration-300 relative overflow-hidden h-full ${card.gradient} ${card.hoverGradient} ${card.type === 'music' ? 'cursor-pointer' : ''}`}
              onClick={card.type === 'music' ? () => window.open(card.spotifyUrl, '_blank') : undefined}
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-80"
                style={{ backgroundImage: `url('${card.imageUrl}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="relative h-full flex flex-col justify-end">
                {card.type === 'music' ? (
                  <>
                    <div className="text-white font-bold text-lg mb-2">{card.title}</div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-orange-200 text-sm">{card.artist}</div>
                        <div className="text-orange-300 text-xs mt-1">{card.year}</div>
                      </div>
                      <Music className="w-6 h-6 text-orange-300" />
                    </div>
                  </>
                ) : (
                  <div className="text-center justify-center flex flex-col h-full">
                    <p className="text-white font-medium text-xl mb-4 italic leading-relaxed">{card.quote}</p>
                    <p className="text-red-300 text-base font-semibold">{card.author}</p>
                  </div>
                )}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}