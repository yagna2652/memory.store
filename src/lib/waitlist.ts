/**
 * Submit email to waitlist via Next.js normalization layer
 * 
 * The client calls our API route which normalizes the email and forwards
 * it to Attio's webhook. This keeps the Attio webhook URL private and
 * ensures consistent payload formatting.
 */
export async function submitToWaitlist(email: string, source: 'hero' | 'cta' = 'hero') {
  try {
    // Create FormData to match standard form submission
    const formData = new FormData();
    formData.append('email', email);

    const response = await fetch('/api/waitlist', {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();

    if (response.ok && result.success) {
      return { success: true, message: result.message };
    } else {
      return { success: false, message: result.message || 'Something went wrong. Please try again.' };
    }
  } catch (error) {
    return { success: false, message: 'Network error. Please try again.' };
  }
}
