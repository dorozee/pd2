import Link from "next/link";

const nav= [
    {href: "/", label: "Главная"},
    {href: "/about", label: "О нас"},
    {href: "/services", label: "Услуги"},
    {href: "/contacts", label: "Контакты"}
];

export default function Header(){
    return(
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/90 backrop-blur">
            <div className="mx-auto flex nax-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-3">
                <Link href="/" className="text-lg font-bold text-brand-600">
                    Dorozee Studio
                </Link>
                <nav className="flex flex-wrap gap-4 text-sm">
                    {nav.map((item) => (
                        <Link key={item.href} href={item.href} className="text-gray-700 transition hover:text-brand-600">
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    )
}