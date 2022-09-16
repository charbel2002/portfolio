
import { useEffect, useRef, useState } from "react";
import "../stylesheets/contactForm.css"
import emailjs from '@emailjs/browser'
import { ToastContainer,toast } from "react-toastify";

    export default function ContactForm()
    {

        const form = useRef();

        const [errors,setErrors] = useState([]);

        const [inputs,setInputs] = useState({
            name:"",
            email:"",
            topic:"",
            message:""
        });

        const handleInput = (e) => {

            let name = e.target.name;
            let value = e.target.value;

            setInputs((inputs) => {
                
                if(name == "email")
                {
                    return ({...inputs,[name]:value});
                }
                if(name == "name")
                {
                    return ({...inputs,[name]:value});
                }
                if(name == "topic")
                {
                    return ({...inputs,[name]:value});
                }
                if(name == "message")
                {
                    return ({...inputs,[name]:value});
                }

            });

        }

        const handleSubmit = async (e) => {

            e.preventDefault();

            await validateForm()
            .then(response => {

                if(response)
                {

                    const id = toast.loading("Veuillez patienter...");

                    emailjs.sendForm('service_va3tb1r', 'template_cov8xwh', form.current, 'Fuq084m994H-wRSQ_')
                    .then((result) => {
                        
                        if(result.text.toLowerCase() == 'ok')
                        {
                            toast.update(id, {render: "Email envoyé", type: "success", isLoading: false});

                            setTimeout(() => {

                                toast.dismiss();
                                
                            }, 1000);

                        }

                    }, (error) => {
                        toast.error(error.text);
                    });

                }

            })
            .catch((error) => console.log(error));

        }

        let validateForm = () => {

            return new Promise((resolve,reject) => {

                var status = true;

                for(const [name,value] of Object.entries(inputs))
                {

                    if(value == "" || value == null || value == " ")
                    {
                        status = false;
                        
                        setErrors(errors => ([...errors,name]))
                    }

                }

                resolve(status);

            })

        }

        useEffect(() => {

            errors.map(error => error == "topic" ? toast.error('Champ sujet vide') : 
            error == "name" ? toast.error('Champ de nom vide') : 
            error == "email" ? toast.error('Champ d\'email vide') : 
            error == "message" ? toast.error('Message vide') : "" )

            if(errors.length > 0)
            {
                setErrors(errors => ([]));
            }

        },[errors]);

        return (

            <form ref={form} className="contactForm" method="" onSubmit={handleSubmit}>

                <div className="i-container">
                    <input type="text" autoComplete="off" onInput={handleInput} name="topic" className="input-element" placeholder="Objet"/>
                </div>

                <div className="i-container">
                    <input type="text" autoComplete="off" onInput={handleInput} name="name" className="input-element" placeholder="Votre nom"/>
                </div>

                <div className="i-container">
                    <input type="text" autoComplete="off" onInput={handleInput} name="email" className="input-element" placeholder="Votre email"/>
                </div>

                <div className="i-container">
                    <textarea name="message" onInput={handleInput} placeholder="Laissez moi un message" className="textarea-element" />
                </div>

                <div className="i-container">
                    <button type="submit" className="" name="submitbtn" >Envoyer le mail</button>
                </div>

                <ToastContainer/>

            </form>

        );

    }