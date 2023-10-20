
import './globals.css'


export const metadata = {
  title: 'Air Max',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
