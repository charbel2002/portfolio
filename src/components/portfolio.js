
import { memo, useEffect, useState,useRef } from "react";
import Filter from "../components/filter";
import "../stylesheets/portfolio.css"

function PortfolioModule()
{    

    const fetchPortfolioCreation = async () => {

        await fetch('database/database.json')
        .then(response => response.json())
        .then(data => data.portfolio)
        .then(set => {

            set.map(element => {
                
                let node = document.createElement('div');
                    node.className = "portfolio-node";

                node.innerHTML = `
                
                    <div class="rea-name">${element.name}</div>
                    <div class="rea-type">${element.type}</div>
                    <div class="rea-image"><img src="${element.img}"/></div>
                    <div class="rea-link"><a target="_blank" href="${element.link}" class="">Visiter &rarr;</a></div>
                
                `;

                document.getElementById('portfolio').appendChild(node);

            })

        });

    }

    
    useEffect(() => {
        fetchPortfolioCreation();
    },[]);

    return (

        <>

            <Filter refresh={fetchPortfolioCreation}/>
        
            <section className="" id="portfolio">

                        

            </section>
        
        </>

    );

}

export default memo(PortfolioModule)