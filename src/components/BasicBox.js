import React, { Component } from 'react';
import {Text, TextInput, View, StyleSheet, Button} from "react-native"
// import Signature from 'react-native-signature-panel';


export default class BasicBox extends Component {
    constructor(props) {
        super(props);
        this.curserPosition = this.props.result_box_count - 1
        this.state = {
            result: Array(this.props.result_box_count).fill("")
        };
    }

    setInputValue = (txt, index) => {
        var result=this.state.result;
        result[index]=txt;
        this.curserPosition = index -1 
        this.setState({result:result})
    }

    setFocus = (input, index) => {
      console.log("set focus: "+ this.curserPosition + ": "+index)
      index === this.curserPosition ? input.focus():null
    }

    resetInputValue = (index) => {
        console.log("Reset Input value: "+index)
        if (this.state.result[index] == "")
            return
            
        var result=this.state.result;
        result[index]="";
        
        console.log("Reset1: "+this.curserPosition)
        this.setState({result:result})
        this.curserPosition = index
    }

    resetResult = () => {
        console.log("Rest Result: ")
        this.curserPosition = this.props.result_box_count - 1
        this.setState({result:Array(this.props.result_box_count).fill("")})
    }

    createTable = (number) => {
        let digits = []
        let table = []
        const factor=10
        let multiplier = 1
        
        for (var i=0; i<number.toString().length; i++) {
            const digit = Math.floor(number%(factor*multiplier)/multiplier)
            digits.push(digit)
            multiplier = multiplier * 10
        }
        
        let texts = []
        digits.reverse().map((value, index) => {
            texts.push(<Text key={`Number-${number}-${index}`} style={styles.digit}
                        // onPress={this.resetResult}
                        >{value}</Text>)
        })

        table.push(<View key={`Number-${number}`} style={styles.operand}>{texts}</View>)

        return table
    }

    createTextInput = (result_input_count) => {
        let table = []
        let texts = []
        this.state.result.map((value, index) => {
            let inputs =[]
            // The hidden Text below is created for aligning textinput to text. 
            // The value is not used anywhere
            inputs.push(<Text key={`TextInput-Text-${index}`} style={styles.digit_hidden}>1</Text>)
            inputs.push(<TextInput key={`TextInput-TextInpu-${index}`} style={styles.digit_answer} 
                        keyboardType='numeric'
                        maxLength={1}
                        onChangeText={(txt) => this.setInputValue(txt, index)}
                        onFocus={() =>this.resetInputValue(index)}
                        ref={ input =>input && this.setFocus(input, index)}
                        >
                        {this.state.result[index]}
                    </TextInput>)
            texts.push(<View key={`TextInput-View-${index}`}>{inputs}</View>)

        })

        table.push(<View key="TextInput" style={styles.operand}>{texts}</View>)

        return table
    }
    

    render(){
        return (<View>
            <View style={styles.main}>
                <View>
                    {this.createTable(this.props.number_1)}
                    {this.createTable(this.props.number_2)}
                    {this.createTextInput(this.props.result_box_count)}
                </View>
                <View>
                    <Text style={styles.digit}>{this.props.operator}</Text>
                </View>
            </View>
        
            <Button onPress={()=>{
                this.resetResult()
                this.props.get_result(this.state.result)
                //this.resetResult()
            }}
                title="Check Result"
            />
        </View>) 
    }
}


const styles = StyleSheet.create ({
    main: {
        flexDirection:"row",
        justifyContent: "center",
    },
    digit: {
        fontSize: 80,
    },
    digit_hidden: {
        fontSize: 80,
        flex:1,
    },
    operand: {
        flexDirection:"row",
        justifyContent:"flex-end",
    },
    digit_answer: {
        fontSize: 80,
        backgroundColor:'gray',
        borderWidth:1,
    },
});

// export default BasicBox;
