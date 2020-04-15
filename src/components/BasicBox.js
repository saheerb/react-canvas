import React, { Component } from 'react';
import {Text, TextInput, View, StyleSheet, Button} from "react-native"
// import Signature from 'react-native-signature-panel';


export default class BasicBox extends Component {
    constructor() {
        super();
        //this.result=[]
        this.state = {
            result: ["","","",""]
        };
    }

    setInputValue = (txt, index) => {
        console.log(txt)
        console.log("State: "+this.state.result);
        console.log("Txt: "+txt);
        console.log("index: "+index);
        var result=this.state.result;
        result[index]=txt;
        this.setState({result:result})
    }

    resetInputValue = (index) => {
        // console.log(index)
        console.log("State: "+this.state.result);
        // console.log("Txt: "+txt);
        var result=this.state.result;
        result[index]="";
        this.setState({result:result})
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
            texts.push(<Text style={styles.digit}>{value}</Text>)
        })
        table.push(<View style={styles.operand}>{texts}</View>)

        return table
    }

    createTextInput = (result_input_count) => {
        let table = []
        let texts = []
        for (var index=0; index<result_input_count; index++) {
            // console.log(index)
            let inputs =[]
            // Why index_i needed here? without which index is alway evaluated to 4?
            const index_i =index
            inputs.push(<Text id={index_i}  style={styles.digit_hidden} >1</Text>)
            inputs.push(<TextInput style={styles.digit_answer} 
                keyboardType='numeric' 
                maxLength={1}
                onChangeText={(txt) => this.setInputValue(txt, index_i)}
                onFocus={() => this.resetInputValue(index_i)}
                >
                {this.state.result[index_i]}
            </TextInput>)
            texts.push(<View>{inputs}</View>)
        }

        table.push(<View style={styles.operand}>{texts}</View>)

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
        
            <Button onPress={()=>{this.props.get_result(this.state.result)}}
                title="Check Result"
            />
        </View>) 
    }
}


const styles = StyleSheet.create ({
    main: {
        flexDirection:"row",
        // borderWidth:1,
        // flex: 1,
        justifyContent: "center",
        // alignItems: "center"
    },
    digit: {
        fontSize: 80,
        // borderWidth:1,
        //adjustsFontSizeToFit
    },
    digit_hidden: {
        fontSize: 80,
        // borderWidth:1,
        flex:1,
        

        // color: `rgb(255,255,255)`
    },
    operand: {
        flexDirection:"row",
        justifyContent:"flex-end",
        // alignItems:"flex-end",
        // borderWidth:1,
    },
    digit_answer: {
        // alignItems:"baseline",
        // flexDirection:"row",
        // justifyContent:"flex-end",
        
        // backgroundColor: `rgb(255,255,255)`,
        
        // alignItems:"flex-end",
        fontSize: 80,
        // backgroundColor: gray`rgb(255,255,255)`,
        backgroundColor:'gray',
        borderWidth:1,
    },
});

// export default BasicBox;
