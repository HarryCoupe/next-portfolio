import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Footer from '@/components/Footer'

export default function Work(){
    return(
        <>
        <div class="container">
        <Header />
      
          <div class="row">
            <div class="col">
              <Nav currPage="work"/>
            </div>
        
            <div class="col">
            </div>
            
            <div class="col">
            </div>
          </div>
          
        </div>
        <Footer />
      </>
    )
}