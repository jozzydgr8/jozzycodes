import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom';
import { Layout } from './Layout';
import { Home } from './Pages/Home';
import { Pricing } from './Pages/Pricing';
import { useEffect, useState } from 'react';
import { globalPricingPlans, pricingPlans } from './shared/PricingData';
import { Loading } from './shared/Loading';
import { Portfolio } from './Pages/Portfolio';
import { Main } from './admin/Main';
import { UseDataContext } from './context/UseDataContext';
import { Dashboard } from './admin/pages/Dashboard';
import { ToastContainer } from 'react-toastify';
import { BlogForm } from './admin/pages/BlogForm';
import { GuestRoutes } from './shared/GuestRoutes';
import { UseAuthContext } from './context/UseAuthContext';
import Session from './Pages/Session'
import { ProtectedRoutes } from './shared/ProtectedRoutes';
import { Blog } from './Pages/Blogs';
import { FeaturedBlog } from './Pages/FeaturedBlog';
import { UpdateBlog } from './Pages/UpdateBlog';

function App() {
  const [loading, setLoading] = useState(false);
  const {dispatch:dataDispatch, loading:dataLoading} = UseDataContext()
  const {user, dispatch:userDispatch, loading:userLoading} = UseAuthContext();

  //useffect for authentication
  useEffect(()=>{
  userDispatch({type:'loading',payload:true})
  const user = localStorage.getItem('user');
  if(user){
    userDispatch({type:'getUser', payload:JSON.parse(user)})
  }
  userDispatch({type:'loading',payload:false})
  },[])

  //useeffect for blogs
  useEffect(()=>{
    dataDispatch({type:"setloading", payload:true})
    const fetchBlogs = async ()=>{
      try{
        const response = await fetch('https://jozzcodesserver.vercel.app/blog');
        if(!response.ok){
          throw Error('error fetching blogs');
        }
        const json = await response.json();
        dataDispatch({type:"getBlogs", payload:json});
        console.log(json, 'blog')
      }catch(error){
        console.error(error)
      }finally{
        dataDispatch({type:"setloading", payload:false})
      }
    
    }
    fetchBlogs();
  },[])



  //useEffect for reviews
  useEffect(()=>{
    dataDispatch({type:"setloading", payload:true})
    const fetchReviews = async ()=>{
      try{
        const response = await fetch('https://jozzcodesserver.vercel.app/blog');
        if(!response.ok){
          throw Error('error fetching blogs');
        }
        const json = await response.json();
        dataDispatch({type:"getReviews", payload:json})
      }catch(error){
        console.error(error)
      }finally{
        dataDispatch({type:"setloading", payload:false})
      }
    
    }
    fetchReviews();
  },[])
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



  if(loading || dataLoading){
    return <Loading/>
  }

  const router = createBrowserRouter(createRoutesFromElements(
    <>
    
    <Route path='/' element={<Layout setLoading={setLoading} />}>
      <Route index element={<Home/>}/>
      <Route path='pricing' element={<Pricing pricingPlans={pricingPlans}/>} />
      <Route path='portfolio' element={<Portfolio/>} />
      <Route path='blog' element={<Outlet/>}>
        <Route index element={<Blog/>}/>
        <Route path=':slug' element={<FeaturedBlog/>}/>
      </Route>

    </Route>
    <Route path='/gb' element={<Layout setLoading={setLoading}/>}>
    <Route index element={<Home/>}/>
    <Route path='pricing' element={ <Pricing pricingPlans={globalPricingPlans}/>}/>
    <Route path='portfolio' element={<Portfolio/>} />
    <Route path='blog' element={<Outlet/>}>
        <Route index element={<Blog/>}/>
        <Route path=':slug' element={<FeaturedBlog/>}/>
    </Route>

    </Route>

    <Route path='/admin_jctbdil1$' element={<Main/>}>
    <Route index element={<ProtectedRoutes user={user}><Dashboard/></ProtectedRoutes>}/>

    <Route path='blog' element={<ProtectedRoutes user={user}><Outlet/></ProtectedRoutes>}>
    <Route path='addblog' element={<ProtectedRoutes user={user}><BlogForm/></ProtectedRoutes>}/>
    <Route path=':id' element={<ProtectedRoutes user={user}><UpdateBlog/></ProtectedRoutes>}/>
    </Route>

    <Route path='session' element ={<GuestRoutes user={user}><Session/></GuestRoutes>}/>

    </Route>
    </>
  ))
  return (
      <div className="App">
        <RouterProvider router={router} />
        <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

     
    </div>
  );
}

export default App;
