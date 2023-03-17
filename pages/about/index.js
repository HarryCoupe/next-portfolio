import Footer from '@/components/Footer'
import Header from "@/components/Header";
import Nav from "@/components/Nav";

export default function About(){
    return(
        <>
        <div class="container">
        <Header />
      
          <div class="row">
            <div class="col">
              <Nav currPage="about"/>
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