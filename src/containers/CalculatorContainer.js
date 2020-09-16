import React, { Component } from 'react';
import Form from '../components/Form';
import Result from '../components/Result';

class CalculatorContainer extends Component {
    constructor() {
        super();

        this.state = {
            results: 0,
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(formData) {
        const updatedSalary = formData.salary + formData.salary2;
        const maxHouseValue = (updatedSalary * 3) + formData.deposit;
        const finalValue = maxHouseValue - formData.commitments;
        this.setState({
            results: finalValue  
        });
    }

    render(){
        return(
            <div>
                <h2>Mortgage Calculator Container</h2>
                <Form onFormSubmit={this.handleFormSubmit} />
                <Result results={this.state.results}/>
            </div>
        );
    }
}

export default CalculatorContainer;