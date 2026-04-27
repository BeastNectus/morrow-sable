"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown, ArrowUpRight } from "lucide-react"
import { useRef } from "react"

const heroImage =
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=85&w=2400&auto=format&fit=crop"

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"])
  const fade = useTransform(scrollYProgress, [0, 0.78], [1, 0])

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-end overflow-hidden border-b editorial-rule"
      aria-labelledby="hero-title"
    >
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <Image
          src={heroImage}
          alt="A refined residential lounge with sculptural seating, warm wood, and soft architectural light"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 image-shade" />
      </motion.div>

      <motion.div
        className="container relative z-10 grid gap-10 pb-16 pt-36 md:grid-cols-[minmax(0,1fr)_20rem] md:items-end md:pb-20 lg:pt-44"
      >
        <div className="max-w-5xl">
          <p className="eyebrow mb-6">
            Bespoke interior atelier
          </p>

          <h1
            id="hero-title"
            className="max-w-full font-serif text-[clamp(2.85rem,12.5vw,3.35rem)] font-semibold leading-[0.92] tracking-tight text-foreground md:text-[clamp(4rem,10.5vw,8.75rem)] md:leading-[0.86]"
          >
            <span className="block md:inline">Rooms with a </span>
            <span className="block md:inline">remembered </span>
            <span className="block md:inline">soul.</span>
          </h1>

          <div className="mt-8 grid max-w-[20.5rem] gap-7 border-l border-primary/70 pl-5 md:max-w-3xl md:grid-cols-[1fr_auto] md:items-end">
            <p className="text-base leading-8 text-stone md:text-lg">
              Morrow & Sable composes residences through dark academia, Japandi restraint, custom furniture,
              and a material library selected for patina, shadow, and quiet permanence.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <Link
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 bg-primary px-6 py-3.5 text-sm font-bold uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-linen"
              >
                View Work
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="#process"
                className="inline-flex items-center justify-center border border-stone/30 px-6 py-3.5 text-sm font-bold uppercase tracking-[0.14em] text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Our Method
              </Link>
            </div>
          </div>
        </div>

        <aside
          className="hidden border border-stone/18 bg-background/58 p-5 backdrop-blur-sm md:block"
        >
          <p className="eyebrow mb-10">Current calendar</p>
          <p className="font-serif text-3xl leading-tight text-foreground">Four residence commissions open for autumn.</p>
          <p className="mt-5 text-sm leading-6 text-muted">
            Private homes, libraries, studies, collector apartments, and full-floor renovations.
          </p>
        </aside>
      </motion.div>

      <motion.div
        className="absolute bottom-5 right-5 hidden items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-stone/70 lg:flex"
        style={{ opacity: fade }}
      >
        Scroll
        <ArrowDown className="h-4 w-4" />
      </motion.div>
    </section>
  )
}
