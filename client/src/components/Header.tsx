import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import { SiInstagram, SiFacebook, SiTiktok } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { useLocale } from '@/lib/locale-context';
import type { Locale } from '@/lib/translations';
import logoImage from '@assets/3png-01_1768245388312.png';

export function Header() {
  const { locale, t, switchLocale } = useLocale();
  const [location, navigate] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLocaleSwitch = () => {
    const newLocale: Locale = locale === 'en' ? 'km' : 'en';
    const currentPath = location.replace(`/${locale}`, '');
    switchLocale(newLocale);
    navigate(`/${newLocale}${currentPath || ''}`);
  };

  const leftNavItems = [
    { href: `/${locale}`, label: t.nav.home },
    { href: `/${locale}/the-festival`, label: t.nav.theFestival },
    { href: `/${locale}/naba-theatre`, label: t.nav.nabaTheatre },
  ];
  
  const rightNavItems = [
    { href: `/${locale}/sustainability`, label: t.nav.sustainability },
    { href: `/${locale}/contact`, label: t.nav.contact },
  ];
  
  const navItems = [...leftNavItems, ...rightNavItems];

  const isActive = (href: string) => {
    if (href === `/${locale}`) {
      return location === `/${locale}` || location === `/${locale}/`;
    }
    return location.startsWith(href);
  };

  return (
    <header
      className="sticky top-0 z-50 bg-background border-b border-border"
      data-testid="header"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] items-center py-3">
          <div className="flex items-center gap-8 justify-start">
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/50 hover:text-foreground transition-colors"
                data-testid="link-instagram"
              >
                <SiInstagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/50 hover:text-foreground transition-colors"
                data-testid="link-facebook"
              >
                <SiFacebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/50 hover:text-foreground transition-colors"
                data-testid="link-tiktok"
              >
                <SiTiktok className="h-4 w-4" />
              </a>
            </div>

            <nav className="flex items-center gap-8" data-testid="nav-left">
              {leftNavItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <span
                    className={`text-sm tracking-wide uppercase transition-colors ${
                      isActive(item.href)
                        ? 'text-primary'
                        : 'text-foreground/70 hover:text-foreground'
                    }`}
                    data-testid={`nav-${item.label.toLowerCase().replace(/\s/g, '-')}`}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          <Link href={`/${locale}`} className="flex-shrink-0 px-8" data-testid="link-home">
            <img 
              src={logoImage} 
              alt="Phnom Penh International Opera Festival" 
              className="h-16 w-auto"
              loading="eager"
            />
          </Link>

          <div className="flex items-center gap-8 justify-end">
            <nav className="flex items-center gap-8" data-testid="nav-right">
              {rightNavItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <span
                    className={`text-sm tracking-wide uppercase transition-colors ${
                      isActive(item.href)
                        ? 'text-primary'
                        : 'text-foreground/70 hover:text-foreground'
                    }`}
                    data-testid={`nav-${item.label.toLowerCase().replace(/\s/g, '-')}`}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
            </nav>

            <button
              onClick={handleLocaleSwitch}
              className="text-lg hover:opacity-80 transition-opacity"
              data-testid="button-locale-toggle"
              title={locale === 'en' ? 'Switch to Khmer' : 'Switch to English'}
            >
              {locale === 'en' ? '🇬🇧' : '🇰🇭'}
            </button>
          </div>
        </div>

        <div className="flex lg:hidden items-center justify-between py-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>

          <Link href={`/${locale}`} data-testid="link-home-mobile">
            <img 
              src={logoImage} 
              alt="Phnom Penh International Opera Festival" 
              className="h-12 w-auto"
              loading="eager"
            />
          </Link>

          <div className="flex items-center gap-3">
            <button
              onClick={handleLocaleSwitch}
              className="text-lg hover:opacity-80 transition-opacity"
              data-testid="button-locale-toggle-mobile"
              title={locale === 'en' ? 'Switch to Khmer' : 'Switch to English'}
            >
              {locale === 'en' ? '🇬🇧' : '🇰🇭'}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border" data-testid="nav-mobile">
          <nav className="flex flex-col p-4 gap-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <span
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                    isActive(item.href)
                      ? 'bg-muted text-primary'
                      : 'text-foreground hover:bg-muted'
                  }`}
                  data-testid={`nav-mobile-${item.label.toLowerCase().replace(/\s/g, '-')}`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
            <div className="flex items-center gap-4 px-4 py-3 border-t border-border mt-2 pt-4">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
                <SiInstagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
                <SiFacebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
                <SiTiktok className="h-6 w-6" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
