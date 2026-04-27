"use client"

import { AnimatePresence, motion } from "framer-motion"
import { Check } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

const scopes = {
  furnishing: [
    {
      name: "Consultation",
      price: "$450",
      note: "Single working session",
      features: ["90-minute atelier call", "Spatial priorities review", "Palette and sourcing direction", "Written design notes"],
    },
    {
      name: "Room Narrative",
      price: "$4,800",
      note: "Per principal room",
      features: ["Mood and material direction", "Furniture plan", "Custom shopping edit", "Styling and art guidance"],
      featured: true,
    },
    {
      name: "Residence Edit",
      price: "$18k",
      note: "Starting project fee",
      features: ["Multi-room concept", "Furniture procurement", "Vintage and art sourcing", "White-glove installation"],
    },
  ],
  renovation: [
    {
      name: "Feasibility",
      price: "$1,200",
      note: "Before committing to work",
      features: ["Site or remote review", "Scope and phasing advice", "Budget pressure points", "Renovation roadmap"],
    },
    {
      name: "Interior Package",
      price: "$32k",
      note: "Starting project fee",
      features: ["Concept to detailed drawings", "Material specifications", "Millwork and lighting intent", "Procurement schedule"],
      featured: true,
    },
    {
      name: "Full Commission",
      price: "$75k",
      note: "Whole-home direction",
      features: ["Architecture collaboration", "Site and contractor coordination", "Custom furniture development", "Final installation"],
    },
  ],
}

type Scope = keyof typeof scopes

export function Pricing() {
  const [scope, setScope] = useState<Scope>("furnishing")
  const plans = scopes[scope]

  return (
    <section id="pricing" className="bg-background py-20 text-foreground md:py-32" aria-labelledby="pricing-title">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Investment</p>
          <h2 id="pricing-title" className="mt-5 font-serif text-5xl leading-none md:text-7xl">
            Clear terms for carefully made work.
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted">
            Every commission is scoped after a conversation, but these starting points help set expectations before we begin.
          </p>

          <div className="mx-auto mt-9 inline-grid grid-cols-2 border border-stone/15 bg-secondary p-1">
            {(["furnishing", "renovation"] as const).map((item) => (
              <button
                key={item}
                type="button"
                className={cn(
                  "relative px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] transition-colors",
                  scope === item ? "text-primary-foreground" : "text-stone hover:text-foreground"
                )}
                onClick={() => setScope(item)}
                aria-pressed={scope === item}
              >
                {scope === item && (
                  <motion.span
                    layoutId="pricing-scope"
                    className="absolute inset-0 bg-primary"
                    transition={{ type: "spring", bounce: 0.16, duration: 0.55 }}
                  />
                )}
                <span className="relative z-10">{item === "furnishing" ? "Furnishing" : "Renovation"}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {plans.map((plan, index) => (
              <motion.article
                key={`${scope}-${plan.name}`}
                className={cn(
                  "relative flex min-h-[32rem] flex-col border p-7",
                  plan.featured
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-stone/14 bg-secondary text-foreground"
                )}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
              >
                {plan.featured && (
                  <span className="mb-7 w-fit bg-background px-3 py-1.5 text-[0.66rem] font-bold uppercase tracking-[0.18em] text-primary">
                    Most requested
                  </span>
                )}
                <div className={cn("border-b pb-7", plan.featured ? "border-primary-foreground/18" : "border-stone/12")}>
                  <h3 className="font-serif text-4xl leading-tight">{plan.name}</h3>
                  <p className={cn("mt-3 text-sm", plan.featured ? "text-primary-foreground/70" : "text-muted")}>{plan.note}</p>
                </div>

                <div className="py-8">
                  <div className="flex items-end gap-2">
                    <span className="font-serif text-6xl leading-none">{plan.price}</span>
                    {plan.price.includes("k") && (
                      <span className={cn("pb-2 text-sm", plan.featured ? "text-primary-foreground/70" : "text-muted")}>
                        starting
                      </span>
                    )}
                  </div>
                </div>

                <ul className="grid gap-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm leading-6">
                      <Check className={cn("mt-1 h-4 w-4 shrink-0", plan.featured ? "text-primary-foreground" : "text-primary")} />
                      <span className={plan.featured ? "text-primary-foreground/82" : "text-stone"}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  className={cn(
                    "mt-auto w-full border px-5 py-3.5 text-sm font-bold uppercase tracking-[0.14em] transition-colors",
                    plan.featured
                      ? "border-primary-foreground/30 hover:bg-primary-foreground hover:text-primary"
                      : "border-stone/24 hover:border-primary hover:text-primary"
                  )}
                >
                  Request Scope
                </button>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
