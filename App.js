import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
const math = require('mathjs');

const windowWidth = Dimensions.get('window').width;

export default function App() {
  const [answerValue, setAnswerValue] = useState('0');

  const buttonPressed = (value) => {
    if (value === 'C') {
      setAnswerValue('0');
    } else if (value === '=') {
      try {
        // Evaluate the expression
        const result = math.evaluate(answerValue);
        setAnswerValue(result.toString());
      } catch (error) {
        setAnswerValue('Error'); // Handle evaluation errors
      }
    } else {
      // Update the display value
      setAnswerValue(prev => prev === '0' ? value : prev + value);
    }
  };

  return (

    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.resultContainer}>
          <Text style={styles.textElement}>{answerValue}</Text>
        </View>

        <StatusBar style="dark" />
        {/* ---------------------------------ROW 1------------------------------------------------------------------------------------------------------ */}
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.btnc}
            onPress={() => buttonPressed("C")}
          >
            <Text style={styles.textAllbtn}> C </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnc}
            onPress={() => buttonPressed("*-1")}
          >
            <Text style={styles.textAllbtn}> +/- </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnc}
            onPress={() => buttonPressed("/100")}
          >
            <Text style={styles.textAllbtn}> % </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnc}
            onPress={() => buttonPressed("/")}
          >
            <Text style={styles.textAllbtn}> / </Text>
          </TouchableOpacity>
        </View>

        {/* ---------------------------------ROW 2------------------------------------------------------------------------------------------------------ */}

        <View style={styles.row}>
          <TouchableOpacity
            style={styles.btnc}
            onPress={() => buttonPressed("7")}
          >
            <Text style={styles.textAllbtn}> 7 </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnc}
            onPress={() => buttonPressed("8")}
          >
            <Text style={styles.textAllbtn}> 8 </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnc}
            onPress={() => buttonPressed("9")}
          >
            <Text style={styles.textAllbtn}> 9 </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnc}
            onPress={() => buttonPressed("*")}
          >
            <Text style={styles.textAllbtn}> x </Text>
          </TouchableOpacity>
        </View>
        {/* ---------------------------------ROW 3------------------------------------------------------------------------------------------------------ */}
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.btnc}
            onPress={() => buttonPressed("4")}
          >
            <Text style={styles.textAllbtn}> 4 </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnc}
            onPress={() => buttonPressed("5")}
          >
            <Text style={styles.textAllbtn}> 5 </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnc}
            onPress={() => buttonPressed("6")}
          >
            <Text style={styles.textAllbtn}> 6 </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnc}
            onPress={() => buttonPressed("-")}
          >
            <Text style={styles.textAllbtn}> - </Text>
          </TouchableOpacity>
        </View>
        {/* ---------------------------------ROW 4------------------------------------------------------------------------------------------------------ */}
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.btnc]}
            onPress={() => buttonPressed("1")}
          >
            <Text style={styles.textAllbtn}> 1 </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnc}
            onPress={() => buttonPressed("2")}
          >
            <Text style={styles.textAllbtn}> 2 </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnc}
            onPress={() => buttonPressed("3")}
          >
            <Text style={styles.textAllbtn}> 3 </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnc}
            onPress={() => buttonPressed("+")}
          >
            <Text style={styles.textAllbtn}> + </Text>
          </TouchableOpacity>
        </View>
        {/* ---------------------------------ROW 5------------------------------------------------------------------------------------------------------ */}
        <View style={styles.row}>
          {/* Long Button / 0 Button */}
          <TouchableOpacity
            style={styles.btnc}
            onPress={() => buttonPressed("0")}
          >
            <Text style={styles.textAllbtn}> 0 </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnc}
            onPress={() => buttonPressed(".")}
          >
            <Text style={styles.textAllbtn}> . </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.longbtn}
            onPress={() => buttonPressed("=")}
          >
            <Text style={styles.textLongbtn}> = </Text>
          </TouchableOpacity>
        </View>
        {/* ---------------------------------ROW END------------------------------------------------------------------------------------------------------ */}
      </View>
    </SafeAreaView>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333b48",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  row: {
    flexDirection: 'row', // This ensures the child elements align horizontally
    justifyContent: 'center', // Centers the buttons horizontally in the row
    marginBottom: 10, // Add margin between rows if needed
  },
  resultContainer: {
    backgroundColor: "#009c55", // Green background
    width: windowWidth - 70, // Adjust width to fit your design
    padding: 0,
    margin: 20,
    borderRadius: 10,
    alignItems: "flex-end", // Align result to the right
  },
  textElement: {
    color: "white",
    fontSize: 70,
    textAlign: "right", // Align text to the right
    marginTop: 20,
    marginBottom: 10,
    marginRight: 10,
  },
  btnc: {
    backgroundColor: "#e800ce",
    marginTop: -5,
    marginBottom: 10,
    marginRight: 5,
    marginLeft: 5,
    height: windowWidth / 5,
    width: windowWidth / 5,
    borderRadius: 200,
    borderColor:"#e800ce",
    borderWidth: 4,
  },
  longbtn: {
    backgroundColor: "#ff0006",
    marginTop: -5,
    marginBottom: 15,
    marginRight: 5,
    marginLeft: 5,
    height: windowWidth / 5,
    width: windowWidth / 2.4,
    borderRadius: 200,
    borderColor:"#ff0006",
    borderWidth: 4,
  },
  textAllbtn: {
    fontSize: 35,
    marginTop: 20,
    marginBottom: 10,
    marginRight: 15,
    marginLeft: 10,
    color: "white",
    textAlign: "center",
    justifyContent: "center",
  },
  textLongbtn: {
    fontSize: 35,
    marginTop: 20,
    marginBottom: 10,
    marginRight: 15,
    marginLeft: 10,
    color: "white",
    textAlign: "center",
    justifyContent: "center",
  }
});

