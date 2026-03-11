# Author Store (Vite + React)

A simple starter e-commerce site for an author: promote books, accept tips, and sell custom work.

Getting started

```bash
cd testing
npm install
npm run dev
```

Notes

- Replace `VITE_TIP_LINK` in a `.env` file at project root to configure a tip/payment link (Stripe Payment Link, PayPal.Me, etc.).
- For real selling & checkout use Stripe Checkout or a backend to create Checkout Sessions. This starter uses an unconfigured `Checkout` button and a tip link placeholder.

Next steps

- Add images and richer product metadata in `src/data/products.js`.
- Configure Stripe Payment Links or add a server endpoint to create Checkout Sessions.
