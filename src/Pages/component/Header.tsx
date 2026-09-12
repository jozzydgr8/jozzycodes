import { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import curvedLine from '../../assets/curvedline.png';

import { FlatButton } from '../../shared/FlatButton';
import { getBasePath } from '../../shared/getBasePath';
import { LoopText } from './LoopText';


export const Header = () => {

    // --------------------------------------------------
    // Effects
    // --------------------------------------------------

    useEffect(() => {
        const containers = document.querySelectorAll('.headerWrite');

        containers.forEach((el) => {
            el.classList.add('sectionAnimationUp');
        });
    }, []);


    // --------------------------------------------------
    // Routing
    // --------------------------------------------------

    const location = useLocation();
    const basePath = getBasePath(location.pathname);


    // --------------------------------------------------
    // Translation
    // --------------------------------------------------

    const { t, i18n } = useTranslation();

    const loopTexts = t('header.loopTexts', {
        returnObjects: true
    }) as string[];


    // --------------------------------------------------
    // Render
    // --------------------------------------------------

    return (
        <section className="linearbackground">

            <div className="container-fluid">

                {/* Hero Content */}

                <div className="headerWrite hero-content d-flex justify-content-center align-items-center flex-column">

                    {/* Eyebrow */}

                    <div className="hero-eyebrow">

                        <span className="eyebrow-dot"></span>

                        <LoopText
                            loopTexts={loopTexts}
                            as="span"
                        />

                    </div>


                    {/* Main Heading */}

                    <h1 className="hero-title">
                        {t('header.title')}
                    </h1>


                    {/* Decorative Curved Line */}

                    <div className="hero-line">

                        <img
                            src={curvedLine}
                            alt=""
                        />

                    </div>


                    {/* Hero Description */}

                    <p className="hero-subtitle">
                        {t('header.subtitle')}
                    </p>


                    {/* Hero Question */}

                    <p className="hero-question">
                        {t('header.wantToGiveShot')}
                    </p>


                    {/* Call To Action Buttons */}

                    <div className="hero-actions">

                        {/* Primary CTA */}

                        <a
                            href="https://wa.link/ubp14t"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FlatButton
                                className="btn-lg hero-primary"
                                title={t('header.ctaGetStarted')}
                            />
                        </a>


                        {/* Secondary CTA */}

                        <NavLink
                            to={`${basePath}/portfolio`}
                        >
                            <FlatButton
                                title={t('view Portfolio')}
                                className="btnoutline btn-lg hero-secondary"
                            />
                        </NavLink>

                    </div>


                    {/* Scroll Indicator */}

                    <div className="hero-scroll">

                        <span>
                            SCROLL TO EXPLORE
                        </span>

                        <span className="scroll-line"></span>

                    </div>

                </div>

            </div>

        </section>
    );
};