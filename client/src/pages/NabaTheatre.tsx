import { Link } from 'wouter';
import { ArrowLeft, Users, Star, Phone, Mail, Sparkles, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocale } from '@/lib/locale-context';
import nabaInterior from '@/assets/IMG_3998.jpg';
import nabaStage from '@/assets/IMG_3588.jpg';


const IMAGES = {
  nabaExterior: 'https://images.squarespace-cdn.com/content/v1/690c0b0878c83b5be15a45c7/3a21c430-de2d-4389-afb4-a56c972a863f/NABA+Theatre+2.jpg',
  nabaInterior,
  nabaStage,
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

export default function NabaTheatre() {
  const { locale } = useLocale();

  return (
    <div>
      <section
        className="relative min-h-[85vh] flex items-center justify-center"
        data-testid="section-hero"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${IMAGES.nabaExterior}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="text-foreground/80 tracking-[0.5em] text-[10px] md:text-xs uppercase mb-8 font-medium">
            {locale === 'en' ? 'Our Venue' : 'ទីកន្លែងរបស់យើង'}
          </p>
          
          <h1 className="font-display uppercase tracking-[0.25em] text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground mb-8">
            {locale === 'en' ? 'NABA Theatre' : 'មហោស្រព NABA'}
          </h1>
          
          <div className="w-16 h-px bg-primary/60 mx-auto mb-8" />
          
          <p className="font-serif italic text-lg md:text-xl lg:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            {locale === 'en' 
              ? 'A Historic Stage in the Heart of Phnom Penh' 
              : 'ឆាកប្រវត្តិសាស្ត្រនៅបេះដូងនៃភ្នំពេញ'}
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <div className="w-px h-8 bg-primary/40 mx-auto mb-6" />
          <p className="font-serif italic text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed">
            {locale === 'en'
              ? '"A jewel of Cambodian architecture, NABA Theatre represents the renaissance of performing arts in the Kingdom."'
              : '"គ្រឿងអលង្ការនៃស្ថាបត្យកម្មកម្ពុជា មហោស្រព NABA តំណាងឱ្យការកើតឡើងវិញនៃសិល្បៈសម្តែងនៅក្នុងព្រះរាជាណាចក្រ។"'}
          </p>
          <GoldDivider />
        </div>
      </section>

      <section className="py-12 md:py-16 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <p className="text-gold tracking-[0.3em] text-[10px] uppercase mb-6 font-medium">
                {locale === 'en' ? 'About the Venue' : 'អំពីទីកន្លែង'}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 leading-tight">
                {locale === 'en' ? 'A Modern Cultural Landmark' : 'ស្នាដៃវប្បធម៌សម័យទំនើប'}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                {locale === 'en'
                  ? 'NABA Theatre stands as a beacon of cultural revival in Phnom Penh. This state-of-the-art venue combines contemporary acoustics with elegant design, creating the perfect setting for world-class performances.'
                  : 'មហោស្រព NABA ឈរជាភ្លើងសញ្ញានៃការកើតឡើងវិញនៃវប្បធម៌នៅភ្នំពេញ។ ទីកន្លែងទំនើបនេះរួមបញ្ចូលគ្នានូវសូរសព្ទទំនើបជាមួយការរចនាដ៏ឆើតឆាយ។'}
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {locale === 'en'
                  ? 'As the home of Phnom Penh International Opera Festival, NABA Theatre hosted the historic December 2025 production of Don Giovanni, marking a milestone in Cambodian cultural history.'
                  : 'ជាផ្ទះរបស់ពិធីបុណ្យអូប៉េរ៉ាអន្តរជាតិភ្នំពេញ មហោស្រព NABA បានរៀបចំការផលិត Don Giovanni នៅខែធ្នូ ២០២៥ ដែលជាសម្គាល់ប្រវត្តិសាស្ត្រក្នុងវប្បធម៌កម្ពុជា។'}
              </p>
            </div>
            
            <div className="relative">
              <div
                className="aspect-[4/3] rounded-lg bg-cover bg-center"
                style={{ backgroundImage: `url('${IMAGES.nabaInterior}')` }}
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-background/30 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <p className="text-gold tracking-[0.3em] text-[10px] uppercase mb-4 font-medium">
              {locale === 'en' ? 'Venue Features' : 'លក្ខណៈពិសេសរបស់ទីកន្លែង'}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              {locale === 'en' ? 'World-Class Facilities' : 'គ្រឿងបរិក្ខារកម្រិតពិភពលោក'}
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-card rounded-lg border border-border/50">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium text-foreground mb-2">
                {locale === 'en' ? 'Intimate Setting' : 'បរិយាកាសជិតស្និទ្ធ'}
              </h3>
              <p className="text-muted-foreground text-sm">
                {locale === 'en' 
                  ? 'Premium seating with excellent sightlines from every seat'
                  : 'កៅអីដ៏ប្រណីតជាមួយទិដ្ឋភាពល្អពីគ្រប់កន្លែង'}
              </p>
            </div>
            
            <div className="text-center p-6 bg-card rounded-lg border border-border/50">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium text-foreground mb-2">
                {locale === 'en' ? 'Superior Acoustics' : 'សូរសព្ទល្អឥតខ្ចោះ'}
              </h3>
              <p className="text-muted-foreground text-sm">
                {locale === 'en' 
                  ? 'Designed for optimal sound quality for orchestral performances'
                  : 'រចនាសម្រាប់គុណភាពសម្លេងល្អបំផុតសម្រាប់ការសម្តែងវង់ភ្លេង'}
              </p>
            </div>
            
            <div className="text-center p-6 bg-card rounded-lg border border-border/50">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium text-foreground mb-2">
                {locale === 'en' ? 'Modern Staging' : 'ឆាកទំនើប'}
              </h3>
              <p className="text-muted-foreground text-sm">
                {locale === 'en' 
                  ? 'State-of-the-art lighting and stage technology'
                  : 'បច្ចេកវិទ្យាពន្លឺនិងឆាកទំនើបបំផុត'}
              </p>
            </div>
            
            <div className="text-center p-6 bg-card rounded-lg border border-border/50">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-medium text-foreground mb-2">
                {locale === 'en' ? 'Central Location' : 'ទីតាំងកណ្តាល'}
              </h3>
              <p className="text-muted-foreground text-sm">
                {locale === 'en' 
                  ? 'Easily accessible in the heart of Phnom Penh'
                  : 'ងាយស្រួលទៅដល់នៅបេះដូងនៃភ្នំពេញ'}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div
                className="aspect-[4/3] rounded-lg bg-cover bg-center"
                style={{ backgroundImage: `url('${IMAGES.nabaStage}')` }}
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <p className="text-gold tracking-[0.3em] text-[10px] uppercase mb-6 font-medium">
                {locale === 'en' ? 'Location & Access' : 'ទីតាំង និងការចូលដំណើរការ'}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 leading-tight">
                {locale === 'en' ? 'Visit NABA Theatre' : 'ទស្សនាមហោស្រព NABA'}
              </h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium mb-1">
                      {locale === 'en' ? 'Address' : 'អាសយដ្ឋាន'}
                    </p>
                    <p className="text-muted-foreground">
                      {locale === 'en' 
                        ? 'Level 2, NagaWorld2, Samdech Techo Hun Sen Park, Phnom Penh 120101, Cambodia'
                        : 'ជាន់ទី២ NagaWorld2 ឧទ្យានសម្តេចតេជោ ហ៊ុន សែន ភ្នំពេញ 120101 កម្ពុជា'}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium mb-1">
                      {locale === 'en' ? 'Phone' : 'ទូរស័ព្ទ'}
                    </p>
                    <p className="text-muted-foreground">+855 23 228 822</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium mb-1">
                      {locale === 'en' ? 'Email' : 'អ៊ីមែល'}
                    </p>
                    <p className="text-muted-foreground">enquiries@nagaworld.com</p>
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {locale === 'en'
                  ? 'Located in a vibrant cultural district, NABA Theatre is easily accessible by car or tuk-tuk. Parking is available nearby, and the venue is a short distance from major hotels in the city center.'
                  : 'ស្ថិតនៅក្នុងតំបន់វប្បធម៌រស់រវើក មហោស org្រព NABA ងាយស្រួលទៅដល់ដោយរថយន្ត ឬតុកតុក។ មានកន្លែងចតរថយន្តនៅជិត ហើយទីកន្លែងនេះស្ថិតនៅមិនឆ្ងាយពីសណ្ឋាគារធំៗនៅកណ្តាលទីក្រុង។'}
              </p>
              
              <Link href={`/${locale}/contact`}>
                <Button variant="default" size="lg" data-testid="button-contact">
                  {locale === 'en' ? 'Contact for Venue Enquiries' : 'ទំនាក់ទំនងសម្រាប់សំណួរអំពីទីកន្លែង'}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <GoldDivider />
          <p className="font-serif italic text-xl md:text-2xl text-foreground leading-relaxed mb-6">
            {locale === 'en'
              ? 'Experience the magic of live performance in one of Cambodia\'s finest cultural venues.'
              : 'ទទួលបានបទពិសោធន៍នៃភាពអស្ចារ្យនៃការសម្តែងផ្ទាល់នៅក្នុងទីកន្លែងវប្បធម៌ល្អបំផុតរបស់កម្ពុជា។'}
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
