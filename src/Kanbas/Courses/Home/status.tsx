import { FaMinusCircle, FaCheckCircle, FaFileExport, FaSignOutAlt, FaPodcast, FaChartBar, FaBullhorn, FaBell, FaExclamationCircle, FaCalendar } from 'react-icons/fa';
import './index.css';
import { courses } from "../../../Kanbas/Database";
import { useParams, useLocation } from "react-router-dom";


function Status() {
    const courseStatusButtons = [
        { icon: <FaFileExport />, text: 'Import Existing Content' },
        { icon: <FaSignOutAlt />, text: 'Import From Commons' },
        { icon: <FaPodcast />, text: 'Choose Home Page' },
        { icon: <FaChartBar />, text: 'View Course Stream' },
        { icon: <FaBullhorn />, text: 'New Announcement' },
        { icon: <FaChartBar />, text: 'New Analytics' },
        { icon: <FaBell />, text: 'View Course Notification' },
    ];

    const { courseId } = useParams();
    const courseIndex = courses.findIndex((course) => course._id === courseId);

    const todoItems = [
        {
            icon: <FaExclamationCircle />,
            text: courses[courseIndex]?.todo.description,
            points: `${courses[courseIndex]?.todo.points} points`,
            dueDate: `${courses[courseIndex]?.todo.dueDate} at ${courses[courseIndex]?.todo.dueTime}`
        },
    ];

    const upcomingItems = courses[courseIndex]?.events.map((event) => ({
        icon: <FaCalendar />,
        text: event.type,
        course: event.courseCode,
        date: `${event.date} at ${event.time}`
    }));

    return (
        <div className="flex-grow-0 me-2 d-none d-lg-block course-status-button-group">
            {courseStatusButtons.map((button, index) => (
                <button key={index} type="button" className={`course-status-button`}>
                    {button.icon} {button.text}
                </button>
            ))}

            <br/>
            <br/>
            <h5 style={{ fontWeight: 'bold' }}>To Do</h5>
            <hr />
            {todoItems.map((item, index) => (
                <div key={index}>
                    <a href="#" className="red-link">
                        {item.icon} {item.text}
                    </a>
                    <br />
                    {item.points} • {item.dueDate}
                    <div style={{ marginBottom: '30px' }}></div>
                </div>
            ))}

            <h5 style={{ fontWeight: 'bold' }}>Coming Up</h5>
            <a href="#" className="red-link">
                {<FaCalendar />} View Calendar
            </a>
            <br />
            <hr />
            {upcomingItems.map((item, index) => (
                <div key={index}>
                    <a href="#" className="red-link">
                        {item.icon} {item.text}<br />
                    </a>
                    {item.course}<br />
                    {item.date}<br /><br />
                </div>
            ))}
            <a href="#" className="red-link">4 more in the next week...</a>
        </div>
    );
}

export default Status;
