import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./popularcard.style";

const PopularCard = ({ item, selectedProduct, handleCardPress }) => {
    return (
        <TouchableOpacity
            style={styles.container(selectedProduct, item)}
            // onPress={() => handleCardPress(item)}
            onPress={() => {}}
        >
            <Image
                source={{ uri: item.image }}
                resizeMode="contain"
                style={styles.logoImage}
            />
            <Text>{item.title}</Text>
            <Text style={styles.location}>{item.category}</Text>
        </TouchableOpacity>
    );
};

export default PopularCard;
