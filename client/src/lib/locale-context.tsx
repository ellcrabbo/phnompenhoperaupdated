import { createContext, useContext, type ReactNode } from 'react';
import { type Locale, getTranslation } from './translations';

interface LocaleContextType {
  locale: Locale;
  t: ReturnType<typeof getTranslation>;
  switchLocale: (newLocale: Locale) => void;
}

const LocaleContext = createContext<LocaleContextType | null>(null);

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
}

interface LocaleProviderProps {
  children: ReactNode;
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
}

export function LocaleProvider({ children, locale, onLocaleChange }: LocaleProviderProps) {
  const t = getTranslation(locale);

  const switchLocale = (newLocale: Locale) => {
    onLocaleChange(newLocale);
  };

  return (
    <LocaleContext.Provider value={{ locale, t, switchLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}
