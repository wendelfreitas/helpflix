import './globals.css';
import logo from '../../static/assets/img/logo.svg';
import Image from 'next/image';
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="bg-gradient-to-b from-secondary-800  to-secondary-400 to-20%">
          <header className="flex flex-col h-52 justify-center items-center gap-4">
            <h1 className="text-4xl text-white font-bold">Ong name</h1>
            <div className="flex gap-2">
              <p className="text-xs text-white">Power by</p>
              <Image src={logo} width={85} height={10} alt=" helpflix logo" />
            </div>
          </header>

          <div className="bg-white rounded-t-3xl flex flex-col items-center px-6 ">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
