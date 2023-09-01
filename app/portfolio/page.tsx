import Portfolio from "@/components/home/Portfolio";
import { motion, AnimatePresence } from "framer-motion";
type Props = {};

export default function page({}: Props) {
  return (
    <div>
      <Portfolio></Portfolio>
    </div>
  );
}
