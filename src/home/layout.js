import React from 'react';
import CardFunctions from '../card-functions/index'

const Layout = props => {
  return <div>
             <p> CARD DETAILS</p>
           {
              props.cardData.map((cardDatas, index) => {
                  return (
                      <div>
                        <p>{cardDatas.cardId}.</p>
                        <button onClick={() => props.handleCardDetails(index)}>
                        <h2> <u>{cardDatas.cardname.toUpperCase()}</u></h2> 
                        <img src={cardDatas.image} width="300" height="200" alt={cardDatas.cardname} /></button>
                        <p>{cardDatas.description}</p> 
                        <CardFunctions />
                      </div>
                          )
                    })
            }
      </div>
}


export default Layout;
