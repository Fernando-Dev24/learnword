import { createFileRoute } from '@tanstack/react-router'
import { Badge } from '@/components/ui/badge'

export const Route = createFileRoute('/')({ component: Home })

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

function Home() {
  return (
    <div>
      <div>
        <span>Prueba con: </span>
        {TEST_WORDS.map((word, index) => (
          <Badge key={index}>{word}</Badge>
        ))}
      </div>
    </div>
  )
}
