import React from 'react';
import { useState } from 'react/cjs/react.development';


const Article = ({ article }) => {

    const [isEditing, setIsEditing] = useState(false);
   


    const dateParser = (date) => {
        let newDate = new Date(date).toLocaleDateString("fr-FR", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour : "numeric",
            minute : "numeric"          
        });
        return newDate;
    };

  

    return (
        <div className="article">
            <div className="card-header">
                <h3>{article.author}</h3>
                <em>Posté le  {dateParser(article.date)}</em>
            </div>
            {/*editer la textarea */}
            {isEditing ? (
                <textarea 
                autoFocus defaultValue={article.content}></textarea>
            ) : (
                <p>{article.content}</p>
            )}
            

            <div className="btn-container">
                { isEditing ? (
                    <button>Valider</button>
                ) : (
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                )}
                
                <button>Delete</button>
            </div>
        </div>
    );
};

export default Article;