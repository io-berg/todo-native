import React, { FC } from "react";
import { View } from "react-native";
import MapView from "react-native-maps";

const MapScreen: FC = () => {
  return (
    <View>
      <MapView
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </View>
  );
};

export default MapScreen;
