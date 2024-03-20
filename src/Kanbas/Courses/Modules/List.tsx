import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { FaFilePen, FaTrash } from "react-icons/fa6";


function ModuleList() {
  const { courseId } = useParams();
  const [moduleList, setModuleList] = useState<any[]>(modules.filter((module) => module.course === courseId));
  const [module, setModule] = useState({
    name: "New Module",
    description: "New Description",
    course: courseId,
    _id: new Date().getTime().toString(),
  });

  const addModule = () => {
    const newModule = { ...module, _id: new Date().getTime().toString() };
    const newModuleList = [newModule, ...moduleList];
    setModuleList(newModuleList);
  };

  const deleteModule = (moduleId: string) => {
    const newModuleList = moduleList.filter((module) => module._id !== moduleId);
    setModuleList(newModuleList);
  };

  const updateModule = () => {
    const newModuleList = moduleList.map((m) => {
      if (m._id === module._id) {
        return module;
      } else {
        return m;
      }
    });
    setModuleList(newModuleList);
  };

  return (
    <>
      <ul className="list-group wd-modules">
        {moduleList.map((module) => (
          <li className="list-group-item" key={module._id} onClick={() => setModule(module)}>
            <div>
              <FaEllipsisV className="me-2" />
              <span>{module.name}</span>
              <span className="float-end">

                <div className="module-edit-buttons">
                  <button> {<FaCheckCircle className="text-success" />}</button>
                  <button> {<FaPlusCircle />} </button>
                  <button> {<FaEllipsisV />} </button>
                  <button className="btn icon-button" onClick={(event) => {
                    event.preventDefault();
                    deleteModule(module._id);
                  }}>
                    <FaTrash />
                  </button>
                  
                  <button className="btn icon-button" onClick={(event) => {
                    event.preventDefault();
                    updateModule();
                  }}>
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
          onChange={(e) => setModule({ ...module, name: e.target.value })}
        />
        <textarea
          value={module.description}
          onChange={(e) => setModule({ ...module, description: e.target.value })}
        />
        <button className="btn btn-primary grey-button" onClick={addModule}>Add</button>
        <button className="btn btn-primary grey-button" onClick={updateModule}>Update</button>
      </li>
    </>
  );
}

export default ModuleList;