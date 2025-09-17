import { motion } from 'framer-motion';
import { useState, useRef } from 'react';

interface DraggableWrapperProps {
  children: React.ReactNode;
  className?: string;
  initialPosition?: { x: number; y: number };
}

export function DraggableWrapper({ children, className = '', initialPosition = { x: 0, y: 0 } }: DraggableWrapperProps) {
  const [isDragging, setIsDragging] = useState(false);
  const constraintsRef = useRef(null);

  return (
    // This parent container should not have `overflow: hidden`
    <motion.div
      ref={constraintsRef}
      className="relative w-full h-full"
    >
      <motion.div
        drag
        dragMomentum={false}
        dragElastic={0.1}
        dragConstraints={constraintsRef}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        initial={initialPosition}
        // `zIndex: 50` is what makes it appear on top of other components
        whileDrag={{
          scale: 1.05,
          cursor: 'grabbing',
          zIndex: 50
        }}
        className={`cursor-grab ${isDragging ? 'cursor-grabbing' : ''} ${className}`}
        style={{ touchAction: 'none' }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}