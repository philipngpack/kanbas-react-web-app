import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaInbox, FaHistory, FaCube, FaArrowRight, FaQuestionCircle } from "react-icons/fa";
function KanbasNavigation() {
    const links = [
        { label: "Account", icon: <FaRegUserCircle className="fs-1" /> },
        { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" /> },
        { label: "Courses", icon: <FaBook className="fs-2" /> },
        { label: "Calendar", icon: <FaRegCalendarAlt className="fs-2" /> },
        { label: "Inbox", icon: <FaInbox className="fs-2" /> },
        { label: "History", icon: <FaHistory className="fs-2" /> },
        { label: "Studio", icon: <FaCube className="fs-2" /> },
        { label: "Commons", icon: <FaArrowRight className="fs-2" /> },
        { label: "Help", icon: <FaQuestionCircle className="fs-2" /> },
    ];
    
    const { pathname } = useLocation();
    return (
        <ul className="wd-kanbas-navigation">
            <li>
                <a href="http://northeastern.edu">
                    <img src="../../images/nulogo.png" alt="N" className="logo" />
                </a>
            </li>
            {links.map((link, index) => (
                <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
                    <Link to={`/Kanbas/${link.label}`}>
                        {link.icon} {link.label}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
export default KanbasNavigation;