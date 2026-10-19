import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Card from "@/components/Card";

export default function Home() {
  return (
    <>
      <Hero />
      <Section title="Что мы делаем">
        <div className="grid gap-6 md:grid-cols-3">
          <Card title="Корпоративные сайты" text="Многостраничные сайты для компаний" />
          <Card title="Веб-приложения" text="Интерфейсы и SPA на современном стеке" />
        </div>
      </Section>
    </>
  )
}