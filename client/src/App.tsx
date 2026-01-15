import { useState, useEffect } from 'react';
import { Switch, Route, useLocation, Redirect } from 'wouter';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { queryClient } from './lib/queryClient';
import { QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { LocaleProvider } from '@/lib/locale-context';
import { Layout } from '@/components/Layout';
import type { Locale } from '@/lib/translations';

import Home from '@/pages/Home';
import DonGiovanni from '@/pages/DonGiovanni';
import NabaTheatre from '@/pages/NabaTheatre';
import Festival from '@/pages/Festival';
import Sustainability from '@/pages/Sustainability';
import Cast from '@/pages/Cast';
import Sponsors from '@/pages/Sponsors';
import Contact from '@/pages/Contact';
import Terms from '@/pages/Terms';
import NotFound from '@/pages/not-found';

function LocaleRouter({ locale }: { locale: Locale }) {
  return (
    <Switch>
      <Route path={`/${locale}`} component={Home} />
      <Route path={`/${locale}/the-festival`} component={Festival} />
      <Route path={`/${locale}/the-festival/don-giovanni`} component={DonGiovanni} />
      <Route path={`/${locale}/naba-theatre`} component={NabaTheatre} />
      <Route path={`/${locale}/sustainability`} component={Sustainability} />
      <Route path={`/${locale}/cast`} component={Cast} />
      <Route path={`/${locale}/sponsors`} component={Sponsors} />
      <Route path={`/${locale}/contact`} component={Contact} />
      <Route path={`/${locale}/terms-of-service`} component={Terms} />
      <Route component={NotFound} />
    </Switch>
  );
}

function Router() {
  const [location] = useLocation();
  const [locale, setLocale] = useState<Locale>('en');

  useEffect(() => {
    const pathLocale = location.split('/')[1] as Locale;
    if (pathLocale === 'en' || pathLocale === 'km') {
      setLocale(pathLocale);
    }
  }, [location]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  if (location === '/') {
    return <Redirect to="/en" />;
  }

  const pathLocale = location.split('/')[1];
  if (pathLocale !== 'en' && pathLocale !== 'km') {
    return <Redirect to="/en" />;
  }

  return (
    <LocaleProvider locale={locale} onLocaleChange={setLocale}>
      <Layout>
        <LocaleRouter locale={locale} />
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
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
