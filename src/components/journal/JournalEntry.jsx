import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journalentry__content" >
            <div className="journalentry__picture" 
            style={{
                backgroundImage:'url(https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=100)',
                backgroundSize:'size',
                }} > 
            </div>
            <div className="journalentry__body" >
                <p className="journalentry__title" >Lorem ipsum, dolor sit ame</p>
                <p className="journalentry__text-content" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate quasi, ipsum natus s</p> 
            </div>
            <div className="journalentry__entry-date-box" >
                <span>Monday</span>
                <h4>28</h4>
            </div>
            
        </div>
    )
}
