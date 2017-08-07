// import librarys for makign a component
import React from 'react';
import { Text, View } from 'react-native';


// make component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',


  },
  textStyle: {
    fontSize: 20,
    color: 'white',
  }
};
// make component available to other parts of the app
export default Header;
