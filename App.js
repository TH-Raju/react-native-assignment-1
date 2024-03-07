import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Start</Text>
      <View style={[styles.octocat]}>
        <View>
          <Image
            source={require("./assets/Oval.png")}
            style={{ height: 100, width: 100 }}
          />
        </View>
        <View
          style={{
            marginTop: 20,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              textAlign: "center",
            }}
          >
            {" "}
            The Octocat
          </Text>
          <Text> The Octocat</Text>
          <Text> The Octocat</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
  },

  octocat: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
});
git init
git add .
git commit -m "project initialize and implement"
git branch -M main
git remote add origin https://github.com/TH-Raju/react-native-assignment-1.git
git push -u origin main