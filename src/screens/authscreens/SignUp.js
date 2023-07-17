import React ,{ useState } from 'react'
import { Text, View,Dimensions,StyleSheet } from 'react-native'
import MyTextInput from '../../components/MyTextInput'
import MyButton from '../../components/MyButton'
import SecondaryButton from '../../components/SecondaryButton'
import Lottie from 'lottie-react-native';
import auth from '@react-native-firebase/auth';


export default function  SignUp() {
const [newUser,setNewUser]=useState({
  name:'Çiğdem',
  email:'cgdmk@gmail.com',
  password:'12345',
  profilePhoto:'data:image/jpeg;base64,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'
})
 const onChangeText=(key,value)=>{
  setNewUser(...newUser,[key=value])
 }

const handleSignUp=(user)=>{
  auth()
  .createUserWithEmailAndPassword(newUser.email, newUser.password)
  .then(() => {
    console.log('User account created & signed in!');


    firestore()
  .collection('Users').doc(auth().currentUser.uid)
  
  .set(user)
  .then(() => {
    console.log('User added!');
  });
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });
}

  return (
    <View style={StyleSheet.mainContainer}>
        <View style={styles.greenContainer}>
        <Lottie style={styles.animation}source={require('../../animations/animation_lk2tz4hk.json')} autoPlay loop />
      <Text style={styles.greenContainerText}>Şimdi Kaydol</Text>
      </View>

      <View style={styles.whiteContainer}>
        <View style={styles.inputContainer}>


        <MyTextInput 
        leftIconName={'person'} 
        label={'Kullanici Adi'} 
        placeholder={'Kullanici Giriniz'} 
        onChangeText={(text) =>onChangeText('name',text)}/>

        <MyTextInput 
        label={'E-mail'} 
        leftIconName={'mail'} 
        placeholder={'Email Giriniz'}/>

        <MyTextInput 
        rightIconName={'eye-off'} 
        label={'Sifre'} 
        leftIconName={'lock-closed'}
        placeholder={'sifre Giriniz'}/>

        </View>

        <View style={styles.buttonContainer}>

        <MyButton title={'Sign Up'} onPress={()=>handleSignUp(newUser)}/>
        <SecondaryButton title={'Sign In'}/>
        

        </View>
      </View>
    </View>
  )

}




const height=Dimensions.get('window').height;

const styles=StyleSheet.create({
  mainContainer:{
    position:'relative',

  },

  greenContainer:{
      height:height,
      width:'100%',
      backgroundColor:color.btnPrimary,
      alignItems:'center'
     
  },
  animation:{
    width:100,
    height:100
  },
  greenContainerText:{
marginTop:0,
fontSize:40,
fontWeight:'600',
marginLeft:-150,
color:'white',
letterSpacing:2

  },
  whiteContainer:{
    height:'70%',
    width:'100%',
    backgroundColor:'white',
    borderTopLeftRadius:50,
    borderTopRightRadius:50,
    position:'absolute',
    bottom:0,
    alignItems:'center',
    justifyContent:'flex-start',
    paddingHorizontal:25,
    paddingVertical:25,

  },
  inputContainer:{
   
    width:'100%',
    height:'60%'
  },
  buttonContainer:{
    
    width:'100%',
    height:'20%'
  }

})

  
  
  
