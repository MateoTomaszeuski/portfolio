# Mateo Tomaszeuski — Portfolio

A React + TypeScript portfolio focused on full-stack engineering, banking applications, applied AI, and production delivery.

## Development

The existing CI uses pnpm 9. Both original lockfiles are retained; this redesign introduces no new package dependencies.

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm lint
pnpm build
```

## Design and content

- Graphite surfaces, electric green accents, and locally hosted Manrope / Space Grotesk variable fonts.
- Responsive navigation, project architecture diagrams, expandable project and career details, and résumé downloads.
- Scroll reveals, hover transitions, and progressive reading position, with reduced-motion support.
- Current role: Programmer/Analyst, DHI Computing Service, Inc., August 2026–present.
- Career and project content comes from the September 2026 résumé and the original portfolio. Diagrams explain the documented architecture; they are not screenshots of internal software.

## Structure

- `src/pages/Home.tsx`: introduction and section composition.
- `src/components/PortfolioSections.tsx`: projects, experience, about, and contact.
- `src/components/Navbar.tsx`: responsive primary navigation.
- `src/components/Reveal.tsx`: progressively enhanced, reduced-motion-aware scroll animation.
- `src/index.css`: design tokens, responsive layouts, and motion.
- `public/resume.pdf`: current downloadable résumé.
- `.openai/hosting.json`: separate private Sites deployment configuration.

The original Azure workflow and custom-domain configuration are retained. Publishing to the GitHub main branch still follows the existing Azure deployment workflow.

## Asset provenance

- `professional.jpg` and `me.jpg`: photographs supplied by the original portfolio repository.
- `resume.pdf`: the current résumé supplied on the owner's computer.
- Manrope and Space Grotesk: Google Fonts, SIL Open Font License. License files are included in `public/fonts/`.
- Existing social preview photo and metadata image URL are preserved.

Contact: [LinkedIn](https://www.linkedin.com/in/mateo-tomaszeuski/) · [GitHub](https://github.com/MateoTomaszeuski)
