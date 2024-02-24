import { FaBars, FaChevronDown, FaTachometerAlt, FaUserCircle, FaBook, FaCalendar, FaInbox, FaDesktop, FaShareSquare, FaHistory, FaQuestionCircle, FaHome, FaList, FaComments, FaCamera, FaFileCode, FaQuestion, FaStickyNote, FaUsers, FaFolder, FaCheckSquare, FaChartLine, FaFileExport, FaChartBar, FaCog, FaBullhorn, FaFile } from "react-icons/fa";
import "bootstrap/dist/js/bootstrap.bundle.min.js";



function MobileView() {
    const kanbasNavItems = [
        { href: "/Kanbas/Dashboard/screen.html", icon: <FaTachometerAlt className="kanbas-navbar-icon" />, text: "Dashboard" },
        { href: "/Kanbas/Account/Profile/screen.html", icon: <FaUserCircle />, text: "Account" },
        { href: "/Kanbas/Courses/Home/screen.html", icon: <FaBook />, text: "Courses" },
        { href: "#", icon: <FaCalendar />, text: "Calendar" },
        { href: "#", icon: <FaInbox />, text: "Inbox" },
        { href: "#", icon: <FaDesktop />, text: "Studio" },
        { href: "#", icon: <FaShareSquare />, text: "Commons" },
        { href: "#", icon: <FaHistory />, text: "History" },
        { href: "#", icon: <FaQuestionCircle />, text: "Help" },
    ];

    const courseNavItems = [
        { href: "/Kanbas/Courses/Home/screen.html", icon: <FaHome />, text: "Home" },
        { href: "/Kanbas/Courses/Modules/screen.html", icon: <FaList />, text: "Modules" },
        { href: "https://piazza.com/class/lqlwl9wn2q969r", icon: <FaComments />, text: "Piazza" },
        { href: "#", icon: <FaCamera />, text: "Zoom Meetings" },
        { href: "/Kanbas/Courses/Assignments/screen.html", icon: <FaFileCode />, text: "Assignments" },
        { href: "#", icon: <FaQuestion />, text: "Quizzes" },
        { href: "/Kanbas/Courses/Grades/screen.html", icon: <FaStickyNote />, text: "Grades" },
        { href: "#", icon: <FaUsers />, text: "People" },
        { href: "#", icon: <FaCamera />, text: "Panopto Video" },
        { href: "#", icon: <FaComments />, text: "Discussions" },
        { href: "#", icon: <FaBullhorn />, text: "Announcements" },
        { href: "#", icon: <FaFile />, text: "Pages" },
        { href: "#", icon: <FaFolder />, text: "Files" },
        { href: "#", icon: <FaCheckSquare />, text: "Rubrics" },
        { href: "#", icon: <FaChartLine />, text: "Outcomes" },
        { href: "#", icon: <FaUsers />, text: "Collaborations" },
        { href: "#", icon: <FaFileExport />, text: "Syllabus" },
        { href: "#", icon: <FaChartBar />, text: "Progress Reports" },
        { href: "#", icon: <FaCog />, text: "Settings" },
    ];

    return (
        <div className="d-flex flex-column">
            <div className="d-md-none bg-dark text-white py-4">
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    <button type="button" className="btn text-white" data-bs-toggle="collapse" data-bs-target="#kanbas-nav-collapse">
                        <FaBars />
                    </button>
                    <span>CS4550.12631.202410</span>
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
                            <li key={index}>
                                <a href={item.href} className="red-link">
                                    {item.icon} {item.text}
                                </a>
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
                            <li key={index}>
                                <a href={item.href} className="red-link">
                                    {item.icon} {item.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MobileView;