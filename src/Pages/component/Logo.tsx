import Marquee from "react-fast-marquee";
import { Logos } from "../../Data";

export const Logo = () => {
    return (
        <section className="logos">
            <div className="container-fluid">

                <Marquee speed={50} gradient={false}>
                    {Logos.slice(0, Logos.length / 2).map((data, index) => (
                        <a key={index} href={data?.url}>
                            <div
                                className="logo-display"
                                style={{
                                    backgroundImage: `url(${data.image})`
                                }}
                            />
                        </a>
                    ))}
                </Marquee>

                <Marquee speed={50} gradient={false} direction="right">
                    {Logos.slice(Logos.length / 2).map((data, index) => (
                        <a
                            key={index}
                            href={data?.url}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div
                                className="logo-display"
                                style={{
                                    backgroundImage: `url(${data.image})`
                                }}
                            />
                        </a>
                    ))}
                </Marquee>

            </div>
        </section>
    );
};
