import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Nav from "@/components/Nav";

export default function Contact(){
    return(
        <>
        <div class="container">
        <Header />
      
          <div class="row">
            <div class="col">
              <Nav currPage="contact"/>
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