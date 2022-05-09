import styles from '../../styles/Porta.module.css'
import PortaModel from '../model/Porta'
import Presente from './Presente'

interface PortaProps{
    value: PortaModel
    onChange: (novaPorta: PortaModel) => void
}

export default function Porta(props: PortaProps){
    
    const porta = props.value
    const selecionada = porta.selecionada && !porta.aberta ? styles.selecionada: null
    const alterarSelecionada = e => props.onChange(porta.alterarSelecionada())
    const abrir = e =>{
        e.stopPropagation()
        props.onChange(porta.abrir())
    } 
   
    function renderizarPorta(){
        return(
        <div className={styles.porta}>
            <div className={styles.numeroDaPorta}>{porta.numero}</div>
            <div className={styles.macaneta} onClick={abrir}></div>
        </div>         
        )

    }
    
    
    return( 
              
        <div className={styles.area} onClick={alterarSelecionada}>
            <div className={`${styles.batente} ${selecionada}`}>
                {porta.fechada ? renderizarPorta() : porta.temPresente ? <Presente/> : false }
            </div>
            <div className={styles.chao}></div>
        </div>        
    )
}