import { StyleSheet, Text, View } from "react-native";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);
import 'dayjs/locale/fr';

export function Message({ message }) {
    dayjs.locale('fr');
    
    function isOurMessage() {
        return message.user.id === 'u1';
    }

    return (
        <View style={[styles.container, isOurMessage() ? styles.ourMessage : styles.othersMessage]}>
            <Text>{message.text}</Text>
            <Text style={styles.time}>{dayjs(message.createdAt).fromNow(true)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'white',
        margin: 5,
        padding: 10,
        borderRadius: 10,
        maxWidth: '80%',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,

        elevation: 1,
    },
    ourMessage: {
        backgroundColor: '#DCF8C5',
        alignSelf: 'flex-end'
    },
    othersMessage: {
        backgroundColor: 'white',
        alignSelf: 'flex-start'
    },
    time: {
        color: 'grey',
        alignSelf: 'flex-end'
    }
})