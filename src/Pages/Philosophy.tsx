import { useState } from 'react'
import ThinkingPerson from '../assets/coding.jpg'
import { Phil } from '../Components/Phil';
import { Mission } from '../Components/Mission';

const buttonStyle={
    borderRadius:'50%',
    padding:'8px 10px 2px 10px',
    fontSize:'20px',
    marginBottom:'20px',
    border:'none',
    outline:'none'
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
        <section id='philosophy'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 centerDiv ">
                        <small>
                            We Solve Problems
                        </small>
                        <h3>We are Experts in building and managing websites for business growth</h3>
                        <br/>
                        
                        <div>
                        <button style={buttonStyle} onClick={triggerPhil}>
                        {!philVal ? <ion-icon name="chevron-down-outline"></ion-icon> :<ion-icon name="chevron-up-outline"></ion-icon>}
                        </button> Our Philisophy
                        </div>
                        <p>
                            {!mission && philVal
                             ? <Phil/>:''}
                        </p>
                        <div>
                        <button style={buttonStyle} onClick={triggerMission}>
                            {!mission ? <ion-icon name="chevron-down-outline"></ion-icon> :<ion-icon name="chevron-up-outline"></ion-icon>}
                        </button> Our Mission
                        </div>
                        <p>
                            {!philVal
                             && mission ? <Mission />:''}
                        </p>
                    </div>
                    <div className="col-md-6 backgroundImage" >
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
