import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import MobileView from "./mobileView";
import { FaGlasses } from "react-icons/fa";
import "./index.css";
import Home from "./Home";
import { useEffect, useState } from "react";

function Courses() {
    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId);
    const location = useLocation();
    const selectedPath = location.pathname.split("/").pop();
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (

        <div>
            {isMobile ?
                <div className="mobile-view">
                    <MobileView />
                    <Modules />
                </div>
                :
                <div>
                    <br />
                    <div style={{ display: "flex" }}>
                        <h3 className="course-title"><HiMiniBars3 className="minibar" /> &nbsp; {course?._id} {course?.name} </h3>
                        <div className="course-title-greater"> {">"} </div>
                        <div className="course-title-path"> {selectedPath} </div>
                    </div>
                    <div className="student-view">
                        <button className="btn btn-primary student-view-button">
                            <FaGlasses /> Student View
                        </button>
                    </div>
                    <hr />
                    <div className="term-text">{course?.termText}</div>
                    <div style={{ display: "flex" }}>
                        <CourseNavigation />
                        <div className="course-nav-content">
                            <Routes>
                                <Route path="/" element={<Navigate to="Home" />} />
                                <Route path="Home" element={<Home />} />
                                <Route path="Modules" element={<Modules />} />
                                <Route path="Piazza" element={<h1>Piazza</h1>} />
                                <Route path="Assignments" element={<h1>Assignments</h1>} />
                                <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
                                <Route path="Grades" element={<h1>Grades</h1>} />
                            </Routes>
                        </div>
                    </div>
                </div>
            }
        </div>

    );
}

export default Courses;