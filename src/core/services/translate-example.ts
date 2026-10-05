import { createServerFn } from '@tanstack/react-start'
import { translate } from '@vitalets/google-translate-api'
import z from 'zod'

const payload = z.object({
  text: z.string(),
  target: z.string().default('es'),
})

export const onTranslateExample = createServerFn({ method: 'POST' })
  .validator(payload)
  .handler(async ({ data }) => {
    try {
      const res = await translate(data.text, { to: data.target || 'es' })
      return { success: true, text: res.text }
    } catch (error) {
      return {
        success: false,
        text: null,
      }
    }
  })
