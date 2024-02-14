import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from "react";

export function InputContainer() {
    const [newMessage, setNewMessage] = useState('');

    const onSendMessage = () => {
        // console.warn(newMessage);
        setNewMessage('');
    }
    return (
        <View style={styles.container}>
            <View style={styles.textInputContainer}>
                <Fontisto name="smiley" size={24} color="black" style={styles.icon}/>
                <View style={styles.inpuAndIconsContainer}>
                    <TextInput style={styles.textInput} 
                    placeholder="Message" 
                    value={newMessage}
                    onChangeText={setNewMessage}/>
                    <View style={styles.iconsContainer}>
                        <Entypo name="attachment" size={24} color="black" style={styles.icon} />
                        <FontAwesome name="camera" size={24} color="black" style={styles.icon} />
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.sendContainer} onPress={onSendMessage}>
                <FontAwesome5 name="location-arrow" size={24} color="white" style={styles.sendIcon} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 5,
        marginBottom: 5
    },
    textInputContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'whitesmoke',
        alignItems: 'center',
        borderRadius: 30,
        padding: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,

        elevation: 1,
    },
    inpuAndIconsContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 5
    },
    iconsContainer: {
        flexDirection: 'row',
        alignSelf: 'flex-end'
    },
    icon: {
        marginHorizontal: 5
    },
    sendContainer: {
        backgroundColor: '#128B7E',
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 5
    }
})