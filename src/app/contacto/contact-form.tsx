'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const formSchema = z.object({
  name: z.string().min(2, { message: 'El nombre debe tener al menos 2 caracteres.' }),
  email: z.string().email({ message: 'Por favor, introduce un correo electrónico válido.' }),
  subject: z.string().min(5, { message: 'El asunto debe tener al menos 5 caracteres.' }),
  message: z.string().min(10, { message: 'El mensaje debe tener al menos 10 caracteres.' }).max(500),
});

const encode = (data: Record<string, string>) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export function ContactForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
        await fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...values })
        });
        
        toast({
            title: '¡Mensaje Enviado!',
            description: 'Gracias por contactarnos. Te responderemos a la brevedad.',
        });
        form.reset();
    } catch (error) {
        toast({
            variant: 'destructive',
            title: 'Error al enviar',
            description: 'Hubo un problema al enviar tu mensaje. Por favor, intenta de nuevo.',
        });
    }
  }

  return (
    <Card className="shadow-lg border-border/50">
      <CardHeader className="pb-4">
        <CardTitle className="font-headline text-2xl text-foreground">Envíanos un Mensaje</CardTitle>
        <p className="text-sm text-muted-foreground mt-2">
          Completa el formulario y nos pondremos en contacto contigo a la brevedad.
        </p>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form 
            name="contact"
            method="POST"
            onSubmit={form.handleSubmit(onSubmit)} 
            className="space-y-6"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-semibold text-foreground">Nombre Completo *</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Tu nombre completo" 
                        {...field} 
                        className="border-border/50 focus:border-primary transition-colors"
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
                    <FormLabel className="text-sm font-semibold text-foreground">Correo Electrónico *</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="tu@correo.com" 
                        type="email"
                        {...field} 
                        className="border-border/50 focus:border-primary transition-colors"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-semibold text-foreground">Asunto *</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="¿En qué podemos ayudarte?" 
                      {...field} 
                      className="border-border/50 focus:border-primary transition-colors"
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
                  <div className="flex items-center justify-between">
                    <FormLabel className="text-sm font-semibold text-foreground">Mensaje *</FormLabel>
                    <span className="text-xs text-muted-foreground">
                      {field.value?.length || 0}/500
                    </span>
                  </div>
                  <FormControl>
                    <Textarea
                      placeholder="Compártenos los detalles de tu consulta o interés en nuestros destilados..."
                      className="resize-none border-border/50 focus:border-primary transition-colors min-h-[120px]"
                      rows={6}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                  <p className="text-xs text-muted-foreground mt-1">
                    Cuéntanos sobre tus preferencias o necesidades específicas para ofrecerte la mejor asesoría.
                  </p>
                </FormItem>
              )}
            />
            <div className="pt-4 border-t border-border/30">
              <Button 
                type="submit" 
                className="w-full button-premium" 
                disabled={form.formState.isSubmitting}
                size="lg"
              >
                {form.formState.isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                    Enviando mensaje...
                  </div>
                ) : (
                  'Enviar Mensaje'
                )}
              </Button>
              <p className="text-xs text-muted-foreground text-center mt-3">
                * Campos obligatorios. Tu información será tratada de forma confidencial.
              </p>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}