import React from 'react'
import  Data from './Data'
import Image from './Image'

class Pokemon extends React.Component {
    render (){
        
        const { id, name, type, averageWeight, image, moreInfo} = this.props

        return ( <div className="eachOne"> 
                <p> {name} </p>
                <p> {type} </p>
                <p> {averageWeight.value} {averageWeight.measurementUnit} </p>
                <p> <Image image = {image}/> </p>
        </div> )

    }
}

export default Pokemon