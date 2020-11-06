
import React, { Component, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import Buttons from './src/components/Buttons'
import Display from './src/components/Display';

const inicialState = {
  displayValue: "0",
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
}

export default class  App extends Component {

  state = {...inicialState}

  addDigit = n => {
      

      const clearDisplay = this.state.displayValue === "0" || 
      this.state.clearDisplay

      if(n === "."  && !clearDisplay && this.state.displayValue.includes(".")) {
        return
      }

      const currentValue = clearDisplay ? '' : this.state.displayValue
      const displayValue = currentValue + n 
      this.setState({displayValue, clearDisplay: false})

        if(n !== '.'){
          const newValue = parseFloat(displayValue)
          const values = [...this.state.values]
          values[this.state.current] = newValue
          this.setState({values})
        }
  }

  clearMemory = () => {
    this.setState({...inicialState})
  }

  setOperattion = operation => {
    if(this.state.current === 0) {
      this.setState({operation, current: 1, clearDisplay:true})

    }else {
      const equals = operation === '='
      const values = [...this.state.values]
      try{
        values[0] =
        eval(`${values[0]} ${this.state.operation} ${values[1]}`)
      }catch (e) {
        values[0] = this.state.values[0]
      }

      values[1] = 0

      this.setState({
        displayValue: `${values[0]}`,
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay:!equals,
        values, 
      })
    }
    
  }
  
render(){
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.display}>
        <Display conta={this.state.displayValue}></Display>
      </View>
      <View style={styles.buttons}>
        <Buttons name={"AC"} triple onClick={this.clearMemory}></Buttons>
        <Buttons name={"+"} operationButton onClick={this.setOperattion}></Buttons>
        <Buttons name={"7"} onClick={this.addDigit}></Buttons>
        <Buttons name={"8"} onClick={this.addDigit}></Buttons>
        <Buttons name={"9"} onClick={this.addDigit}></Buttons>
        <Buttons name={"-"} operationButton onClick={this.setOperattion}></Buttons>
        <Buttons name={"4"} onClick={this.addDigit}></Buttons>
        <Buttons name={"5"} onClick={this.addDigit}></Buttons>
        <Buttons name={"6"} onClick={this.addDigit}></Buttons>
        <Buttons name={"/"} operationButton onClick={this.setOperattion}></Buttons>
        <Buttons name={"1"} onClick={this.addDigit}></Buttons>
        <Buttons name={"2"} onClick={this.addDigit}></Buttons>
        <Buttons name={"3"} onClick={this.addDigit}></Buttons>
        <Buttons name={"*"} operationButton onClick={this.setOperattion}></Buttons>
        <Buttons name={"0"} zero onClick={this.addDigit}></Buttons>
        <Buttons name={"."} onClick={this.addDigit}></Buttons>
        <Buttons name={"="} operationButton onClick={this.setOperattion}></Buttons>

      </View>

    </SafeAreaView>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end"

  },
  buttons: {
    alignItems: "baseline",
    justifyContent: "flex-end",
    flexDirection: 'row',
    flexWrap: "wrap",
    backgroundColor: 'white',
  },
  display: {
    flex: 1,
    paddingTop: 25

  }
});
