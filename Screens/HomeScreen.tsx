import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as Location from "expo-location";
import { LocationAccuracy } from "expo-location";
import { default as React, useEffect, useState } from "react";
import { Text, View } from "react-native";
import MapView, { LatLng } from "react-native-maps";
import { Button, TextInput, TouchableRipple } from "react-native-paper";
import { useTodo } from "../contexts/TodoContext";

type Props = {
  navigation: any;
};

const HomeScreen = ({ navigation }: Props) => {
  const { toggleTodo, addTodo, todos, clearTodos } = useTodo();
  const [title, setTitle] = useState<string>("");
  const [coordinates, setCoordinates] = useState<LatLng>();
  const [showMap, setShowMap] = useState<boolean>(false);

  const handleSetCoordinates = (location: LatLng) => {
    setCoordinates(location);
    setShowMap(false);
  };

  const [location, setLocation] = useState<Location.LocationObject>();
  const [errorMsg, setErrorMsg] = useState<string>();

  useEffect(() => {
    (async () => {
      await Location.requestForegroundPermissionsAsync();
      let { status } = await Location.requestBackgroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      await Location.enableNetworkProviderAsync();

      let location = await Location.getCurrentPositionAsync({
        accuracy: LocationAccuracy.Highest,
      });

      setLocation(location);
    })();
  }, []);

  if (showMap) {
    return (
      <View>
        <MapView
          style={{
            width: "100%",
            height: "100%",
          }}
          onDoublePress={(e) => {
            handleSetCoordinates(e.nativeEvent.coordinate);
            setShowMap(false);
          }}
        />
      </View>
    );
  }

  return (
    <View
      style={{
        padding: 5,
      }}
    >
      <Text>Home</Text>
      <Text>
        location: {location?.coords.latitude}, {location?.coords.longitude}
      </Text>
      <Button
        onPress={() => {
          Location.requestForegroundPermissionsAsync();
          Location.requestBackgroundPermissionsAsync();
          Location.enableNetworkProviderAsync();
          Location.getCurrentPositionAsync({
            accuracy: LocationAccuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 1,
          }).then((location) => {
            setLocation(location);
            console.log(location);
          });
        }}
      >
        {" "}
        Location Update{" "}
      </Button>
      <MaterialCommunityIcons name="star-face" size={24} color="black" />
      <View
        style={{
          marginTop: 50,
          marginBottom: 50,
        }}
      >
        <Text>Todos</Text>
        {todos.map((todo, idx) => (
          <TouchableRipple
            key={idx}
            style={{ backgroundColor: todo.completed ? "green" : "red" }}
            rippleColor="rgba(0, 0, 0, .32)"
            onPress={() => toggleTodo(todo.id)}
          >
            <View>
              <Text>{todo.title}</Text>
              <Text>{todo.coordinates?.latitude}</Text>
              <Text>{todo.coordinates?.longitude}</Text>
            </View>
          </TouchableRipple>
        ))}
      </View>
      <TextInput
        onChangeText={setTitle}
        value={title}
        style={{
          marginBottom: 10,
          borderRadius: 5,
        }}
      />
      <Text>{coordinates?.latitude + " " + coordinates?.longitude}</Text>
      <Button
        onPress={() => {
          setShowMap(true);
        }}
      >
        Set Location
      </Button>
      <Button
        onPress={() => {
          addTodo(title, coordinates);
          setTitle("");
          setCoordinates(undefined);
        }}
        disabled={!title}
      >
        Add Todo
      </Button>
      <Button onPress={clearTodos}>Clear Todos</Button>
      <Button onPress={() => navigation.navigate("Camera")}>
        Go to Camera
      </Button>
    </View>
  );
};

export default HomeScreen;
