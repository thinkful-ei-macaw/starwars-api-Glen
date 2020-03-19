import React, { Component } from 'react'

class Display extends Component {



    render() {


        return (
            <section>
                {this.props.showData.forEach(data => {
                    return (

                        <ul>
                            <li>{data.name}</li>
                        </ul>
                    )
                })}

            </section>
        )
    }
}

export default Display;
