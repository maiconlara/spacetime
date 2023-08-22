import { StatusBar } from "expo-status-bar";
import { Text, ImageBackground } from "react-native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { BaiJamjuree_700Bold } from "@expo-google-fonts/bai-jamjuree";
import blugBr from "./src/assets/blur-bg.png";
import Stripes from "./src/assets/stripes.svg";

export default function App() {
  const [isLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  });

  if (!isLoadedFonts) {
    return null;
  }
  return (
    <ImageBackground
      alt="blur"
      source={blugBr}
      className="flex-1 bg-gray-900 items-center relative "
      imageStyle={{
        position: "absolute",
        left: "-100%",
      }}
    >
      <Stripes />
      <StatusBar style="light" translucent />
    </ImageBackground>
  );
}
