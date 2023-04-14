
const style = {
  color: 'red',
  width: 25,
  height: 25,

} 


export function Button({value, meuClick}) {
  
  const meuhandler = () => {
    meuClick();
    console.log('[button]: opa!')
  }

  return <button onClick={meuhandler} style={style} className="square">{value}</button> 
}

