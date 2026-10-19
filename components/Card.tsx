type CardProps = {
    title: string;
    text: string;
    price?: string;
}

export default function Card({title, text, price}: CardProps){
    return(
        <div className="rounded-card border border-grat-200 bg-white p-6 shadow-sm transition hover:shadow-md">
            <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
            <p className="text-gray-600">{text}</p>
            {price && (
                <p className="mt-4 text-lg font-bold text-brand-600">{price}</p>
            )}
        </div>
    )
}