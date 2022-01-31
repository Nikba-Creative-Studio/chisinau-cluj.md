import { Hero } from "./Hero/Hero"
import { Contact } from "./Contact/Contact"

export const Main = ({ data }) => {
    return (
        <>
            <Hero />

            <Contact data={data} />
        </>
    )
}