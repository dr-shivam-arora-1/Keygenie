import './App.css';
import {useState} from 'react';
import { LC, NC, SC, UC } from './data/PassChar';


function App() {
  // let [uppercase,setUppercase]=useState(false)
  let [uc,setUc]=useState(false);
  let [lc,setLc]=useState(false);
  let [nc,setNc]=useState(false);
  let [sc,setSc]=useState(false);
  let [pslength , setPslength] = useState(10)
  let [finalpass,setFinalpass]=useState('')

  let createpassword=()=>{
    let charSet = ''
    let finalpasss = ''
    if(uc||lc||nc||sc){
    if(uc) charSet+=UC
    if(lc) charSet+=LC
    if(nc) charSet+=NC
    if(sc) charSet+=SC
    for(let i=0;i<pslength;i++){
      finalpasss+=charSet.charAt(Math.floor(Math.random()*charSet.length))
      setFinalpass(finalpasss)
    }

    }
    else{
      alert('plz click atleast one field')
    }

  }

  let coppypass=()=>{
    navigator.clipboard.writeText(finalpass)
  }

  return (
    <>
    <div className="passwordBox">
      <h2 className='heading'>KeyGenie</h2>

      <div className="passwordBoxin">
        <input type="text" name="" id="" readOnly value={finalpass}/><button onClick={coppypass}>copy</button>
      </div>

      <div className="passwordLength">
        <label htmlFor="">Password Length</label>
        <input type="number" max={20} min={10} name="" id="" value={pslength} onChange={(event)=>setPslength(event.target.value)}/>
      </div>

      <div className="passwordLength">
        <label htmlFor="">Include Upper Case</label>
        <input type="checkbox" name="" id="" checked={uc} onChange={()=>setUc(!uc)}/>
      </div>

      <div className="passwordLength">
        <label htmlFor="">Include Lower Case</label>
        <input type="checkbox" name="" id="" checked={lc} onChange={()=>setLc(!lc)}/>
      </div>

      <div className="passwordLength">
        <label htmlFor="">Include Number</label>
        <input type="checkbox" name="" id="" checked={nc} onChange={()=>setNc(!nc)}/>
      </div>


      <div className="passwordLength">
        <label htmlFor="">Include Special Characters</label>
        <input type="checkbox" name="" id="" checked={sc} onChange={()=>setSc(!sc)}/>
      </div>

      <button className='btn' onClick={()=>createpassword()}>Generate Password</button>

    </div>
    </>
  );
}

export default App;
