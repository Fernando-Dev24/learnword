export interface FreeDictionaryAPI {
  word: string
  entries: Entry[]
  source: Source
}

export interface Entry {
  language: Language
  partOfSpeech: string
  pronunciations: Pronunciation[]
  forms: Form[]
  senses: Sense[]
  synonyms: string[]
  antonyms: string[]
}

export interface Form {
  word: string
  tags: string[]
}

export interface Language {
  code: string
  name: string
}

export interface Pronunciation {
  type: Type
  text: string
  tags: string[]
}

export type Type = 'ipa'

export interface Sense {
  definition: string
  tags: string[]
  examples: string[]
  examplesEs?: string
  quotes: Quote[]
  synonyms: string[]
  antonyms: string[]
  translations: Translation[]
  subsenses: Sense[]
}

export interface Quote {
  text: string
  reference: string
}

export interface Translation {
  language: Language
  word: string
}

export interface Source {
  url: string
  license: License
}

export interface License {
  name: string
  url: string
}

export interface LibreTranslate {
  translatedText: string
}
