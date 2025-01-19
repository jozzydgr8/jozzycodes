import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { Layout } from './Layout';
import { Home } from './Home';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/jozzycodes' element={<Layout/>}>
      <Route index element={<Home/>}/>

    </Route>
  ))
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
