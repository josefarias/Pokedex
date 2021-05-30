import 'react-native-gesture-handler'
import React from 'react'
import { Home } from '@screens/home/Home'
import { MyTeam } from '@screens/myTeam/MyTeam'
import { PokemonIndexAction } from 'screens/pokemonIndexAction/PokemonIndexAction'
import { PokemonShowAction } from '@screens/pokemonShowAction/PokemonShowAction'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar } from 'react-native'
import { Colors } from 'utils/Colors'
import { QueryClient, QueryClientProvider } from 'react-query'

const Stack = createStackNavigator()
const queryClient = new QueryClient()

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.white,
    text: Colors.white,
    card: Colors.charcoal,
    border: Colors.charcoal,
    background: Colors.charcoal
  }
}

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <StatusBar barStyle="light-content" />

        <NavigationContainer theme={AppTheme}>
          <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} options={{headerShown: false}} />
            <Stack.Screen name='My Team' component={MyTeam} options={{title: ''}} />
            <Stack.Screen name='Pokemon List' component={PokemonIndexAction} options={{title: ''}} />
            <Stack.Screen name='Pokemon' component={PokemonShowAction} options={{title: ''}} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </QueryClientProvider>
  )
}

export default App
