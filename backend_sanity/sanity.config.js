import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import schemas from './schemas/schema'

export default defineConfig({
  name: 'default',
  title: 'Portfolio',
  projectId: 'ozike5z9',
  dataset: 'production',
  plugins: [
    deskTool(),
    visionTool(),
  ],
  schema: {
    types: schemas,
  },
})