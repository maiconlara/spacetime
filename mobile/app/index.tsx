import { View, Text, TouchableOpacity } from "react-native";
import * as SecureStore from "expo-secure-store";
import { useRouter } from "expo-router";

import NLWLogo from "../src/assets/logo.svg";
import { useAuthRequest, makeRedirectUri } from "expo-auth-session";
import { useEffect } from "react";
import { api } from "../src/lib/api";

const discovery = {
  authorizationEndpoint: "https://github.com/login/oauth/authorize",
  tokenEndpoint: "https://github.com/login/oauth/access_token",
  revocationEndpoint:
    "https://github.com/settings/connections/applications/b7ff17410e9d0877d96a",
};

export default function App() {
  const router = useRouter();

  const [request, response, signIn] = useAuthRequest(
    {
      clientId: "b7ff17410e9d0877d96a",
      scopes: ["identity"],
      redirectUri: makeRedirectUri({
        scheme: "nwlspacetime",
      }),
    },
    discovery
  );

  const handleGithubAuth = async (code: string) => {
    const response = await api.post("/register", {
      code,
    });

    const { token } = response.data;
    await SecureStore.setItemAsync("token", token);
    router.push("/memories");
  };

  useEffect(() => {
    if (response?.type === "success") {
      const { code } = response.params;
      handleGithubAuth(code);
    }
  }, [response]);

  return (
    <View className=" flex-1 items-center px-8 py-10">
      <View className="flex-1 items-center justify-center gap-6">
        <NLWLogo />
        <View className="space-y-2">
          <Text className="text-center font-title text-2xl leading-tight text-gray-50">
            Sua cápsula do tempo
          </Text>
          <Text className="text-center font-body text-sm leading-relaxed text-gray-100">
            Colecione momentos marcantes da sua jornada e compartilhe (se
            quiser) com mundo!
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.6}
          className="rounded-full bg-green-500 px-5 py-2"
          onPress={() => signIn()}
        >
          <Text className="font-alt text-sm uppercase text-black">
            Cadastrar lembrança
          </Text>
        </TouchableOpacity>
      </View>

      <Text className="text-center font-body leading-relaxed text-gray-200">
        Feito com 💜 por Maicon Lara
      </Text>
    </View>
  );
}
