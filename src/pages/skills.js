import { useEffect } from "react";
import Header from "../components/header";
import "../stylesheets/skills.css";

export default function Skills() {

    const fetchSkills = async () => {

      await fetch('database/database.json')
      .then(response => response.json())
      .then(data => data.skills)
      .then(set => {

          set.map(element => {
              
              let node = document.createElement('div');
                  node.className = "skill-node";

              node.innerHTML = `
              
                  <div class="skill-name"><span>${element.name}</span></div>
                  <div class="skill-image"><img src="${element.img}"/></div>
                  <div class="skill-role">${element.role}</div>
              
              `;

              document.getElementById('skills').appendChild(node);

          })

      });

    }

    useEffect(() => {
      fetchSkills();
    },[])

    return (
            
      <section id="skillspage" className="site-page">
        
        <Header className="site-header" text="Mes compétences" />

        <article id="skills">

        </article>

      </section>
  
    );

  }