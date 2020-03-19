import React, { Component } from 'react';


export default class Search extends Component {

    state = {
        name: ''
    }

    submitName = (e) => {
        e.preventDefault();
        this.props.submit(this.state.name)
    }



    //Callback props
    //checkpoint 12

    render() {


        return (
            <section>
                <form onSubmit={e => { this.submitName(e) }}>
                    <label htmlFor="name">Enter Name</label>
                    <input id="name" type="text" value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
                    <button type="submit">Enter</button>
                </form>
            </section>
        )
    }
}

