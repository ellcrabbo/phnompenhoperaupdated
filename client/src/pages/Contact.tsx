import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useLocale } from '@/lib/locale-context';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const { locale, t } = useLocale();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      await apiRequest('POST', '/api/contact', data);
      toast({
        title: locale === 'en' ? 'Message Sent' : 'សារត្រូវបានផ្ញើ',
        description: t.contact.form.success,
      });
      form.reset();
    } catch (error) {
      toast({
        title: locale === 'en' ? 'Error' : 'កំហុស',
        description: t.contact.form.error,
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-contact-title">
            {t.contact.title}
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            {t.contact.intro}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 md:gap-12">
          <Card className="lg:col-span-3 p-6 md:p-8" data-testid="section-contact-form">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t.contact.form.name}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={t.contact.form.name}
                          {...field}
                          data-testid="input-name"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t.contact.form.email}</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder={t.contact.form.email}
                          {...field}
                          data-testid="input-email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t.contact.form.message}</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={t.contact.form.message}
                          rows={6}
                          className="resize-none"
                          {...field}
                          data-testid="input-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                  data-testid="button-submit"
                >
                  {isSubmitting ? (
                    t.contact.form.sending
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      {t.contact.form.send}
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </Card>

          <div className="lg:col-span-2 space-y-6" data-testid="section-contact-info">
            <Card className="p-6">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
                {t.contact.info.title}
              </h3>
              <div className="space-y-4">
                <a
                  href={`mailto:${t.contact.info.email}`}
                  className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                  data-testid="link-email"
                >
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium text-foreground">{t.contact.info.email}</p>
                  </div>
                </a>

                <a
                  href={`tel:${t.contact.info.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                  data-testid="link-phone"
                >
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {locale === 'en' ? 'Phone' : 'ទូរស័ព្ទ'}
                    </p>
                    <p className="font-medium text-foreground">{t.contact.info.phone}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {locale === 'en' ? 'Location' : 'ទីតាំង'}
                    </p>
                    <p className="font-medium text-foreground">{t.contact.info.address}</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-primary/10 border-primary/20">
              <h4 className="font-semibold text-foreground mb-2">
                {locale === 'en' ? 'Office Hours' : 'ម៉ោងការិយាល័យ'}
              </h4>
              <p className="text-muted-foreground text-sm">
                {locale === 'en'
                  ? 'Monday - Friday: 9:00 AM - 5:00 PM (ICT)'
                  : 'ច័ន្ទ - សុក្រ: ៩:០០ ព្រឹក - ៥:០០ ល្ងាច'}
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
