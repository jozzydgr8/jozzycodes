import { useTranslation } from 'react-i18next';
import clock from '../../assets/clock.png';
import bullseye from '../../assets/bullseye.png';
import graph from '../../assets/graph.png';
import gear from '../../assets/gear.png';
import service from '../../assets/customerservice.png';
import puzzle from '../../assets/puzzle.png';



export const Reason = ()=>{
    const { t } = useTranslation();

const reasonData = t('reasonData', { returnObjects: true }) as { title: string; description: string }[];

const images = [puzzle, clock, graph, bullseye, gear, service];

const combinedData = reasonData.map((item, idx) => ({
  ...item,
  image: images[idx],
}));
    return (
        <section id='reason'>
            <div className="container-fluid">
                <h2>Why Us?</h2>
                <div className="row">
                    {
                        combinedData.map(({ title, description, image }, index)=>(
                            <div className="col-md-6" key={index}>
                                <div className="row animate-up" >
                                    <div className="col-md-2">
                                        <img src={image} style={{width:"70px", height:"70px"}} alt='jozzy codes'/>
                                    </div>
                                    <div className="col-md-10">
                                        <h5>{title}</h5>
                                        <p>{description}</p>
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