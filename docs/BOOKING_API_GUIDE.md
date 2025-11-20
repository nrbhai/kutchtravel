# 🏨 Booking API & Integration Guide

This guide outlines the best options for adding booking capabilities to your Kutch Travel website.

## 🎯 Option 1: Affiliate Integration (Easiest & Earns Money)
Best if you want to earn commission by referring users to established platforms. You don't handle payments or customer support.

### Recommended Services
1.  **Booking.com Affiliate Partner Program**
    *   **Best for:** Hotels & Homestays.
    *   **Features:** Customizable widgets, search boxes, deep links.
    *   **Implementation:**
        *   Sign up at [Booking.com Affiliate](https://www.booking.com/affiliate-program/v2/index.html).
        *   Get your "Affiliate ID".
        *   Use their "Search Box" widget code.

2.  **Viator (Tripadvisor) / GetYourGuide**
    *   **Best for:** Tours & Activities (e.g., Rann Utsav packages).
    *   **Implementation:** Embed their activity cards or use deep links.

3.  **Awin (Your Current Network)**
    *   **Publisher ID:** `2665264`
    *   **Best for:** Aggregating multiple travel brands (Booking.com, Agoda, etc. often work through Awin).
    *   **How to use:**
        1.  Login to Awin.
        2.  Apply to programs (e.g., "Trip.com", "Agoda").
        3.  Use the **Link Builder** tool to create tracking links.
        4.  Use the **My Creative** section to get banner HTML code.

4.  **Flight Affiliates (Skyscanner & Others)**
    *   **Skyscanner:** Excellent choice, very popular.
        *   **Program:** Often available via **Impact Radius** or direct partner portal.
        *   **Widgets:** They provide "Flight Search" widgets.
    *   **Alternative (via Awin):** **Trip.com** or **CheapOair**. Since you are already on Awin, checking these might be easier!

### 💻 How to Implement (Example: Booking.com Widget)
Create a new component `app/components/BookingWidget.tsx`:

```tsx
'use client';

export default function BookingWidget() {
  return (
    <div className="booking-widget">
      {/* Paste the iframe or script code provided by Booking.com here */}
      <iframe
        src="https://www.booking.com/flexiproduct.html?product=sb&w=100%25&h=auto&aid=YOUR_AID"
        width="100%"
        height="200"
        frameBorder="0"
      ></iframe>
    </div>
  );
}
```

---

## 💳 Option 2: Custom Booking System (For Your Own Tours)
Best if you organize your own tours (e.g., "Kutch 3-Day Package") and want to collect payments directly.

### Recommended Services
1.  **Razorpay** (Best for India)
    *   **Features:** UPI, Credit/Debit Cards, Netbanking.
    *   **Setup:** Easy integration with Next.js.

2.  **Stripe** (Best for International)
    *   **Features:** Global card support.

### 💻 How to Implement (Razorpay)

**1. Install SDK:**
```bash
npm install razorpay
```

**2. Create API Route (`app/api/create-order/route.ts`):**
```typescript
import Razorpay from "razorpay";
import { NextResponse } from "next/server";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function POST(request: Request) {
  const order = await razorpay.orders.create({
    amount: 500000, // Amount in paise (5000 INR)
    currency: "INR",
    receipt: "receipt_123",
  });
  return NextResponse.json(order);
}
```

**3. Create Booking Button Component:**
You will need to create a button that calls this API and opens the Razorpay checkout modal.

---

## 🚀 Recommendation
**Start with Option 1 (Affiliate)**.
*   It requires **zero coding** for payments.
*   You don't need to manage cancellations or refunds.
*   You can start earning immediately.

**Switch to Option 2** only if you become a registered tour operator and want to sell your own exclusive packages.
