"use client"

import Link from "next/link"
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Investment", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
]

export function Navbar() {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 24)
  })

  return (
    <>
      <motion.header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-all duration-500",
          isScrolled
            ? "border-stone/12 bg-background/90 shadow-[0_16px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl"
            : "border-stone/10 bg-background/48 backdrop-blur-md"
        )}
      >
        <nav
          className={cn(
            "container flex items-center justify-between editorial-rule transition-all duration-500",
            isScrolled ? "py-4" : "py-6"
          )}
          aria-label="Main navigation"
        >
          <Link href="/" className="group flex items-baseline gap-3" aria-label="Morrow and Sable home">
            <span className="font-serif text-2xl leading-none tracking-tight text-foreground md:text-3xl">
              Morrow <span className="text-primary italic">&</span> Sable
            </span>
            <span className="hidden text-[0.62rem] font-bold uppercase tracking-[0.22em] text-muted transition-colors group-hover:text-stone xl:inline">
              Interior Atelier
            </span>
          </Link>

          <div className="hidden items-center gap-8 xl:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-stone/72 transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-4 xl:flex">
            <Link
              href="#cta"
              className="border border-primary bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-[0_12px_34px_rgba(184,107,91,0.24)] transition-colors hover:bg-linen hover:text-background"
            >
              Begin a Commission
            </Link>
          </div>
        </nav>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="mx-4 mb-4 border border-stone/15 bg-secondary/96 p-4 shadow-editorial backdrop-blur-xl xl:hidden"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22 }}
            >
              <div className="grid gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-3 py-3 text-lg font-medium text-stone transition-colors hover:bg-foreground/5 hover:text-foreground"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="#cta"
                  className="mt-3 bg-primary px-3 py-3 text-center text-sm font-bold uppercase tracking-[0.16em] text-primary-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  Begin a Commission
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <button
        type="button"
        className="flex h-11 w-11 items-center justify-center border border-primary bg-primary text-primary-foreground shadow-[0_12px_30px_rgba(0,0,0,0.28)] transition-colors hover:bg-linen xl:hidden"
        style={{ position: "fixed", left: "min(20rem, calc(100vw - 4.25rem))", top: "1.5rem", zIndex: 9999 }}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((value) => !value)}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>
    </>
  )
}
