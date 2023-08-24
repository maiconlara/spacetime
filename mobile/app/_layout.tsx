import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import * as SecureStore from "expo-secure-store";

import blugBr from "../src/assets/blur-bg.png";
import Stripes from "../src/assets/stripes.svg";
import { styled } from "nativewind";

import { ImageBackground } from "react-native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { BaiJamjuree_700Bold } from "@expo-google-fonts/bai-jamjuree";
import { SplashScreen, Stack } from "expo-router";

const StyledStrypes = styled(Stripes);

export default function Layout() {
  const [isUserAuth, setIsUserAuth] = useState<boolean | null>(null);
  const [isLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  });

  useEffect(() => {
    SecureStore.getItemAsync("token").then((token) => {
      setIsUserAuth(!!token);
    });
  }, []);

  if (!isLoadedFonts) {
    return <SplashScreen />;
  }
  return (
    <ImageBackground
      alt="blur"
      source={blugBr}
      className="relative flex-1 bg-gray-900"
      imageStyle={{
        position: "absolute",
        left: "-100%",
      }}
    >
      <StyledStrypes className="absolute left-2" />
      <StatusBar style="light" translucent />

      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "transparent" },
        }}
      >
        <Stack.Screen name="index" redirect={isUserAuth} />
        <Stack.Screen name="memories"  />
      </Stack>
    </ImageBackground>
  );
}
