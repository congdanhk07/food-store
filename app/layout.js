import MainHeader from '@/app/components/header/main-header'
import './globals.css'
import HeaderBackground from './components/header/header-background'

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <HeaderBackground />
        <MainHeader />
        {children}
      </body>
    </html>
  )
}
