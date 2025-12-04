import { FlatButton } from "../../shared/FlatButton"

export const Starter = ()=>{
    return(
        <section className="linearbackground">
            <div className="container-fluid">
                <h1>Website For Your Business</h1>
                <h2 style={{textAlign:"left"}}>Get a website that gives your business credibility, visibility, and customer trust</h2>
                <div>
                    <a rel="no-referrer"><FlatButton title="Get Started"/></a>
                </div>
                <h2>Starter Package</h2>
                <p>This is Best for businesses, startups, personal brands or anyone getting online for the first time.</p>
                <h3>What's Included</h3>:
                <ul >
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
                        <b>website indexing gor google visibility</b>
                        <br/>
                        We handle the indexing process so your site is visible on Google and ready to start ranking.
                    </li>
                </ul>
            </div>
        </section>
    )
}
