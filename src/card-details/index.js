import React from 'react';
import {get} from 'lodash'
import CardFunctions from '../card-functions'


const CradDetilas = props => {
  let cardname = get(props, 'history.location.state.cardData.cardname', '')
  let image = get(props,'history.location.state.cardData.image', '')
  let description = get(props, 'history.location.state.cardData.description', '')
  let fulldescription = get(props, 'history.location.state.cardData.fulldescription', '')
  let link = get(props, 'history.location.state.cardData.links', '')
  return <div>
     <h3> CARD DETAILS of {cardname}</h3>
      <img src={image} width="300" height="200" alt={cardname}/>
      <p value={description} maxLength={40}>{description}</p>
      <span maxLength={40} dangerouslySetInnerHTML={{__html: fulldescription}} /> <br/>

      <CardFunctions /> <br/><br/>
      <a href={link} target="_blank"> Click for More Info </a> <br/><br/>
      <a href='/'> Click Back</a>
  </div>
}


export default CradDetilas
