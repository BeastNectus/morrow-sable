"use client"

import { AnimatePresence, motion } from "framer-motion"
import { Minus, Plus } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "Do you accept remote commissions?",
    answer:
      "Yes. We work with clients internationally through measured plans, video site reviews, sample shipments, detailed procurement schedules, and a clear approval cadence.",
  },
  {
    question: "How long does a typical residence take?",
    answer:
      "A furnishing-led room can move from concept to installation in 10 to 16 weeks. Larger renovation commissions usually require 6 to 14 months depending on approvals, trades, and custom lead times.",
  },
  {
    question: "Can you work with pieces we already own?",
    answer:
      "Absolutely. The best rooms often begin with inherited furniture, books, art, or objects that already carry memory. We edit around those pieces instead of replacing meaning with novelty.",
  },
  {
    question: "Do you manage procurement?",
    answer:
      "Yes. We can source, quote, track, consolidate, and install furniture, lighting, textiles, art, and accessories so the finished room arrives as one composed experience.",
  },
  {
    question: "What budgets are appropriate?",
    answer:
      "Our work is best suited to clients who value custom details, quality materials, and thoughtful pacing. During discovery, we identify a realistic range before any paid design phase begins.",
  },
]

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="faq" className="bg-linen py-20 text-primary-foreground md:py-28" aria-labelledby="faq-title">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="eyebrow text-accent">Before we begin</p>
            <h2 id="faq-title" className="mt-5 font-serif text-5xl leading-none text-background md:text-7xl">
              Practical answers, plainly held.
            </h2>
          </div>

          <div className="border-t border-background/14">
            {faqs.map((faq, index) => {
              const isActive = activeIndex === index

              return (
                <motion.article
                  key={faq.question}
                  className="border-b border-background/14"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: index * 0.05 }}
                >
                  <h3>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-6 py-7 text-left"
                      aria-expanded={isActive}
                      onClick={() => setActiveIndex(isActive ? -1 : index)}
                    >
                      <span
                        className={cn(
                          "font-serif text-2xl leading-tight transition-colors md:text-3xl",
                          isActive ? "text-background" : "text-background/68"
                        )}
                      >
                        {faq.question}
                      </span>
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-background/16 text-background">
                        {isActive ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                      </span>
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-3xl pb-8 text-base leading-8 text-background/64">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
