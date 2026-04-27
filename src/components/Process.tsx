"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const steps = [
  {
    number: "01",
    title: "Listen before drawing",
    description:
      "We begin in conversation: rituals, collections, light, privacy, books, hosting, and the rooms that already hold meaning.",
  },
  {
    number: "02",
    title: "Compose the atmosphere",
    description:
      "Concept boards become a working design language with furniture silhouettes, finish direction, lighting character, and procurement priorities.",
  },
  {
    number: "03",
    title: "Detail the permanent pieces",
    description:
      "Millwork, stone, plaster, custom furniture, and hardware are resolved with drawings and samples before site work accelerates.",
  },
  {
    number: "04",
    title: "Install with ceremony",
    description:
      "The final layer is edited on site: art, textiles, books, objects, and the quiet adjustments that make a residence feel inevitable.",
  },
]

export function Process() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 40%"],
  })
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section id="process" ref={ref} className="bg-secondary py-20 text-foreground md:py-32" aria-labelledby="process-title">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="eyebrow">Process</p>
            <h2 id="process-title" className="mt-5 font-serif text-5xl leading-none md:text-7xl">
              A slower method for rooms that last.
            </h2>
          </div>
          <p className="max-w-3xl text-lg leading-8 text-muted lg:pt-8">
            Our process is deliberately quiet. Fewer theatrical presentations, more exact decisions. The result is a
            home that feels collected over time, even when every detail has been designed.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-stone/12 md:block" />
          <motion.div
            className="absolute left-4 top-0 hidden h-full w-px origin-top bg-primary md:block"
            style={{ scaleY: lineScale }}
          />

          <div className="grid gap-5">
            {steps.map((step, index) => (
              <motion.article
                key={step.number}
                className="grid gap-5 border-t editorial-rule py-8 md:grid-cols-[7rem_0.85fr_1fr] md:gap-8 md:pl-12"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.65, delay: index * 0.06 }}
              >
                <span className="font-serif text-5xl italic text-primary/80">{step.number}</span>
                <h3 className="font-serif text-3xl leading-tight text-foreground md:text-4xl">{step.title}</h3>
                <p className="text-base leading-8 text-muted">{step.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
