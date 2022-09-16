import Header from "../components/header";
import ContactForm from "../components/contactForm";
import "../stylesheets/contact.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlog } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/button";

export default function Contact() {

    const lauchWh = () => {

      window.open('https://wa.me/22995275833');

    }

    return (
      
      <section id="contactpage" className="site-page">
        
        <Header className="site-header" text="Contact" />

        <article id="contact-page-assetment">

          <div className="contact-form-hoster">

            <ContactForm />

          </div>

          <div className="social-links">

            <ul className="social-menu">

              <li className="">
                <a className="" target="_blank" href="https://twitter.com/morel_hessou" id="round-alone">
                  <FontAwesomeIcon icon={faBlog} />
                </a>
              </li>

              <li className="">
                <a className="" target="_blank" href="https://twitter.com/morel_hessou">
                  Tweeter
                </a>
              </li>

              <li className="">
                <a className="" target="_blank" href="https://www.linkedin.com/in/morel-hessou-7a1a76188/">
                  LinkedIn
                </a>
              </li>

            </ul>

            <div id="some-topic-about">

              <p>
                Je suis très actif sur mes réseaux sociaux à savoir Facebook, LinkedIn, 
                Tweeter et WhatsApp, j'y publie régulièrement mes réalisations et challenges, 
                ainsi que des astuces et de mises à jour dev.
              </p>

              <div>
                <Button click={lauchWh} className="whats-btn" type="button" label="Venez sur WhatsApp" />
              </div>

            </div>

          </div>

        </article>

      </section>
  
    );
  }