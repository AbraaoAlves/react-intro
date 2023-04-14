import {useState} from 'react'
const style = {
  color: 'red',
  width: 25,
  height: 25,

} 


export function Button({value, meuClick}) {
  const  [meuValor, updateMeuValor] = useState(value);
   
  const meuhandler = () => {
    updateMeuValor('X');
    meuClick();
  }

  return <button 
      onClick={meuhandler} 
      style={style} 
      className="square"
      >
        {meuValor}
  </button> 
}

