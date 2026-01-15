import { useLocale } from '@/lib/locale-context';
import { Card } from '@/components/ui/card';
import { FileText } from 'lucide-react';

export default function Terms() {
  const { t } = useLocale();

  return (
    <div className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6">
            <FileText className="h-10 w-10 text-primary" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-terms-title">
            {t.terms.title}
          </h1>
          <p className="text-muted-foreground">{t.terms.lastUpdated}</p>
        </div>

        <Card className="p-6 md:p-10">
          <div className="prose prose-lg max-w-none">
            {t.terms.sections.map((section, index) => (
              <div key={index} className="mb-8 last:mb-0" data-testid={`section-term-${index}`}>
                <h2 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-4">
                  {section.title}
                </h2>
                {section.content && (
                  <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                )}
                {section.items && (
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
