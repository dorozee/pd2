import Section from "@/components/Section"
import Card from "@/components/Card"

export const metadata = { title: "Услуги - Dorozee Studio" }

export default function ServicesPage() {
  return (
    <Section title="Услуги и тарифы">
      <div className="grid gap-6 md:grid-cols-3">
        <Card
          title="Лендинг"
          text="Одностраничный сайт под запуск продукта или рекламную кампанию."
          price="от 60 000 ₽"
        />
        <Card
          title="Корпоративный сайт"
          text="Многостраничный сайт с блогом, формой заявки и админкой."
          price="от 150 000 ₽"
        />
        <Card
          title="Веб-приложение"
          text="SPA или SaaS-интерфейс с авторизацией и интеграциями."
          price="от 300 000 ₽"
        />
      </div>
    </Section>
  )
}