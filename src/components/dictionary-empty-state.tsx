import { Book } from 'lucide-react'
import { Button } from './ui/button'
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from './ui/empty'
import { useNavigate } from '@tanstack/react-router'

const TEST_WORDS = [
  'run',
  'jump',
  'swim',
  'walk',
  'talk',
  'listen',
  'read',
  'write',
  'play',
  'sing',
]

export const DictionaryEmptyState = () => {
  const navigate = useNavigate()

  const onSearchWord = (word: string) => {
    navigate({
      to: '/',
      replace: true,
      search: {
        word,
      },
    })
  }

  return (
    <div className="space-y-5 animate-fade-in-up">
      <div className="space-y-1">
        <p className="uppercase tracking-wider text-muted-foreground text-xs">
          Prueba con
        </p>
        <div className="space-x-2 space-y-2">
          {TEST_WORDS.map((word, index) => (
            <Button
              key={index}
              variant={'secondary'}
              className="capitalize"
              size={'xs'}
              onClick={() => onSearchWord(word)}
            >
              {word}
            </Button>
          ))}
        </div>
      </div>

      <Empty className="border border-dashed">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <Book />
          </EmptyMedia>
          <EmptyTitle>Busca cualquier palabra en inglés</EmptyTitle>
          <EmptyDescription>
            Verás cada significado según su función en la oración junto con
            ejemplos en español e inglés.
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    </div>
  )
}
