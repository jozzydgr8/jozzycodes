import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top of the page
    }, [pathname]); // Trigger scroll on path change

    return null;
};

export default ScrollToTop;