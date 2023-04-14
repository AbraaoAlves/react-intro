import {Button} from './Button';

export default function Board () {
  const handler = () => {
    alert('[board]: opa!')
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