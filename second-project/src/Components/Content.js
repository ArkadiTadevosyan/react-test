import { useState } from "react"

const Content = () => {


    const [form, setForm] = useState({
        name: "",
        page: "",
        email: "",
        tel: "",
    })

    // const [name, setName] = useState("");
    // const [page, setPage] = useState("");
    // const [email, setEmail] = useState("");

    const changeForm = (e) => {

        setForm({ ...form, [e.target.name]: e.target.value })
    }



    // const changeName = (e) => {
    //     setName(e.target.value)
    // }

    // const changePage = (e) => {


    
    //     setPage(e.target.value)
    // }


    // const changeEmail = (e) => {
    //     setEmail(e.target.value)
    // }

    return (
        <>
            <div className="content">
                <div>
                    <input type="text" name="name" value={form.name} onChange={changeForm} /> Name
                    <p>{form.name}</p>
                </div>
                <div>
                    <input className="middle-input" type="number" name="page" value={form.page} onChange={changeForm} />  Page
                    <p>{form.page}</p>
                </div>
                <div>
                    <input type="email" name="email" value={form.email} onChange={changeForm} />  Email
                    <p>{form.email}</p>
                </div>
                <div>
                    <input type="phone" name="tel" value={form.tel} onChange={changeForm} />  Tel.
                    <p>{form.tel}</p>
                </div>
            </div>
        </>
    )
}

export default Content