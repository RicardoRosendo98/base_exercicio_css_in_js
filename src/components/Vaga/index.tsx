import { VagaLi, VagaLink, VagaTitulo, Lista } from './styles'

export type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = (props: Props) => (
  <VagaLi>
    <VagaTitulo>{props.titulo}</VagaTitulo>
    <ul>
      <Lista>Localizacao: {props.localizacao}</Lista>
      <Lista>Senioridade: {props.nivel}</Lista>
      <Lista>Tipo de contratacao: {props.modalidade}</Lista>
      <Lista>
        Salário: {props.salarioMin} - {props.salarioMax}
      </Lista>
      <Lista>Requisitos: {props.requisitos.join(', ')}</Lista>
    </ul>
    <VagaLink href="#">Ver detalhes e candidatar-se</VagaLink>
  </VagaLi>
)

export default Vaga
