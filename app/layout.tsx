import '@/app/global.css';
import MUIThemeProvider from './lib/ThemeProvider';

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
      <head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=%KAKAO_MAP_KEY%"
        />
      </head>
      <body>
        <MUIThemeProvider>{children}</MUIThemeProvider>
      </body>
    </html>
  );
}
