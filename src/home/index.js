import React, { Component } from 'react';

import {getCardData} from '../card-model-data'
import Layout from './layout'

class Home extends Component {
constructor(props){
  super(props)
  this.state = {
    cardData: getCardData()
  }
  this.handleCardDetails=this.handleCardDetails.bind(this)
}

handleCardDetails(cardId) {
let state = {
   cardData: this.state.cardData.cardData[cardId]
  }
this.props.history.push({
        pathname: `/card-details/${cardId}`, state
      })

}

  render() {
   const {cardData} = this.state.cardData
   const {handleCardDetails} = this
    return (
    <Layout cardData={cardData} 
      handleCardDetails={handleCardDetails}
    >
    </Layout>
    );
  }
}

export default Home;
