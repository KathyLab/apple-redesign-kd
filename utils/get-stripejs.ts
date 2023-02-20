// ./utils/get-stripejs.ts
import { Stripe, loadStripe } from "@stripe/stripe-js";

// https://vercel.com/guides/getting-started-with-nextjs-typescript-stripe#loading-stripe.js
// Singleton Pattern(it only initialize strip once)
let stripePromise: Promise<Stripe | null>;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
  }
  return stripePromise;
};

export default getStripe;
