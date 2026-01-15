import { useLocale } from '@/lib/locale-context';
import { Card } from '@/components/ui/card';
import { Leaf, Recycle, MapPin, Smartphone, Users, Car, CheckCircle } from 'lucide-react';

export default function Sustainability() {
  const { locale, t } = useLocale();

  const commitmentIcons = [Leaf, Recycle, MapPin, Smartphone, Users, Car];

  return (
    <div className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center p-4 bg-green-500/10 rounded-full mb-6">
            <Leaf className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-sustainability-title">
            {t.sustainability.title}
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            {t.sustainability.intro}
          </p>
        </div>

        <div className="mb-12">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground text-center mb-8">
            {t.sustainability.commitments}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.sustainability.items.map((item, index) => {
              const Icon = commitmentIcons[index];
              return (
                <Card key={index} className="p-6 hover-elevate transition-all duration-300" data-testid={`card-commitment-${index}`}>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-green-500/10 rounded-lg shrink-0">
                      <Icon className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        <Card className="p-8 md:p-12 bg-green-500/5 border-green-500/20">
          <div className="max-w-3xl mx-auto text-center">
            <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-6" />
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
              {locale === 'en' ? 'Our Pledge' : 'សេចក្តីសន្យារបស់យើង'}
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {locale === 'en'
                ? 'We are committed to minimizing our environmental footprint and continuously improving our sustainable practices. Every decision we make considers its impact on our planet and future generations.'
                : 'យើងប្តេជ្ញាចិត្តក្នុងការកាត់បន្ថយផលប៉ះពាល់បរិស្ថាន និងបន្តកែលម្អការអនុវត្តប្រកបដោយនិរន្តរភាពរបស់យើង។ រាល់ការសម្រេចចិត្តដែលយើងធ្វើគិតពីផលប៉ះពាល់របស់វាទៅលើភពផែនដីនិងមនុស្សជំនាន់ក្រោយរបស់យើង។'}
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
