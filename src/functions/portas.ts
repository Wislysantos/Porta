import Porta from "../components/Porta";
import PortaModel from "../model/Porta";

export function crirarPorta(qtde:number, portaComPresente:number): PortaModel[]{
    // esta função arry.from ele pode receber uma função, dentro do atributo so objeto eu posso passar o tamanho do array
    return Array.from({length: qtde}, (_, i)=>{
        const numero = i + 1
        const temPresente = numero === portaComPresente                         
        return new PortaModel(numero, temPresente)
    })
}

export function atulizarPortas(portas: PortaModel[], portaModificada: PortaModel): PortaModel[]{
    return portas.map(portaAtual =>{
        const igualAModificada = portaAtual.numero === portaModificada.numero
        
        if(igualAModificada){
            return portaModificada
        }else{
            return portaModificada.aberta ? portaAtual : portaAtual.desselecionada()
        }
    })
}