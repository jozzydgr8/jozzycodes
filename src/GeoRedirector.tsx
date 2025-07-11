import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

type global = {
setLoading: React.Dispatch<React.SetStateAction<boolean>>
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
      const ipRes = await fetch('https://api.ipify.org?format=json');
      const { ip } = await ipRes.json();

      const geoRes = await fetch(`http://ip-api.com/json/${ip}`);
      const data = await geoRes.json();

      localStorage.setItem('geoData', JSON.stringify(data));
      handleRedirect(data);
    } catch (err) {
      console.error('GeoRedirector error:', err);
    } finally {
      setLoading(false);
    }
  }

  function handleRedirect(data:any) {
    const isNigerian = data.countryCode === 'NG';  
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
