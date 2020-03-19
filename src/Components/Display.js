import React, { Component } from 'react'

class Display extends Component {



    render() {
        console.log(this.props.name)
        return (
            <section>
                <p>{this.props.name}</p>
            </section>
        )
    }
}

export default Display;
