import { motion } from 'motion/react';
import { Card } from './ui/card';

export function ProfileCard() {
  const currentTime = new Date().toLocaleString('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <Card className="bg-card/5 backdrop-blur-sm border border-white/10 p-5 hover:scale-[1.02] transition-transform duration-300">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20">
            <img 
              src="https://pbs.twimg.com/profile_images/1965130285122543616/w2iOLwN3_400x400.jpg" 
              alt="Mohak Gupta"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-white font-bold text-xl">Mohak.</h1>
                <p className="text-gray-400 text-sm">@mohakgupta</p>
              </div>
              <div className="text-right text-xs text-gray-500">
                {currentTime}
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-3">
          <p className="text-white font-medium">
            I build WebApps.
          </p>
          
          <p className="text-gray-300 text-sm">
            Hello, I'm Mohak! A 20 year old developer & cybersecurity enthusiast based in India.
          </p>
          
          <motion.div 
            className="flex items-center gap-2 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <motion.div
              className="w-2 h-2 bg-green-500 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-green-400">Available for work</span>
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
}