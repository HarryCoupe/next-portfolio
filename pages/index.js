import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HomeContent from '@/components/HomeContent'
import Nav from '@/components/Nav'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <>
    <div class="container">
    <Header />
  
      <div class="row">
        <div class="col">
          <Nav currPage="home"/>
        </div>
    
        <div class="col">
        </div>
        
        <div class="col">
          <HomeContent />
        </div>
      </div>
      
    </div>
    <Footer />
  </>
  )
}
