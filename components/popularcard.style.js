import { StyleSheet } from "react-native";

import { colors, font, shadows, sizes } from "../constants/styles";

const styles = StyleSheet.create({
    container: (selectedJob, item) => ({
        width: 250,
        height: 250,
        padding: sizes.xLarge,
        backgroundColor: selectedJob === item.id ? colors.primary : "#FFF",
        borderRadius: sizes.medium,
        justifyContent: "space-between",
        ...shadows.medium,
        shadowColor: colors.white,
    }),
    logoContainer: (selectedJob, item) => ({
        width: 50,
        height: 50,
        backgroundColor: selectedJob === item.id ? "#FFF" : colors.white,
        borderRadius: sizes.medium,
        justifyContent: "center",
        alignItems: "center",
    }),
    logoImage: {
        width: "70%",
        height: "70%",
    },
    companyName: {
        fontSize: sizes.medium,
        fontFamily: font.regular,
        color: "#B3AEC6",
        marginTop: sizes.small / 1.5,
    },
    infoContainer: {
        marginTop: sizes.large,
    },
    jobName: (selectedJob, item) => ({
        fontSize: sizes.large,
        fontFamily: font.medium,
        color: selectedJob === item.id ? colors.primary : colors.primary,
    }),
    infoWrapper: {
        flexDirection: "row",
        marginTop: 5,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    publisher: (selectedJob) => ({
        fontSize: sizes.medium - 2,
        fontFamily: font.bold,
        color: selectedJob === item.id ? colors.white : colors.primary,
    }),
    location: {
        fontSize: sizes.medium - 2,
        fontFamily: font.regular,
        color: "#B3AEC6",
    },
});

export default styles;
