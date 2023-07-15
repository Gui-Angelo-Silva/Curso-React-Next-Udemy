import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Formulario from "@/components/Formulario";
import BotaoVerde from "@/components/BotaoVerde";
import useClientes from "@/hooks/useClientes";

export default function Home() {
  const { 
    cliente, 
    clientes, 
    salvarCliente, 
    selecionarCliente, 
    excluirCliente, 
    novoCliente,
    tabelaVisivel,
    exibirTabela
  } = useClientes()

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end">
              <BotaoVerde 
                className="mb-4" cor="green"
                onClick={novoCliente}>
                  Novo Cliente
              </BotaoVerde>
            </div>
            <Tabela clientes={clientes}
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente}
            />
          </>
        ) : (
          <Formulario 
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={exibirTabela}
          ></Formulario>
        )}
      </Layout>
    </div>
  )
}