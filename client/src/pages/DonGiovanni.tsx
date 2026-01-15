import { useState } from 'react';
import { Link } from 'wouter';
import { ArrowLeft, Calendar, MapPin, Clock, Users, Quote, Newspaper, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocale } from '@/lib/locale-context';

import partnerLogo0 from '@assets/partner_logos/logo-000.jpg';
import partnerLogo3 from '@assets/partner_logos/logo-003.jpg';
import partnerLogo7 from '@assets/partner_logos/logo-007.jpg';
import partnerLogo9 from '@assets/partner_logos/logo-009.jpg';
import partnerLogo11 from '@assets/partner_logos/logo-011.jpg';
import partnerLogo13 from '@assets/partner_logos/logo-013.jpg';
import partnerLogo15 from '@assets/partner_logos/logo-015.jpg';
import partnerLogo17 from '@assets/partner_logos/logo-017.jpg';
import partnerLogo18 from '@assets/partner_logos/logo-018.jpg';
import partnerLogo20 from '@assets/partner_logos/logo-020.jpg';
import partnerLogo24 from '@assets/partner_logos/logo-024.jpg';
import partnerLogo25 from '@assets/partner_logos/logo-025.jpg';
import partnerLogo27 from '@assets/partner_logos/logo-027.jpg';
import partnerLogo31 from '@assets/partner_logos/logo-031.jpg';
import partnerLogo35 from '@assets/partner_logos/logo-035.jpg';
import partnerLogo39 from '@assets/partner_logos/logo-039.jpg';
import partnerLogo41 from '@assets/partner_logos/logo-041.jpg';
import partnerLogo47 from '@assets/partner_logos/logo-047.jpg';
import partnerLogo52 from '@assets/partner_logos/logo-052.jpg';

const IMAGES = {
  nabaTheatre: 'https://images.squarespace-cdn.com/content/v1/690c0b0878c83b5be15a45c7/3a21c430-de2d-4389-afb4-a56c972a863f/NABA+Theatre+2.jpg',
  donGiovanniPoster: 'https://images.squarespace-cdn.com/content/v1/690c0b0878c83b5be15a45c7/10a5277d-a04d-46a7-9eb7-99f7bf83454d/2%2BDON%2BGIOVANNI%2Bposter%2BL%2Bmaster.%2B_b%2Bpsd.jpg',
  donGiovanniTitle: 'https://images.squarespace-cdn.com/content/v1/690c0b0878c83b5be15a45c7/0dbc9424-a4d4-47af-ab7f-6222b738e363/Title+CMYK.png',
  theaterSeats: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=1920&q=80',
  orchestra: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=800&q=80',
  performance1: 'https://images.unsplash.com/photo-1580809361436-42a7ec204889?w=800&q=80',
  performance2: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&q=80',
};

const PARTNER_LOGOS = [
  partnerLogo0, partnerLogo3, partnerLogo7, partnerLogo9, partnerLogo11,
  partnerLogo13, partnerLogo15, partnerLogo17, partnerLogo18, partnerLogo20,
  partnerLogo24, partnerLogo25, partnerLogo27, partnerLogo31, partnerLogo35,
  partnerLogo39, partnerLogo41, partnerLogo47, partnerLogo52
];

function GoldDivider() {
  return (
    <div className="flex items-center justify-center gap-3 my-8">
      <div className="h-px w-12 bg-gold/40" />
      <div className="h-1.5 w-1.5 rounded-full bg-gold/60" />
      <div className="h-px w-12 bg-gold/40" />
    </div>
  );
}

export default function DonGiovanni() {
  const { locale, t } = useLocale();
  const [expandedTeamMember, setExpandedTeamMember] = useState<number | null>(null);

  const productionTeam = [
    { 
      role: locale === 'en' ? 'Director' : 'នាយក', 
      name: 'Vincenzo Grisostomi Travaglini',
      description: locale === 'en' 
        ? 'A renowned Italian opera director, has captivated audiences world wide by bringing classical masterpieces to new horizons. His collaborative efforts have graced Phnom Penh with the acclaimed production of Madama Butterfly in 2023. Excitingly, Vincenzo is set to lead Don Giovanni in 2025, La Bohème in 2026 to commemorate the 20th Francophonie Summit, and the timeless La Traviata in 2027.'
        : 'នាយកអូប៉េរ៉ាអ៊ីតាលីល្បីល្បាញ បានទាក់ទាញទស្សនិកជនទូទាំងពិភពលោក។',
      website: 'www.vincenzogrisostomitravaglini.it'
    },
    { 
      role: locale === 'en' ? 'Co-Director' : 'សហនាយក', 
      name: 'HH Prince Sisowath Ravivaddhana Monipong',
      description: locale === 'en'
        ? 'Also known as Prince Ravi or the "Italian Prince", played a significant role in the Cambodian premiere of Madama Butterfly. It was a continuation of his long-standing collaboration with Vincenzo, which began in 2010 and has included various lyric productions in Europe and Asia. His participation in this production not only added a unique Cambodian perspective but also helped to create a harmonious blend of cultures.'
        : 'ហៅផងដែរថាព្រះអង្គម្ចាស់រ៉ាវី មានតួនាទីសំខាន់ក្នុងការសម្តែងលើកដំបូងនៅកម្ពុជា។',
      website: 'www.sisowath.it/'
    },
    { 
      role: locale === 'en' ? 'Artistic and Casting Director' : 'នាយកសិល្បៈ និងជ្រើសរើសតួ', 
      name: 'Ai Iwasaki',
      description: locale === 'en'
        ? 'Ai is a prominent figure in the opera world, known for her contributions as both an artist and a leader. In 2018, she founded the Cambodia Opera Project, serving as Executive Producer and Artistic Director. She\'s played a central role in the development of Cambodia\'s operatic scene, performing important roles in Cavalleria Rusticana (2018), Pagliacci (2019), and Madama Butterfly (2023), while also overseeing the productions\' artistic direction. In addition, she has contributed to the education of young artists as a voice instructor at the Royal University of Fine Arts in Phnom Penh.'
        : 'Ai គឺជាតួអង្គសំខាន់ក្នុងពិភពអូប៉េរ៉ា ជាស្ថាបនិកគម្រោងអូប៉េរ៉ាកម្ពុជាក្នុងឆ្នាំ ២០១៨។'
    },
    { 
      role: locale === 'en' ? 'Conductor' : 'អ្នកដឹកនាំវង់ភ្លេង', 
      name: 'Jun Iisaka',
      description: locale === 'en'
        ? 'Jun is a distinguished Japanese opera conductor, repetiteur, and producer with extensive experience at the New National Theatre Tokyo for over 20 years. He has contributed to over 100 productions! Internationally, he has expanded his activities to Asia, notably serving as Music Director and Conductor for Cambodia\'s first full-scale opera productions: Cavalleria Rusticana (2018) and Pagliacci (2019), and as Japan Musical Director for Madama Butterfly (2023). In addition, he actively mentors young musicians and fosters cross-cultural collaboration in opera production.'
        : 'Jun គឺជាអ្នកដឹកនាំអូប៉េរ៉ាជប៉ុនល្បីល្បាញ មានបទពិសោធន៍ជាង ២០ ឆ្នាំ។'
    },
  ];

  const principalCast = [
    { role: 'Don Giovanni', name: 'Ciro Giordano Orsini', detail: locale === 'en' ? 'Baritone - Italian' : 'បារីតុន - អ៊ីតាលី' },
    { role: 'Donna Anna', name: 'Maria Tomassi', detail: locale === 'en' ? 'Soprano - Italian' : 'សូប្រាណូ - អ៊ីតាលី' },
    { role: 'Don Ottavio', name: 'Enrico Guerra', detail: locale === 'en' ? 'Tenor - Italian' : 'តេណ័រ - អ៊ីតាលី' },
    { role: 'Leporello', name: 'Hideya Masuhara', detail: locale === 'en' ? 'Bass - Japanese' : 'បាស - ជប៉ុន' },
    { role: 'Donna Elvira', name: 'Yasko Fujii', detail: locale === 'en' ? 'Soprano - Japanese' : 'សូប្រាណូ - ជប៉ុន' },
    { role: 'Il Commendatore', name: 'Tetsuro Sato', detail: locale === 'en' ? 'Bass - Japanese' : 'បាស - ជប៉ុន' },
    { role: 'Zerlina', name: 'Ai Iwasaki', detail: locale === 'en' ? 'Soprano - Japanese' : 'សូប្រាណូ - ជប៉ុន' },
    { role: 'Masetto', name: 'Genta Fujioka', detail: locale === 'en' ? 'Bass - Japanese' : 'បាស - ជប៉ុន' },
    { role: 'Statue of the Commendatore', name: 'Olivier Michon', detail: locale === 'en' ? 'Bass - French' : 'បាស - បារាំង' },
  ];

  const pressQuotes = [
    {
      source: 'Cambodgemag',
      quote: locale === 'en' 
        ? 'The Opera of the Future: Don Giovanni places Phnom Penh on the map of major cultural capitals.'
        : 'អូប៉េរ៉ានៃអនាគត៖ Don Giovanni ដាក់ភ្នំពេញលើផែនទីនៃរដ្ឋធានីវប្បធម៌ធំៗ។',
    },
    {
      source: 'Cambodia Investment Review',
      quote: locale === 'en'
        ? 'World-first carbon-neutral opera festival through multi-year NagaWorld partnership.'
        : 'ពិធីបុណ្យអូប៉េរ៉ាគ្មានកាបូនដំបូងបង្អស់របស់ពិភពលោក។',
    },
    {
      source: 'Cambodianess',
      quote: locale === 'en'
        ? 'Opera Festival launches green production with renewable energy and sustainable practices.'
        : 'ពិធីបុណ្យអូប៉េរ៉ាចាប់ផ្តើមការផលិតបៃតងជាមួយថាមពលកកើតឡើងវិញ។',
    },
  ];

  const testimonials = [
    {
      quote: locale === 'en'
        ? 'A truly magical evening. I never imagined experiencing world-class opera in Phnom Penh. This is a milestone for Cambodian arts.'
        : 'ពេលល្ងាចដ៏អស្ចារ្យពិតប្រាកដ។ ខ្ញុំមិនដែលគិតថានឹងទទួលបានបទពិសោធន៍អូប៉េរ៉ាកម្រិតពិភពលោកនៅភ្នំពេញទេ។',
      author: locale === 'en' ? 'Cultural Attaché, French Embassy' : 'អ្នកភ្ជាប់វប្បធម៌ ស្ថានទូតបារាំង',
    },
    {
      quote: locale === 'en'
        ? 'The collaboration between international and local artists was seamless. A testament to what cultural exchange can achieve.'
        : 'កិច្ចសហប្រតិបត្តិការរវាងសិល្បករអន្តរជាតិនិងក្នុងស្រុកគឺគ្មានថ្នេរ។ ជាសក្ខីភាពនៃអ្វីដែលការផ្លាស់ប្តូរវប្បធម៌អាចសម្រេចបាន។',
      author: locale === 'en' ? 'Director, Cambodian Living Arts' : 'នាយក សិល្បៈរស់កម្ពុជា',
    },
    {
      quote: locale === 'en'
        ? 'Outstanding performances and impeccable production values. Cambodia has arrived on the international opera stage.'
        : 'ការសម្តែងដ៏អស្ចារ្យនិងតម្លៃផលិតកម្មដ៏ល្អឥតខ្ចោះ។ កម្ពុជាបានមកដល់នៅលើឆាកអូប៉េរ៉ាអន្តរជាតិ។',
      author: locale === 'en' ? 'Opera Critic, Southeast Asia Arts Review' : 'អ្នករិះគន់អូប៉េរ៉ា Southeast Asia Arts Review',
    },
  ];

  return (
    <div>
      <section
        className="relative min-h-[60vh] flex items-center justify-center"
        data-testid="section-hero"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${IMAGES.nabaTheatre}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="text-white tracking-[0.4em] text-sm uppercase mb-6 font-medium drop-shadow-md">
            {locale === 'en' ? 'December 12 & 14, 2025' : 'ថ្ងៃទី១២ និង ១៤ ខែធ្នូ ២០២៥'}
          </p>
          
          <img 
            src={IMAGES.donGiovanniTitle} 
            alt="Don Giovanni"
            className="max-w-[300px] md:max-w-[400px] mx-auto mb-6"
          />
          
          <p className="font-serif italic text-lg md:text-xl text-foreground">
            {t.donGiovanni.subtitle}
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <div className="w-px h-8 bg-primary/40 mx-auto mb-6" />
          <p className="font-serif italic text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed">
            {locale === 'en'
              ? '"An unforgettable evening that marked a new chapter in Cambodia\'s cultural history. Mozart\'s masterpiece came alive in the heart of Phnom Penh."'
              : '"ពេលល្ងាចដែលមិនអាចបំភ្លេចបានដែលបានសម្គាល់ជំពូកថ្មីក្នុងប្រវត្តិសាស្ត្រវប្បធម៌កម្ពុជា។"'}
          </p>
          <GoldDivider />
        </div>
      </section>

      <section className="py-12 md:py-16 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <p className="text-gold tracking-[0.3em] text-[10px] uppercase mb-6 font-medium">
                {locale === 'en' ? 'About the Production' : 'អំពីការផលិត'}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 leading-tight">
                {t.donGiovanni.overview}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {t.donGiovanni.overviewText}
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border/50">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium text-sm mb-1">
                      {locale === 'en' ? 'Performance Dates' : 'កាលបរិច្ឆេទ'}
                    </p>
                    <p className="text-muted-foreground text-sm">{t.donGiovanni.performances}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border/50">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium text-sm mb-1">
                      {locale === 'en' ? 'Venue' : 'ទីកន្លែង'}
                    </p>
                    <p className="text-muted-foreground text-sm">{t.donGiovanni.venueText}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border/50 sm:col-span-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium text-sm mb-1">
                      {locale === 'en' ? 'Duration' : 'រយៈពេល'}
                    </p>
                    <p className="text-muted-foreground text-sm">{t.donGiovanni.duration}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div
                className="aspect-[3/4] rounded-lg bg-cover bg-center"
                style={{ backgroundImage: `url('${IMAGES.donGiovanniPoster}')` }}
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-background" data-testid="section-press">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <p className="text-gold tracking-[0.3em] text-[10px] uppercase mb-4 font-medium">
              {locale === 'en' ? 'Press Coverage' : 'ការផ្សព្វផ្សាយព័ត៌មាន'}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              {locale === 'en' ? 'In the Media' : 'នៅក្នុងប្រព័ន្ធផ្សព្វផ្សាយ'}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {pressQuotes.map((item, index) => (
              <div 
                key={index}
                className="p-6 bg-card rounded-lg border border-border/50"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Newspaper className="h-5 w-5 text-primary" />
                  </div>
                  <p className="font-medium text-foreground">{item.source}</p>
                </div>
                <p className="text-muted-foreground italic leading-relaxed">"{item.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-card/50" data-testid="section-testimonials">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <p className="text-gold tracking-[0.3em] text-[10px] uppercase mb-4 font-medium">
              {locale === 'en' ? 'Audience Reactions' : 'ប្រតិកម្មទស្សនិកជន'}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              {locale === 'en' ? 'Testimonials' : 'សក្ខីកម្ម'}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((item, index) => (
              <div 
                key={index}
                className="p-6 bg-card rounded-lg border border-border/50"
              >
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-gold/40" />
                </div>
                <p className="text-foreground italic leading-relaxed mb-4">"{item.quote}"</p>
                <p className="text-muted-foreground text-sm font-medium">— {item.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <p className="text-gold tracking-[0.3em] text-[10px] uppercase mb-4 font-medium">
              {locale === 'en' ? 'Creative Team' : 'ក្រុមច្នៃប្រឌិត'}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              {locale === 'en' ? 'Production Team & Principal Cast' : 'ក្រុមផលិតកម្ម និង សិល្បករសំខាន់'}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-gold text-sm uppercase tracking-wider mb-4 font-medium">
                {locale === 'en' ? 'Production Team' : 'ក្រុមផលិតកម្ម'}
              </h3>
              <div className="space-y-3">
                {productionTeam.map((member, index) => (
                  <div 
                    key={index}
                    className="bg-card rounded-lg border border-border/50 overflow-hidden"
                  >
                    <button
                      onClick={() => setExpandedTeamMember(expandedTeamMember === index ? null : index)}
                      className="w-full flex items-center justify-between gap-4 p-4 text-left hover-elevate"
                      data-testid={`button-team-${index}`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <Users className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{member.name}</p>
                          <p className="text-muted-foreground text-sm">{member.role}</p>
                        </div>
                      </div>
                      {expandedTeamMember === index ? (
                        <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      )}
                    </button>
                    {expandedTeamMember === index && (
                      <div className="px-4 pb-4 pt-0 border-t border-border/30">
                        <p className="text-muted-foreground text-sm leading-relaxed mt-3">
                          {member.description}
                        </p>
                        {member.website && (
                          <a 
                            href={`https://${member.website}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary text-sm hover:underline mt-2 inline-block"
                          >
                            {member.website}
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-gold text-sm uppercase tracking-wider mb-4 font-medium">
                {locale === 'en' ? 'Principal Cast' : 'សិល្បករសំខាន់'}
              </h3>
              <div className="space-y-3">
                {principalCast.map((member, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border/50"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{member.name}</p>
                      <p className="text-muted-foreground text-sm">{member.role} - {member.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-background" data-testid="section-gallery">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <p className="text-gold tracking-[0.3em] text-[10px] uppercase mb-4 font-medium">
              {locale === 'en' ? 'Memories' : 'ការចងចាំ'}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              {locale === 'en' ? 'Gallery' : 'វិចិត្រសាល'}
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            <div
              className="aspect-[4/5] bg-cover bg-center rounded-lg col-span-2 row-span-2"
              style={{ backgroundImage: `url('${IMAGES.nabaTheatre}')` }}
            />
            <div
              className="aspect-square bg-cover bg-center rounded-lg"
              style={{ backgroundImage: `url('${IMAGES.orchestra}')` }}
            />
            <div
              className="aspect-square bg-cover bg-center rounded-lg"
              style={{ backgroundImage: `url('${IMAGES.performance1}')` }}
            />
            <div
              className="aspect-square bg-cover bg-center rounded-lg"
              style={{ backgroundImage: `url('${IMAGES.performance2}')` }}
            />
            <div
              className="aspect-square bg-cover bg-center rounded-lg"
              style={{ backgroundImage: `url('${IMAGES.theaterSeats}')` }}
            />
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-background/50 overflow-hidden" data-testid="section-partners">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-6">
            <p className="text-gold tracking-[0.3em] text-[10px] uppercase mb-4 font-medium">
              {locale === 'en' ? 'With Gratitude' : 'ដោយក្តីដឹងគុណ'}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              {locale === 'en' ? 'Our Partners & Sponsors' : 'ដៃគូ និងអ្នកឧបត្ថម្ភ'}
            </h2>
          </div>
        </div>
        
        <div className="relative">
          <div className="flex animate-scroll gap-12 py-4">
            {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 h-16 md:h-20 w-auto grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
              >
                <img
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  className="h-full w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-card/50">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <GoldDivider />
          <p className="font-serif italic text-xl md:text-2xl text-foreground leading-relaxed mb-6">
            {locale === 'en'
              ? 'Thank you to everyone who joined us for this historic evening. We look forward to welcoming you again for our 2026 season.'
              : 'សូមអរគុណដល់អ្នករាល់គ្នាដែលបានចូលរួមជាមួយយើងសម្រាប់ពេលល្ងាចប្រវត្តិសាស្ត្រនេះ។'}
          </p>
          <Link href={`/${locale}/the-festival`}>
            <Button variant="outline" size="lg" data-testid="button-back-festival">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {locale === 'en' ? 'Back to The Festival' : 'ត្រឡប់ទៅមហោស្រព'}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
