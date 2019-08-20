import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

class CounterApp extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            backgroundColor: 'steelblue',
          }}>
          <TouchableOpacity onPress={this.props.increaseFunction}>
            <Text style={{fontSize: 40}}>Increase</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.props.decreaseFunction}>
            <Text style={{fontSize: 40}}>Decrease</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'orange',
          }}>
          <Text style={{fontSize: 100}}>{this.props.counter}</Text>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increaseFunction: () => dispatch({type: 'INCREASE_COUNTER'}),
    decreaseFunction: () => dispatch({type: 'DECREASE_COUNTER'}),
  };
}

export default connect(mapStateToProps)(CounterApp);
