import {
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";
import {
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
} from "@expo-google-fonts/poppins";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import {
    Text,
    View,
    ScrollView,
    SafeAreaView,
    Image,
    TouchableOpacity,
    TextInput,
    FlatList,
} from "react-native";

import { colors, font, sizes } from "../constants/styles";
import Welcome from "../components/Welcome";
import Popular from "../components/Popular";
import CalendarDiv from "../components/Calender";

const userImg = require("../assets/new/user.jpg");
const menuIcon = require("../assets/new/menu.png");
const searchIcon = require("../assets/new/search.png");
const all = require("../assets/new/all.png");
const general = require("../assets/new/general.png");
const cardiology = require("../assets/new/cardiology.png");
const medicine = require("../assets/new/medicine.png");

const categories = [
    { img: all, text: "All" },
    { img: cardiology, text: "Cardiology" },
    { img: medicine, text: "Medicine" },
    { img: general, text: "General" },
];

const Home = () => {
    const [fontsLoaded] = useFonts({
        DMSans_400Regular,
        DMSans_500Medium,
        DMSans_700Bold,
        Poppins_100Thin,
        Poppins_100Thin_Italic,
        Poppins_200ExtraLight,
        Poppins_200ExtraLight_Italic,
        Poppins_300Light,
        Poppins_300Light_Italic,
        Poppins_400Regular,
        Poppins_400Regular_Italic,
        Poppins_500Medium,
        Poppins_500Medium_Italic,
        Poppins_600SemiBold,
        Poppins_600SemiBold_Italic,
        Poppins_700Bold,
        Poppins_700Bold_Italic,
        Poppins_800ExtraBold,
        Poppins_800ExtraBold_Italic,
        Poppins_900Black,
        Poppins_900Black_Italic,
    });
    if (!fontsLoaded) {
        return null;
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: "#B28CFF" },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <Image
                            source={menuIcon}
                            resizeMode="contain"
                            style={{ width: 15, height: 13, padding: 10 }}
                        />
                    ),
                    headerRight: () => (
                        <Image
                            source={userImg}
                            resizeMode="contain"
                            style={{ width: 40, height: 40, borderRadius: 15 }}
                        />
                    ),
                    headerTitle: "",
                }}
            />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        // flex: 1,
                        padding: sizes.large,
                        backgroundColor: "#B28CFF",
                        borderBottomRightRadius: 35,
                        borderBottomLeftRadius: 35,
                    }}
                >
                    {/* <Welcome /> */}
                    {/* <Popular /> */}

                    <Text
                        style={{
                            fontFamily: "Poppins_500Medium",
                            fontSize: 18,
                            color: "#fff",
                            paddingBottom: 10,
                        }}
                    >
                        Welcome Back
                    </Text>
                    <Text
                        style={{
                            fontFamily: "Poppins_600SemiBold",
                            fontSize: 36,
                            color: "#fff",
                        }}
                    >
                        Let's find
                    </Text>
                    <Text
                        style={{
                            fontFamily: "Poppins_600SemiBold",
                            fontSize: 36,
                            color: "#fff",
                            marginTop: -20,
                        }}
                    >
                        your top doctor!
                    </Text>

                    <View
                        style={{
                            flex: 1,
                            flexDirection: "row",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            gap: 10,
                            paddingTop: 20,
                            paddingRight: 25,
                            paddingBottom: 20,
                            paddingLeft: 25,
                            backgroundColor: "#fff",
                            borderRadius: 16,
                            marginTop: 35,
                            marginBottom: 30,
                        }}
                    >
                        <TouchableOpacity
                            // style={styles.searchBtn}
                            onPress={() => {}}
                        >
                            <Image
                                source={searchIcon}
                                resizeMode="contain"
                                // style={styles.searchBtnImage}
                            />
                        </TouchableOpacity>
                        <View>
                            <TextInput
                                // value={""}
                                // onChangeText={(text) => setSearch(text)}
                                placeholder="Search health issue......."
                            />
                        </View>
                    </View>
                </View>

                <View
                    style={{
                        padding: sizes.large,
                    }}
                >
                    <Text
                        style={{
                            fontFamily: "Poppins_500Medium",
                            fontSize: 20,
                            color: "#232F55",
                        }}
                    >
                        Categories
                    </Text>
                </View>

                <View
                    style={{
                        width: "100%",
                        // marginTop: sizes.small,
                        padding: sizes.small,
                    }}
                >
                    <FlatList
                        data={categories}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={{
                                    flex: 1,
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    gap: 10,
                                }}
                                onPress={() => {}}
                            >
                                <View
                                    style={{
                                        padding: sizes.medium,
                                        borderWidth: 2,
                                        borderColor: "#edf0f0",
                                        borderRadius: 20,
                                    }}
                                >
                                    <Image
                                        source={item.img}
                                        resizeMode="contain"
                                        style={{ height: 40 }}
                                    />
                                </View>
                                <Text
                                    style={{
                                        textAlign: "center",
                                        // paddingTop: 10,
                                        color: "#7D8BB7",
                                    }}
                                >
                                    {item.text}
                                </Text>
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item) => item.text}
                        contentContainerStyle={{ columnGap: sizes.large }}
                        horizontal
                    />
                </View>
            </ScrollView>

            {/* <CalendarDiv /> */}
        </SafeAreaView>
    );
};

export default Home;
