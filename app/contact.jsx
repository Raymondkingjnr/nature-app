import {
  View,
  Text,
  StyleSheet,
  Appearance,
  Image,
  Platform,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Colors } from "@/constants/Colors";
import bgImg from "@/assets/images/dessertMountain.jpg";

const Contact = () => {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
  const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;
  const styles = createStyles(theme, colorScheme);
  return (
    <Container>
      <View style={styles.contentContainer}>
        <Image source={bgImg} style={styles.image} />
        <View style={styles.container}>
          <Text style={styles.text}>Contact Page</Text>
        </View>
      </View>
    </Container>
  );
};

export default Contact;

function createStyles(theme, colorScheme) {
  return StyleSheet.create({
    contentContainer: {
      paddingHorizontal: 5,
    },
    image: {
      width: "auto",
      height: 400,
      paddingVertical: 6,
      borderRadius: 5,
    },
  });
}
