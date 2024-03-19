import "./index.css";
import { Link } from "react-router-dom";
import { FaFile, FaFilePen, FaTrash } from "react-icons/fa6";

function Dashboard({ coursesState, course, setCourse, addNewCourse, deleteCourse, updateCourse }: {
    coursesState: any[];
    course: any;
    setCourse: (course: any) => void;
    addNewCourse: () => void;
    deleteCourse: (course: any) => void;
    updateCourse: () => void;
}
) {
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
                                <img
                                    src={`/images/${course.image}`}
                                    className="card-img-top"
                                    style={{ height: 150 }} />
                                <div className="card-body">
                                    <Link
                                        className="card-title"
                                        to={`/Kanbas/Courses/${course._id}/Home`}>
                                        {course.name} ({course.number})
                                    </Link>
                                    <p className="card-text">{course.name}</p>
                                    <p className="card-text">{course.startDate} to {course.endDate}</p>
                                    <div className="card-buttons">
                                        <Link
                                            to={`/Kanbas/Courses/${course._id}/Home`}
                                            className="btn icon-button">
                                            <FaFile />
                                        </Link>
                                        <button className="btn icon-button" onClick={(event) => {
                                            event.preventDefault();
                                            deleteCourse(course._id);
                                        }}>
                                            <FaTrash />
                                        </button>
                                        <button className="btn icon-button" onClick={(event) => {
                                            event.preventDefault();
                                            setCourse(course);
                                        }}>
                                            <FaFilePen />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <hr />
            <div className="form-box">
                <h5>Course Editor</h5>
                <input
                    value={course.name}
                    className="form-control"
                    onChange={(e) => setCourse({ ...course, name: e.target.value })}
                />
                <input
                    value={course.number}
                    className="form-control"
                    onChange={(e) => setCourse({ ...course, number: e.target.value })}
                />
                <input
                    value={course.startDate}
                    className="form-control"
                    type="date"
                    onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
                />
                <input
                    value={course.endDate}
                    className="form-control"
                    type="date"
                    onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
                />
                <div className="form-buttons">
                    <button className="btn btn-primary grey-button" onClick={addNewCourse}>Add</button>
                    <button className="btn btn-primary grey-button" onClick={updateCourse}>Update</button>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;