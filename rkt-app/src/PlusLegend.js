import React, {Component} from 'react';

class PlusLegend extends Component {
    state = {
        name: null,
        number: null,
        goals: null
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addLegend(this.state);
        
    }
    render() {
        return(
        <div>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" onChange={this.handleChange} />
                <label htmlFor="number">Number: </label>
                <input type="text" id="number" onChange={this.handleChange} />
                <label htmlFor="goals">Goals: </label>
                <input type="text" id="goals" onChange={this.handleChange} />
                <button>Submit</button>
            </form>
        </div>
        )}
}

export default PlusLegend