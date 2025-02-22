import { View, Text, FlatList, Image } from "react-native"
import React, { useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { images } from "../../constants"
import Searchinput from "../../components/Searchinput"
import Trending from "../../components/Trending"
import EmrtyState from "~/components/EmrtyState"
import { RefreshControl } from "react-native"

const Home = () => {

  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = async () => {
    setRefreshing(true)
    setRefreshing(false)
  }

  return (
    <SafeAreaView className="bg-primary border-2 h-full ">
      <FlatList
        data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
        // data={[]}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <Text className="text-3xl text-white">{item.id}</Text>
          )
        }}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View className="flex-row justify-between items-start mb-6">
              <View>
                <Text className="font-psemibold text-sm text-gray-100">
                  Welcome Back
                </Text>
                <Text className="text-2xl text-white font-psemibold">
                  Users
                </Text>
              </View>

              <View className="mt-1.5">
                <Image
                  source={images.logoSmall}
                  className="w-9 h-10 "
                  resizeMode="contain"
                />
              </View>




            </View>
            <Searchinput
            />


            <View className="w-full flex-1 pt-5 pb-8">
              <Text className="text-gray-100 font-pregular text-lg mb-3">
                Trending Videos
              </Text>
            </View>

            <Trending posts={[{ id: 1 }, { id: 2 }, { id: 3 }] ?? []} />
          </View>
        )}
        ListEmptyComponent={() => (
          <EmrtyState
            title="No videos found"
            subtitle="No videos created yet"
          />
        )}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
    </SafeAreaView>
  )
}

export default Home
