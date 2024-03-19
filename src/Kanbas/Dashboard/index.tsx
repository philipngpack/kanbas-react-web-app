import React, { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { courses } from "../Database";
import { FaFilePen, FaTrash } from "react-icons/fa6";

function Dashboard() {
    const [coursesState, setCourses] = useState(courses);

    const handleDelete = (courseId: string) => {
        setCourses(coursesState.filter((course) => course._id !== courseId));
    };

    return (
        <div className="p-4">
            <h1>Dashboard</h1>
            <hr />
            <h2>Published Courses ({coursesState.length})</h2>
            <hr />
            <div className="row">
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    {coursesState.map((course) => (
                        <div key={course._id} className="col" style={{ width: 300 }}>
                            <div className="card">
                                <img src={`/images/${course.image}`} className="card-img-top" style={{ height: 150 }} />
                                <div className="card-body">
                                    <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}>
                                        {course.name} ({course._id})
                                    </Link>
                                    <p className="card-text">{course.name}</p>
                                    <p className="card-text">{course.termText}</p>
                                    <div className="btn-group" role="group">
                                        <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn icon-button">
                                            <FaFilePen />
                                        </Link>
                                        <button className="btn icon-button" onClick={() => handleDelete(course._id)}>
                                            <FaTrash />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;