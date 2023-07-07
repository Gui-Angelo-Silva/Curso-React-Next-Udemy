import styles from '../styles/estiloso.module.css'
import Link from 'next/link'

export default function Estiloso() {
    return (
        <div className= { styles.roxo }>
            <Link href='/'> Voltar</Link>
            <h1>Estilo usando CSS Módulos</h1>
        </div>
    )
}