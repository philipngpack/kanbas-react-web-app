import { FaEllipsisV } from 'react-icons/fa';

function AssignmentButtons() {
    return (



        <div className="assignment-buttons">
            <div className="search-container">
                <input type="text" placeholder="Search for Assignment" className="search-input" />
            </div>
            <div className="button-container">
                <button className="btn btn-primary grey-button">+ Group</button>
                <button className="btn btn-primary plus-module-button">+ Assignment</button>
                <button className="btn btn-primary ellipsis-button">
                    <FaEllipsisV />
                </button>
            </div>
        </div>

    );
}

export default AssignmentButtons;
