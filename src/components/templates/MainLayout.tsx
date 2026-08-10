import { type ReactNode } from 'react'
import Header from '../organisms/Header'

export default function MainLayout({children}:{children:ReactNode}) {
  return (
    <div >
        <Header />
        {children}
        
    </div>
  )
}
