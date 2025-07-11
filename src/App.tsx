import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom';
import { Layout } from './Layout';
import { Home } from './Home';
import { Pricing } from './Pages/Pricing';
import { useEffect, useState } from 'react';
import { GeoRedirector } from './GeoRedirector';
import { globalAdvertisement, localAdvertisement } from './Data';
import { globalPricingPlans, pricingPlans } from './PricingData';

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    const animation = ()=>{
      var leftAnimate = document.querySelectorAll('.animate-left');
      var rightAnimate = document.querySelectorAll('.animate-right');
      var downAnimate = document.querySelectorAll('.animate-down');
      var upAnimate = document.querySelectorAll('.animate-up');

      var windowHeight = window.innerHeight;
      rightAnimate.forEach(container=>{
        var containerPosition = container.getBoundingClientRect().top;

        if(containerPosition < windowHeight){
          container.classList.add('sectionAnimationRight')
        }

      })
      leftAnimate.forEach(container=>{
        var containerPosition = container.getBoundingClientRect().top;

        if(containerPosition < windowHeight){
          container.classList.add('sectionAnimationLeft')
        }

      })
      upAnimate.forEach(container=>{
        var containerPosition = container.getBoundingClientRect().top;

        if(containerPosition < windowHeight){
          container.classList.add('sectionAnimationUp')
        }

      })
      downAnimate.forEach(container=>{
        var containerPosition = container.getBoundingClientRect().top;

        if(containerPosition < windowHeight){
          container.classList.add('sectionAnimationDown')
        }

      })
    }
    window.addEventListener('scroll', animation);
  },[]);

  if(loading){
    return <>..loading</>
  }

  const router = createBrowserRouter(createRoutesFromElements(
    <>
    
    <Route path='/' element={<Layout setLoading={setLoading} />}>
      <Route index element={<Home advertisement={localAdvertisement}/>}/>
      <Route path='pricing' element={<Pricing pricingPlans={pricingPlans}/>} />

    </Route>
    <Route path='/gb' element={<Layout setLoading={setLoading}/>}>
    <Route index element={<Home advertisement={globalAdvertisement}/>}/>
    <Route path='pricing' element={ <Pricing pricingPlans={globalPricingPlans}/>}/>

    </Route>
    </>
  ))
  return (
      <div className="App">
      
      {loading ? (
        <>..loading</>
      ) : (
        <RouterProvider router={router} />
      )}
    </div>
  );
}

export default App;
