import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import countryList from 'country-list';

import Button from '../../components/Button';
import styles from './styles';

const countries = countryList.getData();

const Address = () => {
  const [country, setCountry] = useState(countries[0].code);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [addressError, setAddressError] = useState('');

  const [city, setCity] = useState('');

  const onCheckout = () => {
    if (addressError) {
      return Alert.alert('Fix all field errors before submitting');
    }
    if (!fullName) {
      return Alert.alert('Please fill in the full name field');
    }

    if (!phone) {
      return Alert.alert('Please fill in the phone number field');
    }

    console.warn('Success. Checkout');
  };

  const validateAddress = () => {
    if (address.length < 3) {
      setAddressError('Address is too short');
    }

    if (address.length > 10) {
      setAddressError('Address is too long');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}>
      <ScrollView style={styles.root}>
        <View style={styles.row}>
          <Picker selectedValue={country} onValueChange={setCountry}>
            {countries.map((countryMap, index) => (
              <Picker.Item
                key={index}
                value={countryMap.code}
                label={countryMap.name}
              />
            ))}
          </Picker>
        </View>

        {/* <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder="Mexico"
          value={fullName}
          onChangeText={setFullName}
          onPressIn={() => {}}
        />
      </View> */}

        {/* Full Name */}
        <View style={styles.row}>
          <Text style={styles.label}>Full name (First and Last name)</Text>
          <TextInput
            style={styles.input}
            placeholder="Full name"
            value={fullName}
            onChangeText={setFullName}
          />
        </View>

        {/* Phone Number */}
        <View style={styles.row}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            keyboardType={'phone-pad'}
            style={styles.input}
            placeholder="Phone number"
            value={phone}
            onChangeText={setPhone}
          />
        </View>

        {/* Address */}
        <View style={styles.row}>
          <Text style={styles.label}>Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Address"
            value={address}
            onEndEditing={validateAddress}
            onChangeText={text => {
              setAddress(text);
              setAddressError('');
            }}
          />
          {addressError && <Text style={styles.error}>{addressError}</Text>}
        </View>

        {/* City */}
        <View style={styles.row}>
          <Text style={styles.label}>City</Text>
          <TextInput
            style={styles.input}
            placeholder="City"
            value={city}
            onChangeText={setCity}
          />
        </View>

        <Button type="Checkout" text="Checkout" onPress={onCheckout} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Address;
