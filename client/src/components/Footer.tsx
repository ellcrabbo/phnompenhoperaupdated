import { Link } from 'wouter';
import { SiInstagram, SiFacebook, SiTiktok } from 'react-icons/si';
import { useLocale } from '@/lib/locale-context';
import logoImage from '@assets/3png-01_1768245388312.png';

export function Footer() {
  const { locale, t } = useLocale();

  return (
    <footer className="bg-card border-t border-border" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="flex flex-col items-center text-center">
          <img 
            src={logoImage} 
            alt="Phnom Penh International Opera Festival" 
            className="h-32 md:h-40 w-auto mb-8 opacity-80"
          />
          
          <nav className="flex flex-wrap justify-center gap-6 md:gap-8 mb-8">
            <Link href={`/${locale}`}>
              <span className="text-foreground/70 hover:text-primary transition-colors text-sm uppercase tracking-wider" data-testid="footer-link-home">
                {t.nav.home}
              </span>
            </Link>
            <Link href={`/${locale}/the-festival`}>
              <span className="text-foreground/70 hover:text-primary transition-colors text-sm uppercase tracking-wider" data-testid="footer-link-festival">
                {t.nav.theFestival}
              </span>
            </Link>
            <Link href={`/${locale}/naba-theatre`}>
              <span className="text-foreground/70 hover:text-primary transition-colors text-sm uppercase tracking-wider" data-testid="footer-link-naba-theatre">
                {t.nav.nabaTheatre}
              </span>
            </Link>
            <Link href={`/${locale}/sustainability`}>
              <span className="text-foreground/70 hover:text-primary transition-colors text-sm uppercase tracking-wider" data-testid="footer-link-sustainability">
                {t.nav.sustainability}
              </span>
            </Link>
            <Link href={`/${locale}/contact`}>
              <span className="text-foreground/70 hover:text-primary transition-colors text-sm uppercase tracking-wider" data-testid="footer-link-contact">
                {t.nav.contact}
              </span>
            </Link>
          </nav>

          <div className="flex items-center gap-6 mb-8">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/50 hover:text-primary transition-colors"
              data-testid="footer-link-instagram"
            >
              <SiInstagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/50 hover:text-primary transition-colors"
              data-testid="footer-link-facebook"
            >
              <SiFacebook className="h-5 w-5" />
            </a>
            <a
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/50 hover:text-primary transition-colors"
              data-testid="footer-link-tiktok"
            >
              <SiTiktok className="h-5 w-5" />
            </a>
          </div>

          <div className="w-16 h-px bg-border mb-6" />

          <div className="flex flex-col sm:flex-row items-center gap-4 text-muted-foreground text-xs">
            <p data-testid="footer-copyright">
              {t.footer.copyright}
            </p>
            <span className="hidden sm:inline">|</span>
            <Link href={`/${locale}/terms-of-service`}>
              <span className="hover:text-primary transition-colors" data-testid="footer-link-terms">
                {t.footer.terms}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
