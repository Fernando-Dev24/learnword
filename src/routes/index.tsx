import { createFileRoute } from '@tanstack/react-router'
import { DictionaryResult } from '#/components/dictionary-result'
import { wordSearchSchema } from '#/core/schemas'
import { DictionaryEmptyState } from '#/components/dictionary-empty-state'
import { getWordDefinition } from '#/core/services'
import { ErrorComponent } from '#/components/error-component'
import { DictionarySkeleton } from '#/components/ui/dictionary-skeleton'

export const Route = createFileRoute('/')({
  validateSearch: wordSearchSchema,
  loaderDeps: ({ search }) => ({ word: search.word }),
  loader: async ({ deps: { word } }) =>
    await getWordDefinition({ data: { word } }),
  pendingComponent: DictionarySkeleton,
  errorComponent: ErrorComponent,
  component: Home,
})

function Home() {
  const data = Route.useLoaderData()

  if (!data) {
    return <DictionaryEmptyState />
  }

  return <DictionaryResult data={data} />
}
