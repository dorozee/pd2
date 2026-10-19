import Link from "next/link";
import Image from "next/image";

export default function Hero(){
    return(
        <section className="mx-auto grid max-w-5xl items-center gap-8 px-16 nd:grid-cols-2">
            <div>
                <h1 className="text-4xl font-extrabold leading-tight text-gray-900 md:text=5xl">
                    Создаём сайты, которые работают на вас
                </h1>
                <p className="mt-4 text-lg text-gray-600">
                    Dorozee Studio - студия для разработки сайтов и веб приложений
                </p>
                <Link href="/services" className="mt-6 inline-block cursor-pointer rounded-xl bg-brand-600 px-6 py-3 font-semibold transition hover:bg-brand-700"> посмотреть услуги </Link>
            </div>
            <div className="md:justify-self-end">
                <Image
                   src="/hero.svg"
                    alt="Иллюстрация студии"
                    width={600}
                    height={400}
                    className="w-full rounded-card"
                    priority
                />
            </div>
        </section>
    )
}