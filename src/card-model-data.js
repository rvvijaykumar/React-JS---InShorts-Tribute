 import Master from './images/master.png';
 import VISA from './images/visa.jpg';
 import Amex from './images/amex.jpg';
 import Chase from './images/Chase.jpg';
 import Discover from './images/Discover11.jpg';
 import City from './images/Citi1.jpg';
 
 export function getCardData () {
  return {
   cardData: [
     {
        cardId: '1',
        cardname: 'VISA',
        description: 'Visa is a monolith in the credit card world, widely accepted by over 8 million merchants. From traditional benefits to premium rewards, Visa personal credit cards offer a wide range of benefits for cardholders around the world. Mobile cardholders can save themselves time and shop online using Visa Checkout.',
        fulldescription:'<p>Unlimited 1.5% cash back on every purchase — its automatic.<p> <p> Earn a $150 Bonus after you spend $500 on purchases in your first 3 months from account opening</p>\n <p>0% Intro APR for 15 months from account opening on purchases and balance transfers, then a variable APR of 15.74-24.49%.</p> <p>Balance transfer fee is 5% of the amount transferred, $5 minimum</p>\n<p>Redeem for cash — any amount, anytime Cash Back rewards do not expire as long as your account is open No annual fee</p>',
        links: 'https://www.visa.co.in/',
        image: VISA
      },
      {
        cardId: '2',
        cardname: 'Master card',
        description: 'The second most major credit card network in the United States, MasterCard offers perks like easy bill pay and personal information protection using chip technology. MasterCard processes transactions in over 210 countries and in more than 150 currencies',
        fulldescription: '<li>One-time $100 cash bonus after you spend $500 on purchases within 3 months from account opening Earn unlimited.</li> <li>1.5% cash back on every purchase, every day</li><li> Use your Quicksilver card and get 50% back as a statement credit on your monthly</li><li> Spotify Premium subscription, now through April 2018 No rotating categories or sign ups needed to earn cash rewards; plus, cash back doesn’t expire and there’s no limit to how much you can earn 0% intro APR on purchases for 9 months</li> <li>13.74%-23.74% variable APR after that Balance transfers also have a 0% intro APR for 9 months; 13.74%-23.74% variable APR after that; a 3% fee applies to each balance transferred Pay no annual fee or foreign transaction fees</li>',
        links: 'https://www.mastercard.co.in/en-in.html',
        image: Master
      },
      {
        cardId: '3',
        cardname: 'Chase',
        description: 'Chase is the top issuer of general-purpose credit cards in the U.S. Its revenue takes up a significant share of the the market (31.7% to be exact). With rewards from companies like Disney and Southwest Airlines, Chase boasts high customer satisfaction for its credit cards.',
        fulldescription:'Unlimited 1.5% cash back on every purchase — its automaticEarn a $150 Bonus after you spend $500 on purchases in your first 3 months from account opening 0% Intro APR for 15 months from account opening on purchases and balance transfers, then a variable APR of 15.74-24.49%. Balance transfer fee is 5% of the amount transferred, $5 minimum Redeem for cash — any amount, anytimeCash Back rewards do not expire as long as your account is open No annual fee',
        links: 'https://www.chase.com/',
        image: Chase
      },
      {
        cardId: '4',
        cardname: 'American Express',
        description: 'Active in over 130 different countries, American Express (AMEX) is the world’s largest issuer of credit cards in terms of transactions, averaging 6 billion transactions per year. American Express primarily accepts high-income cardholders with robust credit scores.',
        fulldescription: '<li>American Express Platinum Card® — 5X Membership Rewards® points</li><li>Premier Rewards Gold Card from American Express — No foreign transaction fees</li><li>Gold Delta SkyMiles® Credit Card — $0 Introductory annual fee for the first year, then $95</li><li>Credit Scores Approved Range: 623 to 850  Average: 733</li> <li>Translation: Must have good to excellent credit to become a cardholder.</li>',
        links: 'https://www.americanexpress.com/in/',
        image: Amex
      },
      {
        cardId: '5',
        cardname: 'Discover',
        description: 'For those with good credit, Discover offers numerous cash back and travel promotional offers on its credit cards. Dependable fraud protection keeps customers safe while they spend. Applying for a Discover card is easy, and you’ll find they have good offerings for students and businesses alike.',
        links: 'https://www.discover.com/',
        image: Discover
      },
      {
        cardId: '6',
        cardname: 'Citibank',
        description: 'Begun in 1812, Citibank is a major banking institution for customers with above average credit standing. Citi cards have two primary rewards programs available: Simplicity and Thank You. The CitiManager® online tool helps its members manage multiple accounts.',
        links: 'https://www.online.citibank.co.in/',
        image: City 
      }
    ]
  }
}