import React from 'react';
import LinkForm from "./LinkForm";
import {db} from '../firebase';

const Links = () => {

    const addOrEditLink = async (linkObject) =>{
       await db.collection('links').doc().set(linkObject)
       console.log('Nueva tarea agregada');
    }


    return ( 
        <div>
            <LinkForm addOrEditLink={addOrEditLink} />
            <h1>Links</h1>
        </div>
     );
}
 
export default Links;