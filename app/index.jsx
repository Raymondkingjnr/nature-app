import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  ImageBackground,
  Pressable,
} from "react-native";
import bgImg from "@/assets/images/bg.jpg";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground source={bgImg} resizeMethod="cover" style={styles.image}>
        <Text style={styles.text}>Starter App</Text>
        <View style={styles.flexButton}>
          <Link href={"/contact"} asChild>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Contact us</Text>
            </Pressable>
          </Link>
          <Link href={"/nature"} asChild>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>View List</Text>
            </Pressable>
          </Link>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    flex: 1,
  },
  image: {
    wiith: "100%",
    height: "100%",
    flex: 1,
    resizeMode: "cover",
    paddingLeft: 10,
    paddingRight: 10,
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: 500,
    textAlign: "center",
    marginTop: 50,
  },
  link: {
    color: "#fff",
    fontSize: 20,
    fontWeight: 500,
    marginLeft: 20,
    textAlign: "center",
    padding: 4,
    textDecorationLine: "underline",
  },
  flexButton: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
    marginTop: 30,
  },
  button: {
    height: 40,
    borderRadius: 7,
    width: 160,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.75)",
    marginTop: 30,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    justifyContent: "center",
    textAlign: "center",
  },
});
