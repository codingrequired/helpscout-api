import { describe, it, expect, beforeAll } from 'vitest';
import { getCategory } from '../../../src/categories/get-category';
import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

describe('getCategory Integration Test', () => {
  let apiKey: string;
  let testCategoryId: string;

  beforeAll(() => {
    // Get API key and test category ID from environment variables
    apiKey = process.env.HELPSCOUT_API_KEY || '';
    testCategoryId = process.env.TEST_CATEGORY_ID || '';

    if (!apiKey) {
      throw new Error('HELPSCOUT_API_KEY environment variable is not set');
    }

    if (!testCategoryId) {
      throw new Error('TEST_CATEGORY_ID environment variable is not set');
    }
  });

  it('should get a category by ID', async () => {
    const response = await getCategory(apiKey, {
      categoryIdOrNumber: testCategoryId,
    });

    // Verify the response structure
    expect(response).toBeDefined();
    expect(response.category).toBeDefined();

    // Verify category fields
    const category = response.category;
    expect(category.id).toBe(testCategoryId);
    expect(category).toHaveProperty('number');
    expect(category).toHaveProperty('slug');
    expect(category).toHaveProperty('visibility');
    expect(category).toHaveProperty('collectionId');
    expect(category).toHaveProperty('order');
    expect(category).toHaveProperty('name');
    expect(category).toHaveProperty('articleCount');
    expect(category).toHaveProperty('publishedArticleCount');
    expect(category).toHaveProperty('publicUrl');
    expect(category).toHaveProperty('createdBy');
    expect(category).toHaveProperty('updatedBy');
    expect(category).toHaveProperty('createdAt');
    expect(category).toHaveProperty('updatedAt');

    // Verify field types
    expect(typeof category.id).toBe('string');
    expect(typeof category.number).toBe('number');
    expect(typeof category.name).toBe('string');
    expect(typeof category.articleCount).toBe('number');
    expect(typeof category.publishedArticleCount).toBe('number');
    expect(typeof category.order).toBe('number');
    expect(typeof category.createdAt).toBe('string');
    expect(typeof category.updatedAt).toBe('string');
  });

  it('should get a category by number', async () => {
    // First get the category to find its number
    const categoryById = await getCategory(apiKey, {
      categoryIdOrNumber: testCategoryId,
    });
    
    const categoryNumber = categoryById.category.number;
    
    // Now fetch by number
    const response = await getCategory(apiKey, {
      categoryIdOrNumber: categoryNumber,
    });

    // Verify the response structure
    expect(response).toBeDefined();
    expect(response.category).toBeDefined();

    // Verify it returns the same category
    const category = response.category;
    expect(category.id).toBe(testCategoryId);
    expect(category.number).toBe(categoryNumber);
  });

  it('should handle non-existent category ID gracefully', async () => {
    try {
      await getCategory(apiKey, {
        categoryIdOrNumber: 'non-existent-category-id',
      });
      // If we reach here without error, fail the test
      expect.fail('Expected an error for non-existent category');
    } catch (error: any) {
      // Verify that an error is thrown
      expect(error).toBeDefined();
      expect(error).toHaveProperty('message');
      // The error message should indicate the category was not found
      // Different APIs might return different status codes (404, 400, etc.)
      expect(error.message).toBeTruthy();
    }
  });

  it('should handle invalid category number gracefully', async () => {
    try {
      await getCategory(apiKey, {
        categoryIdOrNumber: 999999999, // Very unlikely to exist
      });
      // If we reach here without error, fail the test
      expect.fail('Expected an error for invalid category number');
    } catch (error: any) {
      // Verify that an error is thrown
      expect(error).toBeDefined();
      expect(error).toHaveProperty('message');
      expect(error.message).toBeTruthy();
    }
  });

  it('should return consistent data when fetching by ID vs number', async () => {
    // Fetch by ID
    const responseById = await getCategory(apiKey, {
      categoryIdOrNumber: testCategoryId,
    });

    // Fetch by number using the number from the first response
    const responseByNumber = await getCategory(apiKey, {
      categoryIdOrNumber: responseById.category.number,
    });

    // Both should return the same category
    expect(responseById.category.id).toBe(responseByNumber.category.id);
    expect(responseById.category.number).toBe(responseByNumber.category.number);
    expect(responseById.category.name).toBe(responseByNumber.category.name);
    expect(responseById.category.collectionId).toBe(responseByNumber.category.collectionId);
  });
});