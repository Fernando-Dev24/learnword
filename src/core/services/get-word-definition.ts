import { createServerFn } from '@tanstack/react-start'
import { wordSearchSchema } from '../schemas'
import type { FreeDictionaryAPI } from '#/lib/schema'
import { getCustomDefinition } from '#/helper/definition/get-custom-definition'

const BASE_ENDPOINT = 'https://freedictionaryapi.com/api/v1/entries/en/'

export const getWordDefinition = createServerFn({ method: 'GET' })
  .validator(wordSearchSchema)
  .handler(async ({ data }) => {
    const { word } = data

    if (!word) {
      return null
    }

    const resp = await fetch(`${BASE_ENDPOINT}${word}`)

    if (!resp.ok) {
      throw new Error(
        `Error al obtener la definición de la palabra: ${resp.statusText}`,
      )
    }

    const respJson = (await resp.json()) as FreeDictionaryAPI
    const definition = getCustomDefinition(respJson)

    return definition
  })
