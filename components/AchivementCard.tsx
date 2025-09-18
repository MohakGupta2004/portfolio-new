'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from './ui/card';
import { useState, useEffect } from 'react';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export function AchievementCard() {
  const achievements = [
    {
      key: 'sih',
      text: 'Smart India Hackathon runnerups 2023',
      link: 'https://www.sih.gov.in/',
    },
    { key: 'Innovocon', text: 'Innovocon 2025 Winner', link: '' },
    { key: 'comptia', text: 'Comptia Pentest+ Linkedin', link: 'https://www.linkedin.com/learning/certificates/4f2f31077056cd86e5b5f474099fa28ba30c72b3d1dad6b2c8a7591520ba02b1' },
    { key: 'cnsp', text: 'Certified Network Security Practitioner', link: 'https://candidate.speedexam.net/certificate.aspx?SSTATE=am4131EniU8ntjp4bO5mXV/oLILyQdbIH/qWi6y0BmiDRtAcVmopBCxBAZEtOwxm+6XzHRovGNMw5LI30Yka3NqrlRXxfyq1dmyKtgDMN3Y=' },
    { key: 'thm', text: 'Top 15% on TryHackMe', link: 'https://tryhackme.com/p/rushbeef04/' },
    { key: 'git', text: 'Intermediate Git and Github', link: 'https://www.linkedin.com/learning/certificates/e8df51208279935e5b759419aa0b3bd050990bc4315dd208369fcda76a8749f7' }
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % achievements.length),
      2800
    );
    return () => clearInterval(interval);
  }, [achievements.length]);

  const current = achievements[index];

  const handleClick = () => {
    if (current.link) window.open(current.link, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={spaceGrotesk.className}
    >
      <motion.div
        onClick={handleClick}
        whileHover={{ scale: 1.01 }}
        className="cursor-pointer w-full"
      >
        <Card className="relative px-6 py-3 bg-card/5 backdrop-blur-sm border border-white/10 
                         rounded-xl shadow-inner overflow-hidden group">
          {/* Glow border */}
          <div
            className="absolute inset-0 pointer-events-none rounded-xl
                       shadow-[inset_0_0_6px_rgba(255,255,255,0.08)]
                       transition-all duration-500 group-hover:shadow-[inset_0_0_14px_rgba(255,255,255,0.25)]"
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 flex justify-center items-center text-center">
            <h3 className="text-white font-bold text-lg tracking-wide">
              <AnimatePresence mode="wait">
                <motion.span
                  key={current.key}
                  initial={{ opacity: 0, filter: 'blur(6px)', y: 10 }}
                  animate={{
                    opacity: 1,
                    filter: 'blur(0px)',
                    y: 0,
                    textShadow: '0 0 12px rgba(255,255,255,0.8)',
                  }}
                  exit={{ opacity: 0, filter: 'blur(6px)', y: -10 }}
                  transition={{ duration: 0.6 }}
                >
                  {current.text}
                </motion.span>
              </AnimatePresence>
            </h3>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}
