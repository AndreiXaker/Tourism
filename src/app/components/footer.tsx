import Link from "next/link"


const navigationItems = [
  {
    title: "О нас",
    href: "/about"
  },
  {
    title: "Отзывы о нас",
    href: "/reviews"
  },
  {
    title: "Советуем посетить",
    href: "/recommendations"
  },
  {
    title: "Памятка туристу по странам",
    href: "/travel-guide"
  },
  {
    title: "Контакты",
    href: "/contacts"
  }
]

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-4">
      <nav className="container mx-auto px-4">
        <ul className="flex flex-wrap justify-between items-center gap-4">
          {navigationItems.map((item) => (
            <li key={item.href}>
              <Link 
                href={item.href}
                className="hover:text-gray-300 transition-colors text-sm md:text-base"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  )
}

