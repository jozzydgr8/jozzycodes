import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { Layout } from './Layout';
import { Home } from './Home';
import { Pricing } from './Pages/Pricing';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <>
    <Route path='/jozzycodes' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='pricing' element={<Pricing/>} />

    </Route>
    
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='pricing' element={<Pricing/>} />

    </Route>
    </>
  ))
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
