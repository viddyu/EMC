import React, { Component } from "react";

class Places extends Component {
    render() {

        const list = this.props.venues.map((venue, i) => {
            return (
                // API JSON PARSE WILL INFLUENCE THIS NAME
                <li key={i}>{venue.name}</li>
            )
        })

        return (
            <div>
                <ol>
                    {list}
                </ol>
            </div>
        )
    }
}

export default Places;