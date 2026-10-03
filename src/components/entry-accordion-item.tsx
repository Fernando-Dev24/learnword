import type { Entry } from '#/lib/schema'
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion'
import { Button } from './ui/button'
import { useNavigate } from '@tanstack/react-router'
import { DictionarySenseItem } from './dictionary-sense-item'

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
            <DictionarySenseItem key={senseIndex} {...sense} />
          ))}
        </div>

        <div className="space-y-8">
          {entry.synonyms.length > 1 && (
            <div className="space-y-1">
              <p className="text-xs uppercase text-muted-foreground">
                sinonimos
              </p>
              <div className="space-x-2">
                {entry.synonyms.map((value, syIndex) => (
                  <Button
                    variant={'secondary'}
                    key={syIndex}
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
                {entry.antonyms.map((value, anIndex) => (
                  <Button
                    variant={'secondary'}
                    key={anIndex}
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
