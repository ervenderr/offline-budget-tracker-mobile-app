import { View, Text } from 'react-native';
import { Link } from 'expo-router';



export default function HomeScreen() {

  return (
    <View className="flex-1 items-center justify-center bg-primary2">
      <Text className='font-black text-3xl text-white'>Homes</Text>
      <Link href="/home" className="text-lg text-white">home</Link>
    </View>
  );
}

