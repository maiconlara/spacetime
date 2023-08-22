import { StatusBar } from "expo-status-bar";
import { View, ImageBackground, Text, TouchableOpacity } from "react-native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { BaiJamjuree_700Bold } from "@expo-google-fonts/bai-jamjuree";
import blugBr from "./src/assets/blur-bg.png";
import Stripes from "./src/assets/stripes.svg";
import NLWLogo from "./src/assets/logo.svg";
import { styled } from "nativewind";

const StyledStrypes = styled(Stripes);

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
      className="relative flex-1 bg-gray-900 items-center py-10"
      imageStyle={{
        position: "absolute",
        left: "-100%",
      }}
    >
      <StyledStrypes className="absolute left-2" />

      <View className="flex-1 items-center justify-center gap-6">
        <NLWLogo />
        <View className="space-y-2">
          <Text className="text-center font-title text-2xl leading-tight text-gray-50">Sua cápsula do tempo</Text>
          <Text className="text-center font-body text-sm leading-relaxed text-gray-100">
            Colecione momentos marcantes da sua jornada e compartilhe (se
            quiser) com mundo!
          </Text>
        </View>
        <TouchableOpacity activeOpacity={0.6} className="rounded-full bg-green-500 px-5 py-2">
              <Text className="font-alt text-sm uppercase text-black">Cadastrar lembrança</Text>
        </TouchableOpacity>

      </View>
      <Text className="text-center font-body leading-relaxed text-gray-200">Feito com 💜 por Maicon Lara</Text>

      <StatusBar style="light" translucent />
    </ImageBackground>
  );
}
