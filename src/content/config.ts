import { defineCollection, z } from 'astro:content'

const postsCollection = defineCollection({
  schema: z.object({
    autor: z.string(),
    fecha: z.string(),
    imagen: z.string(),
    titulo: z.string(),
  })
})

export const collections = {
  posts: postsCollection
}