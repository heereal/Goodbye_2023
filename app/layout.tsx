import '@/app/global.css';
import MUIThemeProvider from './lib/ThemeProvider';
import Head from 'next/head';

export const metadata = {
  title: '우리의 연말 파티에 초대합니다.',
  description: 'Goodbye to our twenties',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body>
        <MUIThemeProvider>{children}</MUIThemeProvider>
      </body>
    </html>
  );
}
