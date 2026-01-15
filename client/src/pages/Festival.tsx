import { Link } from 'wouter';
import { ArrowRight, Music, Users, Leaf, Sparkles, Ticket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocale } from '@/lib/locale-context';
import backstageImage from '@assets/IMG_8590.jpg';

const IMAGES = {
  nabaTheatre: 'https://images.squarespace-cdn.com/content/v1/690c0b0878c83b5be15a45c7/3a21c430-de2d-4389-afb4-a56c972a863f/NABA+Theatre+2.jpg',
  donGiovanniPoster: 'https://images.squarespace-cdn.com/content/v1/690c0b0878c83b5be15a45c7/10a5277d-a04d-46a7-9eb7-99f7bf83454d/2%2BDON%2BGIOVANNI%2Bposter%2BL%2Bmaster.%2B_b%2Bpsd.jpg',
  donGiovanniTitle: 'https://images.squarespace-cdn.com/content/v1/690c0b0878c83b5be15a45c7/0dbc9424-a4d4-47af-ab7f-6222b738e363/Title+CMYK.png',
  theaterSeats: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=1920&q=80',
  orchestra: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=1920&q=80',
  backstage: backstageImage,
};

function GoldDivider() {
  return (
    <div className="flex items-center justify-center gap-3 my-8">
      <div className="h-px w-12 bg-gold/40" />
      <div className="h-1.5 w-1.5 rounded-full bg-gold/60" />
      <div className="h-px w-12 bg-gold/40" />
    </div>
  );
}

export default function Festival() {
  const { locale } = useLocale();

  return (
    <div>
      <section
        className="relative min-h-[85vh] flex items-center justify-center"
        data-testid="section-hero"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${IMAGES.nabaTheatre}')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <p className="text-foreground/90 tracking-[0.5em] text-[10px] md:text-xs uppercase mb-8 font-medium">
            {locale === 'en' ? 'Cambodia\'s Premier Cultural Experience' : 'បទពិសោធន៍វប្បធម៌ដ៏ល្អបំផុតរបស់កម្ពុជា'}
          </p>
          <h1 
            className="font-display uppercase tracking-[0.25em] text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground mb-8"
            data-testid="text-festival-title"
          >
            {locale === 'en' ? 'The Festival' : 'មហោស្រព'}
          </h1>
          <div className="w-16 h-px bg-primary/60 mx-auto mb-8" />
          <p className="font-serif italic text-lg md:text-xl lg:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed mb-8">
            {locale === 'en'
              ? 'Where world-class opera meets the heart of Southeast Asia'
              : 'កន្លែងដែលអូប៉េរ៉ាកម្រិតពិភពលោកជួបបេះដូងអាស៊ីអាគ្នេយ៍'}
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

      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <div className="w-px h-16 bg-primary/40 mx-auto mb-10" />
          <p className="font-serif italic text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed mb-6">
            {locale === 'en'
              ? '"We are dedicated to enriching Cambodia\'s cultural landscape by bringing world-class performances and enthralling experiences to audiences across the country."'
              : '"យើងប្តេជ្ញាបង្កើនទេសភាពវប្បធម៌កម្ពុជា ដោយនាំមកនូវការសម្តែងកម្រិតពិភពលោក និងបទពិសោធន៍ដ៏គួរឱ្យចាប់អារម្មណ៍ដល់ទស្សនិកជនទូទាំងប្រទេស។"'}
          </p>
          <p className="text-primary/80 tracking-[0.3em] text-xs uppercase font-medium">
            — Phnom Penh International Opera Festival
          </p>
          <GoldDivider />
        </div>
      </section>

      <section className="py-14 md:py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-gold tracking-[0.3em] text-[10px] uppercase mb-6 font-medium">
                {locale === 'en' ? 'Our Story' : 'រឿងរ៉ាវរបស់យើង'}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-8 leading-tight">
                {locale === 'en' ? 'Bridging Cultures Through the Universal Language of Opera' : 'ភ្ជាប់វប្បធម៌តាមរយៈភាសាសកលនៃអូប៉េរ៉ា'}
              </h2>
              <div className="space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed">
                <p>
                  {locale === 'en'
                    ? 'Phnom Penh Opera is Cambodia\'s premier international opera festival, bringing world-class performances to the heart of Southeast Asia. Founded with the vision of making opera accessible to new audiences, we celebrate the universal language of music and storytelling.'
                    : 'អូប៉េរ៉ាភ្នំពេញគឺជាមហោស្រពអូប៉េរ៉ាអន្តរជាតិដ៏ល្បីល្បាញរបស់កម្ពុជា ដែលនាំមកនូវការសម្តែងកម្រិតពិភពលោកមកកាន់បេះដូងអាស៊ីអាគ្នេយ៍។'}
                </p>
                <p>
                  {locale === 'en'
                    ? 'At the magnificent NABA Theatre, every production is crafted to deliver an unforgettable experience that honors both classical traditions and Cambodia\'s rich cultural heritage.'
                    : 'នៅមហោស្រព NABA ដ៏អស្ចារ្យ រាល់ការផលិតត្រូវបានរៀបចំដើម្បីផ្តល់បទពិសោធន៍ដែលមិនអាចបំភ្លេចបាន។'}
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div
                  className="aspect-[4/5] rounded-lg bg-cover bg-center"
                  style={{ backgroundImage: `url('${IMAGES.backstage}')` }}
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-background via-background/40 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <p className="text-gold tracking-[0.3em] text-[10px] uppercase mb-4 font-medium">
              {locale === 'en' ? 'What We Stand For' : 'អ្វីដែលយើងតំណាង'}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              {locale === 'en' ? 'Our Pillars' : 'គោលការណ៍របស់យើង'}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Music className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl md:text-2xl text-foreground mb-4">
                {locale === 'en' ? 'Artistic Excellence' : 'ភាពល្អឥតខ្ចោះសិល្បៈ'}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {locale === 'en'
                  ? 'Presenting world-class productions with internationally acclaimed artists and meticulous attention to every detail.'
                  : 'បង្ហាញការផលិតកម្រិតពិភពលោកជាមួយសិល្បករល្បីលើសកលលោក និងការយកចិត្តទុកដាក់ជាពិសេសទៅលើរាល់ព័ត៌មានលម្អិត។'}
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Users className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl md:text-2xl text-foreground mb-4">
                {locale === 'en' ? 'Cultural Education' : 'ការអប់រំវប្បធម៌'}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {locale === 'en'
                  ? 'Opening our rehearsals to students and schools, nurturing appreciation for opera among Cambodia\'s next generation.'
                  : 'បើកការហាត់សមរបស់យើងដល់សិស្សនិងសាលារៀន បណ្តុះការពេញចិត្តអូប៉េរ៉ាក្នុងចំណោមជំនាន់ក្រោយរបស់កម្ពុជា។'}
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Leaf className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl md:text-2xl text-foreground mb-4">
                {locale === 'en' ? 'Sustainability' : 'និរន្តរភាព'}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {locale === 'en'
                  ? 'Creating Southeast Asia\'s first eco-friendly opera platform, leading the way in sustainable performing arts.'
                  : 'បង្កើតវេទិកាអូប៉េរ៉ាដែលមានមិត្តភាពបរិស្ថានដំបូងគេរបស់អាស៊ីអាគ្នេយ៍។'}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative py-16 md:py-24"
        data-testid="section-don-giovanni"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${IMAGES.donGiovanniPoster}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
          <div className="max-w-2xl ml-auto text-right">
            <p className="text-gold tracking-[0.3em] text-[10px] uppercase mb-6 font-medium">
              {locale === 'en' ? 'December 2025 • Inaugural Production' : 'ធ្នូ ២០២៥ • ការផលិតដំបូង'}
            </p>
            
            <img 
              src={IMAGES.donGiovanniTitle} 
              alt="Don Giovanni"
              className="max-w-[280px] md:max-w-[340px] mb-6 ml-auto"
            />

            <div className="flex items-center gap-3 mb-6 justify-end">
              <div className="h-px w-8 bg-gold/50" />
              <div className="h-1 w-1 rounded-full bg-gold/70" />
              <div className="h-px w-8 bg-gold/50" />
            </div>
            
            <p className="font-serif italic text-lg md:text-xl text-foreground/90 mb-8 leading-relaxed">
              {locale === 'en'
                ? "Mozart's timeless masterpiece launched our festival in spectacular fashion. Two magnificent performances at the NABA Theatre marked a historic moment for Cambodian arts and culture."
                : "ស្នាដៃដ៏អស្ចារ្យរបស់ Mozart បានចាប់ផ្តើមមហោស្រពរបស់យើងយ៉ាងអស្ចារ្យ។ ការសម្តែងពីរនៅមហោស្រព NABA បានសម្គាល់គ្រាប្រវត្តិសាស្ត្រសម្រាប់សិល្បៈកម្ពុជា។"}
            </p>
            
            <div className="mb-10 max-w-sm ml-auto p-5 bg-card/40 rounded-lg border border-gold/30 backdrop-blur-sm">
              <p className="font-serif italic text-lg text-foreground/90 leading-relaxed text-center">
                {locale === 'en' 
                  ? '"A landmark achievement for the arts in Cambodia"'
                  : '"សមិទ្ធិផលសំខាន់សម្រាប់សិល្បៈនៅកម្ពុជា"'}
              </p>
              <p className="text-gold text-xs uppercase tracking-wider mt-3 text-center">
                — Cambodianess
              </p>
            </div>
            
            <div className="flex justify-end">
              <Link href={`/${locale}/the-festival/don-giovanni`}>
                <Button size="lg" className="group bg-primary hover:bg-primary/90" data-testid="button-don-giovanni">
                  {locale === 'en' ? 'Relive the Night' : 'រំលឹកយប់ដ៏អស្ចារ្យ'}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <p className="text-gold tracking-[0.3em] text-[10px] uppercase mb-4 font-medium">
              {locale === 'en' ? 'Coming Soon' : 'មកដល់ឆាប់ៗ'}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              {locale === 'en' ? '2026 Season' : 'រដូវកាល ២០២៦'}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {locale === 'en'
                ? 'Our second season promises to be even more spectacular. Stay tuned for announcements.'
                : 'រដូវកាលទីពីររបស់យើងសន្យាថានឹងអស្ចារ្យជាងមុន។'}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <div className="group relative overflow-hidden rounded-lg bg-card border border-border/50 p-8 text-center hover-elevate transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0" />
              <Sparkles className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-2">La Bohème</h3>
              <p className="text-primary text-sm uppercase tracking-wider mb-4">
                {locale === 'en' ? 'Main Production' : 'ការផលិតសំខាន់'}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {locale === 'en' 
                  ? "Puccini's beloved masterpiece of love and sacrifice in bohemian Paris"
                  : "ស្នាដៃដ៏គួរឱ្យស្រឡាញ់របស់ Puccini អំពីសេចក្តីស្រឡាញ់និងការលះបង់"}
              </p>
              <p className="text-foreground/60 text-sm font-medium">
                {locale === 'en' ? 'November 2026' : 'វិច្ឆិកា ២០២៦'}
              </p>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg bg-card border border-border/50 p-8 text-center hover-elevate transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold/0 via-gold to-gold/0" />
              <Music className="h-8 w-8 text-gold mx-auto mb-4" />
              <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
                {locale === 'en' ? 'Opening Gala' : 'ពិធីបើកសម្ពោធ'}
              </h3>
              <p className="text-gold text-sm uppercase tracking-wider mb-4">
                {locale === 'en' ? 'Special Event' : 'ព្រឹត្តិការណ៍ពិសេស'}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {locale === 'en' 
                  ? 'A glamorous evening celebrating the launch of our 2026 season.. More to be revealed soon'
                  : 'ពេលល្ងាចដ៏រុងរឿងប្រារព្ធការចាប់ផ្តើមរដូវកាលទីពីររបស់យើង'}
              </p>
              <p className="text-foreground/60 text-sm font-medium">
                {locale === 'en' ? 'November 2026' : 'វិច្ឆិកា ២០២៦'}
              </p>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg bg-card border border-border/50 p-8 text-center hover-elevate transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0" />
              <Sparkles className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-2">La Traviata</h3>
              <p className="text-primary text-sm uppercase tracking-wider mb-4">
                {locale === 'en' ? 'Season 2027' : 'រដូវកាល ២០២៧'}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {locale === 'en' 
                  ? "Verdi's timeless tragedy of love and redemption - our third season production"
                  : "រឿងសោកនាដកម្មអស់កល្បជានិច្ចរបស់ Verdi អំពីសេចក្តីស្រឡាញ់និងការប្រោសលោះ"}
              </p>
              <p className="text-foreground/60 text-sm font-medium">
                {locale === 'en' ? 'December 2027' : 'ធ្នូ ២០២៧'}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <GoldDivider />
          <p className="font-serif italic text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed mb-8">
            {locale === 'en'
              ? '"Bringing world-class opera to Cambodia while inspiring the next generation of artists."'
              : '"នាំមកនូវអូប៉េរ៉ាកម្រិតពិភពលោកមកកាន់កម្ពុជា ខណៈពេលដែលបំផុសគំនិតសិល្បករជំនាន់ក្រោយ។"'}
          </p>
          <Link href={`/${locale}/contact`}>
            <Button variant="outline" size="lg" data-testid="button-contact">
              {locale === 'en' ? 'Get in Touch' : 'ទាក់ទង'}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
