import { combineReducers } from 'redux';
import errorsReducer from './errorsReducer';
import companiesReducer from './companiesReducer';

const rootReducer = combineReducers({
    errors: errorsReducer,
    companies: companiesReducer
});

export default rootReducer;