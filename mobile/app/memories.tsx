import React, { useEffect, useState } from "react";

import { View, TouchableOpacity, ScrollView, Text, Image } from "react-native";
import NLWLogo from "../src/assets/logo.svg";
import Icon from "@expo/vector-icons/Feather";
import * as SecureStore from "expo-secure-store";

import { Link, useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { api } from "../src/lib/api";
import dayjs from "dayjs";
import ptBr from 'dayjs/locale/pt-br'

dayjs.locale(ptBr);

interface Memory {
  coverUrl: string;
  resume: string;
  id: string;
  createdAt: string;
}

export default function memories() {
  const [memories, setMemories] = useState<Memory[]>([]);

  const { bottom, top } = useSafeAreaInsets();
  const router = useRouter();
  const signOut = async () => {
    await SecureStore.deleteItemAsync("token");
    router.push("/");
  };

  const loadMemories = async () => {
    const token = await SecureStore.getItemAsync("token");
    const response = await api.get("/memories", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data)
    setMemories(response.data);
  };

  useEffect(() => {
    loadMemories();
  }, []);

  return (
    <ScrollView
      className="flex-1 px-6 mb-4"
      contentContainerStyle={{
        paddingBottom: bottom,
        paddingTop: top,
      }}
    >
      <View className="mt-4 flex-row items-center justify-between">
        <NLWLogo />
        <View className="flex-row gap-2">
          <TouchableOpacity
            className="h-10 w-10 items-center justify-center rounded-full bg-red-500"
            onPress={signOut}
          >
            <Icon name="log-out" size={14} color="#000" />
          </TouchableOpacity>
          <Link href="/new" asChild>
            <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-full bg-green-500">
              <Icon name="plus" size={14} color="#000" />
            </TouchableOpacity>
          </Link>
        </View>
      </View>

      <View className="mt-6 space-y-10">
        {memories.map((memory) => {
          return (
          <View className="space-y-4" key={memory.id}>
          <View className="flex-row items-center gap-2">
            <View className="h-px w-5 bg-gray-100" />
            <Text className="text-xsm text-gray-100 font-body">
              {dayjs(memory.createdAt).format("DD[ de ]MMMM[, ]YYYY")}
            </Text>
          </View>
          <View className="space-y-4">
            <Image
              source={{
                uri: memory.coverUrl,
              }}
              className="aspect-video w-full rounded-lg"
              alt=""
            />
            <Text className="text-gray-100 text-justify font-body text-base leading-relaxed">
              {memory.resume}
            </Text>
            <Link href="/memories/id" asChild>
              <TouchableOpacity className="flex-row items-center">
                <Text className="font-body text-sm text-gray-200">
                  Ler mais{" "}
                </Text>
                <Icon name="arrow-right" size={14} color="#9e9ea0" />
              </TouchableOpacity>
            </Link>
          </View>
        </View>
          )
        })}
      </View>
    </ScrollView>
  );
}
