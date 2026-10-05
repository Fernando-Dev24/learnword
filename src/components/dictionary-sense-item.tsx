import type { Sense } from '#/lib/schema'
import { useState, useTransition } from 'react'
import { Button } from './ui/button'
import { Eye, Languages } from 'lucide-react'
import { onTranslateExample } from '#/core/services'
import { toast } from 'sonner'
import { Spinner } from './ui/spinner'

export const DictionarySenseItem = (sense: Sense) => {
  const [translation, setTranslation] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()

  const handleTranslate = (example: string) => {
    startTransition(async () => {
      const { success, text } = await onTranslateExample({
        data: { text: example },
      })

      if (!success || !text) {
        toast.error('Error al traducir el ejemplo')
        return
      }

      setTranslation(text)
    })
  }

  return (
    <div>
      <p>- {sense.definition}</p>
      {sense.examples.length > 0 && (
        <div className="flex items-center space-x-3">
          {translation ? (
            <p className="italic">{translation}</p>
          ) : (
            <p className="italic">{sense.examples[0]}</p>
          )}

          {translation ? (
            <Button
              variant={'outline'}
              size={'icon-sm'}
              onClick={() => setTranslation(null)}
            >
              <Eye />
            </Button>
          ) : (
            <Button
              variant={'outline'}
              size={'icon-sm'}
              onClick={() => handleTranslate(sense.examples[0])}
            >
              {isPending ? <Spinner /> : <Languages />}
            </Button>
          )}
        </div>
      )}
    </div>
  )
}
