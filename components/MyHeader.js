import React, { Component } from "react";
import { Header, Icon, Badge } from "react-native-elements";
import { View, Text, StyeSheet, Alert } from "react-native";

/*const BellIconWithBadge = (props) => {
  return (
    <View>
      <Icon
        name="bell"
        type="font-awesome"
        color="#696969"
        size={25}
        onPress={() => props.navigation.navigate("Notifications")}
      />
      <Badge
        value="1"
        containerStyle={{ position: "absolute", top: -4, right: -4 }}
      />
    </View>
  );
};*/

const MyHeader = (props) => {
  return (
    <Header
      /*leftComponent={
        <Icon
          name="bars"
          type="font-awesome"
          color="#696969"
          onPress={() => props.navigation.toggleDrawer()}
        />
      }*/
      centerComponent={{
        text: props.title,
        style: { color: "#fff", fontSize: 40, fontWeight: "bold" },
      }}
      //rightComponent={<BellIconWithBadge {...props} />}
      backgroundColor="rgb(225, 185, 135)"
    />
  );
};

export default MyHeader;
