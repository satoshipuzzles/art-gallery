import { Stripe } from 'stripe';

// Initialize Stripe with the secret key from environment variables
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2025-02-24.acacia',
});

// Create a payment intent with Stripe
export async function createStripePaymentIntent(amount: number, metadata: any) {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to cents
      currency: 'usd',
      metadata,
      automatic_payment_methods: {
        enabled: true,
      },
    });

    return {
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    };
  } catch (error) {
    console.error('Error creating payment intent:', error);
    throw new Error('Payment processing failed');
  }
}

// Retrieve a payment intent status
export async function getStripePaymentStatus(paymentIntentId: string) {
  try {
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
    return {
      status: paymentIntent.status,
      amount: paymentIntent.amount / 100, // Convert from cents to dollars
      paymentMethod: paymentIntent.payment_method_types[0],
    };
  } catch (error) {
    console.error('Error retrieving payment intent:', error);
    throw new Error('Payment status retrieval failed');
  }
}

// Functions for Bitcoin Lightning Network payments using LNbits
// These would connect to the LNbits API

// Create a Lightning Network invoice
export async function createLightningInvoice(amount: number, memo: string) {
  try {
    const response = await fetch(`${process.env.LNBITS_API_URL}/api/v1/payments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': process.env.LNBITS_INVOICE_KEY || '',
      },
      body: JSON.stringify({
        out: false,
        amount: Math.round(amount * 1000), // Convert to millisatoshis
        memo,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to create Lightning invoice');
    }

    const data = await response.json();
    return {
      paymentHash: data.payment_hash,
      paymentRequest: data.payment_request,
      invoiceId: data.id,
    };
  } catch (error) {
    console.error('Error creating Lightning invoice:', error);
    throw new Error('Lightning invoice creation failed');
  }
}

// Check Lightning invoice payment status
export async function checkLightningInvoiceStatus(paymentHash: string) {
  try {
    const response = await fetch(`${process.env.LNBITS_API_URL}/api/v1/payments/${paymentHash}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': process.env.LNBITS_READ_KEY || '',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to check Lightning invoice status');
    }

    const data = await response.json();
    return {
      paid: data.paid,
      preimage: data.preimage,
      amount: data.amount / 1000, // Convert from millisatoshis to sats
    };
  } catch (error) {
    console.error('Error checking Lightning invoice status:', error);
    throw new Error('Lightning invoice status check failed');
  }
} 