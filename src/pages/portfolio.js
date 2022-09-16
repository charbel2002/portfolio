import Header from "../components/header";
import { useEffect, useState } from "react";
import PortfolioModule from "../components/portfolio";

export default function Portfolio() {

    return (
      
      <section id="portfoliopage" className="site-page">
        
        <Header className="site-header" text="Portfolio" />

        <PortfolioModule/>

      </section>
  
    );
  }