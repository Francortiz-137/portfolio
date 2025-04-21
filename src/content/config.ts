import { defineCollection, z } from "astro:content";

const skillsCollection = defineCollection({
  schema: z.object({
    name: z.string(),
    icon: z.string(),
    description: z.string(),
  }),
});
const projectsCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        tags: z.array(z.string()),
        image: z.string(),
        url: z.string(),
        deployurl: z.string(),
        order: z.number(),
    }),
});

export const collections = {
    skills: skillsCollection,
    projects: projectsCollection,
    };