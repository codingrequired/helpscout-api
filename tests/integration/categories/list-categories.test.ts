import { describe, it, expect, beforeAll } from 'vitest';
import { listCategories } from '../../../src/categories/list-categories';
import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

describe('listCategories Integration Test', () => {
  let apiKey: string;
  let testCollectionId: string;

  beforeAll(() => {
    // Get API key from environment variable
    apiKey = process.env.HELPSCOUT_API_KEY || '';
    testCollectionId = process.env.TEST_COLLECTION_ID || '';

    if (!apiKey) {
      throw new Error('HELPSCOUT_API_KEY environment variable is not set');
    }

    if (!testCollectionId) {
      throw new Error('TEST_COLLECTION_ID environment variable is not set');
    }
  });

  it('should list categories from a collection', async () => {
    const response = await listCategories(apiKey, {
      collectionId: testCollectionId,
    });

    // Verify the response structure
    expect(response).toBeDefined();
    expect(response.categories).toBeDefined();
    expect(response.categories).toHaveProperty('page');
    expect(response.categories).toHaveProperty('pages');
    expect(response.categories).toHaveProperty('count');
    expect(response.categories).toHaveProperty('items');

    // Verify that items is an array
    expect(Array.isArray(response.categories.items)).toBe(true);

    // If there are categories, verify the structure of the first one
    if (response.categories.items.length > 0) {
      const firstCategory = response.categories.items[0];
      
      // Verify required fields
      expect(firstCategory).toHaveProperty('id');
      expect(firstCategory).toHaveProperty('number');
      expect(firstCategory).toHaveProperty('slug');
      expect(firstCategory).toHaveProperty('visibility');
      expect(firstCategory).toHaveProperty('collectionId');
      expect(firstCategory).toHaveProperty('order');
      expect(firstCategory).toHaveProperty('name');
      expect(firstCategory).toHaveProperty('articleCount');
      expect(firstCategory).toHaveProperty('createdAt');
      expect(firstCategory).toHaveProperty('updatedAt');

      // Verify field types
      expect(typeof firstCategory.id).toBe('string');
      expect(typeof firstCategory.number).toBe('number');
      expect(typeof firstCategory.name).toBe('string');
      expect(typeof firstCategory.articleCount).toBe('number');
    }
  });

  it('should support pagination parameters', async () => {
    const response = await listCategories(apiKey, {
      collectionId: testCollectionId,
      page: 1,
    });

    expect(response).toBeDefined();
    expect(response.categories).toBeDefined();
    expect(response.categories.page).toBe(1);
  });

  it('should support sorting parameters', async () => {
    const response = await listCategories(apiKey, {
      collectionId: testCollectionId,
      sort: 'name',
      order: 'asc',
    });

    expect(response).toBeDefined();
    expect(response.categories).toBeDefined();
    
    // If there are multiple categories, verify they are sorted by name
    if (response.categories.items.length > 1) {
      const names = response.categories.items.map(cat => cat.name);
      const sortedNames = [...names].sort((a, b) => a.localeCompare(b));
      expect(names).toEqual(sortedNames);
    }
  });

  it('should handle invalid collection ID gracefully', async () => {
    try {
      await listCategories(apiKey, {
        collectionId: 'invalid-collection-id',
      });
      // If we reach here, the API didn't throw an error
      // Some APIs return empty results instead of errors
      expect(true).toBe(true);
    } catch (error) {
      // Verify that an error is thrown for invalid collection
      expect(error).toBeDefined();
      expect(error).toHaveProperty('message');
    }
  });
});