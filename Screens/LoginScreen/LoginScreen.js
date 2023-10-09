import {
  ImageBackground,
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
  authContainer,
  title,
  input,
  passBtn,
  passBtnText,
  btn,
  btnText,
  regBtnText,
} from "./LoginScreenStyle";

export const LoginScreen = () => {
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
          <View style={authContainer}>
            <Text style={title}>Log in</Text>

            <View style={{ marginBottom: 16 }}>
              <View style={{ marginBottom: 16 }}>
                <TextInput
                  style={input}
                  placeholder="Email"
                  placeholderTextColor={"#BDBDBD"}
                  keyboardType="email-address"
                />
              </View>

              <View style={{ marginBottom: 43, popsition: "relative" }}>
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
                <Text style={btnText}>Log in</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity>
              <Text style={regBtnText}>
                {`Not registered yet? `}
                <Text style={{ textDecorationLine: "underline" }}>Sign up</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};
