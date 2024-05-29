import ReactQueryProviders from '@/utils/ReactQueryProvider';
import type { Metadata } from 'next';
import '../styles/globals.css';


export const metadata: Metadata = {
  title: 'Docthru QA',
  description: 'This is the very project for QA of Docthru',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <ReactQueryProviders>
          {children}
        </ReactQueryProviders>
      </body>
    </html>
  );
}
