import { motion } from "framer-motion";
import { Card } from "./ui/card"; // Assuming this is a custom component
import { Settings } from "lucide-react";

export function ProjectsCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="h-fit"
    >
      <Card className="relative h-80 w-64 bg-purple-300 rounded-2xl overflow-hidden border border-purple-400/30 p-6 shadow-lg">
        
        {/* Central glassy white circle with pulsing animation */}
        <motion.div
          className="absolute inset-0 flex justify-center items-center"
          animate={{ scale: [1, 1.07, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-48 h-48 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 shadow-lg" />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-between">
          
          {/* Top content with icon inline with "PROJECT" text */}
          <div>
            <h2
              className="text-black text-4xl font-extrabold italic transition-all duration-300 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] flex items-center gap-3"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <div className='inline-block'>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Settings className="w-8 h-8" />
              </motion.div>
              </div>
              PROJECT
            </h2>
            <h3
              className="text-black text-4xl font-extrabold italic transition-all duration-300 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              SSS
            </h3>
          </div>

          {/* Bottom-right tag */}
          <div className="flex justify-end">
            <span className="text-black text-sm">工芸</span>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}