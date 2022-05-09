import styles from "../../styles/Home.module.css";
import Cartao from "../components/Cartao";
import Link from "next/link";
import EntradaNumerica from "../components/EntradaNumerica";
import { useState } from "react";

export default function Home() { 
  
  const [qtdPortas, setQtdPortas] = useState(3)
  const [presentePorta, setPresentePorta] = useState(2)

  return(
    <div className={styles.home}>
      <div>
        <Cartao bgcolor="red">
          <h1>Monty Hall</h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica text="Qtde Portas?" value={qtdPortas} onChange={novoPortas => setQtdPortas(novoPortas)}/>
        </Cartao>
      </div>
      <div>
        <Cartao>
          <EntradaNumerica text="Qual Porta está o Presente" value={presentePorta} onChange={novoPresente => setPresentePorta(novoPresente)}/>
        </Cartao>  
        <Cartao bgcolor="green">
        <Link href={`/jogo/${qtdPortas}/${presentePorta}`}>
          <h2 className={styles.iniciar}>Iniciar</h2>
        </Link>          
        </Cartao>
      </div>
    </div>
  )
}
