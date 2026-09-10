import { readFile, writeFile } from 'node:fs/promises'
import { createServer } from 'vite'

// Render the same React components at build time. No second copy of the content.
const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' })
try {
  const { render } = await server.ssrLoadModule('/src/entry-server.tsx')
  const template = await readFile('dist/index.html', 'utf8')
  if (!template.includes('<div id="root"></div>')) throw new Error('Missing prerender root')
  await writeFile('dist/index.html', template.replace('<div id="root"></div>', () => `<div id="root">${render()}</div>`))
  console.log('Prerendered portfolio content into dist/index.html')
} finally {
  await server.close()
}
