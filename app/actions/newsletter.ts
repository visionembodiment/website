'use server';

type SubscriptionResult = {
  success: boolean;
  error?: string;
};

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export async function subscribeToNewsletter(email: string): Promise<SubscriptionResult> {
  if (!email || !isValidEmail(email)) {
    return { success: false, error: 'Invalid email address' };
  }

  const apiKey = process.env.CONVERTKIT_API_KEY;
  const formId = process.env.CONVERTKIT_FORM_ID;

  if (!apiKey || !formId) {
    console.error('ConvertKit configuration missing');
    return { success: false, error: 'Configuration error. Please contact support.' };
  }

  try {
    const response = await fetch(
      `https://api.kit.com/v3/forms/${formId}/subscribe`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          api_key: apiKey,
          email
        })
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('ConvertKit API error:', response.status, errorData);
      return {
        success: false,
        error: 'Failed to subscribe. Please try again later.'
      };
    }

    return { success: true };
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return {
      success: false,
      error: 'Failed to subscribe. Please check your connection and try again.'
    };
  }
}
