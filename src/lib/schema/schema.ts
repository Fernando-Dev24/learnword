export interface OxfordResponse {
  metadata: Metadata
  query: string
  results: Result[]
}

export interface Metadata {
  operation: string
  provider: string
  schema: string
}

export interface Result {
  id: string
  language: string
  lexicalEntries: LexicalEntry[]
  type: string
  word: string
}

export interface LexicalEntry {
  entries: Entry[]
  language: string
  lexicalCategory: LexicalCategory
  phrases?: Phrase[]
  text: string
}

export interface LexicalCategory {
  id: string
  text: string
}

export interface Entry {
  etymologies?: string[]
  inflections?: Inflection[]
  pronunciations?: Pronunciation[]
  senses: Sense[]
}

export interface Inflection {
  inflectedForm: string
}

export interface Pronunciation {
  audioFile?: string
  dialects?: string[]
  phoneticNotation?: string
  phoneticSpelling?: string
}

export interface Sense {
  definitions?: string[]
  domainClasses?: Classification[]
  id: string
  notes?: Note[]
  semanticClasses?: Classification[]
  shortDefinitions?: string[]
  subsenses?: Sense[]
  variantForms?: VariantForm[]
  examples?: Example[]
}

export interface Classification {
  id: string
  text: string
}

export interface Note {
  text: string
  type?: string
}

export interface VariantForm {
  text: string
}

export interface Example {
  text: string
}

export interface Phrase {
  id: string
  text: string
}
