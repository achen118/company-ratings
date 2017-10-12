import { RECEIVE_COMPANIES, RECEIVE_COMPANY } from '../actions/companiesActions';
import merge from 'lodash/merge';

const defaultState = {
    allIds: [],
    byId: {}
};

const CompaniesReducer = (state = defaultState, action) => {
    Object.freeze(state);
    let nextState;
    switch (action.type) {
        case (RECEIVE_COMPANIES):
            nextState = merge({}, defaultState);
            nextState.allIds = Object.keys(action.companies);
            nextState.allIds.forEach(companyId => {
                nextState.byId[companyId] = action.companies[companyId];
            });
            return nextState;
        case (RECEIVE_COMPANY):
            nextState = merge({}, state);
            nextState.byId[action.company.id] = action.company;
            if (!nextState.allIds.includes(action.company.id.toString())) {
                nextState.allIds.push(action.company.id);
            }
            return nextState;
        default:
            return state;
    }
};

export default CompaniesReducer;