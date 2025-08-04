import { describe, it, expect, beforeAll } from 'vitest';
import { updateViewCount } from '../../../src/articles/update-view-count';
import * as dotenv from 'dotenv';

dotenv.config();

describe('updateViewCount Integration Test', () => {
  let apiKey: string;
  let testArticleId: string;

  beforeAll(() => {
    apiKey = process.env.HELPSCOUT_API_KEY || '';
    testArticleId = process.env.TEST_ARTICLE_ID || '';

    if (!apiKey) {
      throw new Error('HELPSCOUT_API_KEY environment variable is not set');
    }

    if (!testArticleId) {
      throw new Error('TEST_ARTICLE_ID environment variable is not set');
    }
  });

  it('should update view count', async () => {
    const response = await updateViewCount(apiKey, {
      articleId: testArticleId,
      count: 1,
    });

    expect(response).toBeNull();
  });
});
