import Navegador from "@/components/Navegador"

export default function Inicio() {
  //'<h1>Título</h1>'

  return (
    <div style={{
       display: "flex",
       justifyContent: 'center',
       alignItems: 'center',
       flexWrap: 'wrap',
       height: '100vh'
    }}>

      <Navegador texto='Estiloso' destino='/estiloso'/>
      <Navegador texto ='Exemplo' destino='/exemplo' cor='#9400d3'/>
      <Navegador texto='JSX' destino='/jsx' cor='crimson'/>
      <Navegador texto='Navegação #01' destino='/navegacao/' cor='green'/>
      <Navegador texto='Navegação #02' destino='/cliente/sp/123' cor='#fc580c'/>
      <Navegador texto='Componente com Estado' destino='/estado' cor='#cc9e61'/>
      <Navegador texto='Integração com API #01' destino='/integracao_1' cor='#1693a5'/>
      <Navegador texto='Conteúdo Estático' destino='/estatico' cor='#fa054a'/>
    </div>
  )
} 