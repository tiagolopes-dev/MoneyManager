import { Button } from "./components/Button"
import { Input } from "./components/Input"

export function App() {
  return (
    <>
     <h1 className="text-blue-500 text-4xl">oi</h1>
     <Button variant="Primary">oi</Button>
     <Button variant="Secondary">oi</Button>
     <Button variant="Danger">oi</Button>

     <Input variant="text" placeholder="vai se fuder"/>
     <Input variant="password" placeholder="vai se fuder"/>
     <Input variant="select" options={['','Saída', 'Entrada']}/>

     
    </>
  )
}

