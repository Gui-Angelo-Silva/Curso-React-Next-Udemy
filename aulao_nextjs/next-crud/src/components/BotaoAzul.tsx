interface BotaoAzulProps {
    cor: 'green'
    className?: string
    children: any
    onClick?: () => void
}

export default function BotaoAzul(props: BotaoAzulProps) {
    return (
        <button onClick={props.onClick} className={`
            bg-gradient-to-r from-blue-400 to-blue-700
            text-white px-4 py-2 rounded-md
            ${props.className}
        `}>
            { props.children }
        </button>
    )
}