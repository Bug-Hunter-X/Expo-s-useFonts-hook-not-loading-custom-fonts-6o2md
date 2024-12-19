import { useState } from 'react';
import { Text } from 'react-native';

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>;
  }

  return (
    <Text style={{ fontFamily: 'space-mono' }}>Hello world!</Text>
  );
};

export default App;