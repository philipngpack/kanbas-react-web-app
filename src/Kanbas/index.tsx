import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import { useEffect, useState } from "react";
import { courses } from "./Database";


function Kanbas() {
    const [coursesState, setCourses] = useState(courses);
    const [course, setCourse] = useState({
        _id: "1200",
        name: "Course Name",
        number: "Course Number",
        startDate: "2024-01-08",
        endDate: "2024-04-28",
        image: "../../images/khoury.jpg",
    });

    const addNewCourse = () => {
        const newCourse = {
            ...course,
            termText: "Spring 2024 Semester Full Term",
            events: [],
            todo: { description: "", points: 0, dueDate: "", dueTime: "" }
        };
        setCourses([...courses, newCourse]);
    };

    const deleteCourse = (courseId: string) => {
        setCourses(coursesState.filter((course) => course._id !== courseId));
    };

    const updateCourse = () => {
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return {
                        ...course,
                        termText: c.termText,
                        events: c.events,
                        todo: c.todo
                    };
                } else {
                    return c;
                }
            })
        );
    };

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
        <div className="d-flex">
            {!isMobile ? <KanbasNavigation /> : null}
            <div style={{ flexGrow: 1 }}>
                <Routes>
                    <Route path="/" element={<Navigate to="Dashboard" />} />
                    <Route path="Account" element={<h1>&nbsp; Account</h1>} />
                    <Route
                        path="Dashboard"
                        element={
                            <Dashboard
                                coursesState={coursesState}
                                course={course}
                                setCourse={setCourse}
                                addNewCourse={addNewCourse}
                                deleteCourse={deleteCourse}
                                updateCourse={updateCourse}
                            />
                        }
                    />
                    <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
                    <Route path="Courses" element={<Navigate to="CS4550/Home" />} />
                </Routes>
            </div>
        </div>
    );
}
export default Kanbas;