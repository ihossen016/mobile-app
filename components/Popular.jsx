import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./popular.style";
import PopularCard from "./PopularCard";
import { sizes, colors } from "../constants/styles";
import useFetch from "../hooks/useFetch";

const Popular = () => {
    const router = useRouter();
    const { data, isLoading, error } = useFetch(
        "https://fakestoreapi.com/products?limit=5"
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Popular Products</Text>
                <TouchableOpacity>
                    <Text style={styles.headerBtn}>Show all</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.cardsContainer}>
                {isLoading ? (
                    <ActivityIndicator size={"large"} color={colors.primary} />
                ) : error ? (
                    <Text>Something went wrong.</Text>
                ) : (
                    <FlatList
                        data={data}
                        renderItem={({ item }) => <PopularCard item={item} />}
                        keyExtractor={(item) => item?.id}
                        contentContainerStyle={{ columnGap: sizes.medium }}
                        horizontal
                    />
                )}
            </View>
        </View>
    );
};

export default Popular;
