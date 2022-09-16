

    export default function Button(props)
    {


        return (

            <>
            
                <button onClick={props.click} className={props.className} type={props.type}>{props.label}</button>
            
            </>

        );

    }