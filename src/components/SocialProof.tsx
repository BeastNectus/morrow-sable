"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const press = ["Architectural Digest", "Dezeen", "Elle Decor", "Kinfolk", "Wallpaper*"]

const residences = [
  {
    title: "Crosby Street Library",
    location: "New York",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=85&w=1200&auto=format&fit=crop",
  },
  {
    title: "Hampstead Courtyard House",
    location: "London",
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=85&w=1200&auto=format&fit=crop",
  },
  {
    title: "Aoyama Study Apartment",
    location: "Tokyo",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=85&w=1200&auto=format&fit=crop",
  },
]

export function SocialProof() {
  return (
    <section id="portfolio" className="bg-linen py-16 text-primary-foreground md:py-24" aria-labelledby="portfolio-title">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="eyebrow text-accent">Selected residences</p>
            <h2 id="portfolio-title" className="mt-5 font-serif text-4xl leading-tight text-background md:text-6xl">
              A portfolio of rooms designed to gather shadow, texture, and time.
            </h2>
          </motion.div>

          <motion.div
            className="border-y border-background/12 py-6"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-background/48">As seen in</p>
            <div className="flex flex-wrap gap-x-9 gap-y-4">
              {press.map((name) => (
                <span key={name} className="font-serif text-2xl text-background/58 md:text-3xl">
                  {name}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3 md:gap-6">
          {residences.map((residence, index) => (
            <motion.article
              key={residence.title}
              className="group"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, delay: index * 0.09 }}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
                <Image
                  src={residence.image}
                  alt={`${residence.title}, a completed Morrow and Sable interior in ${residence.location}`}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/72 via-transparent to-transparent opacity-80" />
              </div>
              <div className="mt-5 flex items-start justify-between gap-4 border-t border-background/14 pt-4">
                <h3 className="font-serif text-2xl leading-tight text-background">{residence.title}</h3>
                <span className="pt-1 text-xs font-bold uppercase tracking-[0.18em] text-background/50">
                  {residence.location}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
