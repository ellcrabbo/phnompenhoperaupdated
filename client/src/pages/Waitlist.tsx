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
    <div className="container py-16">
      <h1 className="text-4xl font-bold mb-8">
        {locale === 'en' ? 'Join the Waitlist' : 'ចូលរួមបញ្ជីរង់ចាំ'}
      </h1>

      {submitted ? (
        <p className="text-green-600">
          {locale === 'en' ? 'Thank you for signing up!' : 'សូមស្វាگមន៍!'}
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-md">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="w-full px-4 py-2 border rounded mb-4"
          />
          <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded">
            {locale === 'en' ? 'Sign Up' : 'ចុះឈ្មោះ'}
          </button>
          {error && <p className="text-red-600 mt-2">{error}</p>}
        </form>
      )}
    </div>
  );
}