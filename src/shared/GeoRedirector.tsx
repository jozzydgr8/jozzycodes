import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import axios from 'axios';


type global = {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

type geotype = {
  country: string
}



export const GeoRedirector = ({ setLoading }: global) => {
  const { t, i18n } = useTranslation();
  // Your language change function
const changeLanguage = (lng: string) => {
  i18n.changeLanguage(lng);
}
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    async function fetchGeoData() {
      setLoading(true);

      const cachedGeo = localStorage.getItem('geoData');
      if (cachedGeo) {
        const data = JSON.parse(cachedGeo);
        handleRedirectAndLang(data);
        setLoading(false);
        return;
      }
      

      try {
        const geoRes = await axios.get(`https://ipinfo.io/json?token=${process.env.REACT_APP_token}`);
        const data = geoRes.data;

        localStorage.setItem('geoData', JSON.stringify(data));
        handleRedirectAndLang(data);
      } catch (err) {
        console.error('GeoRedirector error:', err);
      } finally {
        setLoading(false);
      }
    }

    // This function will both handle redirect and set language
    function handleRedirectAndLang(data: geotype) {
      const countryCode = data.country.toLowerCase();
      const isNigerian = countryCode === 'ng';
      const isOngbPage = location.pathname.startsWith('/gb');

      // Redirect logic
      if (!isNigerian && !isOngbPage) {
        navigate('/gb', { replace: true });
      } else if (isNigerian && isOngbPage) {
        navigate('/', { replace: true });
      }

      // Language switching logic based on country
      if (countryCode === 'tr') {
        changeLanguage('tr');  
      } else{
        changeLanguage('en')
      }
    }

    fetchGeoData();
  }, []);
  

  return null;
}
