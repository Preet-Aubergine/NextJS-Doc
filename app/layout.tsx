import '@/app/ui/global.css'
import {inter} from '@/app/ui/fonts';

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
