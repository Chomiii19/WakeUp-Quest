import { StatusBar } from "expo-status-bar";
import { View, Text, ScrollView, Image, Pressable, Switch } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../../constants/images";

const Home = () => {
  return (
    <SafeAreaView className="flex-1 items-center bg-backgroundColor px-4">
      <Image
        source={images.wallpaper}
        resizeMode="contain"
        className="h-full opacity-15 absolute bottom-0"
      />
      <StatusBar style="light" backgroundColor="transparent" />
      <View className="w-full h-[30%] flex justify-center items-center">
        <View className="flex-row items-end gap-2">
          <Text className="font-rBold text-6xl text-zinc-200">07:00</Text>
          <Text className="font-rBold text-2xl bottom-2.5 text-zinc-200">
            AM
          </Text>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="w-full h-[70%] rounded-2xl"
      >
        <View className="flex-row flex-wrap gap-4 mb-24">
          <Alarm
            name="Workout"
            time="04:00"
            mode="AM"
            dayAlarms={[0, 6]}
            difficulty="medium"
          />
          <Alarm
            name="School"
            time="07:00"
            mode="AM"
            dayAlarms={[1, 2, 3, 4, 5]}
            difficulty="hard"
          />
          <Alarm
            name="Iidlip lang"
            time="05:00"
            mode="PM"
            dayAlarms={[5]}
            difficulty="easy"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

function Alarm({
  name,
  time,
  mode,
  dayAlarms,
  difficulty,
}: {
  name: string;
  time: string;
  mode: string;
  dayAlarms: number[];
  difficulty: string;
}) {
  const week = ["S", "M", "T", "W", "T", "F", "S"];
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled((prev) => !prev);

  return (
    <View className="w-[47%] bg-light-black/80 rounded-2xl flex-col overflow-hidden">
      <Pressable
        className="px-8 p-3"
        android_ripple={{ color: "rgba(0, 0, 0, 0.2)" }}
      >
        <Text className="font-rRegular text-zinc-400">{name}</Text>
        <View className="flex-row w-full items-end gap-1">
          <Text className="font-rBold text-4xl text-zinc-200">{time}</Text>
          <Text className="font-rBold text-zinc-200 pb-1">{mode}</Text>
        </View>
        <View className="flex-row gap-2.5 justify-center">
          {week.map((day, i) => (
            <View key={i} className="flex flex-col items-center">
              <Text
                className={
                  dayAlarms.includes(i) ? "text-primary" : "text-zinc-600"
                }
              >
                •
              </Text>
              <Text
                className={`-mt-2 font-rMedium text-xs ${
                  dayAlarms.includes(i) ? "text-primary" : "text-zinc-600"
                }`}
              >
                {day}
              </Text>
            </View>
          ))}
        </View>
        <View className="w-full flex-row justify-between items-center">
          <View className="border border-primary px-1.5 flex justify-center items-center py-0.5 rounded-full">
            <Text className="font-rRegular tracking-wider text-primary text-xs">
              {difficulty.toUpperCase()}
            </Text>
          </View>
          <Switch
            trackColor={{ false: "#444", true: "#845ec2" }}
            thumbColor={isEnabled ? "#845ec2" : "#ccc"}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </Pressable>
    </View>
  );
}

export default Home;
