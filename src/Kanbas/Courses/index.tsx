import { courses } from "../../Kanbas/Database";
import { useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import "./index.css";

function Courses() {
    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId);
    return (
        <div>
            <br />
            <h3 className="course-title"><HiMiniBars3 className="minibar" /> &nbsp; {course?._id} {course?.name}</h3>
            <hr />
        </div> 
    );
}

export default Courses;