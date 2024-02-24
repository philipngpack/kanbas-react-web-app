import ModuleList from "../Modules/List";
import ModuleButtons from "../Modules/Buttons";
import Status from "./status";
import "./index.css";

function Home() {

    return (
        <div className="home-fr">
            <div className="modules-fr">
                <ModuleButtons />
                <hr />
                <ModuleList />
            </div>
            <div>
                <Status />
            </div>
        </div>
    );
}
export default Home;
