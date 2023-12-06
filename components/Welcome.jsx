import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    FlatList,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./welcome.style";
import icons from "../constants/icons";
import { sizes } from "../constants/styles";

const productTypes = ["Popular", "Trending", "New Arrival"];

const Welcome = () => {
    const router = useRouter();
    const [search, setSearch] = useState("");
    const [activeType, setActiveType] = useState("Popular");

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.userName}>Welcome to the Store</Text>
                <Text style={styles.welcomeMessage}>
                    Find Your Perfect Products
                </Text>
            </View>

            <View style={styles.searchContainer}>
                <View style={styles.searchWrapper}>
                    <TextInput
                        style={styles.searchInput}
                        value={search}
                        onChangeText={(text) => setSearch(text)}
                        placeholder="What are you looking for?"
                    />
                </View>

                <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
                    <Image
                        source={icons.search}
                        resizeMode="contain"
                        style={styles.searchBtnImage}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.tabsContainer}>
                <FlatList
                    data={productTypes}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.tab(activeType, item)}
                            onPress={() => {
                                setActiveType(item);
                                // router.push(`/search/${item}`);
                            }}
                        >
                            <Text style={styles.tabText(activeType, item)}>
                                {item}
                            </Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item}
                    contentContainerStyle={{ columnGap: sizes.small }}
                    horizontal
                />
            </View>
        </View>
    );
};

export default Welcome;
