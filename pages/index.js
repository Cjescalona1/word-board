
import styles from '../styles/Home.module.css'
import B1 from './resources/board2.json';
import D from './resources/dictionary.json'
import { Col, Row,Button }from 'react-bootstrap';
import { useState } from 'react';
import close from './resources/close.png';
export default function Home() {
  const  [inp, setInp] = useState("")   
  const  [valid, setValid] = useState(false)   
  const  [used, setUsed]=useState([]) 
  let show=false;
   function handle(e, ind){ 
        let Us=used;
        if(!used.includes(ind)){ 
          Us.push(ind);
          setUsed(Us);
          let aux = inp+e;
          setInp(aux)
           if(aux){
              setValid(validate(aux))
              show=aux;
            }
        }  
    }
function validate(ent){ 
  let band=false;   
        for (let i = 0; i < D.words.length; i++) { 
            if (D.words[i]==ent.toLowerCase()){
              band=true
            }
        } 
 return(band) 
 }

  return (
    <div className={styles.container}>
      
      <main className={styles.main}>
          <div className={styles.pad}>
          
          <Row className={styles.clear} disabled={inp==""} onClick={()=>{setInp(""); setUsed([])}}> Clear word  <img className={styles.closeB } src={close.src} />  </Row> 
          <Col className={styles.board} >
              {B1.board.map((aa,index)=>{
               return(
                  <>
                  <Row className={styles.rowE}  >
                    <>
                      <div className={(used.includes(index)&&!valid)? styles.checkletterW : (used.includes(index)&&valid)? styles.checkletter: styles.letter} onClick={()=>{handle(aa, index)}} >
                        {aa}
                      </div> 
                    </>
                  </Row>
                  </>
                )
              })}
           
            <Row className={styles.rowInp} >
              <input value={inp} disabled onChange={()=>{validate(inp)}} className={ valid? styles.input:styles.inputInvalid}/> 
            </Row>
          </Col>         
          </div>
          <div className='screen'></div>
      </main>

    </div>
  )
}
