import {React,useState} from 'react';
import styles from './App.module.scss';
const App = () => {

const [data, setData]=useState([]);
const [key, setKey]=useState();
const [val, setVal]=useState();
const [obj, setObj]=useState({})
const [display, setDisplay]=useState();
const [num, setNum]=useState(false);
const [bul, setBul]=useState(false);
const [count,setCount]=useState(0);
const [temp, setTemp]=useState('');

let newobj='';

// Prevent reload of the page
window.onbeforeunload = function(e) {
  e.returnValue = 'onbeforeunload';
};

// Number state
const numb=()=>{
  setNum(!num)
}

// Boolean state
const bool=()=>{
  setBul(!bul)
}

// Set object
const sub=()=>{

if(num){
  newobj={[key]:parseFloat(val)};  
  setObj(news => ({...news, ...newobj}))
  let tem=JSON.stringify(newobj)
  setTemp(tem.replace(/"([^"]+)":/g, '$1:'))
}else if(bul){
  newobj={[key]:JSON.parse(val)};  
  setObj(news => ({...news, ...newobj}))
  let tem=JSON.stringify(newobj)
  setTemp(tem.replace(/"([^"]+)":/g, '$1:'))
}else{
  newobj={[key]:val};  
  setObj(news => ({...news, ...newobj}))
  let tem=JSON.stringify(newobj)
  setTemp(tem.replace(/"([^"]+)":/g, '$1:'))
}
  setKey('')
  setVal('')
  setCount(count+1)
}

// Set array of objects
const arrpush=()=>{
  data.push(obj)
  let rep =JSON.stringify(data)
  setDisplay("const data = " + rep.replace(/"([^"]+)":/g, '$1:'))
  setCount(0)
}

  return (
    <div className={styles.main}>
      <h1>Dummy Data Writter</h1>

       <main className={styles.wrap}>
        <div className={styles.inp}>
        <h2>Key: </h2>
          <input value={key} onChange={e=>setKey(e.target.value)} required/>
        <h2>Value: </h2>
        <div classNmae={styles.vals}>
          <textarea value={val} id="val" onChange={e=>setVal(e.target.value)} required/>
          {num ? <button className={styles.red} onClick={numb}>Number</button>:<button  onClick={numb}>Number</button>}
          {bul ? <button className={styles.red} onClick={bool}>Boolean</button>:<button  onClick={bool}>Boolean</button>}
        </div>
        <div className={styles.count}>
          <button onClick={sub}>Push data to a same object</button>
          <p>Amount of key-value pairs in current object: {count}</p>
          <br/>
        </div>
        <div className={styles.count}>
          <button onClick={arrpush}>Push the object to the array</button>
          <p>Last pair value submitted: {temp}</p>
          <br/>
        </div>  
        </div>
        <p className={styles.p}>{display}</p>
      </main> 
    </div>
  )
}

export default App

