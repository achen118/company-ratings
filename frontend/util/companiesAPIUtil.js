import axios from 'axios';

export const fetchAllCompanies = () => {
    return axios({
        method: 'GET',
        url: '/api/companies'
    });
};

export const addNewCompany = company => {
    return axios({
        method: 'POST',
        url: '/api/companies',
        data: { company }
    });
};

export const updateCompany = company => {
    return axios({
        method: 'PATCH',
        url: `/api/companies/${company.id}`,
        data: { company }
    });
};