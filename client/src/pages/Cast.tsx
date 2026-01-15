import { useLocale } from '@/lib/locale-context';
import { Card } from '@/components/ui/card';
import { Users, Music } from 'lucide-react';

export default function Cast() {
  const { locale, t } = useLocale();

  const principalCast = [
    { role: 'Don Giovanni', name: t.cast.tbc },
    { role: 'Donna Anna', name: t.cast.tbc },
    { role: 'Don Ottavio', name: t.cast.tbc },
    { role: 'Donna Elvira', name: t.cast.tbc },
    { role: 'Leporello', name: t.cast.tbc },
    { role: 'Zerlina', name: t.cast.tbc },
    { role: 'Masetto', name: t.cast.tbc },
    { role: 'Commendatore', name: t.cast.tbc },
  ];

  const creativeTeam = [
    { role: t.cast.conductor, name: t.cast.tbc },
    { role: t.cast.director, name: t.cast.tbc },
    { role: t.cast.designer, name: t.cast.tbc },
  ];

  return (
    <div className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-cast-title">
            {t.cast.title}
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            {t.cast.intro}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          <Card className="p-6 md:p-8" data-testid="section-principal-cast">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h2 className="font-serif text-2xl font-semibold text-foreground">
                {t.cast.principalCast}
              </h2>
            </div>
            <div className="space-y-4">
              {principalCast.map((member, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-3 border-b border-border last:border-0"
                >
                  <span className="font-medium text-foreground">{member.role}</span>
                  <span className="text-muted-foreground text-sm bg-muted px-3 py-1 rounded-full">
                    {member.name}
                  </span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 md:p-8" data-testid="section-creative-team">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gold/10 rounded-lg">
                <Music className="h-6 w-6 text-gold" />
              </div>
              <h2 className="font-serif text-2xl font-semibold text-foreground">
                {t.cast.creativeTeam}
              </h2>
            </div>
            <div className="space-y-4">
              {creativeTeam.map((member, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-3 border-b border-border last:border-0"
                >
                  <span className="font-medium text-foreground">{member.role}</span>
                  <span className="text-muted-foreground text-sm bg-muted px-3 py-1 rounded-full">
                    {member.name}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gold/5 rounded-lg border border-gold/20">
              <p className="text-muted-foreground text-center text-sm">
                {locale === 'en'
                  ? 'Full cast and creative team announcements coming soon. Subscribe to our newsletter for updates.'
                  : 'ការប្រកាសអ្នកសម្តែងពេញលេញនិងក្រុមច្នៃប្រឌិតនឹងមកដល់ឆាប់ៗ។ ចុះឈ្មោះទទួលព្រឹត្តិប័ត្រព័ត៌មានរបស់យើងសម្រាប់បច្ចុប្បន្នភាព។'}
              </p>
            </div>
          </Card>
        </div>

        <Card className="mt-12 p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
                {locale === 'en' ? 'International Excellence' : 'ភាពឆ្នើមអន្តរជាតិ'}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {locale === 'en'
                  ? 'Our production brings together acclaimed artists from opera houses around the world, united by their passion for bringing Mozart\'s masterpiece to new audiences in Cambodia.'
                  : 'ការផលិតរបស់យើងនាំមកនូវសិល្បករល្បីល្បាញពីផ្ទះអូប៉េរ៉ាជុំវិញពិភពលោក ដែលរួមគ្នាដោយចំណង់ចំណូលចិត្តរបស់ពួកគេក្នុងការនាំស្នាដៃដ៏អស្ចារ្យរបស់ Mozart មកទស្សនិកជនថ្មីនៅកម្ពុជា។'}
              </p>
            </div>
            <div
              className="aspect-video bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&q=80')`,
              }}
            />
          </div>
        </Card>
      </div>
    </div>
  );
}
