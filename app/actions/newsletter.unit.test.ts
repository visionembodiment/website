import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { subscribeToNewsletter } from './newsletter';

describe('subscribeToNewsletter Server Action', () => {
  beforeEach(() => {
    vi.stubEnv('CONVERTKIT_API_KEY', 'test_api_key');
    vi.stubEnv('CONVERTKIT_FORM_ID', 'test_form_id');
    global.fetch = vi.fn();
  });

  afterEach(() => {
    vi.unstubAllEnvs();
    vi.resetAllMocks();
  });

  it('validates email format', async () => {
    // Arrange
    const invalidEmails = ['invalid', 'test@', '@example.com', 'test @example.com'];

    // Act & Assert
    for (const email of invalidEmails) {
      const result = await subscribeToNewsletter(email);
      expect(result.success).toBe(false);
      expect(result.error).toContain('Invalid email');
    }
  });

  it('calls ConvertKit API with correct data', async () => {
    // Arrange
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ subscription: { id: '123' } })
    });

    // Act
    const result = await subscribeToNewsletter('test@example.com');

    // Assert
    expect(global.fetch).toHaveBeenCalledWith(
      'https://api.kit.com/v3/forms/test_form_id/subscribe',
      expect.objectContaining({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          api_key: 'test_api_key',
          email: 'test@example.com'
        })
      })
    );
    expect(result.success).toBe(true);
  });

  it('handles API errors gracefully', async () => {
    // Arrange
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 400,
      json: async () => ({ error: 'Bad request' })
    });

    // Act
    const result = await subscribeToNewsletter('test@example.com');

    // Assert
    expect(result.success).toBe(false);
    expect(result.error).toBeTruthy();
  });

  it('handles network errors gracefully', async () => {
    // Arrange
    global.fetch = vi.fn().mockRejectedValue(new Error('Network error'));

    // Act
    const result = await subscribeToNewsletter('test@example.com');

    // Assert
    expect(result.success).toBe(false);
    expect(result.error).toContain('Failed to subscribe');
  });

  it('accepts valid email formats', async () => {
    // Arrange
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ subscription: { id: '123' } })
    });

    const validEmails = [
      'test@example.com',
      'user+tag@domain.co.uk',
      'first.last@example.com'
    ];

    // Act & Assert
    for (const email of validEmails) {
      const result = await subscribeToNewsletter(email);
      expect(result.success).toBe(true);
    }
  });

  it('returns error when environment variables are missing', async () => {
    // Arrange
    vi.unstubAllEnvs();

    // Act
    const result = await subscribeToNewsletter('test@example.com');

    // Assert
    expect(result.success).toBe(false);
    expect(result.error).toContain('Configuration error');
  });
});
