import React, { Component } from 'react'
import Display from './Display';

export default class Search extends Component {

    state = {
        name: ''
    }


    getDataFunc = (e, name) => {
        e.preventDefault();
        fetch(`https://swapi.co/api/people/?search=${name}`)
            .then(result => result.json())
            .then(resultData => <Display name={resultData} />);
    }

    render() {


        return (
            <section>
                <form onSubmit={e => { this.getDataFunc(e, this.state.name) }}>
                    <label htmlFor="name">Enter Name</label>
                    <input id="name" type="text" value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
                    <button type="submit">Enter</button>
                </form>
                <Display />
            </section>
        )
    }
}

