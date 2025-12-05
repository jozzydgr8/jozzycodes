import Marquee from "react-fast-marquee"
import { FlatButton } from "../../shared/FlatButton"
import { NavLink } from "react-router-dom"
import recommended from '../../assets/recommended.png'
import { handleRequest } from "../../shared/HandleAction"
import { Helmet } from "react-helmet-async"
import { getBasePath } from "../../shared/getBasePath"
import { useLocation } from "react-router-dom"

const other = [
    {
        title:"Premium",
        recommend:true,
        description:'Perfect for brands that want enhanced functionality and customer interaction',
        CTA:'Read More',
        link:'/website-for-your-business/premium'
    },
    {
        title:'enteprise',
        recommend:false,
        description:'custom solutions',
        CTA:'contact now',
        link:''
    }
]
export const Starter = ()=>{
    const location = useLocation();
    const basePath = getBasePath(location.pathname);
    return(
        <>
        <Helmet>
            <meta name="description"
            content="Get your business online with a professional starter website package from jozzycodes. Clean, responsive and ready to grow with yout brand"/>
            <link rel="canonical" href={`https://jozzycodes.com${basePath}/website-for-your-business/starter`}/>
            <title>Starter Website Package for Your Business | Professional Business Website - Jozzycodes</title>
        </Helmet>
        <section className="linearbackground">
            <div className="container-fluid">
                <h1>Website For Your Business</h1>
                <h4 >Get a website that gives your business credibility, visibility, and customer trust</h4>
             
                <div>
                    <FlatButton title="Get Started - ₦220,000" onClick={()=>handleRequest('Good day, I’m interested in getting the Starter Pack for my business.')}/>
                </div>
                <br/>
                <h2>Starter Package</h2>
                <p>This is Best for businesses, startups, personal brands or anyone getting online for the first time.</p>
                <h4>What's Included:</h4>
                <ul className="special-list" >
                    <li>
                        <b style={{textTransform:"capitalize"}}>3 high performance static landing pages</b>
                        <br/>one main landing page plus two additional SEO-focused pages. These extra pages help target more keywords and improve your overall search visibility.
                    </li>
                    <li>
                        <b>Domain and hosting setup</b>
                        <br/>
                        We handle the full hosting and domain setup for you, including configuration, security, and connection to your website. Everything is prepared and ready to go,
                        all you’ll need to do afterward is renew your hosting or domain subscription when it expires.
                    </li>
                    <li>
                        <b>website indexing for google visibility</b>
                        <br/>
                        We handle the indexing process so your site is visible on Google and ready to start ranking.
                    </li>
                    <li>
                        <b> Domain email setup</b>
                        <br/>
                        We create and configure your professional domain-based email so you can use it instantly — for example: info@yourdomain.com
                        or support@yourdomain.com
                    </li>
                    <li>
                        <b>google business profile setup</b>
                        <br/>
                        We set up and optimize your Google Business Profile so your business appears in local search results and on Google Maps
                    </li>
                    <li>
                        <b>Featured on jozzycodes website & Social media portfolio</b>
                        <br/>
                        Your project will be showcased in our portfolio on the JozzyCodes website and highlighted on our social media channels. We’ll also share any content you create, giving your brand added exposure and endorsement.
                    </li>
                </ul>
                <FlatButton title="Get Started - ₦220,000" onClick={()=>handleRequest('Good day, I’m interested in getting the Starter Pack for my business.')}/>
                <br/>
                <h2>Other Packages</h2>
                
                <Marquee>
                    {
                        other.map((item, index)=>(
                            <div key={index}>
                                <div className="blogcontainer" style={{minHeight:"250px"}}>
                                    <div style={{display:'flex', alignItems:"center", justifyContent:'space-between'}}>
                                        <h4>{item.title}</h4>
                                        
                                        {item.recommend && <img style={{width:"80px", height:"80px"}} src={recommended} alt="recommended-badge"/>}
                                        

                                    </div>
                                    <p>{item.description}</p>
                                    {
                                        item.title =='enteprise'?<FlatButton title="Get Started"  onClick={()=>handleRequest('Good day, I would like to discuss creating a custom solution tailored to our needs.')}/>:<NavLink to={`${item.link}`}><FlatButton title='View now' /></NavLink>
                                    }
                                    
                                </div>
                            </div>
                        ))
                    }
                </Marquee>
            </div>

        </section>
        </>
    )
}
