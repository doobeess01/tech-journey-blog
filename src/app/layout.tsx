import './globals.css'
import type {Metadata} from 'next'
import {Caramel, Fira_Sans, Mynerve, Mystery_Quest, Poppins, Romanesco} from 'next/font/google';
import NavBarContainer from "@/components/NavBarContainer";
import Footer from "@/components/Footer";

/*
TODO:  Change these things along with:
  - avatar.jpeg in /public/images
  - favicon.ico in /public
 */
const font = Fira_Sans({ weight: '400', subsets: ['latin']})
const title = 'David\'s Site';
const description = 'This my personal site';
const links = [
  {title: 'Prokofiev\'s 1st Violin Concerto', href: 'https://www.youtube.com/watch?v=ozvTHD63di8'},
  {title: 'Brahms\'s 2nd Piano Concerto', href: 'https://www.youtube.com/watch?v=40NsFKuskH0'}
];
const SocialLinks = {
  github: 'https://www.github.com/doobeess01',
  email: 'mailto:david.m.dee01@gmail.com'
}

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: '/images/at.webp',
  },
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="en" className={'h-full'} data-theme="dark">
      <body className={`${font.className} flex flex-col min-h-screen`}>
      <NavBarContainer title={title} links={links}>
        <main className={'flex-1 max-w-6xl py-8 md:py-16 px-4 md:px-0'}>{children}</main>
      </NavBarContainer>
      <Footer socialLinks={SocialLinks}/>
      </body>
      </html>
  )
}
