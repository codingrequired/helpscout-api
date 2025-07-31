# Help Scout Docs API Client

A TypeScript client library for the Help Scout Docs API, providing a simple and type-safe way to interact with Help Scout's knowledge base API.

## Installation

This package is published to GitHub Packages. To install it, you'll need to configure npm to use GitHub Packages for the `@codingrequired` scope.


3. Install the package:
```bash
npm install @codingrequired/helpscout-api
```

## Usage

```typescript
import { createDocsApiClient } from '@codingrequired/helpscout-api';

// Initialize the client with your API key
const client = createDocsApiClient('your-api-key');

// Example: List all collections
const collections = await client.collections.listCollections({
  page: 1,
  pageSize: 20
});

// Example: Search articles
const searchResults = await client.articles.searchArticles({
  query: 'installation guide',
  collectionId: 'collection-id',
  visibility: 'public'
});

// Example: Get a specific article
const article = await client.articles.getArticle({
  articleIdOrNumber: '123456'
});
```

## API Coverage

### Collections
- `listCollections` - List all collections
- `getCollection` - Get a specific collection

### Articles
- `listArticles` - List articles in a collection
- `searchArticles` - Search for articles
- `getArticle` - Get a specific article
- `createArticle` - Create a new article
- `updateArticle` - Update an existing article
- `deleteArticle` - Delete an article
- `listRelatedArticles` - List related articles
- `listRevisions` - List article revisions
- `getRevision` - Get a specific revision
- `updateViewCount` - Update article view count
- `saveArticleDraft` - Save an article draft
- `deleteArticleDraft` - Delete an article draft

### Assets
- `createArticleAsset` - Upload an asset for an article
- `createSettingsAsset` - Upload an asset for settings

### Others

The other endpoints will be added later.

## Requirements

- Node.js 20 or higher
- Help Scout API key with Docs API access

## Development

```bash
# Install dependencies
npm install

# Build the library
npm run build

# Watch mode for development
npm run dev
```

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Links

- [Help Scout Docs API Documentation](https://developer.helpscout.com/docs-api/)
- [GitHub Repository](https://github.com/codingrequired/helpscout-api)
- [GitHub Package](https://github.com/codingrequired/helpscout-api/packages)