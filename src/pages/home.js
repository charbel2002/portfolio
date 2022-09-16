import Header from "../components/header";
import "../stylesheets/home.css"

export default function Home() {
    return (
      
      <section id="homepage" className="site-page">
        
        <Header className="site-header" text="Accueil" />

        <article id="homepage-container">

          <div id="welcome-msg">Hello, Moi c'est Morel</div>

          <div id="homepage-profile">
            <img src="/images/profile.jpg"/>
          </div>

          <div id="homepage-motion">

            <sup>''</sup>

              <div>

                <header>Je me présente</header>

                <p>
                  Je suis un développeur full stack. Etidiant en SIL (Système Informatique et Logiciel) à 
                  l'intitut universitaire les Cours SONOU, j'ai découvert la programmation en seconde C et depuis 
                  je n'ai jamais arrêté d'apprendre. J'aime les défis parceque les défis me permettent 
                  de m'améliorer. Tous les domaines de l'informatique m'intéressent et je me documente énormément 
                  surtout sur la technologie blockchain. Toutefois, je suis concentré sur le web2 pour le moment.
                </p>

              </div> 

              <div>
                
                <header>Ma direction</header>
                
                <p>
                  Je me spécialise en développement tech et j'ai jetté mon dévolu sur les 
                  Frameworks:  React en front, Laravel en backend. J'adore 
                  également les bases de données et les requêtes client-serveur. Les API et moi, une 
                  histoire d'amour. Le web3 est la partie de la tech qui m'attire le plus, que ce soit 
                  la technologie blockchain en elle même, les smart contracts et les jettons non fongibles, bien que la cryptographie et 
                  les notions d'anneaux et de corps ne me disent pas encore en grand chose.
                </p>

              </div>

              <div> 
                
                <header>Centres d'intérêt</header>
                
                <p>
                  Je suis quelqu'un de très ouvert aux expériences constructives. J'aime la musique, la lecture ,
                  la recherche d'information, l'organisation, la stratégie, je suis un grand fan d'animés et de 
                  jeux vidéos. J'aime les échanges d'idées sur ce que sera le futur du monde actuel et les questions 
                  existentielles. J'ai un 
                  grand faible pour la finance également, plus précisement l'investissement spéculatif et la couverture de risques.
                </p>

              </div>

              <div> 

                <header>Mot de fin</header>

                <p>
                  Me comparer à qui j'étais hier est la seule chose qui compte pour mon évolution, d'ailleurs 
                  on a beau être né dans le même environnement, on a pas le même passé, ni commis les même erreurs, on a pas 
                  les mêmes rêves, la même vision du monde, par conséquent, on aura jamais la même histoire. Si 
                  l'expérience était transmissible, le monde serait parfait. Le risque est partout et en tout.
                </p>

              </div>

            <sub>''</sub>

          </div>

        </article>

      </section>
  
    );
  }