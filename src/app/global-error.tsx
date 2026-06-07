'use client';

import { BaseLayout } from '@/components/layout/BaseLayout';

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html>
      <body>
        <BaseLayout>
          <section className="py-20 text-center">
            <h1 className="text-4xl font-bold text-primary mb-4">Something went wrong</h1>
            <button
              onClick={reset}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90"
            >
              Try again
            </button>
          </section>
        </BaseLayout>
      </body>
    </html>
  );
}
