import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);
import 'dayjs/locale/fr';
import { useNavigation } from "@react-navigation/native";

export function ChatListItem({ userInfos }) {
    dayjs.locale('fr');
    const navigation = useNavigation();

    const handleChatPress = (user) => {
        navigation.navigate("Chat", { user });
    }

    return (
        <Pressable style={styles.chatItemContainer} onPress={() => handleChatPress(userInfos)}>
            <View>
                <Image source={{uri: userInfos.user.image}} style={styles.image}/>
            </View>
            <View style={styles.infosContainer}>
                <View style={styles.row}>
                    <Text style={styles.name} numberOfLines={1}>{userInfos.user.name}</Text>
                    <Text style={styles.subtitle}>{dayjs(userInfos.lastMessage.createdAt).fromNow(true)}</Text>
                </View>
                <Text style={styles.subtitle} numberOfLines={2}>{userInfos.lastMessage.text}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    chatItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: 'lightgrey'
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30
    },
    infosContainer: {
        flex: 1,
        marginLeft: 10
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    name: {
        fontWeight: 'bold'
    },
    subtitle: {
        color: 'grey'
    }
})