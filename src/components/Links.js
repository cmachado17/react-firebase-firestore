import React, { useEffect, useState } from "react";
import LinkForm from "./LinkForm";
import { db } from "../firebase";

const Links = () => {
  const [links, setLinks] = useState([]);

  const addOrEditLink = async (linkObject) => {
    await db.collection("links").doc().set(linkObject);
    console.log("Nueva tarea agregada");
  };

  const onDeleteLink = async(id) =>{
      if (window.confirm('are you sure you want to delete this link?')){
         await db.collection('links').doc(id).delete();
         console.log('task delete');
      }
  }

  const getLinks = async () => {
    db.collection("links").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setLinks(docs);
    });
  };

  useEffect(() => {
    getLinks();
  }, []);

  return (
    <div>
      <div className="col-md-4 p-2">
        <LinkForm addOrEditLink={addOrEditLink} />
      </div>

      <div className="col-md-8 p-2">
        {links.map((link) => (
          <div className="card mb-1" key={link.id}>
            <div className="card-body" >
              <div className="d-flex justify-content-between">
              <h4>{link.name}</h4>
              <i className="material-icons text-danger" onClick={() => onDeleteLink(link.id)}>close</i>
              </div>
              <p>{link.description}</p>
              <a href={link.url} rel="noopener noreferrer">
                Go to website
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Links;
