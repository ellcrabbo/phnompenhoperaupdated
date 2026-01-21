import { useState } from 'react';
import { useLocale } from '@/lib/locale-context';

export default function Waitlist() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const { locale } = useLocale();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        setError('Invalid email or already registered');
        return;
      }

      setSubmitted(true);
      setEmail('');
    } catch (err) {
      setError('Something went wrong');
    }
  };

   return (
    <div className="mx-auto w-full max-w-3xl px-6 py-16 md:py-24">
      <div className="rounded-2xl border border-white/10 bg-black/20 p-6 md:p-10 text-center">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          {locale === 'en' ? 'Join the Waitlist' : 'ចុះឈ្មោះរង់ចាំសំបុត្រ'}
        </h1>

        <p className="mt-3 max-w-prose text-sm text-white/80 md:text-base">
          {locale === 'en'
            ? 'Leave your email and we’ll notify you as soon as tickets are available.'
            : 'ទុកអ៊ីមែល ហើយយើងនឹងជូនដំណឹងពេលសំបុត្រចេញលក់។'}
        </p>

        {submitted ? (
          <div className="mt-6 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-100">
            {locale === 'en'
              ? 'You’re on the list. We’ll email you when tickets are live.'
              : 'បានចុះឈ្មោះរួចរាល់។ យើងនឹងផ្ញើអ៊ីមែលពេលសំបុត្រចេញលក់។'}
          </div>
        ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center"
            >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="w-full flex-1 rounded-md border border-white/15 bg-black/30 px-4 py-3 text-white placeholder:text-white/50 outline-none focus:border-white/30"
            />
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-black transition disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {locale === 'en' ? 'Join the Waitlist' : 'ចុះឈ្មោះរង់ចាំសំបុត្រ'}
            </button>
          </form>
        )}

        {error ? (
          <div className="mt-4 rounded-md border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-100">
            {error}
          </div>
        ) : null}

        <p className="mt-6 text-xs text-white/60">
          {locale === 'en'
            ? 'We’ll only email you about ticket availability. Unsubscribe anytime.'
            : 'យើងនឹងផ្ញើអ៊ីមែលតែអំពីការចេញលក់សំបុត្រប៉ុណ្ណោះ។ អាចឈប់ទទួលបានគ្រប់ពេល។'}
        </p>
      </div>
    </div>
  );
}