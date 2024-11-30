import { Link } from "expo-router";
import { Text, Touchable, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  return (
    <View>
      <Text className="bg-red-500">Guys Hello</Text>
      <Link href="/visionBoardScreen">
        <Text>Click me</Text>
      </Link>
    </View>
  );
}
