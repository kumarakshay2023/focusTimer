import {View , StyleSheet,Text} from 'react-native';
import {TextInput} from 'react-native-paper'
import {colors} from '../utils/colors';
import {useState} from 'react'
import {RoundedButton} from '../components/RoundedButton'
import {spacing} from '../utils/sizes'
export const Focus = ({addSubject})=>{
const [subject,setSubject] = useState(null)
return(
  <View style={styles.container}>
  <View style={styles.inputContainer}>
  <TextInput style={styles.TextInput} onChangeText ={(text)=>setSubject(text)} label="What you would like to focus on ?"/>
  <View style={styles.button}>
   <RoundedButton title="+" size={50} onPress={()=>addSubject(subject)}/>
  </View>
 
  </View>
 
  </View>
)
}

const styles = StyleSheet.create({
  container:{
    marginTop:30
  },
  button:{
    justifyContent:'center'
  },
  TextInput:{
   flex:1,
   marginRight:spacing.sm

  },
  inputContainer:{
    flexDirection:'row',
    justifyContent:'top',
    padding:spacing.lg
  }
})