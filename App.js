import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const Flex = () => {
  return (
    <ScrollView
      style={[
        styles.container,
        {
          flexDirection: "column",
        },
      ]}
    >
      {/* logo and text */}
      <View
        style={{
          flex: 1,
          marginVertical: 40,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
          paddingVertical: 10,
        }}
      >
        <Image
          source={require("./assets/Oval.png")}
          style={{ height: 120, width: 120 }}
        ></Image>
        <View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 25,
            }}
          >
            {" "}
            The Octocat
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              color: "blue",
              marginLeft: 5,
            }}
          >
            @octocat
          </Text>
          <Text
            style={{
              fontSize: 20,
              marginLeft: 5,
              fontWeight: "thin",
              color: "gray",
            }}
          >
            Joined 25 Jan 2011
          </Text>
        </View>
      </View>

      {/* lorem  */}

      <View style={{ marginBottom: 20 }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "gray",
            marginLeft: 5,
            letterSpacing: 3,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          ullamcorper nulla non metus auctor fringilla.
        </Text>
      </View>

      {/* count  */}

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-evenly",
          backgroundColor: "#e3e6ed",
          borderRadius: 10,
          paddingVertical: 30,
          marginVertical: 40,
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 18,
              color: "gray",
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            Repos
          </Text>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            8
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: 18,
              color: "gray",
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            Followers
          </Text>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            3938
          </Text>
        </View>
        <View>
          <Text
            style={{
              fontSize: 18,
              color: "gray",
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            Following
          </Text>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            9
          </Text>
        </View>
      </View>

      {/* links and address  */}

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignContent: "center",
          gap: 10,
        }}
      >
        <Image
          source={require("./assets/003-pin.png")}
          style={{ height: 40, width: 20, resizeMode: "contain" }}
        ></Image>
        <View>
          <Text
            style={{
              fontWeight: "thin",
              fontSize: 20,
              marginTop: 5,
              color: "#767777",
            }}
          >
            San Franscisco
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignContent: "center",
          gap: 10,
        }}
      >
        <Image
          source={require("./assets/002-url.png")}
          style={{ height: 50, width: 25, resizeMode: "contain" }}
        ></Image>
        <View>
          <Text
            style={{
              fontWeight: "thin",
              fontSize: 20,
              marginTop: 10,
              color: "#767777",
            }}
          >
            https://github.blog
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignContent: "center",
          gap: 10,
        }}
      >
        <Image
          source={require("./assets/004-twitter.png")}
          style={{
            height: 50,
            width: 25,
            resizeMode: "contain",
            opacity: 0.4,
          }}
        ></Image>
        <View>
          <Text
            style={{
              fontWeight: "thin",
              fontSize: 20,
              marginTop: 10,
              color: "#9da0a5",
            }}
          >
            Not Available
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignContent: "center",
          gap: 10,
        }}
      >
        <Image
          source={require("./assets/001-office-building.png")}
          style={{ height: 50, width: 25, resizeMode: "contain" }}
        ></Image>
        <View>
          <Text
            style={{
              fontWeight: "thin",
              fontSize: 20,
              marginTop: 10,
              color: "#767777",
            }}
          >
            @github
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default Flex;
