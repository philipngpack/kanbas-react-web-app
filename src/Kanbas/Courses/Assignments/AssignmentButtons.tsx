import { FaEllipsisV, FaCheckCircle } from 'react-icons/fa';

function AssignmentButtons() {
    return (
        <div className="flex module-buttons">
            <button className="btn btn-primary grey-button">Collapse All</button>
            <button className="btn btn-primary grey-button">View Progress</button>
            <button className="btn btn-primary grey-button">
                <FaCheckCircle style={{ color: 'green', margin: "0px 5px 2px 0px" }}></FaCheckCircle> Publish All
            </button>
            <button className="btn btn-primary plus-module-button">+ Module</button>
            <button className="btn btn-primary ellipsis-button">
                <FaEllipsisV />
            </button>
        </div>
    );
}

export default AssignmentButtons;
