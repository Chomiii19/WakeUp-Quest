import { Tabs } from "expo-router";
import { View, Image } from "react-native";
import icons from "../../constants/icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#845ec2",
        tabBarInactiveTintColor: "#CDCDE0",
        tabBarStyle: {
          backgroundColor: "#16171B",
          borderTopWidth: 0,
          borderTopColor: "#161616",
          height: 60,
          padding: 0,
          paddingTop: 14,
          width: "50%",
          flexDirection: "row",
          justifyContent: "center",
          bottom: 19,
          borderRadius: 40,
          position: "absolute",
          marginHorizontal: 102,
          elevation: 7,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 5 },
          shadowOpacity: 0.8,
          shadowRadius: 8,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarItemStyle: { width: 80 },
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.alarmClock}
              color={color}
              name="Home"
              focused={focused}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="createAlarm"
        options={{
          title: "CreateAlarm",
          headerShown: false,
          tabBarItemStyle: { width: 80 },
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.plus}
              color={color}
              name="Create Alarm"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          headerShown: false,
          tabBarItemStyle: { width: 80 },
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.settings}
              color={color}
              name="Settings"
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const TabIcon = ({
  icon,
  color,
  name,
  focused,
}: {
  icon: any;
  color: string;
  name: string;
  focused: boolean;
}) => {
  return (
    <View className="items-center justify-center gap-1 flex-1 w-[5rem] relative">
      <Image
        source={icon}
        resizeMode="contain"
        className="w-6 h-6"
        tintColor={color}
      />
      {focused ? (
        <Image
          source={icons.dot}
          tintColor={color}
          className="w-7 h-7 absolute -bottom-4"
        />
      ) : (
        <></>
      )}
    </View>
  );
};
