import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class DetailLoan extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <View>
        <Text> DetailLoan </Text>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailLoan)
