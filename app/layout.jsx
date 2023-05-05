import './globals.css';
import BottomNavigate from './components/BottomNavigate';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
    weight: ['400', '700'],
    subsets: ['latin'],
});

export const metadata = {
    title: 'Manchester City FC | NextJS 13',
    description: 'Manchester City landing page project created by NextJS 13 - with the support of MINH TRINH',
    //* favicon
    icons: {
        icon: '/favicon-32x32.png',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className={poppins.className}>
                <main className='container my-8'>{children}</main>
                <BottomNavigate />
            </body>
        </html>
    );
}
