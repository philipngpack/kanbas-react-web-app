import "./index.css";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { FaFilePen, FaTrash } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";


function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector((state: KanbasState) => 
  state.modulesReducer.modules);

  const module = useSelector((state: KanbasState) => 
    state.modulesReducer.module);
  const dispatch = useDispatch();
  return (
    <>
      <ul className="list-group wd-modules">
        {moduleList.filter((module) => module.course === courseId).map((module) => (
          <li className="list-group-item" key={module._id} onClick={() => setModule(module)}>
            <div>
              <FaEllipsisV className="me-2" />
              <span>{module.name}</span>
              <span className="float-end">

                <div className="module-edit-buttons">
                  <button> {<FaCheckCircle className="text-success" />}</button>
                  <button> {<FaPlusCircle />} </button>
                  <button> {<FaEllipsisV />} </button>
                  <button className="btn icon-button" onClick={() => dispatch(deleteModule(module._id))}>
                    <FaTrash />
                  </button>
                  
                  <button className="btn icon-button" onClick={() => dispatch(updateModule(module._id))}>
                    <FaFilePen />
                  </button>
                </div>
              </span>
              <br />
              <span className="ms-2">{module.description}</span>

            </div>
            <ul className="list-group">
              {module.lessons?.map((lesson: any) => (
                <li className="list-group-item" key={lesson._id}>
                  <FaEllipsisV className="me-2" />
                  {lesson.name}
                  <span className="float-end">
                    <FaCheckCircle className="text-success" />
                    <FaEllipsisV className="ms-2" />
                  </span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <hr />
      <li className="new-modules-box">
        <input
          value={module.name}
          onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
        />
        <textarea
          value={module.description}
          onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
        />
        <button className="btn btn-primary grey-button" onClick={() => dispatch(addModule({ ...module, course: courseId }))}>Add</button>
        <button className="btn btn-primary grey-button" onClick={() => dispatch(updateModule(module))}>Update</button>
      </li>
    </>
  );
}

export default ModuleList;