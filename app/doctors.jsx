import React, { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { Text } from "react-native";
import { encode as base64Encode } from "base-64";

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
    console.log(data);

    if (isLoading) {
        return <Text>Loading Doctors...</Text>;
    } else if (error) {
        return <Text>something went wrong</Text>;
    } else if (data.doctors) {
        return data.doctors.map((doctor) => (
            <Text key={doctor.id}>{doctor.name}</Text>
        ));
    } else return <Text>No Doctor Found</Text>;
}

export default doctors;
