import React from 'react'
import Data from'./Data'

class Image extends React.Component {
    render() {
        const { image} = this.props
        return (  <img src={image}  />)
    }
}

export default Image