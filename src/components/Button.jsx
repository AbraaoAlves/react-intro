
const style = {
  color: 'red'
} 

export function Button({value}) {
  return <button style={style} className="square">{value}</button> 
}

