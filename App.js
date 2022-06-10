import React from 'react';
import Tela from './src/telas/Tela';
import { useFonts, Inter_400Regular,Inter_700Bold } from '@expo-google-fonts/inter';

import { View, Text } from 'react-native';



export default function App() {
  let [fontsCarregadas] = useFonts({
    "InterBold": Inter_700Bold,
    "InterRegular":Inter_400Regular,

  });

  if (!fontsCarregadas) {
    return <View/>;
  }
  return(
    <Tela/>
  )
    
  
  
}
  