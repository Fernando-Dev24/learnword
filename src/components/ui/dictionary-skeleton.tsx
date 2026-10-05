import { MoveUpRight } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './accordion'
import { Card, CardContent } from './card'
import { Skeleton } from './skeleton'
import { Separator } from './separator'

export const DictionarySkeleton = () => {
  return (
    <section className="space-y-8 animate-fade-in-up">
      <article className="space-y-3">
        <Skeleton className="w-1/4 h-6" />
        <Skeleton className="w-2/4 h-5" />
        <Skeleton className="rounded-full w-[10%] h-8" />
      </article>

      <article className="space-y-5">
        <p className="uppercase text-muted-foreground text-medium">
          uso según la parte de la oración
        </p>

        <Card className="dark:bg-neutral-900 shadow-xl">
          <CardContent>
            <Accordion type="single" collapsible defaultValue={'1'}>
              <AccordionItem value="1">
                <AccordionTrigger>
                  <Skeleton className="w-1/4 h-5" />
                </AccordionTrigger>
                <AccordionContent className="space-y-8">
                  <Skeleton className="h-3" />
                  <Skeleton className="w-3/4" />

                  <div className="flex items-center space-x-3">
                    {Array.from(
                      [1, 2, 3, 4, 5].map((_, index) => (
                        <Skeleton key={index} className="h-5 w-[10%]" />
                      )),
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="2">
                <AccordionTrigger>
                  <Skeleton className="w-1/4 h-5" />
                </AccordionTrigger>
              </AccordionItem>

              <AccordionItem value="3">
                <AccordionTrigger>
                  <Skeleton className="w-1/4 h-5" />
                </AccordionTrigger>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <div>
          <Separator />

          <p className="text-muted-foreground text-xs inline-flex">
            Definiciones de
            <a
              href="https://freedictionaryapi.com/"
              target="_blank"
              className="ml-0.5 underline"
            >
              Free Dictionary API
            </a>
            <MoveUpRight size={12} /> - Licencia CC BY-SA 4.0
          </p>

          <p className="text-muted-foreground text-xs">
            Traducciones de ejemplos generadas automaticamente, pueden cometer
            errores.
          </p>
        </div>
      </article>
    </section>
  )
}
