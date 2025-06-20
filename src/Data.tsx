import ubaLogo from './assets/uba-logo.png';
import africaMagicLogo from './assets/africa-magic-logo.png';
import blossomCakes from './assets/Blossom-cake-logo.png';
import githubLogo from './assets/github-logo.png';
import grandeurLogo from './assets/grandeur-tech-logo.png';
import jumiaLogo from './assets/jumia-logo.png';
import boltLogo from './assets/bolt-logo.png'
import jozzycodes from './assets/white-logo.png'
import toyotaLogo from './assets/toyota-logo.png'
import taycleanLogo from './assets/Tayclean_logo.png'
export const Logos = [
    
    {
        image:ubaLogo
    },
    {
        image:boltLogo
    },
    {
        image:toyotaLogo
    },
    {
        image:jumiaLogo
    },
    {
        image:grandeurLogo
    },
    {
        image:githubLogo
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
        image:africaMagicLogo
    },
    {
        image:jozzycodes
    }
]


export const advertisement= [
    {
        title: '₦50K Website – Limited Offer',
        desc: 'Professional website + FREE domain & hosting (1 year) for just ₦50,000',
        urgency: 'Limited spots available!',
        catch: 'Perfect for businesses that want to establish an online presence.',
        notice: 'Not applicable for e-commerce, booking, or advanced custom features.',
        sendRequest : async ()=>{
        const message ="Hello, I'm interested in the ₦50,000 website Promo. I'd like to know what's included and how to get started."
        const whatsappURL = `https://wa.me/2348113828486?text=${encodeURIComponent(message)}`;
         window.open(whatsappURL, '_blank');
    }
    }

]