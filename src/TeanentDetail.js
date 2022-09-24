import {StyleSheet, Text, View, Linking, TouchableOpacity} from 'react-native';
import {RadioButton, Avatar} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';

const TeanentDetail = ({navigation}) => {
  const number = 123456789;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItem: 'center',
        backgroundColor: '#bdbdbd',
      }}>
      <View
        style={{
          backgroundColor: '#fff',
          width: '90%',
          margin: 20,
          height: 450,
          borderRadius: 10,
        }}>
        {/*  */}
        <View
          style={{
            justifyContent: 'center',
            alignItem: 'center',
            marginHorizontal: '30%',
            marginTop: -60,
          }}>
          <Avatar.Image
            size={150}
            source={{
              uri: 'https://i.pinimg.com/736x/55/d9/07/55d9074dea926bd0b92936e6ae1f4dbf.jpg',
            }}
          />
        </View>
        {/*  */}

        {/*  */}
        <View>
          <Text style={{textAlign: 'center', fontSize: 25, fontWidth: 8}}>
            Shiv kumar
          </Text>
          <Text style={{textAlign: 'center', fontSize: 20, fontWidth: 8}}>
            <Ionicons name="phone-portrait-outline" size={25} color="#0198c7" />
            123456789
          </Text>
        </View>
        {/*  */}
        {/*  */}
        <View
          style={{
            flexDirection: 'row',
            margin: 8,
          }}>
          <View>
            <Text style={{fontSize: 15, marginHorizontal: 50}}>
              <Ionicons name="man-outline" size={20} color="#0198c7" />
              Gender : Other
            </Text>
          </View>
        </View>
        {/*  */}
        {/*  */}
        <View
          style={{
            flexDirection: 'row',
            margin: 8,
          }}>
          <View>
            <Text style={{fontSize: 15, marginHorizontal: 50}}>
              <Ionicons name="mail-outline" size={20} color="#0198c7" />
              Email : abc@gmail.com
            </Text>
          </View>
        </View>
        {/*  */}
        {/*  */}
        <View
          style={{
            flexDirection: 'row',
            margin: 8,
          }}>
          <View>
            <Text style={{fontSize: 15, marginHorizontal: 50}}>
              {' '}
              <Ionicons name="albums-outline" size={20} color="#0198c7" />
              Adhar Number : 123456789
            </Text>
          </View>
        </View>
        {/*  */}
        {/*  */}
        <View
          style={{
            flexDirection: 'row',
            margin: 8,
          }}>
          <View>
            <Text style={{fontSize: 15, marginHorizontal: 50}}>
              <Ionicons name="calendar-outline" size={20} color="#0198c7" />
              Birth Date : 15 jan 2011
            </Text>
          </View>
        </View>
        {/*  */}
        {/*  */}
        <View
          style={{
            flexDirection: 'row',
            margin: 8,
          }}>
          <View>
            <Text style={{fontSize: 15, marginHorizontal: 50}}>
              <Ionicons name="reader-outline" size={20} color="#0198c7" />
              Address : India
            </Text>
          </View>
        </View>
        {/*  */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            margin: 15,
          }}>
          <View>
            <TouchableOpacity onPress={() => Linking.openURL(`tel:${number}`)}>
              <Ionicons name="call-outline" size={40} color="red" />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  'mailto:abc@gmail.com?subject=SendMail&body=Description',
                )
              }>
              <Ionicons name="mail" size={40} color="pink" />
            </TouchableOpacity>
          </View>
          <View>
            <Ionicons name="link-outline" size={50} color="black" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default TeanentDetail;

const styles = StyleSheet.create({});
