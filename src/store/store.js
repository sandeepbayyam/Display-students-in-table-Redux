import {createStore} from 'redux';
import studentReducer from './students.reducer.js'

const store = new createStore(studentReducer);
export default store;