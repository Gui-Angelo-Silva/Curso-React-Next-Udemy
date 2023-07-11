import Layout from "@/components/layout";
import { useState } from "react";

export default function Estado() {
    const [numero, setNumero] = useState(0) //React Hooks

    function incrementar(){
        setNumero(numero + 1)
    }

    return (
        <Layout titulo='Componente com Estado'>
            <span>{ numero }</span>
            <button onClick={ incrementar }>Incrementar</button>
        </Layout>
    )
}