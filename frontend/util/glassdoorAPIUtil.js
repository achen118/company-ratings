import axios from 'axios';

export const fetchGlassdoorCompany = company => {
    return axios({
        method: 'GET',
        url: `https://api.glassdoor.com/api/api.htm?v=1&format=json&t.p=${id}&t.k=${key}&action=employers&q=${company}&userip=192.168.43.42&useragent=Mozilla/%2F4.0`
    });
};