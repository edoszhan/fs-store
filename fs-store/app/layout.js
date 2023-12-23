
import './globals.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


export const metadata = {
  title: 'FS store',
  description: 'FS store',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body> 
        <ToastContainer />
        {children}
      </body>
    </html>
  )
}
