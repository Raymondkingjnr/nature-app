import {
  View,
  Text,
  Appearance,
  Platform,
  SafeAreaView,
  ScrollView,
  FlatList,
  Image,
} from "react-native";
import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import { MENU_ITEMS } from "@/constants/NatureItems";
import MENU_IMAGES from "@/constants/natureImages";

export default function Nature() {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
  const styles = createStlyes(theme, colorScheme);
  const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;
  const seperatorComponent = <View style={styles.seperator} />;
  //   const headerComp = <Text>Top List</Text>;
  const footerComp = (
    <Text style={{ color: theme.text, paddingBottom: 10 }}>End List</Text>
  );

  return (
    <Container>
      <FlatList
        data={MENU_ITEMS}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        ItemSeparatorComponent={seperatorComponent}
        // ListHeaderComponent={headerComp}
        ListFooterComponent={footerComp}
        ListFooterComponentStyle={styles.footerCom}
        ListEmptyComponent={<Text>No Items</Text>}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <View style={styles.menuTextRow}>
              <Text style={[styles.menuItemTitle, styles.menuItemText]}>
                {item.title}
              </Text>
              <Text style={styles.menuItemText}>{item.description}</Text>
            </View>
            <Image source={MENU_IMAGES[item.id - 1]} style={styles.image} />
          </View>
        )}
      />
    </Container>
  );
}

function createStlyes(theme, colorScheme) {
  return StyleSheet.create({
    contentContainer: {
      paddingTop: 30,
      padddingBottom: 20,
      paddingHorizontal: 12,
      backgroundColor: theme.background,
    },
    seperator: {
      height: 1,
      backgroundColor: colorScheme === "dark" ? "papayawhip" : "#000000",
      width: " 50%",
      maxWidth: 300,
      marginHorizontal: "auto",
      marginBottom: 10,
    },
    footerCom: {
      marginHorizontal: "auto",
    },
    row: {
      flexDirection: "row",
      height: 100,
      marginBottom: 10,
      borderStyle: "solid",
      width: "100%",
      borderWidth: 1,
      borderColor: colorScheme === "dark" ? "papayawhip" : "#000000",
      borderRadius: 20,
      overflow: "hidden",
      marginHorizontal: "auto",
    },
    menuTextRow: {
      width: "65%",
      paddingTop: 10,
      paddingLeft: 10,
      paddingRight: 5,

      flexGrow: 1,
    },
    menuItemTitle: {
      fontSize: 18,
      textDecorationLine: "underline",
      paddingBottom: 5,
    },
    menuItemText: {
      color: theme.text,
    },
    image: {
      width: 100,
      height: 100,
    },
  });
}

// export default nature;
