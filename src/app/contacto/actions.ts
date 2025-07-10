'use server';

import * as z from 'zod';

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10).max(500),
});

type ContactFormState = {
    success: boolean;
    error?: string;
}

export async function handleContactForm(
  values: z.infer<typeof formSchema>
): Promise<ContactFormState> {
  const validatedFields = formSchema.safeParse(values);

  if (!validatedFields.success) {
    return { 
        success: false, 
        error: 'Datos inválidos. Por favor, revisa el formulario.'
    };
  }

  const { name, email, subject, message } = validatedFields.data;

  // In a real application, you would send an email here using a service
  // like Resend, SendGrid, or Nodemailer.
  console.log('--- Nuevo Mensaje de Contacto ---');
  console.log(`Nombre: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Asunto: ${subject}`);
  console.log(`Mensaje: ${message}`);
  console.log('---------------------------------');

  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Simulate a potential error
  // if (Math.random() > 0.5) {
  //   return { success: false, error: 'Error simulado del servidor.' };
  // }

  return { success: true };
}
