import {
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { View, ScrollView, SafeAreaView } from "react-native";

import { colors, font, sizes } from "../constants/styles";
import Welcome from "../components/Welcome";
import Popular from "../components/Popular";
import CalendarDiv from "../components/Calender";

const Home = () => {
    const [fontsLoaded] = useFonts({
        DMSans_400Regular,
        DMSans_500Medium,
        DMSans_700Bold,
    });
    if (!fontsLoaded) {
        return null;
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: colors.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => "",
                    headerRight: () => "",
                    headerTitle: "Ecommerce",
                }}
            />

            {/* <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flex: 1, padding: sizes.medium }}>
                    <Welcome />
                    <Popular />
                </View>
            </ScrollView> */}

            <CalendarDiv />
        </SafeAreaView>
    );
};

export default Home;
