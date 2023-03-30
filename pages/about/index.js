import Footer from '@/components/Footer'
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Image from 'next/image';
import profilePicture from '../../public/self.jpg'

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
        I am a motivated computer science graduate and full stack developer looking for
        employment in web development. Through my education and work history, I
        have grown in my ability to work confidently and coherently in both individual and
        team settings. I utilize strong problem-solving skills in a responsible and professional
        manner. I am dedicated and keen to learn new tools for both personal and
        professional growth.
      </div>
    
      <div class="col">
        <Image 
          src={profilePicture}
          width="400"
          alt="Picture of Harry Coupe"
          style={{borderRadius: '50%'}}
        />
      </div>

    </div>
  </div>
  <Footer />
</>
)}