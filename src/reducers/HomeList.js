import {AnsweredQuestion} from '../constant/constant';
import createReducer from '../utils/createReducer';

const initialState = {
  isLoaded: false,
  recent: [],
  List: [],
  Log: '',
};
const actionHandler = {
  [AnsweredQuestion.LIST]: (state, action) => {

    return {isLoaded: true, data: action.data};
  },
};
export default createReducer(initialState, actionHandler);
