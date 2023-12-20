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
    Button,
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
const doctor = require("../assets/new/doctor.png");
const home = require("../assets/new/home.png");
const msg = require("../assets/new/msg.png");
const plus = require("../assets/new/plus.png");
const schedule = require("../assets/new/schedule.png");

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
                            marginTop: 20,
                            marginBottom: 10,
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

                <View style={{ flex: 1, gap: 20, padding: sizes.large }}>
                    <TouchableOpacity onPress={() => {}}>
                        <View
                            style={{
                                padding: sizes.large,
                                borderWidth: 2,
                                borderRadius: 16,
                                borderColor: "#edf0f0",
                                flex: 1,
                                flexDirection: "row",
                                justifyContent: "flex-start",
                                alignItems: "center",
                                gap: 20,
                            }}
                        >
                            <Image source={doctor} resizeMode="contain" />
                            <View style={{ flex: 1 }}>
                                <Text
                                    style={{
                                        fontFamily: "Poppins_500Medium",
                                        fontSize: 18,
                                        color: "#263257",
                                    }}
                                >
                                    Dr. Maria Waston
                                </Text>
                                <Text
                                    style={{
                                        fontFamily: "Poppins_500Medium",
                                        fontSize: 12,
                                        color: "#7D8BB7",
                                    }}
                                >
                                    Heart Surgeon, London, England
                                </Text>

                                <Text
                                    style={{
                                        padding: sizes.small,
                                        marginTop: 10,
                                        backgroundColor: "#f2f2f2",
                                        color: "#222E54",
                                        maxWidth: "50%",
                                    }}
                                >
                                    Appointment
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {}}>
                        <View
                            style={{
                                padding: sizes.large,
                                borderWidth: 2,
                                borderRadius: 16,
                                borderColor: "#edf0f0",
                                flex: 1,
                                flexDirection: "row",
                                justifyContent: "flex-start",
                                alignItems: "center",
                                gap: 20,
                            }}
                        >
                            <Image source={doctor} resizeMode="contain" />
                            <View style={{ flex: 1 }}>
                                <Text
                                    style={{
                                        fontFamily: "Poppins_500Medium",
                                        fontSize: 18,
                                        color: "#263257",
                                    }}
                                >
                                    Dr. Maria Waston
                                </Text>
                                <Text
                                    style={{
                                        fontFamily: "Poppins_500Medium",
                                        fontSize: 12,
                                        color: "#7D8BB7",
                                    }}
                                >
                                    Heart Surgeon, London, England
                                </Text>

                                <Text
                                    style={{
                                        padding: sizes.small,
                                        marginTop: 10,
                                        backgroundColor: "#f2f2f2",
                                        color: "#222E54",
                                        maxWidth: "50%",
                                    }}
                                >
                                    Appointment
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {}}>
                        <View
                            style={{
                                padding: sizes.large,
                                borderWidth: 2,
                                borderRadius: 16,
                                borderColor: "#edf0f0",
                                flex: 1,
                                flexDirection: "row",
                                justifyContent: "flex-start",
                                alignItems: "center",
                                gap: 20,
                            }}
                        >
                            <Image source={doctor} resizeMode="contain" />
                            <View style={{ flex: 1 }}>
                                <Text
                                    style={{
                                        fontFamily: "Poppins_500Medium",
                                        fontSize: 18,
                                        color: "#263257",
                                    }}
                                >
                                    Dr. Maria Waston
                                </Text>
                                <Text
                                    style={{
                                        fontFamily: "Poppins_500Medium",
                                        fontSize: 12,
                                        color: "#7D8BB7",
                                    }}
                                >
                                    Heart Surgeon, London, England
                                </Text>

                                <Text
                                    style={{
                                        padding: sizes.small,
                                        marginTop: 10,
                                        backgroundColor: "#f2f2f2",
                                        color: "#222E54",
                                        maxWidth: "50%",
                                    }}
                                >
                                    Appointment
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            <View style={{ flex: 1 }}>
                <View
                    style={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        bottom: -10,
                        margin: sizes.large,
                        padding: sizes.large,
                        backgroundColor: "#fff",
                        shadowOffset: "0px 0.48px",
                    }}
                >
                    <View
                        style={{
                            position: "relative",
                            flex: 1,
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: 20,
                        }}
                    >
                        <TouchableOpacity>
                            <Image source={home} resizeMode="contain" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={schedule} resizeMode="contain" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={msg} resizeMode="contain" />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 100,
                                margin: "auto",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: "#B28CFF",
                            }}
                        >
                            <Image source={plus} resizeMode="contain" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            {/* <CalendarDiv /> */}
        </SafeAreaView>
    );
};

export default Home;
