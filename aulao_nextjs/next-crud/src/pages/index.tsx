import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Cliente from '@/core/Cliente'
import Botao from "@/components/Botao";
import Formulario from "@/components/Formulario";
import { useState } from "react";
import BotaoVerde from "@/components/BotaoVerde";

export default function Home() {
  const clientes = [
    new Cliente('Guilherme', 18, '1'),
    new Cliente('Felipe', 2, '2'),
    new Cliente('Gabriel', 13, '3'),
    new Cliente('Gustavo', 12, '4'),
  ]

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome)
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(`Excluir...${cliente.nome}`)
  }

  function salvarCliente(cliente: Cliente)  {
    console.log(cliente)
  }

  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        {visivel === 'tabela' ? (
          <>
            <div className="flex justify-end">
              <BotaoVerde 
                className="mb-4" cor="green"
                onClick={() => setVisivel('form')}>
                  Novo Cliente
              </BotaoVerde>
            </div>
            <Tabela clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
            />
          </>
        ) : (
          <Formulario 
            cliente={clientes[2]}
            clienteMudou={salvarCliente}
            cancelado={() => setVisivel('tabela')}
          ></Formulario>
        )}
      </Layout>
    </div>
  )
}