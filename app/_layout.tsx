import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
    screenOptions={{
      headerStyle: {
        backgroundColor: '#344e41',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      contentStyle: {
        backgroundColor: '#dad7cd',
      },
    }}>
    <Stack.Screen name="index" options={{ title: 'Home' }} />
    <Stack.Screen name="details" options={{ title: 'Details' }} />
  </Stack>
  );
}
