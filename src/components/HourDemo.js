import React from "react"
import HoverImage from "react-hover-image"
import image from '../image/student.svg'
import dog from "../image/Dog.svg"
 
class HourDemo extends React.Component {
  render(){
    return (
      <div>
        <h2>Oh Hai!</h2>
        <HoverImage
          src={image}
          hoverSrc={dog}
        />
      </div>
    )
  }
}
export default HourDemo;

