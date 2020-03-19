import React, { Component } from 'react'
import '../Style/Display.css';

class Display extends Component {

    render() {

        return (
            <section>
                <h1>NAME LIST</h1>
                {this.props.showData.map((data, i) => {
                    return (

                        <ul key={i}>

                            <li>{data.name}</li>
                        </ul>
                    )
                })}

            </section>
        )
    }
}

export default Display;
