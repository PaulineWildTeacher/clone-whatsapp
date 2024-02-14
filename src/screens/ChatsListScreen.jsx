import { FlatList } from 'react-native';
import userMessagesRealDate from './../../assets/data/userMessagesRealDate.json';
import { ChatListItem } from '../components/ChatListItem';

export function ChatsListScreen() {
    return (
        <FlatList 
            data={userMessagesRealDate}
            keyExtractor={(userInfo) => userInfo.id}
            renderItem={(userInfos) => {
                return <ChatListItem userInfos={userInfos.item}/>
            }}
        />
    )
}
