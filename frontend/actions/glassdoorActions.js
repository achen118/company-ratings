import * as glassdoorAPIUtil from '../util/glassdoorAPIUtil';
import { receiveErrors, clearErrors } from './errorsActions';
import { addNewCompany } from './companiesActions';

export const RECEIVE_GLASSDOOR_COMPANY = "RECEIVE_GLASSDOOR_COMPANY";

export const receiveGlassdoorCompany = company => {
    return {
        type: RECEIVE_GLASSDOOR_COMPANY,
        company
    };
};

export const fetchGlassdoorCompany = company => dispatch => {
    return glassdoorAPIUtil.fetchGlassdoorCompany(company)
        .then(response => {
            dispatch(addNewCompany({
                name: response.data.response.employers[0].name,
                rating: response.data.response.employers[0].overallRating
            }));
            dispatch(clearErrors());
        }, errors => receiveErrors(errors.response.data));
};