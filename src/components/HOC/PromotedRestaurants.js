import React from "react";

export default function PromotedRestaurants(Card) {
  return function (props){
    console.log(props)
    return <Card {...props}/> 
  }
}
