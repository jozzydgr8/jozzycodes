import ubaLogo from './assets/uba-logo.png';
import africaMagicLogo from './assets/africa-magic-logo.png';
import blossomCakes from './assets/Blossom-cake-logo.png';
import grandeurLogo from './assets/grandeur-tech-logo.png';
import jumiaLogo from './assets/jumia-logo.png';
import boltLogo from './assets/bolt-logo.png'
import jozzycodes from './assets/white-logo.png'
import toyotaLogo from './assets/toyota-logo.png'
import taycleanLogo from './assets/Tayclean_logo.png'
import taycleanPortfolio from './assets/portfoliotayclean.png';
import blossomcakePortfolio from './assets/portfolioblossomcakes.png';
import kingsAgroMineralsPortfolio from './assets/portfoliokingsagrominerals.png';
export const Logos = [
    
    {
        image:ubaLogo,
        url:'https://www.ubagroup.com/'
    },
    {
        image:boltLogo,
        url:'https://bolt.eu/en/'
    },
    {
        image:toyotaLogo,
        url:'https://www.toyota.com/'
    },
    {
        image:jumiaLogo,
        url:'https://jozzycodes.com/'
    },
    {
        image:grandeurLogo,
        url:'https://jozzycodes.com/'
    },
    {
        image:blossomCakes,
        url:'https://theblossomcakes.com/'
    },
    {
        image:taycleanLogo,
        url:'https://taycleaningsservices.com/'
    },
    {
        image:africaMagicLogo,
        url:'https://jozzycodes.com/'
    },
    {
        image:jozzycodes,
        url:'https://jozzycodes.com/'
    }
]


export const localAdvertisement= [
    {
        title: '₦70K Website – Limited Offer',
        desc: 'Professional website + FREE domain & hosting (1 year) for just ₦70,000',
        urgency: 'Limited spots available!',
        catch: 'Perfect for businesses that want to establish an online presence.',
        notice: 'Not applicable for e-commerce, booking, or advanced custom features.',
        sendRequest : async ()=>{
        const message ="Hello, I'm interested in the ₦70,000 website Promo. I'd like to know what's included and how to get started."
        const whatsappURL = `https://wa.me/2348113828486?text=${encodeURIComponent(message)}`;
         window.open(whatsappURL, '_blank');
       
    },

    }

]

export const globalAdvertisement = [
    {
        title: '$100 Website – Limited Offer',
        desc: 'Professional website + FREE domain & hosting (1 year) for just $100',
        urgency: 'Limited spots available!',
        catch: 'Perfect for businesses that want to establish an online presence.',
        notice: 'Not applicable for e-commerce, booking, or advanced custom features.',
        sendRequest : async ()=>{
        const message ="Hello, I'm interested in the 100$ website Promo. I'd like to know what's included and how to get started."
        const whatsappURL = `https://wa.me/2348113828486?text=${encodeURIComponent(message)}`;
         window.open(whatsappURL, '_blank');
       
    },

    }

]

export const portfolioData = [
    {
        id:'tayclean',
        image:taycleanPortfolio,
        link:'https://taycleaningsservices.com',
        title:'Taycleaningservices'
    },
    {
        id:'blossomcakes',
        image:blossomcakePortfolio,
        link:'https://theblossomcakes.com',
        title:'Theblossomcakes'
        
    },{
        id:'kingagrominerals',
        image:kingsAgroMineralsPortfolio,
        link:'https://kingsagrominerals.com',
        title:'Kingsagrominerals'
    }
]