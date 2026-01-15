import { Link } from 'wouter';
import { useLocale } from '@/lib/locale-context';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, Star, Medal, Handshake, ArrowRight } from 'lucide-react';

export default function Sponsors() {
  const { locale, t } = useLocale();

  const sponsorTiers = [
    {
      tier: t.sponsors.tiers.gold,
      icon: Award,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10',
      sponsors: [
        { name: locale === 'en' ? 'Gold Sponsor 1' : 'អ្នកឧបត្ថម្ភមាស ១', logo: null },
        { name: locale === 'en' ? 'Gold Sponsor 2' : 'អ្នកឧបត្ថម្ភមាស ២', logo: null },
      ],
    },
    {
      tier: t.sponsors.tiers.silver,
      icon: Star,
      color: 'text-gray-400',
      bgColor: 'bg-gray-400/10',
      sponsors: [
        { name: locale === 'en' ? 'Silver Sponsor 1' : 'អ្នកឧបត្ថម្ភប្រាក់ ១', logo: null },
        { name: locale === 'en' ? 'Silver Sponsor 2' : 'អ្នកឧបត្ថម្ភប្រាក់ ២', logo: null },
        { name: locale === 'en' ? 'Silver Sponsor 3' : 'អ្នកឧបត្ថម្ភប្រាក់ ៣', logo: null },
      ],
    },
    {
      tier: t.sponsors.tiers.bronze,
      icon: Medal,
      color: 'text-amber-700',
      bgColor: 'bg-amber-700/10',
      sponsors: [
        { name: locale === 'en' ? 'Bronze Sponsor 1' : 'អ្នកឧបត្ថម្ភសំរឹទ្ធ ១', logo: null },
        { name: locale === 'en' ? 'Bronze Sponsor 2' : 'អ្នកឧបត្ថម្ភសំរឹទ្ធ ២', logo: null },
        { name: locale === 'en' ? 'Bronze Sponsor 3' : 'អ្នកឧបត្ថម្ភសំរឹទ្ធ ៣', logo: null },
        { name: locale === 'en' ? 'Bronze Sponsor 4' : 'អ្នកឧបត្ថម្ភសំរឹទ្ធ ៤', logo: null },
      ],
    },
  ];

  return (
    <div className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-sponsors-title">
            {t.sponsors.title}
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            {t.sponsors.intro}
          </p>
        </div>

        <div className="space-y-12">
          {sponsorTiers.map((tierGroup, index) => {
            const Icon = tierGroup.icon;
            return (
              <div key={index} data-testid={`section-tier-${index}`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 ${tierGroup.bgColor} rounded-lg`}>
                    <Icon className={`h-6 w-6 ${tierGroup.color}`} />
                  </div>
                  <h2 className="font-serif text-2xl font-semibold text-foreground">
                    {tierGroup.tier}
                  </h2>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {tierGroup.sponsors.map((sponsor, sIndex) => (
                    <Card
                      key={sIndex}
                      className="p-6 flex items-center justify-center min-h-[120px] hover-elevate transition-all duration-300"
                    >
                      <span className="text-muted-foreground font-medium text-center">
                        {sponsor.name}
                      </span>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <Card className="mt-16 p-8 md:p-12 bg-primary/10 border-primary/20" data-testid="section-partnership">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Handshake className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground">
                  {t.sponsors.partnershipTitle}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t.sponsors.partnershipText}
              </p>
              <Link href={`/${locale}/contact`}>
                <Button className="group" data-testid="button-contact-partnership">
                  {t.sponsors.contactUs}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div className="hidden md:block">
              <div
                className="aspect-video bg-cover bg-center rounded-lg"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80')`,
                }}
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
