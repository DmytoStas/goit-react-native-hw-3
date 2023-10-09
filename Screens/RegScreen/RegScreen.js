import {
  ImageBackground,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Platform,
  Text,
} from "react-native";

import {
  container,
  backgroundImage,
  regContainer,
  authContainer,
  avatarContainer,
  avatar,
  addAvatarBtn,
  title,
  input,
  passBtn,
  passBtnText,
  btn,
  btnText,
  regBtnText,
} from "./RegScreenStyle";

import { AntDesign } from "@expo/vector-icons";

export const RegScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={container}>
        <ImageBackground
          source={require("../../assets/Images/photoBackground.jpg")}
          resizeMode="stretch"
          style={backgroundImage}
        />
        <KeyboardAvoidingView
          behavior={Platform.OC === "ios" ? "padding" : "height"}
          style={{
            minHeight: 248,
            flex: 1,
            justifyContent: "flex-end",
          }}
        >
          <View style={regContainer}>
            <View style={avatarContainer}>
              <Image style={avatar} />
              <TouchableOpacity style={addAvatarBtn}>
                <AntDesign name="pluscircleo" size={25} color="#FF6C00" />
              </TouchableOpacity>
            </View>

            <Text style={title}>Sign up</Text>

            <View style={{ marginBottom: 16 }}>
              <View>
                <TextInput
                  placeholder="Login"
                  style={{ ...input, marginBottom: 16 }}
                />
              </View>

              <View style={{ marginBottom: 16 }}>
                <TextInput
                  style={input}
                  placeholder="Email"
                  placeholderTextColor={"#BDBDBD"}
                  keyboardType="email-address"
                />
              </View>

              <View style={{ marginBottom: 33, popsition: "relative" }}>
                <TextInput
                  style={input}
                  placeholder="Password"
                  placeholderTextColor={"#BDBDBD"}
                  secureTextEntry={true}
                />

                <TouchableOpacity style={passBtn}>
                  <Text style={passBtnText}>Show</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={btn}>
                <Text style={btnText}>Sign up</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity>
              <Text style={regBtnText}>
                {`Already registered? `}
                <Text style={{ textDecorationLine: "underline" }}>Log in</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};
