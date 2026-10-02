import type { FreeDictionaryAPI } from '#/lib/schema'
import { EntryAccordionItem } from './entry-accordion-item'
import { Accordion } from './ui/accordion'
import { Badge } from './ui/badge'
import { Card, CardContent } from './ui/card'

export const DictionaryResult = ({ data }: { data: FreeDictionaryAPI }) => {
  const phonetic = data.entries[0].pronunciations[0].text
  const firstEntryValue = `item-${0}`

  return (
    <section className="space-y-8">
      <article>
        <h2 className="font-semibold text-6xl">{data.word}</h2>
        <p className="text-muted-foreground mb-3">{phonetic}</p>
        <Badge variant="secondary">{data.entries.length} definiciones</Badge>
      </article>

      <article className="space-y-5">
        <p className="uppercase text-muted-foreground text-medium">
          uso según la parte de la oración
        </p>

        <Card className="bg-neutral-900 shadow-2xl">
          <CardContent>
            <Accordion type="single" collapsible defaultValue={firstEntryValue}>
              {data.entries.map((entry, index) => (
                <EntryAccordionItem
                  key={entry.partOfSpeech}
                  index={index}
                  entry={entry}
                />
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </article>
    </section>
  )
}
