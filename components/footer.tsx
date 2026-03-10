import Link from "next/link"
import { PawPrint, Mail, Phone, MapPin } from "lucide-react"

const footerLinks = {
  pets: [
    { label: "Кошки", href: "#cats" },
    { label: "Собаки", href: "#dogs" },
    { label: "Птицы", href: "#birds" },
    { label: "Рыбки", href: "#fish" },
  ],
  resources: [
    { label: "Статьи", href: "#" },
    { label: "Советы", href: "#tips" },
    { label: "Ветеринары", href: "#" },
    { label: "Зоомагазины", href: "#" },
  ],
  company: [
    { label: "О нас", href: "#" },
    { label: "Контакты", href: "#contact" },
    { label: "Реклама", href: "#" },
    { label: "Партнёры", href: "#" },
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
                Мир Питомцев
              </span>
            </Link>
            <p className="text-background/70 mb-6 max-w-sm leading-relaxed">
              Ваш надёжный источник информации о домашних животных. 
              Помогаем владельцам питомцев с 2020 года.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-background/70">
                <Mail className="h-5 w-5" />
                <span>info@mirpitomcev.ru</span>
              </div>
              <div className="flex items-center gap-3 text-background/70">
                <Phone className="h-5 w-5" />
                <span>+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center gap-3 text-background/70">
                <MapPin className="h-5 w-5" />
                <span>Москва, Россия</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Питомцы</h4>
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
            <h4 className="font-semibold mb-4">Ресурсы</h4>
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
            <h4 className="font-semibold mb-4">Компания</h4>
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
            © 2024 Мир Питомцев. Все права защищены.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-background/60 hover:text-background transition-colors">
              Политика конфиденциальности
            </Link>
            <Link href="#" className="text-background/60 hover:text-background transition-colors">
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
