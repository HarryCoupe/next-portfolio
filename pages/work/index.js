import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Footer from '@/components/Footer'
import WorkItem from "@/components/WorkItem";
import { useState } from "react";
import inputs from "@/public/works";

export default function Work(){
  
    return(

    <div class="container">
      <Header />
        <div class="row">
          <div class="col">
            <Nav currPage="work"/>
          </div>
        <div class="col"></div>
  
        <div class="col"></div>
      </div>

      {inputs.map((object, id) => (
        <WorkItem
          key={id}
          inputObject={object}
        />
      ))}

    </div>

    
)}