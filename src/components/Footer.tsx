import Link from "next/link"
import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

const links = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Investment", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
]

export function Footer() {
  return (
    <footer className="border-t editorial-rule bg-secondary text-foreground">
      <div className="container grid gap-12 py-16 md:grid-cols-[1.2fr_0.8fr_0.9fr_1fr] md:py-20">
        <div>
          <Link href="/" className="font-serif text-4xl leading-none tracking-tight">
            Morrow <span className="text-primary italic">&</span> Sable
          </Link>
          <p className="mt-6 max-w-sm text-sm leading-7 text-muted">
            A residential interior atelier for dark libraries, quiet kitchens, collected rooms, and homes that reward
            attention.
          </p>
          <div className="mt-8 flex gap-3">
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center border border-stone/16 text-muted transition-colors hover:border-primary hover:text-primary"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center border border-stone/16 text-muted transition-colors hover:border-primary hover:text-primary"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Studio</h2>
          <ul className="mt-6 grid gap-4 text-sm text-muted">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-foreground">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Contact</h2>
          <ul className="mt-6 grid gap-5 text-sm text-muted">
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <a href="mailto:hello@morrowandsable.com" className="transition-colors hover:text-foreground">
                hello@morrowandsable.com
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <a href="tel:+15550000000" className="transition-colors hover:text-foreground">
                +1 555 000 0000
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <span>100 Crosby St, New York</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Journal Notes</h2>
          <p className="mt-6 text-sm leading-7 text-muted">
            Occasional writing on material palettes, room planning, collecting, and the discipline of restraint.
          </p>
          <form className="mt-6 flex border border-stone/16" aria-label="Newsletter signup">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Email address"
              className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted"
            />
            <button
              type="submit"
              className="bg-primary px-4 text-xs font-bold uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-linen"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="container flex flex-col gap-4 border-t editorial-rule py-6 text-xs text-muted md:flex-row md:items-center md:justify-between">
        <p>&copy; 2026 Morrow & Sable. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/" className="transition-colors hover:text-foreground">
            Privacy
          </Link>
          <Link href="/" className="transition-colors hover:text-foreground">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  )
}
