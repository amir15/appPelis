import './gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { Text, View } from 'react-native'
import { StackNavigation } from './presentation/navigation/StackNavigation'


export const App = () => {
  return (
     <NavigationContainer>

       {/*<Text>MoviesApp</Text>*/}
       <StackNavigation/>
  
     </NavigationContainer>
  )
}

