import React from 'react';

const querify = query => {
    const chars = query.split('');
    for (let i = 0; i < chars.length; i++) {
        if (chars[i] === " ") { 
            chars[i] = "+";
        }
    }
    return chars.join('');
};

class App extends React.Component {
    componentDidMount() {
        this.props.fetchAllCompanies();
    }

    constructor(props) {
        super(props);
        this.state = {
            company: "",
            rating: "",
            isUpdating: false,
            updateId: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.showUpdateInput = this.showUpdateInput.bind(this);
        this.updateRating = this.updateRating.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleSubmit(event) {
        if (this.state.company) {
            let companyQuery = querify(this.state.company);
            this.props.fetchGlassdoorCompany(companyQuery)
                .then(() => this.setState({
                    company: "",
                    rating: "",
                    isUpdating: false,
                    updateId: ""
            }));
        } else {
            this.props.receiveErrors(["Please enter a valid company name"]);
        }
    }

    handleUpdate(key) {
        return event => this.setState({
            [key]: event.target.value
        });
    }

    showUpdateInput(event) {
        document.querySelectorAll('.update-input').forEach(el => el.classList.add('hidden'));
        document.getElementById(`${event.target.id}-input`).classList.remove('hidden');
        document.getElementById(`${event.target.id}-input`).focus();
        this.setState({
            isUpdating: true,
            updateId: event.target.id,
            rating: this.props.companies.byId[event.target.id].rating
        });
    }

    updateRating(event) {
        if (this.state.rating >= 0 && this.state.rating <= 5) {
            this.props.updateCompany({
                id: this.state.updateId,
                rating: this.state.rating
            }).then(() => this.handleCancel());
        } else {
            this.props.receiveErrors(["Please enter a valid rating from 0 to 5"]);
        }
    }

    handleCancel(event) {
        document.getElementById(`${this.state.updateId}-input`).classList.add('hidden');
        this.setState({
            company: "",
            rating: "",
            isUpdating: false,
            updateId: ""
        });
    }

    render() {
        const { errors,     companies } = this.props;
        const { isUpdating, updateId, rating, company } = this.state;
        let tableHeader = "No companies in the database. Please enter a company name above.";
        if (companies.allIds.length > 0) {
            tableHeader = <ul className="table-headers">
                <li>Company Name</li>
                <li>Company Rating</li>
                <li>Update Rating</li>
            </ul>;
        }
        return <div className="outer-container">    
            <header>
                <h1 className="title">Company Ratings</h1>
            </header>
            <article>
                <section className="glassdoor-section">
                    <p>Get Glassdoor Rating for:</p>
                    <input
                        placeholder="Enter company name"
                        className="glassdoor-input"
                        onChange={ this.handleUpdate('company') }
                        value={ company }
                        type="text"/>
                    <button
                        className="glassdoor-submit"
                        onClick={ this.handleSubmit }>
                        Submit
                    </button>
                </section>
                <section>
                    <ul>
                        {
                            errors.map((error, idx) => (
                                <li
                                    className="error"
                                    key={ idx }>
                                    { error }
                                </li>
                            ))
                        }
                    </ul>
                </section>
                <section className="companies">
                    { tableHeader }
                    {
                        companies.allIds.map((companyId, idx) => (
                            <ul className="company-info" key={ idx }>
                                <li>
                                    { companies.byId[companyId].name }
                                </li>
                                <li>
                                    { companies.byId[companyId].rating }
                                </li>
                                <input
                                    id={ `${companyId}-input` }
                                    onChange={ this.handleUpdate('rating') }
                                    value={ rating }
                                    className={ `update-input hidden ${companyId}` }
                                    type="text"/>
                                <li>
                                    <button
                                        className="update-button"
                                        id={ companyId }
                                        onClick={ isUpdating && updateId === companyId ? this.updateRating : this.showUpdateInput }>
                                        { isUpdating && updateId === companyId ? "Submit Update" : "Update Rating" }
                                    </button>
                                    {isUpdating && updateId === companyId ?
                                        <button
                                            className="cancel-button" 
                                            onClick={this.handleCancel}>
                                            Cancel
                                        </button> : "" } 
                                </li>
                            </ul>
                        ))
                    }
                </section>
            </article>
        </div>;
    }
}

export default App;