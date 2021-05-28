import 'react-native-gesture-handler'
import React from 'react'
import { Home } from '@screens/home/Home'
import { MyTeam } from '@screens/myTeam/MyTeam'
import { PokemonList } from '@screens/pokemonList/PokemonList'
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
            <Stack.Screen name='Pokémon List' component={PokemonList} options={{title: ''}} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </QueryClientProvider>
  )
}

export default App
