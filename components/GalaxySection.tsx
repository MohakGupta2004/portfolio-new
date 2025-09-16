import { motion } from 'motion/react';
import { Card } from './ui/card';

export function GalaxySection() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      whileHover={{ scale: 1.02 }}
    >
      <Card 
        className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm border border-purple-300/20 p-0 h-48 w-58 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url('https://imagine.gsfc.nasa.gov/hst_bday/images/august-17-2019-supernova-in-galaxy-ngc-2403.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="relative h-full p-4 flex flex-col justify-end">
          <div className="text-gray-300 text-xs mb-1">From NASA:</div>
          <div className="text-white text-sm font-medium">2004-08-17</div>
          <div className="text-gray-400 text-xs">NASA / Spitzer Space Telescope</div>
        </div>
        
        {/* Decorative stars */}
        <motion.div
          className="absolute top-4 right-6 text-white text-xs"
          animate={{ 
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          ✦
        </motion.div>
        <motion.div
          className="absolute top-8 right-12 text-white text-xs"
          animate={{ 
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        >
          ✧
        </motion.div>
      </Card>
    </motion.div>
  );
}
