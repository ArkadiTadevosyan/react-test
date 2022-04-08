
import "./Style.css"
import "./Content.js"
import Content from "./Content.js"
import Footer from "./Footer"
import { useNavigate } from 'react-router';


const Main = () => {
    let navigate = useNavigate();
    const NavigetToPage = () => {
        navigate("/page")
    }
    const NavigetToHome = () => {
        navigate('/home')
    }

    return (
        <>
            <div className="mainDiv">
                <header className="header">
                    <div className="home" > <button onClick={NavigetToHome} > Home </button> </div>

                    <div className="page"><button onClick={NavigetToPage}> Page </button></div>
                    <div className="aboutUs"><button> About us </button></div>
                </header>
            </div>
            <Content />
            <Footer />
        </>
    )
}

export default Main