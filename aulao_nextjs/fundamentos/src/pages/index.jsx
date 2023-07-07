import Navegador from "@/components/Navegador"

export default function Inicio() {
  //'<h1>Título</h1>'
  return (
    <div style={{
      
    }}>
      <Navegador texto='Estiloso' destino='/estiloso'/>
      <Navegador texto ='Exemplo' destino='/exemplo'/>
      <Navegador texto='JSX' destino='/jsx'/>
    </div>
  )
} 