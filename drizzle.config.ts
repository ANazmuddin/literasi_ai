import { defineConfig } from 'drizzle-kit'

export default defineConfig({
    schema: "./config/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://ai-kids-story-builder_owner:ZJ5vf3mrMXPW@ep-super-shadow-a570wang.us-east-2.aws.neon.tech/ai-kids-story-builder?sslmode=require',
    },
    verbose: true,
    strict: true,
})