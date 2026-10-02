import type { Entry } from '#/lib/schema'
import { Languages } from 'lucide-react'
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion'
import { Button } from './ui/button'
import { useNavigate } from '@tanstack/react-router'

interface Props {
  index: number
  entry: Entry
}

export const EntryAccordionItem = ({ index, entry }: Props) => {
  const navigate = useNavigate()

  const onSearchBySynonymAntonym = (word: string) => {
    navigate({
      to: '/',
      replace: true,
      search: {
        word,
      },
    })
  }

  return (
    <AccordionItem value={`item-${index}`}>
      <AccordionTrigger className="uppercase">
        {index + 1}. {entry.partOfSpeech}
      </AccordionTrigger>
      <AccordionContent className="space-y-8">
        <div className="space-y-5">
          {entry.senses.map((sense, senseIndex) => (
            <div key={senseIndex}>
              <p>- {sense.definition}</p>
              {sense.examples.length > 0 && (
                <div className="flex items-center space-x-3">
                  <p className="italic">{sense.examples[0]}</p>
                  <Button variant={'outline'} size={'icon-sm'}>
                    <Languages />
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="space-y-8">
          {entry.synonyms.length > 1 && (
            <div className="space-y-1">
              <p className="text-xs uppercase text-muted-foreground">
                sinonimos
              </p>
              <div className="space-x-2">
                {entry.synonyms.map((value) => (
                  <Button
                    variant={'secondary'}
                    key={value}
                    size={'xs'}
                    onClick={() => onSearchBySynonymAntonym(value)}
                  >
                    {value}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {entry.antonyms.length > 1 && (
            <div className="space-y-1">
              <p className="text-xs uppercase text-muted-foreground">
                antonimos
              </p>
              <div className="space-x-2">
                {entry.antonyms.map((value) => (
                  <Button
                    variant={'secondary'}
                    key={value}
                    size={'xs'}
                    onClick={() => onSearchBySynonymAntonym(value)}
                  >
                    {value}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </AccordionContent>
    </AccordionItem>
  )
}
