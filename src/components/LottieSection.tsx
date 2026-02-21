"use client";

import Lottie from "lottie-react";
import { motion } from "framer-motion";
import animationData from "../../public/animations/anthropic-overview.json";

export default function LottieSection() {
  return (
    <section className="bg-black py-20 md:py-32">
      <motion.div
        className="mx-auto max-w-3xl px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="aspect-square w-full">
          <Lottie
            animationData={animationData}
            loop={true}
            autoplay={true}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
