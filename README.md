# AImagery

AImagery is an AI-powered image generation and transformation web application built with **Next.js**. It allows users to enhance, edit, and transform images using state-of-the-art AI features like restoration, background removal, generative fill, object removal, and recoloring — all powered by a **credit-based system**.

---

## 🚀 Features

- ✨ **Image Restoration** – Enhance and restore old or damaged photos
- 🔍 **Background Removal** – Remove image backgrounds using AI
- 🧠 **Generative Fill** – Fill in missing parts of images with AI
- ❌ **Object Removal** – Eliminate unwanted objects from images
- 🎨 **Object Recoloring** – Change colors of specific image elements
- 🔐 **User Authentication** – Secure account management with Clerk
- 💳 **Credit System** – Usage-based features via credit pricing plans
- 📱 **Responsive Design** – Optimized for mobile, tablet, and desktop

---

## 🧰 Tech Stack

- **Frontend**: Next.js 14.1.0, React 18, Tailwind CSS
- **Authentication**: [Clerk](https://clerk.dev)
- **Database**: MongoDB, Mongoose
- **Image Processing**: [Cloudinary](https://cloudinary.com/)
- **Payments**: Stripe
- **Forms & Validation**: React Hook Form, Zod
- **UI**: Radix UI

---

## 📦 Project Structure

AImagery/
├── app/ # Next.js App Router
├── assets/ # Static assets
├── components/ # UI components
├── constants/ # App-wide constants
├── lib/
│ ├── actions/ # Server actions
│ └── database/ # MongoDB models & connection
└── public/ # Static files (e.g. favicons)

yaml
Copy
Edit

---

## ⚙️ Getting Started

### ✅ Prerequisites

- Node.js **v18+**
- MongoDB account
- Cloudinary account
- Stripe account
- Clerk account

---

### 🔐 Environment Variables

Create a `.env.local` file in your root directory and add:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# Clerk Webhook
WEBHOOK_SECRET=your_webhook_secret

# MongoDB
MONGODB_URI=your_mongodb_connection_string

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Stripe
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

# Server URL
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
🛠 Installation
Clone the repo and install dependencies:

bash
Copy
Edit
git clone https://github.com/mozammel787/AImagery.git
cd AImagery

# Install dependencies
npm install
# or
yarn install
▶️ Run Locally
bash
Copy
Edit
npm run dev
# or
yarn dev
Visit http://localhost:3000 to see it in action.

🎯 Transformation Types
Restore Image: Enhance image quality

Background Remove: Isolate subject by removing background

Generative Fill: Reconstruct image portions with AI

Object Remove: Remove selected objects

Object Recolor: Recolor parts of the image intelligently

💰 Credit System
AImagery uses a credit-based model:

Plan	Credits	Price
Free Plan	20	Free
Pro Package	120	$40
Premium Package	2000	$199

Each transformation consumes 1 credit.

🚀 Deployment
You can deploy this app easily using Vercel.

📄 License
MIT License

🙏 Acknowledgements
Next.js

Clerk

Cloudinary

MongoDB

Stripe

Tailwind CSS

Radix UI
