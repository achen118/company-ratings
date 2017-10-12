import axios from 'axios';

export const fetchAllCompanies = () => {
    return axios({
        method: 'GET',
        url: 'https://company-ratings.herokuapp.com/api/companies'
    });
};

export const addNewCompany = company => {
    return axios({
        method: 'POST',
        url: 'https://company-ratings.herokuapp.com/api/companies',
        data: { company }
    });
};

export const updateCompany = company => {
    return axios({
        method: 'PATCH',
        url: `https://company-ratings.herokuapp.com/api/companies/${company.id}`,
        data: { company }
    });
};