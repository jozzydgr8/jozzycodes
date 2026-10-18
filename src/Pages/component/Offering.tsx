import { offerings } from "../../Data"

export const Offering = ()=>{
    return (
        <section>
            <div className="container-fluid text-left">
               <div className="text-center">
                 <p className='homeBadge'>What we do</p>
                <h2 className="sub-heading animate-up">Everything your website needs, under one roof</h2>
                <p className='subtopic animate-up'>Everything your website needs, handled in one place. From design and development to hosting and ongoing maintenance, we take care of the details so you don't have to.</p>
               </div>


               <div className="row">
                    {
                        offerings.map((offering, index)=>(
                            <div className="col-md-4 mb-4" key={index}>
                                <div className="offeringCard d-flex flex-column h-100 animate-up">
                                    <div className='mb-3'>{offering.icon}</div>
                                    <h3 className='sub-heading'>{offering.title}</h3>
                                    <div className=' mt-auto'>
                                    <p className='hero-subtitle'>{offering.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
               </div>
            </div>
        </section>
    )
}