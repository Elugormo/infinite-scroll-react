import React from 'react'

class Photo extends React.Component {
    render() {
        return(
            <img src={this.props.url} />
        )
    }
}

export default Photo