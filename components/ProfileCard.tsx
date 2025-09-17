'use client';
import { motion, AnimatePresence } from 'motion/react';
import { Card } from './ui/card';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export function ProfileCard() {
  const currentTime = new Date().toLocaleString('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });

  // Fixed word order
  const words = [
    { key: "dapps", sentence: ["I", "build", "dApps"], focus: 2 },
    { key: "build", sentence: ["I", "build", "webapps"], focus: 2 },
    { key: "hack", sentence: ["I", "hack", "webapps"], focus: 1 },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [words.length]);

  const current = words[index];

  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <Card className="relative bg-card/5 backdrop-blur-sm border border-white/10 p-5 
                hover:scale-[1.02] transition-transform duration-300 
                shadow-inner overflow-hidden group">
  {/* inner glow line */}
  <div className="absolute inset-0 pointer-events-none rounded-xl 
                  shadow-[inset_0_0_8px_rgba(255,255,255,0.1)] 
                  transition-all duration-500 group-hover:shadow-[inset_0_0_18px_rgba(255,255,255,0.25)]" />

        {/* glowing overlay */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20">
            <Image
              src="https://pbs.twimg.com/profile_images/1965130285122543616/w2iOLwN3_400x400.jpg"
              alt="Mohak Gupta"
              width={48}
              height={48}
              className="w-full h-full object-cover"
              draggable={false}
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-white font-bold text-xl">Mohak.</h1>
                <p className="text-gray-400 text-sm">@rushbeef04</p>
              </div>
              <div className="text-right text-xs text-gray-500">
                {currentTime}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          {/* Animated sentence */}
          <p className="text-white font-bold text-xl font-[Space_Grotesk]">
            {current.sentence.map((word, i) => (
              <span key={i} className="mr-1">
                {i === current.focus ? (
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={current.key}
                      initial={{ opacity: 0, filter: "blur(6px)" }}
                      animate={{ opacity: 1, filter: "blur(0px)", textShadow: "0 0 12px rgba(255,255,255,0.9)" }}
                      exit={{ opacity: 0, filter: "blur(6px)" }}
                      transition={{ duration: 0.6 }}
                    >
                      {word}
                    </motion.span>
                  </AnimatePresence>
                ) : (
                  <span>{word}</span>
                )}
              </span>
            ))}
          </p>

          <p className="text-gray-300 text-sm">
            Hello, I&apos;m Mohak! A 21 year old developer & cybersecurity and web3 enthusiast based in India.
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
