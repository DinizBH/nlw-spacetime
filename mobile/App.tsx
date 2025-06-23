import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import './global.css';

export default function App() {
  return (
    <>
      <View className="flex-1 bg-slate-800">
        <Text className="mt-4 text-center text-2xl font-bold text-white">Welcome to My App!</Text>
        <StatusBar style="auto" />
      </View>
    </>
  );
}
