import PhoneIcon from "../icons/Phone.jsx"
import Email from "../icons/Email.jsx"
import Location from "../icons/Location.jsx"
import Linkedin from "../icons/Linkedin.jsx"

export default function Contact({contactInfo}) {
    const {phone, email, location, linkedin} = contactInfo;
    return (
        <ul className="contact-items">
            <li className="phone">
                <PhoneIcon />
                <span>Phone:</span>
                {phone || <span className="blank-camp">[Your Number]</span>}
            </li>
            <li className="email">
                <Email />
                <span>Email:</span>
                {email || <span className="blank-camp">[Your Email]</span>}
            </li>
            <li className="location">
                <Location />
                <span>Location:</span>
                {location || <span className="blank-camp">(City, State)</span>}
            </li>
            <li className="linkedin">
                <Linkedin />
                <span>Linkedin:</span>
                {linkedin || <span className="blank-camp">[Your Profile]</span>}
            </li>
        </ul>
    );
}
