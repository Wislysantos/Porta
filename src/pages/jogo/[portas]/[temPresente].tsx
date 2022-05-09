import { useEffect, useState } from "react"
import styles from '../../../../styles/jogo.module.css'
import Link from "next/link"
import { atulizarPortas, crirarPorta } from "../../../functions/portas"
import Porta from "../../../components/Porta"
import { useRouter } from "next/router"

export default function jogo(){

    //uso o useRouter para pegar as imformação da url 
    const router = useRouter()
    const [valido, setValido] = useState(false)
    const [portas, setPorta] = useState([])



    useEffect(()=>{

        const portas = +router.query.portas
        const temPresente = +router.query.temPresente

        const qtdPortasValido = portas >= 3 && portas <= 100
        const temPresenteValido = temPresente >= 1 && temPresente <= portas

        setValido(qtdPortasValido && temPresenteValido)
         
    },[portas])

    //useEffect ele funciona assim quando uma dependecia ou um estado modificar ele vai fazer determinada função que esta detro dele 
    useEffect(()=>{
        //uso o mais antes do router para ele converter para number porque ele vem com string 
        const portas = +router.query.portas
        const temPresente = +router.query.temPresente
        console.log(portas + " " + temPresente)        
        setPorta(crirarPorta(portas, temPresente))        
        
        //dentro deste parente vc coloca parametro quando ele for modificar ele faz a função
    }, [router.query])

    function renderizarPortas(){
        return portas.map(porta =>{
            return <Porta key={porta.numero} value={porta} onChange={novaPorta => setPorta(atulizarPortas(portas, novaPorta))} />
        })
    }

  return (    
    <div className={styles.jogo}>
        <div className={styles.portas}>
            {valido ? 
            renderizarPortas() : <h2 className={styles.invalido}>Números Inválidos</h2>
        }        
            <div className={styles.botao}>
                <Link href={'/'}>
                    <button className={styles.botoes}>Reniciar jogo</button>
                </Link>
            </div>
        </div>      
    </div>
  )
}