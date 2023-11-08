import '@/app/global.css';
import MUIThemeProvider from './lib/ThemeProvider';

export const metadata = {
  title: '초대합니다.',
  description: 'Goodbye to our twenties',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MUIThemeProvider>{children}</MUIThemeProvider>
      </body>
    </html>
  );
}
