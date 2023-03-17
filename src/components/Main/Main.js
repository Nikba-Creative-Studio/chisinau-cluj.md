import LazyLoad from 'react-lazyload';
import { Hero } from "./Hero/Hero"
import { Contact } from "./Contact/Contact"
import { Destinations } from "./Destinations/Destinations"
import { Transport } from "./Transport/Transport"
import { Schedule } from "./Schedule/Schedule"

export const Main = ({ data }) => {
    return (
        <>
            <LazyLoad height={200} once >
                <Hero data={data} />
            </LazyLoad>

            <LazyLoad height={200} once >
                <Destinations data={data} />
            </LazyLoad>

            <LazyLoad height={200} once >
                <Contact data={data} />
            </LazyLoad>

            <LazyLoad height={200} once >
                <Schedule data={data} />
            </LazyLoad>

            <LazyLoad height={200} once >
                <Transport data={data} />
            </LazyLoad>
        </>
    )
}