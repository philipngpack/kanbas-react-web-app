import { FaBars, FaChevronDown, FaTachometerAlt, FaUserCircle, FaBook, FaCalendar, FaInbox, FaDesktop, FaShareSquare, FaHistory, FaQuestionCircle, FaHome, FaList, FaComments, FaCamera, FaFileCode, FaQuestion, FaStickyNote, FaUsers, FaFolder, FaCheckSquare, FaChartLine, FaFileExport, FaChartBar, FaCog, FaBullhorn, FaFile } from "react-icons/fa";
import { Link, useLocation, useParams } from "react-router-dom";
import  { courses } from "../../Kanbas/Database";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

interface LinkItem {
    label: string;
    icon: JSX.Element;
}

function MobileView() {
    const location = useLocation();
    const { courseId } = useParams();
    const pathname = location.pathname;

    const kanbasNavItems: LinkItem[] = [
        { label: "Dashboard", icon: <FaTachometerAlt className="kanbas-navbar-icon" /> },
        { label: "Account", icon: <FaUserCircle /> },
        { label: "Courses", icon: <FaBook /> },
        { label: "Calendar", icon: <FaCalendar /> },
        { label: "Inbox", icon: <FaInbox /> },
        { label: "Studio", icon: <FaDesktop /> },
        { label: "Commons", icon: <FaShareSquare /> },
        { label: "History", icon: <FaHistory /> },
        { label: "Help", icon: <FaQuestionCircle /> },
    ];

    const courseNavItems: LinkItem[] = [
        { label: "Home", icon: <FaHome /> },
        { label: "Modules", icon: <FaList /> },
        { label: "Piazza", icon: <FaComments /> },
        { label: "Zoom Meetings", icon: <FaCamera /> },
        { label: "Assignments", icon: <FaFileCode /> },
        { label: "Quizzes", icon: <FaQuestion /> },
        { label: "Grades", icon: <FaStickyNote /> },
        { label: "People", icon: <FaUsers /> },
        { label: "Panopto Video", icon: <FaCamera /> },
        { label: "Discussions", icon: <FaComments /> },
        { label: "Announcements", icon: <FaBullhorn /> },
        { label: "Pages", icon: <FaFile /> },
        { label: "Files", icon: <FaFolder /> },
        { label: "Rubrics", icon: <FaCheckSquare /> },
        { label: "Outcomes", icon: <FaChartLine /> },
        { label: "Collaborations", icon: <FaUsers /> },
        { label: "Syllabus", icon: <FaFileExport /> },
        { label: "Progress Reports", icon: <FaChartBar /> },
        { label: "Settings", icon: <FaCog /> },
    ];

    return (
        <div className="d-flex flex-column">
            <div className="d-md-none bg-dark text-white py-4">
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    <button type="button" className="btn text-white" data-bs-toggle="collapse" data-bs-target="#kanbas-nav-collapse">
                        <FaBars />
                    </button>
                    <span>{courseId}.12631.20241</span>
                    <button type="button" className="btn text-white" data-bs-toggle="collapse" data-bs-target="#course-nav-collapse">
                        <FaChevronDown />
                    </button>
                </div>
            </div>

            <div className="collapse" id="kanbas-nav-collapse">
                <div className="card card-body">
                    <button type="button" className="btn btn-close " data-bs-toggle="collapse" style={{ position: "absolute", top: 5, right: 5 }} data-bs-target="#kanbas-nav-collapse" aria-label="Close"></button>
                    <ul className="wd-navbar">
                        {kanbasNavItems.map((item, index) => (
                            <li key={index} className={pathname.includes(item.label) ? "wd-active" : ""}>
                                <Link to={`/Kanbas/${item.label}`} className="red-link">
                                    {item.icon} {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                </div>
            </div>

            <div className="collapse" id="course-nav-collapse">
                <div className="card card-body">
                    <button type="button" className="btn btn-close" data-bs-toggle="collapse" style={{ position: "absolute", top: 5, right: 5 }} data-bs-target="#course-nav-collapse" aria-label="Close"></button>
                    <ul className="wd-navbar">
                        {courseNavItems.map((item, index) => (
                            <li key={index} className={pathname.includes(item.label) ? "wd-active" : ""}>
                                <Link to={`/Kanbas/Courses/${courseId}/${item.label}`} className="red-link">
                                    {item.icon} {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MobileView;