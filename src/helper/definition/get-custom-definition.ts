import type { FreeDictionaryAPI } from '#/lib/schema'

export const sliceEntry = (array: any[], slice: number) => {
  const slicedArray = array.slice(0, slice)
  return slicedArray
}

export const getCustomDefinition = (definition: FreeDictionaryAPI) => {
  const entries = definition.entries

  const newEntries = entries.map((entry) => {
    return {
      ...entry,
      antonyms: sliceEntry(entry.antonyms, 5),
      synonyms: sliceEntry(entry.synonyms, 5),
      senses: sliceEntry(entry.senses, 2),
    }
  })

  return {
    ...definition,
    entries: newEntries,
  }
}
