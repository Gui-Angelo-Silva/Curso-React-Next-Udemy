import Layout from '@/components/layout'
import styles from '../styles/estiloso.module.css'
import Link from 'next/link'

export default function Estiloso() {
    return (
        <Layout titulo='Exemplo de CSS Modularizado'>
            <div className={styles.roxo}>
                <h1>Estilo usando CSS Módulos</h1>
            </div>
        </Layout>
    )
}