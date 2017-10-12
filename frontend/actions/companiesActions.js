import * as companiesAPIUtil from '../util/companiesAPIUtil';
import { receiveErrors, clearErrors } from '../actions/errorsActions';

export const RECEIVE_COMPANIES = "RECEIVE_COMPANIES";
export const RECEIVE_COMPANY = "RECEIVE_COMPANY";

export const receiveCompanies = companies => {
    return {
        type: RECEIVE_COMPANIES,
        companies
    };
};

export const receiveCompany = company => {
    return {
        type: RECEIVE_COMPANY,
        company
    };
};

export const fetchAllCompanies = () => dispatch => {
    return companiesAPIUtil.fetchAllCompanies()
        .then(response => {
            dispatch(receiveCompanies(response.data));
            dispatch(clearErrors());
        }, errors => receiveErrors(errors.response.data));
};

export const addNewCompany = company => dispatch => {
    return companiesAPIUtil.addNewCompany(company)
        .then(response => {
            dispatch(receiveCompany(response.data));
            dispatch(clearErrors());
        }, errors => receiveErrors(errors.response.data));
};

export const updateCompany = company => dispatch => {
    return companiesAPIUtil.updateCompany(company)
        .then(response => {
            dispatch(receiveCompany(response.data));
            dispatch(clearErrors());
        }, errors => receiveErrors(errors.response.data));
};