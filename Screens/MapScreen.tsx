import React, { FC } from "react";
import { View } from "react-native";
import MapView, { LatLng } from "react-native-maps";

interface Props {
  setCoordinates: (location: LatLng) => void;
}

const MapScreen: FC<Props> = ({ setCoordinates }) => {
  return (
    <View>
      <MapView
        style={{
          width: "100%",
          height: "100%",
        }}
        onDoublePress={(e) => {
          setCoordinates;
        }}
      />
    </View>
  );
};

export default MapScreen;
