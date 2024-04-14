import { useState } from "react";
import ContactsList from "./ContactsList.jsx";
import inputs from "../constants/inputs.js";
import { v4 } from "uuid";

export function Contacts() {
    const [contacts, setContacts] = useState([]);
    const [alert, setAlert] = useState("");
    const [contact, setContact] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        id: ""
    });

    const changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setContact((contact) => ({ ...contact, [name]: value }));
    };

    const addHandler = () => {
        if (!contact.firstName || !contact.lastName || !contact.email || !contact.phone) { setAlert("Please enter valid data!"); return }

        setAlert("")
        const newContact = { ...contact, id: v4() }
        setContacts((contacts) => [...contacts, newContact]);
        setContact({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            id: ""
        });
    };


    return (
        <div>
            <div>{ inputs.map((input, index) => (<input key={ index } type={ input.type } placeholder={ input.placeholder } name={ input.name } value={ contact[input.name] } onChange={ changeHandler } />)) }
                <button onClick={ addHandler }>Add Contact</button>
            </div>
            <div>{ alert && <p>{ alert }</p> }</div>
            <ContactsList contacts={ contacts } />
        </div>
    );
};

export default Contacts;
