import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';

const Account = ({navigation}) => {
  return (
    <ScrollView>
      <View style={{backgroundColor: '#0198c7', borderBottomLeftRadius: 50}}>
        <Text
          style={{
            textAlign: 'right',
            fontSize: 25,
            marginBottom: 200,
            margin: 10,
            color: '#fff',
          }}>
          Logout <Ionicons name="power-outline" size={30} color="red" />
        </Text>
      </View>

      {/* first box */}

      <View style={{flexDirection: 'row', marginTop: -100}}>
        <View style={styles.box}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItem: 'center'}}>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <View
                style={{
                  borderRadius: 50,
                  borderWidth: 1,
                  borderColor: '#ce648e',
                  marginHorizontal: 50,
                }}>
                <Text style={{textAlign: 'center'}}>
                  <Ionicons name="person-outline" size={50} color="#ce648e" />
                </Text>
              </View>
              <Text style={{textAlign: 'center'}}>Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.box}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItem: 'center'}}>
            <TouchableOpacity>
              <View
                style={{
                  borderRadius: 50,
                  borderWidth: 1,
                  borderColor: 'green',
                  marginHorizontal: 50,
                }}>
                <Text style={{textAlign: 'center'}}>
                  <Ionicons name="megaphone-outline" size={50} color="green" />
                </Text>
              </View>
              <Text style={{textAlign: 'center'}}>Notice</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Secon Box */}

      <View style={{flexDirection: 'row'}}>
        <View style={styles.box}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItem: 'center'}}>
            <TouchableOpacity>
              <View
                style={{
                  borderRadius: 80,
                  borderWidth: 1,
                  borderColor: 'red',
                  marginHorizontal: 50,
                }}>
                <Text style={{textAlign: 'center'}}>
                  <Ionicons name="people-outline" size={50} color="red" />
                </Text>
              </View>
              <Text style={{textAlign: 'center'}}>Visitor</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.box}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItem: 'center'}}>
            <TouchableOpacity>
              <View
                style={{
                  borderRadius: 50,
                  borderWidth: 1,
                  borderColor: '#fecbbd',
                  marginHorizontal: 50,
                }}>
                <Text style={{textAlign: 'center'}}>
                  <Ionicons name="pulse-outline" size={50} color="red" />
                </Text>
              </View>
              <Text style={{textAlign: 'center'}}>Poll</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* End Second box */}
      <View style={{flexDirection: 'row'}}>
        <View style={styles.box}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItem: 'center'}}>
            <TouchableOpacity>
              <View
                style={{
                  borderRadius: 50,
                  borderWidth: 1,
                  borderColor: '#1472ca',
                  marginHorizontal: 50,
                }}>
                <Text style={{textAlign: 'center'}}>
                  <Ionicons name="wallet-outline" size={50} color="#1472ca" />
                </Text>
              </View>
              <Text style={{textAlign: 'center'}}>Billing</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.box}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItem: 'center'}}>
            <TouchableOpacity>
              <View
                style={{
                  borderRadius: 50,
                  borderWidth: 1,
                  borderColor: '#8a91cb',
                  marginHorizontal: 50,
                }}>
                <Text style={{textAlign: 'center'}}>
                  <Ionicons
                    name="alert-circle-outline"
                    size={50}
                    color="#8a91cb"
                  />
                </Text>
              </View>
              <Text style={{textAlign: 'center'}}>Complaint</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  box: {
    width: '45%',
    height: 200,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
  },
});

export default Account;
