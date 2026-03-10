import Link from "next/link"
import { PawPrint, Mail, Phone, MapPin } from "lucide-react"

const footerLinks = {
  pets: [
    { label: "Cats", href: "#cats" },
    { label: "Dogs", href: "#dogs" },
    { label: "Birds", href: "#birds" },
    { label: "Fish", href: "#fish" },
  ],
  resources: [
    { label: "Articles", href: "#" },
    { label: "Tips", href: "#tips" },
    { label: "Veterinarians", href: "#" },
    { label: "Pet Stores", href: "#" },
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "Contact", href: "#contact" },
    { label: "Advertising", href: "#" },
    { label: "Partners", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <PawPrint className="h-8 w-8 text-primary" />
              <span className="font-serif text-xl font-semibold">
                Pet World
              </span>
            </Link>
            <p className="text-background/70 mb-6 max-w-sm leading-relaxed">
              Your trusted source for pet information. 
              Helping pet owners since 2020.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-background/70">
                <Mail className="h-5 w-5" />
                <span>info@petworld.com</span>
              </div>
              <div className="flex items-center gap-3 text-background/70">
                <Phone className="h-5 w-5" />
                <span>+1 (555) 123-45-67</span>
              </div>
              <div className="flex items-center gap-3 text-background/70">
                <MapPin className="h-5 w-5" />
                <span>New York, USA</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Pets</h4>
            <ul className="space-y-3">
              {footerLinks.pets.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © 2024 Pet World. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-background/60 hover:text-background transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-background/60 hover:text-background transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
