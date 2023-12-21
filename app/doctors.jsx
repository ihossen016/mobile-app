import React, { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import {
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { encode as base64Encode } from "base-64";
import { colors, font, sizes } from "../constants/styles";

function doctors() {
    const auth = {
        username: "01345678956",
        password: "Cht38UbXcfxV5eIMAUJSBjWH",
    };

    const config = {
        Authorization: `Basic ${base64Encode(
            `${auth.username}:${auth.password}`
        )}`,
    };
    const { data, isLoading, error, refetch } = useFetch(
        "https://esastho.wppeople.net/api/v1/doctors",
        config
    );

    // useEffect(() => {
    //     refetch();
    // }, []);
    // console.log(data);

    if (isLoading) {
        return <Text>Loading Doctors...</Text>;
    } else if (error) {
        return <Text>something went wrong</Text>;
    } else if (data.doctors) {
        return (
            <SafeAreaView
                style={{ padding: sizes.large, backgroundColor: "#fff" }}
            >
                <ScrollView showsVerticalScrollIndicator={false}>
                    {data.doctors.map((doctor) => (
                        <TouchableOpacity
                            key={doctor.id}
                            style={{ marginBottom: 10, marginTop: 10 }}
                        >
                            <View
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "flex-start",
                                    // gap: 10,
                                    padding: sizes.large,
                                    backgroundColor: "#fff",
                                    borderWidth: 2,
                                    borderRadius: 16,
                                    borderColor: "#edf0f0",
                                }}
                            >
                                <Text
                                    style={{
                                        fontFamily: "Poppins_500Medium",
                                        fontSize: 18,
                                        color: "#263257",
                                    }}
                                >
                                    {doctor.name}
                                </Text>
                                <Text
                                    style={{
                                        fontFamily: "Poppins_500Medium",
                                        fontSize: 12,
                                        color: "#7D8BB7",
                                    }}
                                >
                                    {doctor.title}
                                </Text>

                                <Text
                                    style={{
                                        padding: sizes.small,
                                        marginTop: 10,
                                        backgroundColor: "#f2f2f2",
                                        color: "#222E54",
                                        // maxWidth: "50%",
                                        borderRadius: 8,
                                    }}
                                >
                                    {doctor.specialty}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </SafeAreaView>
        );
    } else return <Text>No Doctor Found</Text>;
}

export default doctors;
