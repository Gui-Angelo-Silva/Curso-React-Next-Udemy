interface BotaoCinzaProps {
    cor: 'gray'
    className?: string
    children: any
    onClick?: () => void
}

export default function BotaoCinza(props: BotaoCinzaProps){
    return (
        <button onClick={props.onClick} className={`
            bg-gradient-to-r from-gray-400 to-gray-700
            text-white px-4 py-2 rounded-md
            ${props.className}
        `}>
            { props.children }
        </button>
    )
}