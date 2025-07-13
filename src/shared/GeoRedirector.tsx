import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

type global = {
setLoading: React.Dispatch<React.SetStateAction<boolean>>
}
type geotype ={
  country:string
}
export const GeoRedirector =({setLoading}:global)=> {
  const navigate = useNavigate();
  const location = useLocation();

 useEffect(() => {
  async function fetchGeoData() {
    setLoading(true);

    const cachedGeo = localStorage.getItem('geoData');
    if (cachedGeo) {
      const data = JSON.parse(cachedGeo);
      handleRedirect(data);
      setLoading(false);
      return;
    }

    try {

      const geoRes = await axios.get(`https://ipinfo.io/json?token=${process.env.REACT_APP_token}`);
      const data = geoRes.data;

      localStorage.setItem('geoData', JSON.stringify(data));
      handleRedirect(data);
    } catch (err) {
      console.error('GeoRedirector error:', err);
    } finally {
      setLoading(false);
    }
  }

  function handleRedirect(data:geotype) {
    const isNigerian = data.country.toLowerCase() === 'ng';  
    const isOngbPage = location.pathname.startsWith('/gb');

    if (!isNigerian && !isOngbPage) {
      navigate('/gb', { replace: true });
    } else if (isNigerian && isOngbPage) {
      navigate('/', { replace: true });
    }
    // else no redirect, stay
  }

  fetchGeoData();
}, []);

  return null;
}
