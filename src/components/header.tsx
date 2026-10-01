import { Search } from 'lucide-react'
import { InputGroup, InputGroupAddon, InputGroupInput } from './ui/input-group'

export const Header = () => {
  return (
    <header className="space-y-5">
      <div>
        <h1 className="text-4xl font-bold">LearnWord</h1>
        <p className="text-muted-foreground">Diccionario de Inglés a Español</p>
      </div>

      <InputGroup className="shadow-xl">
        <InputGroupInput placeholder="Busca una palabra en inglés..." />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
      </InputGroup>
    </header>
  )
}
