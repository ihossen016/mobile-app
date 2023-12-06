import { StyleSheet } from "react-native";

import { font, sizes, colors } from "../constants/styles";

const styles = StyleSheet.create({
    container: {
        marginTop: sizes.xLarge,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    headerTitle: {
        fontSize: sizes.large,
        fontFamily: font.medium,
        color: colors.primary,
    },
    headerBtn: {
        fontSize: sizes.medium,
        fontFamily: font.medium,
        color: colors.gray,
    },
    cardsContainer: {
        marginTop: sizes.medium,
    },
});

export default styles;
