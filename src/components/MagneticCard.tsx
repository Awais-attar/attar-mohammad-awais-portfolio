import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface MagneticCardProps {
  children: ReactNode;
  className?: string;
}

export default function MagneticCard({
  children,
  className = "",
}: MagneticCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5, rotateX: 1, rotateY: -1 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
