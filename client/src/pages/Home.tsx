import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { useLocale } from '@/lib/locale-context';
import { ArrowRight, Ticket } from 'lucide-react';

import _3589C4F6_AF3E_450C_BEBC_2083A8964326_1_201_a from "@assets/3589C4F6-AF3E-450C-BEBC-2083A8964326_1_201_a.jpeg";

import EB1D7DA6_B44D_4390_80BD_8EC81420E53F_1_201_a from "@assets/EB1D7DA6-B44D-4390-80BD-8EC81420E53F_1_201_a.jpeg";

import entertainment from "@assets/entertainment.jpg";

const IMAGES = {
  nabaTheatre: 'https://images.squarespace-cdn.com/content/v1/690c0b0878c83b5be15a45c7/3a21c430-de2d-4389-afb4-a56c972a863f/NABA+Theatre+2.jpg',
  donGiovanniPoster: 'https://images.squarespace-cdn.com/content/v1/690c0b0878c83b5be15a45c7/10a5277d-a04d-46a7-9eb7-99f7bf83454d/2%2BDON%2BGIOVANNI%2Bposter%2BL%2Bmaster.%2B_b%2Bpsd.jpg?format=2500w',
  donGiovanniTitle: 'https://images.squarespace-cdn.com/content/v1/690c0b0878c83b5be15a45c7/0dbc9424-a4d4-47af-ab7f-6222b738e363/Title+CMYK.png',
  carbonFootprint: 'https://images.squarespace-cdn.com/content/v1/690c0b0878c83b5be15a45c7/f1081f3a-d1ce-4dcf-808c-6933160af528/DON+GIOVANNI+Carbon+foot+print+v4.png',
  partnerAllDreams: 'https://images.squarespace-cdn.com/content/v1/690c0b0878c83b5be15a45c7/133fc760-0f4e-49e7-9115-f309dd0832c0/Untitled+design+%288%29.png',
  partnerNA: 'https://images.squarespace-cdn.com/content/v1/690c0b0878c83b5be15a45c7/a23507a4-6929-46d1-a35f-252268cade0f/Untitled+design+%2817%29.png',
  partnerThird: 'https://images.squarespace-cdn.com/content/v1/690c0b0878c83b5be15a45c7/86bbd910-6d72-4497-842c-fd8193f7d392/Untitled+design+%285%29.png',
  partnerNagaworld: 'https://images.squarespace-cdn.com/content/v1/690c0b0878c83b5be15a45c7/f10476d3-b742-4390-9015-39d129b1e65b/NagaWorld+Logo_Emboss1.png',
};

export default function Home() {
  const { locale, t } = useLocale();

  return (
    <div className="bg-background">
      <section
        className="relative min-h-[85vh] flex items-center justify-center"
        data-testid="section-hero"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${IMAGES.nabaTheatre}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <p className="tracking-[0.5em] text-[10px] md:text-xs uppercase mb-8 font-medium text-foreground/80">
            {locale === 'en' ? "Cambodia's Premier Cultural Experience" : 'បទពិសោធន៍វប្បធម៌ល្បីរបស់កម្ពុជា'}
          </p>
          <h1 
            className="font-display uppercase tracking-[0.25em] text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground mb-8"
            style={{ lineHeight: '1.1' }}
          >
            {locale === 'en' ? 'Phnom Penh Opera' : 'អូប៉េរ៉ាភ្នំពេញ'}
          </h1>
          <div className="w-16 h-px bg-primary/60 mx-auto mb-8" />
          <p className="font-serif italic text-lg md:text-xl lg:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed mb-8">
            {t.home.heroQuote}
          </p>
          <a 
            href="https://ppoi-front.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button size="lg" data-testid="button-book-now">
              <Ticket className="mr-2 h-5 w-5" />
              {locale === 'en' ? 'Book Now' : 'កក់ឥឡូវនេះ'}
            </Button>
          </a>
        </div>
      </section>
      <section
        className="relative bg-background py-16 md:py-24"
        data-testid="section-don-giovanni"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <p className="text-primary/80 tracking-[0.3em] text-xs uppercase mb-4">
              {locale === 'en' ? 'December 2025 • A Historic Night' : 'ធ្នូ ២០២៥ • យប់ប្រវត្តិសាស្ត្រ'}
            </p>
            <img 
              src={IMAGES.donGiovanniTitle} 
              alt="Don Giovanni"
              className="max-w-xs md:max-w-md mx-auto mb-6"
            />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {locale === 'en' 
                ? "Mozart's timeless masterpiece came to life at the NABA Theatre — a historic moment for Cambodian arts and culture."
                : "សិល្បកម្មដ៏អស្ចារ្យរបស់ Mozart បានបង្ហាញនៅមហោស្រព NABA — គ្រារ៍ប្រវត្តិសាស្ត្រសម្រាប់សិល្បៈកម្ពុជា។"}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 mb-10">
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img 
                src={EB1D7DA6_B44D_4390_80BD_8EC81420E53F_1_201_a} 
                alt="Don Giovanni Performance"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img 
                src={entertainment} 
                alt="NABA Theatre"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/5] rounded-lg overflow-hidden bg-primary/20 flex items-center justify-center">
              <div className="text-center p-6">
                <p className="font-serif italic text-2xl md:text-3xl text-foreground leading-relaxed">
                  {locale === 'en' 
                    ? '"A triumph for Cambodian arts and culture"'
                    : '"ជ័យជម្នះសម្រាប់សិល្បៈនិងវប្បធម៌កម្ពុជា"'}
                </p>
                <p className="text-primary text-sm uppercase tracking-wider mt-4">
                  {locale === 'en' ? '— Cambodia Investment Review' : '— Cambodia Investment Review'}
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link href={`/${locale}/the-festival/don-giovanni`}>
              <Button variant="outline" size="lg" data-testid="button-view-gallery">
                {locale === 'en' ? 'Relive the Night' : 'រំលឹកយប់ដ៏អស្ចារ្យ'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section
        className="relative py-16 md:py-24"
        style={{ backgroundColor: 'hsl(160, 35%, 10%)' }}
        data-testid="section-sustainability"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h3 className="font-serif text-4xl md:text-5xl text-white mb-6">
                A World First...
              </h3>
              <img 
                src={IMAGES.carbonFootprint} 
                alt="Carbon Footprint Initiative"
                className="max-w-[200px] md:max-w-[280px] mx-auto lg:mx-0"
              />
            </div>
            
            <div className="text-center lg:text-right">
              <p className="font-serif italic text-xl md:text-2xl text-white/90 leading-relaxed mb-6">
                {locale === 'en' 
                  ? "Phnom Penh International Opera Festival is creating Southeast Asia's first eco-friendly opera platform by cutting emissions, using renewable energy, and leading green performances."
                  : "មហោស្រពអូប៉េរ៉ាអន្តរជាតិភ្នំពេញកំពុងបង្កើតវេទិកាអូប៉េរ៉ាដែលមិនប៉ះពាល់បរិស្ថានដំបូងគេនៅអាស៊ីអាគ្នេយ៍។"}
              </p>
              <Link href={`/${locale}/sustainability`}>
                <span className="inline-block text-white/70 hover:text-white transition-colors cursor-pointer underline underline-offset-4">
                  {locale === 'en' ? 'Click to Learn More' : 'ចុចដើម្បីស្វែងយល់បន្ថែម'}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section
        className="relative py-24 md:py-32 overflow-hidden"
        style={{ backgroundColor: 'hsl(0, 47%, 82%)' }}
        data-testid="section-partners"
      >
        <div 
          className="absolute inset-x-0 top-0 h-40 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, hsl(344, 44%, 12%), transparent)' }}
        />
        <div 
          className="absolute inset-x-0 bottom-0 h-40 pointer-events-none"
          style={{ background: 'linear-gradient(to top, hsl(344, 44%, 12%), transparent)' }}
        />
        <div className="relative max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="font-serif italic text-3xl md:text-4xl text-center mb-16 text-primary-foreground">
            {locale === 'en' ? 'Our Partners' : 'ដៃគូរបស់យើង'}
          </h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 items-center justify-items-center">
            <img 
              src={IMAGES.partnerAllDreams} 
              alt="All Dreams Cambodia"
              className="max-h-32 w-auto opacity-90 hover:opacity-100 transition-opacity"
            />
            <img 
              src={IMAGES.partnerNA} 
              alt="N&A Cambodia"
              className="max-h-32 w-auto opacity-90 hover:opacity-100 transition-opacity"
            />
            <img 
              src={IMAGES.partnerThird} 
              alt="Partner"
              className="max-h-32 w-auto opacity-90 hover:opacity-100 transition-opacity"
            />
            <img 
              src={IMAGES.partnerNagaworld} 
              alt="NagaWorld"
              className="max-h-32 w-auto opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </section>
      <section
        className="py-16 md:py-20 bg-background border-t border-border"
        data-testid="section-cta"
      >
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h3 className="font-serif italic text-3xl md:text-4xl text-foreground mb-4">
            {t.home.nextUpdatesTitle}
          </h3>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            {t.home.nextUpdatesText}
          </p>
          <Link href={`/${locale}/contact`}>
            <Button size="lg" data-testid="button-contact">
              {t.nav.contact}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
