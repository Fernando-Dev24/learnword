import type { LibreTranslate, Sense } from '#/lib/schema'
import { useState } from 'react'
import { Button } from './ui/button'
import { Languages } from 'lucide-react'

const LIBRE_TRANSLATE_ENDPOINT = 'https://libretranslate.com/translate'

export const DictionarySenseItem = (sense: Sense) => {
  const [viewOriginal, setViewOriginal] = useState(true)
  const [translatedExample, setTranslatedExample] = useState('')

  const onTranslateExample = async (example: string, target: string = 'es') => {
    const res = await fetch(LIBRE_TRANSLATE_ENDPOINT, {
      method: 'POST',
      body: JSON.stringify({
        q: example,
        source: 'en',
        target,
      }),
      headers: { 'Content-Type': 'application/json' },
    })

    if (!res.ok) {
      setTranslatedExample('Error al traducir')
      setViewOriginal(false)
    }

    const respData = (await res.json()) as LibreTranslate

    console.log({ respData })

    setTranslatedExample(respData.translatedText)
    setViewOriginal(false)
  }

  return (
    <div>
      <p>- {sense.definition}</p>
      {sense.examples.length > 0 && (
        <div className="flex items-center space-x-3">
          {viewOriginal ? (
            <p className="italic">{sense.examples[0]}</p>
          ) : (
            <p className="italic">{translatedExample}</p>
          )}

          <Button
            variant={'outline'}
            size={'icon-sm'}
            onClick={() => onTranslateExample(sense.examples[0])}
          >
            <Languages />
          </Button>
        </div>
      )}
    </div>
  )
}
