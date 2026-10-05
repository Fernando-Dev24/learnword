import { Search } from 'lucide-react'
import { InputGroup, InputGroupAddon, InputGroupInput } from './ui/input-group'
import { useCallback, useRef, useState } from 'react'
import { useNavigate, useSearch } from '@tanstack/react-router'

export const Header = () => {
  const searchParams = useSearch({ from: '/' })
  const navigate = useNavigate()

  const [inputValue, setInputValue] = useState(searchParams.word ?? '')

  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null)

  const debounceSearch = useCallback((value: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)

    timeoutRef.current = setTimeout(() => {
      navigate({
        to: '/',
        replace: true,
        search: {
          word: value,
        },
      })
    }, 500)
  }, [])

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target
    debounceSearch(value)
    setInputValue(value)
  }

  return (
    <header className="space-y-5">
      <div>
        <h1 className="text-4xl font-bold">LearnWord</h1>
        <p className="text-muted-foreground">Diccionario de Inglés a Español</p>
      </div>

      <InputGroup className="shadow-xl">
        <InputGroupInput
          placeholder="Busca una palabra en inglés..."
          value={inputValue}
          onChange={handleChange}
        />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
      </InputGroup>
    </header>
  )
}
