import ArrayIndexAndLength from "../arrays/ArrayIndexAndLength";
import AddingAndRemovingDataToFromArrays from "../arrays/AddingAndRemovingDataToFromArrays";
import ForLoops from "../arrays/ForLoops";
import MapFunction from "./MapFunction";

function WorkingWithArrays() {
    var functionScoped = 2;
    let blockeScoped = 5;
    const constant1 = functionScoped - blockeScoped;
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2'];
    let variableAray = [functionScoped, blockeScoped, constant1, numberArray1, stringArray1];

    return (
        <div>
            <h3>Working with Arrays</h3>
            numberArray1 = {numberArray1}<br />
            stringArray1 = {stringArray1}<br />
            variableAray = {variableAray}<br />
            <ArrayIndexAndLength />
            <AddingAndRemovingDataToFromArrays />
            <ForLoops />
            <MapFunction />
        </div>
    );
}

export default WorkingWithArrays;