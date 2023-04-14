import {Button} from './Button';

export default function Board () {
  return (
    <>
      <div>
        <Button value="o" />
        <Button value="x" />
        <Button value="o" />
      </div>
      <div>
        <Button value="x" />
        <Button value="o" />
        <Button value="x" />
      </div>
      <div>
        <Button value="x" />
        <Button value="x" />
        <Button value="o" />
      </div>
    </>
  )

}