import { Hero } from "./Hero/Hero"
import { Contact } from "./Contact/Contact"
import { Destinations } from "./Destinations/Destinations"
import { Transport } from "./Transport/Transport"

export const Main = ({ data }) => {
    return (
        <>
            <Hero data={data} />
            <Destinations data={data} />
            <Contact data={data} />
            <Transport data={data} />
        </>
    )
}