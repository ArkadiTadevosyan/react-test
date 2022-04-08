
import "./Style.css"
import "./Content.js"
import Content from "./Content.js"
import Footer from "./Footer"


const Main = () => {


    return (
        <>
            <div className="mainDiv">
                <header className="header">
                    <div className="home" > <button > Home </button> </div>

                    <div className="page"><button> Page </button></div>
                    <div className="aboutUs"><button> About us </button></div>
                </header>
            </div>
            <Content />
            <Footer />
        </>
    )
}

export default Main