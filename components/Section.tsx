type SectionProps = {
    title?: string;
    children: React.ReactNode;
}

export default function Section({title, children}: SectionProps){
    return(
        <section className="mx-auto max-w-5xl px-4 py-12">
            {title && (
                <h2 className="mb-6 text-3xl font-bold text-gray-900">{title}</h2>
            )}
            {children}
        </section>
    )
}