import Layout from "@/components/layout";
import { useRouter } from 'next/router'

export default function CLienteProCodigo() {
    const router = useRouter()

    return (
        <Layout titulo='Navegação Dinâmica'>
            <div>Codigo = { router.query.codigo }</div>
            <div>Filial = { router.query.filial }</div>
        </Layout>
    )
}