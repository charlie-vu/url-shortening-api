import type { Metadata } from "next";
import '@/styles/globals.css';
import DefaultLayout from "@/layouts/Default";

import { Toaster } from 'sonner'

export const metadata: Metadata = {
  title: "URL shortening API",
  description: "FE Mentor Challenge",
  icons: {
    icon: '/images/favicon-32x32.png',
  },  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Toaster position="bottom-right" expand={true} richColors />
        <DefaultLayout >
          {children}
        </DefaultLayout>
      </body>
    </html>
  );
}
