export default class PortaModel{
    // o # serve para dizer q os abributo são private
    #numero: number
    #temPresente : boolean
    #selecionada: boolean
    #aberta : boolean

    constructor(numero: number, temPresente = false, selecionada = false, aberta = false){
        this.#numero = numero
        this.#temPresente = temPresente
        this.#selecionada = selecionada
        this.#aberta = aberta
    }

    get numero(){
        return this.#numero
    }

    get selecionada(){
        return this.#selecionada
    }

    get aberta(){
        return this.#aberta
    }

    get fechada(){
        return !this.aberta
    }

    get temPresente(){
        return this.#temPresente
    }

    desselecionada(){
        const selecionada = false
        return new PortaModel(this.numero, this.temPresente, selecionada,this.aberta)
    }
    
    alterarSelecionada(){
        const selecionada = !this.#selecionada
        return new PortaModel (this.numero, this.temPresente,selecionada, this.#aberta)
    }

    abrir(){
        const aberta = true
        return new PortaModel( this.numero, this.temPresente, this.selecionada, aberta)
    }



}