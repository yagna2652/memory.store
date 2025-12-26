/**
 * WaitlistForm Component
 *
 * Email capture form for the product waitlist. Handles the complete flow:
 * 1. User enters email
 * 2. Form submits to /api/waitlist (server-side validation)
 * 3. Server normalizes email and forwards to Attio CRM webhook
 * 4. Success message displayed on completion
 *
 * States:
 * - idle: Ready for input
 * - submitting: Request in progress (button disabled)
 * - success: Email captured, shows confirmation message
 * - error: Something failed, shows retry message
 *
 * @see src/app/api/waitlist/route.ts - Server endpoint that processes submissions
 */

'use client';

import { FormEvent, useState } from 'react';
import { useConfetti } from '@/hooks/useConfetti';

interface WaitlistFormProps {
  /** Tracking source for analytics (reserved for future use) */
  source: 'hero' | 'cta';
  /** HTML id attribute - used by Header to scroll to nearest form */
  id: string;
  /** Container classes for layout (typically flex row/column) */
  className?: string;
}
export function WaitlistForm({ source: _source, id, className }: WaitlistFormProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const { fireSideCannons } = useConfetti();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setStatus('success');
        fireSideCannons(); // Trigger confetti celebration
        form.reset();
        // Success state persists for the session - no reset
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="mx-auto max-w-xl text-center">
        <p className="text-lg tracking-[-0.04em] text-gray-600">
          your invite is being brewed
        </p>
      </div>
    );
  }

  return (
    <form id={id} onSubmit={handleSubmit} className={className}>
      <input
        type="email"
        name="email"
        placeholder="you@example.com"
        required
        disabled={status === 'submitting'}
        className="flex-1 rounded-lg border-2 border-gray-300 bg-white px-4 py-3 text-base focus:border-black focus:outline-none focus:ring-2 focus:ring-black/20 disabled:opacity-50"
      />
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="h-12 whitespace-nowrap rounded-lg bg-black px-6 text-base font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {status === 'submitting' ? 'Joining...' : 'Join Waitlist'}
      </button>
      {status === 'error' && (
        <p className="col-span-full text-center text-sm text-red-600">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
