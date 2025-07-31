# HelpScout API Tests

This directory contains integration tests for the HelpScout API library.

## Setup

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your HelpScout API credentials:
   - `HELPSCOUT_API_KEY`: Your HelpScout API key
   - `TEST_COLLECTION_ID`: A valid collection ID from your HelpScout account

3. Install dependencies:
   ```bash
   npm install
   ```

## Running Tests

Run all tests:
```bash
npm test
```

Run integration tests only:
```bash
npm run test:integration
```

Run tests in watch mode:
```bash
npm run test:watch
```

## Test Structure

- `integration/` - Integration tests that make real API calls
  - `categories/` - Tests for category-related endpoints
    - `list-categories.test.ts` - Tests for listing categories
    - `get-category.test.ts` - Tests for getting a single category by ID or number

## Writing New Integration Tests

When writing new integration tests:

1. Place them in the appropriate subdirectory under `integration/`
2. Use environment variables for sensitive data (API keys, IDs)
3. Include proper error handling for API failures
4. Test both success and error scenarios
5. Verify response structure and data types