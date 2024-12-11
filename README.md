# Morpho Vault Info Card Demo

## Live Version
Find the application running [here](https://morpho-vault-info-card.vercel.app/)

## Getting Started

After cloning,

```bash
# install dependencies
npm install

# run the application locally
npm run dev
```

## Architecture Details

- TailwindCSS was used to abbreviate some styling, mainly fast layout.
- However, the design system has important variants about what is stated in the
  library.
- Separate styles per component in different files was made.
- GraphQL queries are separated from hooks/server functions.
- Two GraphQL client connectors are used: one for frontend and another for the
  server.
- Only two pages were coded: one for the search box and another for the vault
  details.
- Search page components are client side to support interactivity
- Search supports look up for name (contained) or address (exact). Two queries
  are triggered and the response is joined.
- Error and not found pages were added.
## Future improvements
