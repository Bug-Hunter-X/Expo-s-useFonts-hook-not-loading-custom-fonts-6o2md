import { useFonts } from 'expo-font';

const App = () => {
  const [fontsLoaded] = useFonts({
    'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
  });

if (!fontsLoaded) {
    return null;
  }

  return (
    <Text style={{ fontFamily: 'space-mono' }}>Hello world!</Text>
  );
};

export default App;