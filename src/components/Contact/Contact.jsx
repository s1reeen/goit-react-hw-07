import module from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ name, number, id }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteContact(id));
    };

    return (
        <>
            <div className={module.div}>
                <p className={module.contactName}>
                    <FaUser className={module.numberSvg}/>
                    {name}
                </p>
                <p className={module.contactNumber}>
                    <FaPhone className={module.numberSvg}/>
                    {number}
                </p>
            </div>
            <button type="button" className={module.btn} onClick={handleDelete}>Delete</button>
        </>
    );
}

export default Contact;
