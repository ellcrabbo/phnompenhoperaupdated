import { useState, useEffect, Suspense, lazy } from 'react';
import { Switch, Route, useLocation, Redirect } from 'wouter';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import { queryClient } from './lib/queryClient';
import { QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { LocaleProvider } from '@/lib/locale-context';
import { Layout } from '@/components/Layout';
import type { Locale } from '@/lib/translations';

const Home = lazy(() => import('@/pages/Home'));
const DonGiovanni = lazy(() => import('@/pages/DonGiovanni'));
const NabaTheatre = lazy(() => import('@/pages/NabaTheatre'));
const Festival = lazy(() => import('@/pages/Festival'));
const Sustainability = lazy(() => import('@/pages/Sustainability'));
const Cast = lazy(() => import('@/pages/Cast'));
const Sponsors = lazy(() => import('@/pages/Sponsors'));
const Contact = lazy(() => import('@/pages/Contact'));
const Terms = lazy(() => import('@/pages/Terms'));
const NotFound = lazy(() => import('@/pages/not-found'));
const Waitlist = lazy(() => import('@/pages/Waitlist'));

const VALID_LOCALES: Locale[] = ['en', 'km'];

function isValidLocale(value: string): value is Locale {
  return VALID_LOCALES.includes(value as Locale);
}

function LocaleRouter({ locale }: { locale: Locale }) {
  return (
    <Suspense
      fallback={
        <div className="min-h-[40vh] flex items-center justify-center text-muted-foreground">
          Loading...
        </div>
      }
    >
      <Switch>
        <Route path={`/${locale}`} component={Home} />
        <Route path={`/${locale}/the-festival`} component={Festival} />
        <Route path={`/${locale}/the-festival/don-giovanni`} component={DonGiovanni} />
        <Route path={`/${locale}/naba-theatre`} component={NabaTheatre} />
        <Route path={`/${locale}/sustainability`} component={Sustainability} />
        <Route path={`/${locale}/cast`} component={Cast} />
        <Route path={`/${locale}/sponsors`} component={Sponsors} />
        <Route path={`/${locale}/contact`} component={Contact} />
        <Route path={`/${locale}/waitlist`} component={Waitlist} />
        <Route path={`/${locale}/terms-of-service`} component={Terms} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function Router() {
  const [location] = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const pathLocale = location.split('/')[1];
  const isValidPath = isValidLocale(pathLocale);

  if (location === '/' || !isValidPath) {
    return <Redirect to="/en" />;
  }

  return (
    <LocaleProvider locale={pathLocale} onLocaleChange={(newLocale) => {
      // Navigation handled by Link components, locale follows URL
    }}>
      <Layout>
        <LocaleRouter locale={pathLocale} />
      </Layout>
    </LocaleProvider>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        <SpeedInsights />
        <Analytics />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
