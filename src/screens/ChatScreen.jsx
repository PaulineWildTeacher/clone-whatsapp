import { FlatList, ImageBackground, StyleSheet } from "react-native";
import background from './../../assets/images/backgroundMessage.png';
import messages from './../../assets/data/messages.json';
import { Message } from "../components/Message";
import { InputContainer } from "../components/InputContainer";

export function ChatScreen() {

    return (
        <ImageBackground source={background} style={styles.background}>
            <FlatList data={messages} 
            style={styles.list}
            inverted
            keyExtractor={message => message.id}
            renderItem={(message) => {
                return <Message message={message.item} />
            }}/>
            <InputContainer />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1
    },
    list: {
        flex: 1
    }
})