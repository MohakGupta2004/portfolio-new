import { motion } from "motion/react";
import { Card } from "./ui/card";
import Image from "next/image";
const links = [
  { src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg", href: "https://github.com/MohakGupta2004", label: "GitHub" },
  { src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/x.svg", href: "https://twitter.com/rushbeef04", label: "X" },
  { src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/gmail.svg", href: "mailto:mohakgupta500@gmail.com", label: "Gmail" },
  { src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/discord.svg", href: "https://discord.com/users/rushbeef05", label: "Discord" },
  { src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg", href: "https://linkedin.com/in/mohak-gupta-007065294", label: "LinkedIn" }
];


export function LinksSection() {
  return (
    <motion.div
  initial={{ opacity: 0, y: -30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.4 }}
  className="grid grid-cols-3 gap-x-4 gap-y-3 justify-items-center w-50"
>



      {/* Text-only box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Card className="bg-transparent border border-white/20 flex items-center justify-center w-16 h-16">
          <h1 className="text-white font-extrabold text-sm leading-tight text-left">
            LIN<br />KS.
          </h1>
        </Card>
      </motion.div>

      {links.map((link, index) => (
        <motion.div
          key={link.label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Card className="bg-transparent border border-white/20 flex items-center justify-center w-16 h-16">
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="flex items-center justify-center w-full h-full"
            >
              <Image
                src={link.src}
                alt={link.label}
                width={48}
                height={48}
                className="w-6 h-6 invert brightness-0"
              />
            </a>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}
