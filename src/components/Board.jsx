import {Button} from './Button';

export default function Board () {
  const handler = () => {
    
  }
  return (
    <>
      <div>
        <Button value="" meuClick={handler} />
        <Button value="" meuClick={handler} />
        <Button value="" meuClick={handler} />
      </div>
      <div>
        <Button value="" meuClick={handler} />
        <Button value="" meuClick={handler} />
        <Button value="" meuClick={handler} />
      </div>
      <div>
        <Button value="" meuClick={handler} />
        <Button value="" meuClick={handler} />
        <Button value="" meuClick={handler} />
      </div>
    </>
  )

}