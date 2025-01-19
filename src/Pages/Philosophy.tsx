import { useState } from 'react'
import ThinkingPerson from '../assets/coding.jpg'
import { Phil } from '../Components/Phil';
import { Mission } from '../Components/Mission';

const buttonStyle={
    borderRadius:'50%',
    padding:'8px 10px 2px 10px',
    fontSize:'20px',
    marginBottom:'20px'
}
export const Philosophy = ()=>{
    const [philVal
        , setPhil] = useState(true);
    const [mission, setMission] = useState(false);
    const triggerPhil = ()=>{
        if(mission === true){
            setMission(false)
        }
        setPhil(prevState =>{
            const newState = !prevState;
            return newState
            
        });
        
    }
    const triggerMission = ()=>{
        if(philVal
             === true){
            setPhil(false)
        }
        setMission(prevState =>{
            const staState = !prevState
            return staState
        })
    }
    return(
        <section className='philosophy-section'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <small>
                            WE SOLVE PROBLEMS
                        </small>
                        <h1>We are a professional software agency</h1>
                        <button style={buttonStyle} onClick={triggerPhil}>
                        {!philVal ? <ion-icon name="chevron-down-outline"></ion-icon> :<ion-icon name="chevron-up-outline"></ion-icon>}
                        </button> Our Philisophy
                        <p>
                            {!mission && philVal
                             ? <Phil/>:''}
                        </p>
                        <button style={buttonStyle} onClick={triggerMission}>
                            {!mission ? <ion-icon name="chevron-down-outline"></ion-icon> :<ion-icon name="chevron-up-outline"></ion-icon>}
                        </button> Our Mission
                        <p>
                            {!philVal
                             && mission ? <Mission />:''}
                        </p>
                    </div>
                    <div className="col-md-6">
                        <div>
                            <img style={{width:'80%', height:"50%"}} src={ThinkingPerson} alt='thinking person'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
