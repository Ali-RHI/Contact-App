import { useState } from "react";
import ContactsList from "./ContactsList.jsx";
import inputs from "../constants/inputs.js";

export function Contacts() {
    const [contacts, setContacts] = useState([]);
    const [alert, setAlert] = useState("");
    const [contact, setContact] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
    });

    const changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setContact((contact) => ({ ...contact, [name]: value }));
    };

    const addHandler = () => {
        if (!contact.firstName || !contact.lastName || !contact.email || !contact.phone) { setAlert("Please enter valid data!"); return }

        setAlert("")
        setContacts((contacts) => [...contacts, contact]);
        setContact({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
        });
    };


    return (
        <div>
            <div>{ inputs.map((input, index) => (<input key={ index } type={ input.type } placeholder={ input.placeholder } name={ input.name } value={ contact[input.name] } onChange={ changeHandler } />)) }
                {/* <input
                    type="text"
                    placeholder="firstName"
                    name="firstName"
                    value={ contact.firstName }
                    onChange={ changeHandler }
                />
                <input
                    type="text"
                    placeholder="lastName"
                    name="lastName"
                    value={ contact.lastName }
                    onChange={ changeHandler }
                />
                <input
                    type="text"
                    placeholder="email"
                    name="email"
                    value={ contact.email }
                    onChange={ changeHandler }
                />
                <input
                    type="number"
                    placeholder="phone"
                    name="phone"
                    value={ contact.phone }
                    onChange={ changeHandler }
                /> */}
                <button onClick={ addHandler }>Add Contact</button>
            </div>
            <div>{ alert && <p>{ alert }</p> }</div>
            <ContactsList contacts={ contacts } />
        </div>
    );
};

export default Contacts;
