import React from 'react';
import CardFunctions from '../card-functions/index'

const Layout = props => {
  return <div>
             <p> CARD DETAILS</p>
           {
              props.cardData.map((cardData, index) => {
                  return (
                      <div>
                        <p>{cardData.cardId}.</p>
                        <button onClick={() => props.handleCardDetails(index)}>
                        <h2> <u>{cardData.cardname.toUpperCase()}</u></h2> 
                        <img src={cardData.image} width="300" height="200" alt={cardData.cardname} /></button>
                        <p>{cardData.description}</p> 
                        <CardFunctions />
                      </div>
                          )
                    })
            }
      </div>
}


export default Layout;
