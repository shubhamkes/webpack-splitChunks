/** Utils */
import { Get } from "./Utils/http.utils";
import moment from 'moment';

function TestUtilFunction() {
    console.log(moment().calendar());
    console.log('Minimal version of utils function');
}

export {
    TestUtilFunction,
    Get,
}