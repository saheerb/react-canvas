import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';

import BasicBox from '../components/BasicBox';


export default class example extends Component {

  constructor() {
    super();
    this.state = {
      result: 0
    };
    this.generate()
  }

  getResponse(result){
    let text=""
    for (var i = 0; i < result.length; i++) {
      text += result[i];
    }
    console.log("Response: "+result)
    if (this.expected_result === parseInt(text))
    {
      console.log("Regenerate: ")
      this.generate()
    }
    this.setState({result:parseInt(text)})
  }

  generate() {
    this.length = 3
    this.number_1 = Math.floor(Math.random() * 1000)
    this.number_2 = Math.floor(Math.random() * 1000)
    this.result_box_count =  this.length + 1
    this.operator="+"
    this.expected_result = eval (this.number_1 + this.operator + this.number_2)
    
    console.log("Generated No1:"+this.number_1)
    console.log("Generated No2:"+this.number_2)
    console.log("Generated Expected Result: "+this.expected_result)

    // this.setState({result:this.expected_result})
  }

  render() {
    //this.generate();

    return (
      <View>
        <BasicBox 
          number_1={this.number_1} 
          number_2={this.number_2} 
          operator={this.operator}
          result_box_count={this.result_box_count}
          get_result = {this.getResponse.bind(this)}
        />

        <Text>
          {/* {console.log(this.expected_result)} */}
          {/* {console.log(this.state.result)} */}
          {/* {this.state.result===this.expected_result ? "": "Oh Boy!" } */}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5FCFF',
  },

});