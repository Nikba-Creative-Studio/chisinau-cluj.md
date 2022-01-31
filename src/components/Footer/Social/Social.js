import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineGoogle } from "react-icons/ai";

export const Social = ({ data }) => {

    const { facebook, instagram, google } = data;

    return (
        <nav className="nav">
            <a 
                href={facebook}
                rel="noreferrer" 
                target="_blank" 
                className="btn btn-outline-secondary me-2 text-white"
            >
                <AiOutlineFacebook />
            </a>
            <a 
                href={instagram}
                rel="noreferrer" 
                target="_blank" 
                className="btn btn-outline-secondary me-2 text-white"
            >
                <AiOutlineInstagram />
            </a>
            <a
                href={google}
                rel="noreferrer"
                target="_blank" 
                className="btn btn-outline-secondary text-white"
            >
                <AiOutlineGoogle />
            </a>
        </nav>
    )
}