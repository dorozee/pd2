import Section from "@/components/Section"
export const metadata = { title: "Контакты - Dorozee Studio" }

export default function ContactsPage() {
  return (
    <Section title="Контакты">
      <p className="mb-6 text-gray-600">
        Напишите или позвоните - обсудим задачу и предложим решение.
      </p>
      <ul className="space-y-3 text-gray-800">
        <li>
          Email:{" "}
          <a className="text-brand-600 hover:underline" href="mailto:hello@nebula.studio">
            hello@dorozee.studio
          </a>
        </li>
        <li>
          Телефон:{" "}
          <a className="text-brand-600 hover:underline" href="tel:+70000000000">
            +8 800 555-35-35
          </a>
        </li>
        <li>Адрес: г. Якутск, пр. Ленина, 56</li>
      </ul>
    </Section>
  )
}