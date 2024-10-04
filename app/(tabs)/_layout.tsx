import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { icons } from "../../constants";


const TabIcon = ({ name, color, icon, focused, size = 6, isCreateIcon = false }: { name: string; color: string; icon: any; focused: boolean; size?: number; isCreateIcon?: boolean }) => {
  return (
    <View className="items-center justify-center gap-1">
      <View className={`w-${size + 2} h-${size + 2} border-2 ${isCreateIcon ? 'shadow-lg border-[#344e41] mb-6' : 'border-transparent'} rounded-full items-center justify-center`}>
        <Image
          source={icon}
          resizeMode="contain"
          tintColor={color}
          className={`w-${size} h-${size}`}
        />
      </View>
      <Text className={`${focused ? "font-bold" : "font-medium"} text-xs`}
        style={{
          color
        }}
      >
        {name}
      </Text>
    </View>
  );
};
const TabsLayout = () => {

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#FFE77AFF",
        tabBarInactiveTintColor: "white",
        tabBarStyle: {
          backgroundColor: "#344e41",
          height: 74,
          borderTopWidth: 1,
          borderTopColor: "#344e41",
        }
      }}
      
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.home}
              color={color}
              focused={focused}
              name="Home"
            />
          ),
        }}
      />

      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.plus}
              color={color}
              focused={focused}
              name=""
              size={8}
              isCreateIcon={true}
            />
          ),
        }}
      />

    <Tabs.Screen
        name="transactions"
        options={{
          title: "Transactions",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.transactions}
              color={color}
              focused={focused}
              name="Transactions"
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
