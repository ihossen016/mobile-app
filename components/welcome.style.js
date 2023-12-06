import { StyleSheet } from "react-native";

import { colors, font, sizes } from "../constants/styles";
const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
    userName: {
        fontFamily: font.regular,
        fontSize: sizes.large,
        color: colors.secondary,
    },
    welcomeMessage: {
        fontFamily: font.bold,
        fontSize: sizes.xLarge,
        color: colors.primary,
        marginTop: 2,
    },
    searchContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginTop: sizes.large,
        height: 50,
    },
    searchWrapper: {
        flex: 1,
        backgroundColor: colors.white,
        marginRight: sizes.small,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: sizes.medium,
        height: "100%",
    },
    searchInput: {
        fontFamily: font.regular,
        width: "100%",
        height: "100%",
        paddingHorizontal: sizes.medium,
    },
    searchBtn: {
        width: 50,
        height: "100%",
        backgroundColor: colors.tertiary,
        borderRadius: sizes.medium,
        justifyContent: "center",
        alignItems: "center",
    },
    searchBtnImage: {
        width: "50%",
        height: "50%",
        tintColor: colors.white,
    },
    tabsContainer: {
        width: "100%",
        marginTop: sizes.medium,
    },
    tab: (activeJobType, item) => ({
        paddingVertical: sizes.small / 2,
        paddingHorizontal: sizes.small,
        borderRadius: sizes.medium,
        borderWidth: 1,
        borderColor: activeJobType === item ? colors.secondary : colors.gray2,
    }),
    tabText: (activeJobType, item) => ({
        fontFamily: font.medium,
        color: activeJobType === item ? colors.secondary : colors.gray2,
    }),
});

export default styles;
