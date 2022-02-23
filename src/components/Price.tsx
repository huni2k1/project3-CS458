import React, {Component} from 'react'
import "./price.css"
class Price extends React.Component<{val:number}> {
    render() {
      return <h1 className="price">{this.props.val}$</h1>;
    }
  }
  export default Price