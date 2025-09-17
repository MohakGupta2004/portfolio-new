'use client';
import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { Music } from 'lucide-react';

type CardType = {
  id: number;
  type: 'music' | 'quote';
  animationDelay: number;
  title?: string;
  artist?: string;
  year?: string;
  quote?: string;
  author?: string;
  imageUrl: string;
  spotifyUrl?: string;
  gradient: string;
  hoverGradient: string;
  aspectRatio: string;
};

const cardsData: CardType[] = [
  {
    id: 1,
    type: 'music',
    animationDelay: 0.3,
    title: 'Back to Friends of Sombra',
    artist: 'by Sombra',
    year: '2017',
    imageUrl: 'https://i.scdn.co/image/ab67616d0000b2739d24f74c1e2d8a12b1e591ec',
    spotifyUrl: 'https://open.spotify.com/track/1Z8mH2zS6YyABt2GA4E745',
    gradient: 'from-red-600/20 to-orange-500/20',
    hoverGradient: 'hover:from-red-600/30 hover:to-orange-500/30',
    aspectRatio: 'aspect-square',
  },
  {
    id: 2,
    type: 'quote',
    animationDelay: 0.6,
    quote: "I'm not seeking penance for what I've done, Father. I'm asking forgiveness for what I'm about to do.",
    author: '- Daredevil',
    imageUrl: 'https://i.pinimg.com/1200x/c8/48/fe/c848fe03bbb96bfe0329133ce653e7c0.jpg',
    gradient: 'from-red-800/20 to-gray-900/20',
    hoverGradient: 'hover:from-red-800/30 hover:to-gray-900/30',
    aspectRatio: 'aspect-[3/4]',
  },
  {
    id: 3,
    type: 'music',
    animationDelay: 0.9,
    title: 'The Unstoppable',
    artist: 'by Zao',
    year: '2023',
    imageUrl: 'https://i.scdn.co/image/ab67616d0000b27376c72198083a216503c00435',
    spotifyUrl: 'https://open.spotify.com/track/5c9bVd6J9Q5h7B7pGgQ37T',
    gradient: 'from-blue-600/20 to-purple-500/20',
    hoverGradient: 'hover:from-blue-600/30 hover:to-purple-500/30',
    aspectRatio: 'aspect-square',
  },
  {
    id: 4,
    type: 'quote',
    animationDelay: 1.2,
    quote: "All we have to decide is what to do with the time that is given us.",
    author: '- Gandalf',
    imageUrl: 'https://i.pinimg.com/73x/32/7b/0a/327b0ab01e8c95a2890a82b8a7f1a308.jpg',
    gradient: 'from-green-800/20 to-gray-900/20',
    hoverGradient: 'hover:from-green-800/30 hover:to-gray-900/30',
    aspectRatio: 'aspect-[2/3]',
  },
  {
    id: 5,
    type: 'music',
    animationDelay: 1.5,
    title: 'Nightcall',
    artist: 'by Kavinsky',
    year: '2010',
    imageUrl: 'https://i.scdn.co/image/ab67616d0000b27351658b111246d601d36d4f9b',
    spotifyUrl: 'https://open.spotify.com/track/0U0ldCRF1Wj6pX3j63sL0A',
    gradient: 'from-purple-600/20 to-indigo-500/20',
    hoverGradient: 'hover:from-purple-600/30 hover:to-indigo-500/30',
    aspectRatio: 'aspect-square',
  },
  {
    id: 6,
    type: 'quote',
    animationDelay: 1.8,
    quote: "Do or do not. There is no try.",
    author: '- Yoda',
    imageUrl: 'https://i.pinimg.com/1200x/ef/83/9e/ef839e518f7f3f586fac4dc6cd99d948.jpg',
    gradient: 'from-teal-800/20 to-gray-900/20',
    hoverGradient: 'hover:from-teal-800/30 hover:to-gray-900/30',
    aspectRatio: 'aspect-[2/3]',
  },
];

type ContentCardsProps = { index: number };

export function ContentCards({ index }: ContentCardsProps) {
  const card = cardsData[index];
  if (!card) return null;

  return (
    <div className="w-full flex-shrink-0 rounded-xl overflow-hidden">
      <motion.div
        key={card.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: card.animationDelay }}
        whileHover={{ scale: 1.03 }}
        className="w-full h-full"
      >
        <Card
          className={`relative h-full overflow-hidden backdrop-blur-sm border border-red-300/20 p-4 transition-all duration-300 ${card.gradient} ${card.hoverGradient} ${card.type === 'music' ? 'cursor-pointer' : ''} ${card.aspectRatio}`}
          onClick={card.type === 'music' ? () => window.open(card.spotifyUrl, '_blank') : undefined}
          style={{
            backgroundImage: `url(${card.imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

          {/* Corrected: This div now uses flexbox to push content to the bottom */}
          <div className="relative flex flex-col h-full justify-end p-6 z-10">
            {card.type === 'music' ? (
              <>
                <div className="text-white font-bold text-lg mb-2 line-clamp-2">{card.title}</div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-orange-200 text-sm">{card.artist}</div>
                    <div className="text-orange-300 text-xs mt-1">{card.year}</div>
                  </div>
                  <Music className="w-6 h-6 text-orange-300" />
                </div>
              </>
            ) : (
              <div className="flex flex-col justify-center items-center text-center">
                <p className="text-white font-medium text-lg italic leading-snug mb-3 line-clamp-4">{card.quote}</p>
                <p className="text-red-300 text-sm font-semibold">{card.author}</p>
              </div>
            )}
          </div>
        </Card>
      </motion.div>
    </div>
  );
}