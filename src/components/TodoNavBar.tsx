import React, { useState } from "react";
import { Appbar, Divider, Menu } from "react-native-paper";

interface Props {
  navigation: any;
  back?: any;
}

const TodoNavBar = ({ navigation, back }: Props) => {
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={() => navigation.goBack()} /> : null}
      <Appbar.Content title="Todo App" />
      {!back ? (
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Appbar.Action icon="dots-vertical" onPress={openMenu} />}
        >
          <Menu.Item
            onPress={() => {
              navigation.navigate("Profile");
            }}
            title="Profile"
          />
          <Menu.Item onPress={() => {}} title="Item 2" />
          <Divider
            style={{
              backgroundColor: "black",
              height: 1,
            }}
          />
          <Menu.Item onPress={() => {}} title="Item 3" />
        </Menu>
      ) : null}
    </Appbar.Header>
  );
};

export default TodoNavBar;
