import React, {Component} from 'react'

export default class Wrap extends Component {
  render() {
    return (
    <div>
      {this.props.children}
    </div>
    )
  }
}