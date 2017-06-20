import React, { PropTypes } from 'react'
import Dimensions from 'react-dimensions'

class MyComponent extends React.Component {
  static propTypes = {
    containerWidth: PropTypes.number.isRequired,
    containerHeight: PropTypes.number.isRequired
  }

  render () {
    return (
      <div style={{
        backgroundColor: 'LightGreen',
        width: this.props.containerWidth,
        height: this.props.containerHeight
      }}>
      {`${this.props.containerWidth}px x ${this.props.containerHeight}px`}
      </div>
		)
  }
}

const EnhancedComponent = Dimensions({elementResize: true, className: 'react-dimensions-wrapper'})(MyComponent)

export default EnhancedComponent
