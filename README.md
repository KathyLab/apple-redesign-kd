## About

This is an Apple redesign project based on Next.js. The content showing on website  is provided by [Sanity](https://www.sanity.io/) , and the payment ability is from [Stripe](https://stripe.com/zh-cn-us).

I have deployed this app on the Netlify platform. You can see the final build via: https://clever-bubblegum-3a618b.netlify.app/

## How to Use

First, make sure you have local env variables(`.env.local`) shown as below:

```bash
NEXT_PUBLIC_BASE_URL=http://localhost:3000
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_PROJECT_ID='your sanity id here'
SANITY_API_TOKEN='your sanity api token here'
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY='your stripe public key here'
STRIPE_SECRET_KEY='your stripe secret key here'
STRIPE_SIGNING_SECRET='your stripe signing secret key'
# github oauth 
GITHUB_CLIENT_ID='your github client id'
GITHUB_CLIENT_SECRET='your github client secret'
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET='your nextauth secret here'
```

Then, run the development server at the root:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Finally, open a new terminal to run sanity:

```bash
# run in director `appleredesignkd4` 
cd appleredesignkd4
# run sanity use 
sanity start
# or
npm run dev
```

Boom!!  Now, open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

