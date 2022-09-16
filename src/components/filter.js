import "../stylesheets/filter.css";
import { faFilter,faRefresh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

    export default function Filter(props)
    {

        const [state,setState] = useState(0);

        //this function take data and page id

        const getData = () => {

            return new Promise(async (resolve,reject) => {

                let rq = await fetch('/database/database.json')
                
                let data = await rq.json()

                resolve(data.portfolio)

            });

        }

        const filterData = async (e) => {

            let type = e.target.value;

            await getData()
            .then(set => set.filter(pack => pack.type === type ))
            .then( set => {

                if(set.length > 0)
                {
                    document.getElementById('portfolio').innerHTML = "";

                    set.map(element => {

                        let node = document.createElement('div');
                        node.className = "portfolio-node";
    
                        node.innerHTML = `
                        
                            <div class="rea-name">${element.name}</div>
                            <div class="rea-type">${element.type}</div>
                            <div class="rea-image"><img src="${element.img}"/></div>
                            <div class="rea-link"><a href="${element.link}" class="">Visiter</a></div>
                        
                        `;
    
                        document.getElementById('portfolio').appendChild(node);
    
                    })

                }
                else{
                    document.getElementById('portfolio').innerHTML = `
                    
                        <i>Aucune réalisation dans cette catégorie</i>
                    
                    `;
                }

            })

        }

        const refresh = async () => {

            await fetch('database/database.json')
            .then(response => response.json())
            .then(data => data.portfolio)
            .then(set => {

                if(set.length > 0)
                {
                    document.getElementById('portfolio').innerHTML = "";

                    set.map(element => {
                    
                        let node = document.createElement('div');
                            node.className = "portfolio-node";
        
                        node.innerHTML = `
                        
                            <div class="rea-name">${element.name}</div>
                            <div class="rea-type">${element.type}</div>
                            <div class="rea-image"><img src="${element.img}"/></div>
                            <div class="rea-link"><a href="${element.link}" class="">Visiter</a></div>
                        
                        `;
        
                        document.getElementById('portfolio').appendChild(node);
        
                    })

                }
                   
                
    
            });
    
        }

        return (

            <section id="filter-section">

                <article>

                    <header> <FontAwesomeIcon icon={faFilter} /> Filtrez par type de projet</header>

                    <div>
                        <select name="" onChange={filterData}>
                            <option value="">Choisissez une catégorie</option>
                            <option value="Site">Site web</option>
                            <option value="Application">Application</option>
                            <option value="Effet">Effets design</option>
                        </select>
                    </div>

                </article>

                <div id="refresh-container">
                    
                    <button onClick={refresh} className="refresh-btn">
                        <FontAwesomeIcon icon={faRefresh}/> <span>Rafraichir</span>
                    </button>

                </div>

            </section>

        );

    }