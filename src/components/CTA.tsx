"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const ctaImage =
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=85&w=2200&auto=format&fit=crop"

export function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden bg-background py-20 text-foreground md:py-32" aria-labelledby="cta-title">
      <div className="container">
        <div className="relative min-h-[34rem] overflow-hidden border border-stone/12">
          <Image
            src={ctaImage}
            alt="A composed dining room with warm timber, quiet lighting, and sculptural furniture"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/72 to-background/18" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

          <div className="relative z-10 flex min-h-[34rem] max-w-4xl flex-col justify-end p-6 md:p-12 lg:p-16">
            <motion.p
              className="eyebrow"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              Private commissions
            </motion.p>
            <motion.h2
              id="cta-title"
              className="mt-5 font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.08 }}
            >
              Let’s give your rooms a more deliberate life.
            </motion.h2>
            <motion.div
              className="mt-8 grid gap-5 md:grid-cols-[1fr_auto]"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.16 }}
            >
              <p className="max-w-2xl text-lg leading-8 text-stone">
                Tell us what you are making, what already matters, and where the room feels unresolved. We will respond
                with the right starting point.
              </p>
              <Link
                href="mailto:hello@morrowandsable.com?subject=Morrow%20%26%20Sable%20commission%20inquiry"
                className="inline-flex h-fit items-center justify-center gap-2 bg-primary px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-linen"
              >
                Start Inquiry
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
