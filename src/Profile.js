import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Avatar} from 'react-native-paper';
import React, {useState} from 'react';

const Profile = ({navigation}) => {
  const [show, setShow] = useState(false);

  const ShowPersonalDetail = () => {
    return (
      <View
        style={{
          backgroundColor: '#e6fff9',
          width: '80%',
          margin: 20,
          height: 180,
          borderRadius: 10,
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItem: 'center',
            marginHorizontal: 20,
            margin: 8,
          }}>
          <Text>
            <Ionicons name="person-outline" size={20} color="#0198c7" />  Shiv
             Kumar
          </Text>
          <View   style={{margin:5}} />
          <Text>
            <Ionicons name="phone-portrait-outline" size={20} color="#0198c7" />{' '}
            9876543210
          </Text>
          <View   style={{margin:5}} />
          <Text>
            <Ionicons name="mail-outline" size={20} color="#0198c7" />{' '}
            abc@gmail.com
          </Text>
          <View   style={{margin:5}} />
          <Text>
            <Ionicons name="calendar-outline" size={20} color="#0198c7" /> 2011-01-01 
          </Text>
          <View   style={{margin:5}} />
          <Text>
            <Ionicons name="albums-outline" size={20} color="#0198c7" />
            123456789
          </Text>
        </View>
      </View>
    );
  };
  return (
    <ScrollView>
      <View style={{backgroundColor: '#0198c7'}}>
        <View
          style={{
            marginBottom: 80,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={{
              uri: 'https://i.pinimg.com/736x/55/d9/07/55d9074dea926bd0b92936e6ae1f4dbf.jpg',
            }}
            style={{
              width: 200,
              height: 200,
              marginTop: 25,
              borderWidth: 2,
              borderColor: '#fff',
            }}
          />
          <View style={{marginTop:-20}}>
          <Avatar.Icon size={45} icon="camera" />
          </View>
          <Text style={{fontSize: 25, margin: 8,color:'#fff'}}>Shiv Kumar</Text>
        </View>
      </View>

      {/*  */}
      <View style={{flexDirection: 'row', marginTop: -35}}>
        <View style={styles.box}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => (show ? setShow(false) : setShow(true))}>
              <Text style={{textAlign: 'center', margin: 10,color:'#0198c7'}}>
                Personal Info |
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('clicked')}>
              <Text style={{textAlign: 'center', margin: 10,color:'#0198c7'}}>Flat Detail | </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => console.log("Facilities")}>
              <Text style={{textAlign: 'center', margin: 10,color:'#0198c7'}}>Facilities</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/*  */}

      {/*  */}
      {show ? <ShowPersonalDetail /> : ''}
      {/*  */}

      <View
        style={{
          backgroundColor: '#fff',
          width: '90%',
          margin: 20,
          height: 250,
          borderRadius: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <View>
            <Text style={{marginLeft: -25, fontSize: 30}}>Teanent</Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('AddTeanent')}>
              <Text style={{textAlign: 'right'}}>
                <Ionicons name="add-circle-outline" size={50} color="#0198c7" />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/*  */}
        <View
          style={{
            backgroundColor: '#fff',
            width: '60%',
            margin: 20,
            height: 150,
            borderRadius: 10,
            borderColor: '#cccccc',
            borderWidth: 1,
          }}>
          <View style={{flexDirection: 'row'}}>
            <View style={{margin: 8}}>
              <Avatar.Image
                size={70}
                source={{
                  uri: 'https://i.pinimg.com/736x/55/d9/07/55d9074dea926bd0b92936e6ae1f4dbf.jpg',
                }}
              />
            </View>
            <View style={{margin: 8}}>
              <Text>Shiv Kumar</Text>
              <Text>123456789</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={{flexDirection: 'row', margin: 8}}>
              <View style={{margin: 4}}>
                <Ionicons name="call-outline" size={25} color="#2bdc86" />
              </View>
              <View style={{margin: 4}}>
                <Ionicons name="trash-outline" size={25} color="#f0837f" />
              </View>
              <View style={{margin: 4}}>
                <Ionicons name="create-outline" size={25} color="#6e0c67" />
              </View>
            </View>
            <View style={{marginLeft: 50, margin: 10}}>
              <TouchableOpacity onPress={() => navigation.navigate("TeanentDetail")}>
                <Ionicons
                  name="arrow-forward-outline"
                  size={30}
                  color="#0198c7"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/*  */}
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  box: {
    width: '90%',
    height: 60,
    backgroundColor: '#b3e5fc',
    borderRadius: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#0198c7',
    marginRight: 5,
  },
  box1: {
    width: '90%',
    height: 200,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#0198c7',
    marginRight: 5,
  },
});
