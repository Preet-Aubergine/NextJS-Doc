import '@/app/ui/global.css'
import {inter} from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'A modern and sleek invoice management application',
}

export const expermental_ppr = true;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* antialiased => smooths out the fonts */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
