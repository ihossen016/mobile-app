import React, { useEffect } from "react";
import { StyleSheet, View, Text, Button, Platform } from "react-native";
import * as Calendar from "expo-calendar";

export default function CalendarDiv() {
    useEffect(() => {
        (async () => {
            const { status } = await Calendar.requestCalendarPermissionsAsync();
            if (status === "granted") {
                const calendars = await Calendar.getCalendarsAsync(
                    Calendar.EntityTypes.EVENT
                );
                console.log("Here are all your calendars:");
                console.log({ calendars });
            }
        })();
    }, []);

    return (
        <View style={styles.container}>
            <Text>Calendar Module Example</Text>
            <Button title="Create a new calendar" onPress={createCalendar} />
        </View>
    );
}

async function getDefaultCalendarSource() {
    const defaultCalendar = await Calendar.getDefaultCalendarAsync();
    return defaultCalendar.source;
}

async function createCalendar() {
    const defaultCalendarSource =
        Platform.OS === "ios"
            ? await getDefaultCalendarSource()
            : { isLocalAccount: true, name: "Expo Calendar" };

    const newCalendarID = await Calendar.createCalendarAsync({
        title: "Expo Calendar",
        color: "blue",
        entityType: Calendar.EntityTypes.EVENT,
        sourceId: defaultCalendarSource.id,
        source: defaultCalendarSource,
        name: "internalCalendarName",
        ownerAccount: "personal",
        accessLevel: Calendar.CalendarAccessLevel.OWNER,
    });
    console.log(`Your new calendar ID is: ${newCalendarID}`);

    // create event
    Calendar.createEventAsync(newCalendarID, eventDetails);
}

let eventDetails = {
    title: "Meeting",
    startDate: new Date(Date.now() + 605 * 1000),
    endDate: new Date(Date.now() + 3600 * 1000),
    timeZone: "Asia/Dhaka",
    alarms: [
        {
            method: Calendar.AlarmMethod.ALERT,
            relativeOffset: -10, // This will set the alarm 10 minutes before the event start time
        },
    ],
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "space-around",
    },
});
