import z from 'zod'

export const wordSearchSchema = z.object({
  word: z.string().optional(),
})
