"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowUpRight, DraftingCompass, LibraryBig, Sofa, SwatchBook } from "lucide-react"

const services = [
  {
    icon: LibraryBig,
    title: "Interior Architecture",
    description: "Plans, elevations, lighting intent, millwork, and circulation shaped around how a home is actually lived in.",
  },
  {
    icon: SwatchBook,
    title: "Material Curation",
    description: "Stone, timber, plaster, textile, patinated metal, and finish palettes assembled from our private library.",
  },
  {
    icon: Sofa,
    title: "Bespoke Furnishing",
    description: "Custom seating, case goods, art placement, and vintage sourcing with scale and provenance considered together.",
  },
  {
    icon: DraftingCompass,
    title: "Renovation Direction",
    description: "Contractor coordination, site reviews, procurement schedules, and considered decisions from concept to reveal.",
  },
]

const studioImage =
  "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=85&w=1500&auto=format&fit=crop"

export function Features() {
  return (
    <section id="services" className="relative bg-background py-20 text-foreground md:py-32" aria-labelledby="services-title">
      <div className="container">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div
            className="lg:sticky lg:top-28"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75 }}
          >
            <p className="eyebrow">Services</p>
            <h2 id="services-title" className="mt-5 font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl">
              Design work with weight, warmth, and restraint.
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-muted">
              We build interiors like a collection: every room has a focal point, a tonal register, and a reason for
              each material to be present.
            </p>

            <div className="relative mt-10 aspect-[5/4] overflow-hidden border border-stone/12 bg-secondary shadow-editorial">
              <Image
                src={studioImage}
                alt="A warm, minimal interior with dark cabinetry, sculptural furniture, and layered natural materials"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/54 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between border-t border-linen/20 pt-4 text-linen">
                <span className="text-xs font-bold uppercase tracking-[0.2em]">Material note</span>
                <span className="font-serif text-2xl">Sable, plaster, clay</span>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2">
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                className="group min-h-[19rem] border border-stone/12 bg-secondary p-7 transition-colors hover:border-primary/50 hover:bg-accent/60"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.65, delay: index * 0.08 }}
              >
                <div className="mb-16 flex items-start justify-between gap-4">
                  <service.icon className="h-7 w-7 text-primary" aria-hidden="true" />
                  <ArrowUpRight className="h-5 w-5 text-stone/30 transition-colors group-hover:text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-3xl leading-tight text-foreground">{service.title}</h3>
                <p className="mt-5 text-sm leading-7 text-muted">{service.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
