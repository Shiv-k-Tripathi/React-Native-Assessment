import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RadioButton, Avatar} from 'react-native-paper';
import React, {useState} from 'react';

const AddTeanent = ({navigation}) => {
  const [text, setText] = useState('');
  const [checked, setChecked] = React.useState('first');
  return (
    <View
      style={{
        width: '90%',
        height: 600,
        borderWidth: 2,
        borderColor: '#0198c7',
        margin: 25,
        borderRadius:10
      }}>
      <View style={{margin: 25, flexDirection: 'row'}}>
        <View
          style={{
            margin: 8,
            borderRadius: 50,
          }}>
          <Avatar.Image
            size={110}
            source={{
              uri: 'https://i.pinimg.com/736x/55/d9/07/55d9074dea926bd0b92936e6ae1f4dbf.jpg',
            }}
          />
           <View style={{marginTop:-30,marginLeft:35}}>
          <Avatar.Icon size={45} icon="camera" />
          </View>
          {/* <Ionicons name="person-outline" size={100} color="#fff" /> */}
        </View>
         
        <View style={{margin: 5}}>
          <Ionicons name="person-outline" size={40} color="#0198c7" />
          <TextInput
            style={{
              borderBottomWidth: 1,
              marginTop: -50,
              paddingHorizontal: 50,
            }}
            onChangeText={a => setText(a)}
            value={text}
            placeholder="Name"
          />
          <Ionicons name="phone-portrait-outline" size={40} color="#0198c7" />
          <TextInput
            style={{
              borderBottomWidth: 1,
              marginTop: -40,
              paddingHorizontal: 50,
            }}
            onChangeText={a => setText(a)}
            value={text}
            placeholder="Mobile"
          />
        </View>
      </View>
      {/*  */}
      <View style={{margin: 8}}>
        <Ionicons name="reader-outline" size={40} color="#0198c7" />
        <TextInput
          style={{
            borderBottomWidth: 1,
            marginTop: -50,
            paddingHorizontal: 50,
          }}
          onChangeText={a => setText(a)}
          value={text}
          placeholder="Address"
        />
      </View>
      <View style={{margin: 8}}>
        <Ionicons name="albums-outline" size={40} color="#0198c7" />
        <TextInput
          style={{
            borderBottomWidth: 1,
            marginTop: -50,
            paddingHorizontal: 50,
          }}
          onChangeText={a => setText(a)}
          value={text}
          placeholder="Adar Number"
        />
      </View>
      <View style={{margin: 8}}>
        <Ionicons name="mail-outline" size={40} color="#0198c7" />
        <TextInput
          style={{
            borderBottomWidth: 1,
            marginTop: -50,
            paddingHorizontal: 50,
          }}
          onChangeText={a => setText(a)}
          value={text}
          placeholder="Email"
        />
      </View>
      <View style={{margin: 8}}>
        <View style={{flexDirection: 'row', borderBottomWidth: 1}}>
          <RadioButton
            value="Male"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('first')}
            color="#0198c7"
          />
          <Text>Male</Text>
          <RadioButton
            value="Female"
            status={checked === 'second' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('second')}
          />
          <Text>Female</Text>
          <RadioButton
            value="Other"
            status={checked === 'second' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('second')}
          />
          <Text>Other</Text>
        </View>
      </View>
      <View style={{margin: 8}}>
        <Ionicons name="calendar-outline" size={40} color="#0198c7" />
        <TextInput
          style={{
            borderBottomWidth: 1,
            marginTop: -50,
            paddingHorizontal: 50,
          }}
          onChangeText={a => setText(a)}
          value={text}
          placeholder="Date Of Birth"
        />
      </View>
      <View
        style={{
          margin: 25,
          backgroundColor: '#0198c7',
          padding: 15,
          borderRadius: 20,
        }}>
        <TouchableOpacity onPress={() => console.log('Submit')}>
          <Text style={{textAlign: 'center'}}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddTeanent;

const styles = StyleSheet.create({
  input: {},
});
