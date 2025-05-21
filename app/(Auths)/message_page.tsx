import { collection, getDocs } from 'firebase/firestore';
import { auth, db } from '@/firebase';
import { ReactNode, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { updateCurrentUser } from 'firebase/auth';
import Users from './chat/[selectedUserId]';

type FirestoreUser = {
  username: ReactNode;
  uid: string;
  email: string;
  displayName: string;
};

export default function MessagePage() {
  const [users, setUsers] = useState<FirestoreUser[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchUsers = async () => {
      const currentUser = auth.currentUser;
      if (!currentUser) return;

      const snapshot = await getDocs(collection(db, 'users'));
      const userList: FirestoreUser[] = [];

      snapshot.forEach(doc => {
        const data = doc.data() as FirestoreUser;
        if (data.uid !== currentUser.uid) {
          userList.push(data);
        }
      });

      setUsers(userList);
    };

    fetchUsers();
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Messages</Text>
      {users.map(user => (
        <TouchableOpacity
          key={user.uid}
          onPress={() => router.push(`/chat/${user.uid}`)}
          style={{ padding: 15, borderBottomWidth: 1, borderColor: '#ccc' }}
>
  <Text style={{ fontSize: 18 }}>{user.username}</Text>
</TouchableOpacity>
      ))}
    </View>
  );
}