import './globals.css';

import { NextAuthProvider } from './providers';
import Sidebar from '@/components/Sidebar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>
          <div className="flex h-screen w-full bg-gray-200">
            {/* <Sidebar />
            <div className="flex flex-col w-full h-full ml-64">{children}</div> */}
            <div className="flex flex-col w-full h-full">{children}</div>
          </div>
        </NextAuthProvider>
      </body>
    </html>
  );
}
