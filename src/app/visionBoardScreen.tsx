import { View, Text, ActivityIndicator } from "react-native";
import WebView from "react-native-webview";

function LoadingIndicatorView() {
  return <ActivityIndicator color="#009b88" size="large" />;
}
export default function VisionBoardScreen() {
  return (
    <WebView
      className="mt-5 flex-1"
      source={{
        uri: "http://192.168.216.26:3001/",
      }}
      renderLoading={LoadingIndicatorView}
      startInLoadingState={true}
      javaScriptEnabled={true} // Enables JavaScript
      domStorageEnabled={true} // Enables local storage if your app uses it
      scalesPageToFit={true} // Scales content to fit the WebView
      automaticallyAdjustContentInsets={false}
    />
  );
}
