import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Log the form submission (in production, you'd send this to an email service)
    console.log('Contact form submission:', body);
    
    // Here you would typically:
    // 1. Send an email using a service like SendGrid, Resend, or AWS SES
    // 2. Save to a database
    // 3. Send to a CRM
    
    // For now, we'll just return a success response
    return NextResponse.json(
      { message: 'Mensaje enviado exitosamente' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { message: 'Error al procesar el formulario' },
      { status: 500 }
    );
  }
}