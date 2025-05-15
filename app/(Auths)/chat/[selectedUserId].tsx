import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { auth, db } from '@/firebase';
import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
} from 'firebase/firestore';
import { getChatId } from '/app/services/authServices';

export default function ChatScreen() {
  const { selectedUserId } = useLocalSearchParams();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<any[]>([]);
  const currentUser = auth.currentUser;

  useEffect(() => {
    if (!currentUser || !selectedUserId) return;

    const chatId = getChatId(currentUser.uid, selectedUserId as string);

    const q = query(
      collection(db, 'chats', chatId, 'messages'),
      orderBy('createdAt', 'asc')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(msgs);
    });

    return () => unsubscribe();
  }, [currentUser, selectedUserId]);

  const sendMessage = async () => {
    if (!message.trim() || !currentUser || !selectedUserId) return;

    const chatId = getChatId(currentUser.uid, selectedUserId as string);

    try {
      await addDoc(collection(db, 'chats', chatId, 'messages'), {
        text: message,
        senderId: currentUser.uid,
        receiverId: selectedUserId,
        createdAt: serverTimestamp(),
      });

      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Chatting with: {selectedUserId}</Text>

      <View style={{ marginTop: 20 }}>
        {messages.map(msg => (
          <View key={msg.id} style={{ marginBottom: 10 }}>
            <Text style={{ fontWeight: msg.senderId === currentUser?.uid ? 'bold' : 'normal' }}>
              {msg.senderId === currentUser?.uid ? 'You' : 'Them'}: {msg.text}
            </Text>
          </View>
        ))}
      </View>

      <TextInput
        value={message}
        onChangeText={setMessage}
        placeholder="Type a message..."
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          marginTop: 20,
          marginBottom: 10,
          borderRadius: 6,
        }}
      />
      <Button title="Send" onPress={sendMessage} />
    </View>
  );
}
