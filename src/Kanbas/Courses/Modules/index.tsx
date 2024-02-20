import ModuleList from "./List";
import ModuleButtons from "./Buttons";

function Modules() {
  return (
    <div className="modules-fr">
      <ModuleButtons />
      <hr />
      <ModuleList />
    </div>
  );
}
export default Modules;