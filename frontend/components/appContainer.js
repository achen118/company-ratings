import { connect } from 'react-redux';
import App from './app';
import { fetchAllCompanies, updateCompany } from '../actions/companiesActions';
import { fetchGlassdoorCompany } from '../actions/glassdoorActions';
import { receiveErrors } from '../actions/errorsActions';

const mapStateToProps = state => {
    return {
        errors: state.errors,
        companies: state.companies
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllCompanies: () => dispatch(fetchAllCompanies()),
        updateCompany: company => dispatch(updateCompany(company)),
        fetchGlassdoorCompany: company => dispatch(fetchGlassdoorCompany(company)),
        receiveErrors: errors => dispatch(receiveErrors(errors))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);