import Section from "@/components/Section"

export const metadata = { title: "О нас - Dorozee Studio" }

export default function AboutPage() {
  return (
    <>
      <Section title="О нас">
        <p className="text-lg text-gray-600">
          Dorozee Studio - небольшая команда, которая с 2026 года помогает
          бизнесу запускать сайты и digital-продукты.
        </p>
      </Section>

      <Section title="Наша миссия">
        <p className="text-gray-600">
          Делать интернет понятнее и удобнее: чтобы у каждого проекта был
          аккуратный дизайн.
        </p>
      </Section>

      <Section title="Команда">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-card border border-gray-200 p-6">
            <h3 className="font-semibold">Саша - дизайнер</h3>
            <p className="text-sm text-gray-600">Отвечает за визуал и UX.</p>
          </div>
          <div className="rounded-card border border-gray-200 p-6">
            <h3 className="font-semibold">Саша - разработчик</h3>
            <p className="text-sm text-gray-600">Пишет фронтенд и бэкенд.</p>
          </div>
          <div className="rounded-card border border-gray-200 p-6">
            <h3 className="font-semibold">Саша - менеджер</h3>
            <p className="text-sm text-gray-600">Ведёт проекты и клиентов.</p>
          </div>
        </div>
      </Section>
    </>
  )
}