import React from 'react'

const Mapei = () =>{
    const array = ["valor1","valor2","valor3"]
    return array.map((vl) =>  <li>{vl}</li>
 )
}


export default Mapei