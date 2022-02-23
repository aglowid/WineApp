import React from 'react';
import {
  Image,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../colors';

const {grey, lightGrey, red, lightYellow} = colors;
const bottle1 = require('../assets/images/Bottle1.png');
const bottle2 = require('../assets/images/Bottle2.png');
const bottle3 = require('../assets/images/Bottle3.png');
const bottle4 = require('../assets/images/Bottle4.png');
const bottle5 = require('../assets/images/Bottle5.png');
const header = require('../assets/images/header.jpg');
const heart = require('../assets/images/heart.png');
const cart = require('../assets/images/cart.png');
const menu = require('../assets/images/menu.png');

const Dashboard = ({navigation}) => {
  const nextScreen = () => navigation.navigate('Detail');
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Header />
      <View style={{margin: '5%'}}>
        <Text style={{fontFamily: 'Poppins-Regular'}}>
          Hello Rose, Choose Your
        </Text>
        <Text style={{fontFamily: 'Poppins-SemiBold', fontSize: 22}}>
          Best Liquor Brands
        </Text>
        <SearchBar />
        <View style={{flexDirection: 'row', marginTop: '10%'}}>
          {[
            {title: 'Beer', color: grey, image: bottle1},
            {title: 'Wine', color: red, image: bottle2},
            {title: 'Whiskey', color: grey, image: bottle3},
          ].map(({title, color, image}) => (
            <Product
              title={title}
              color={color}
              image={image}
              onPress={nextScreen}
            />
          ))}
        </View>
        <View style={{marginTop: '5%'}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontFamily: 'Poppins-SemiBold'}}>Popular Wine</Text>
            <Text style={{fontFamily: 'Poppins-Regular'}}>See all</Text>
          </View>

          <View style={{flexDirection: 'row', marginTop: '10%'}}>
            {[
              {name: 'Red Wine', image: bottle4},
              {name: 'Pink Moscato', image: bottle5},
            ].map(({name, image}) => (
              <ProductDetail name={name} image={image} onPress={nextScreen} />
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

export default Dashboard;

const Header = () => (
  <View
    style={{
      paddingTop: '12%',
      paddingHorizontal: '5%',
      height: 100,
      flexDirection: 'row',
      alignItems: 'center',
    }}>
    <Image source={menu} resizeMode="contain" />
    <View style={{flex: 1}} />
    <Image source={cart} resizeMode="contain" />
    <Image
      source={header}
      style={{height: 50, width: 50, borderRadius: 10, marginLeft: '5%'}}
    />
  </View>
);

const SearchBar = () => (
  <View
    style={{
      marginVertical: 10,
      flexDirection: 'row',
      backgroundColor: grey,
      padding: 10,
      borderRadius: 8,
    }}>
    <TextInput
      placeholder="Search your brands"
      placeholderTextColor={'#00000070'}
    />
  </View>
);

const Product = ({title, color, image, onPress}) => (
  <TouchableOpacity
    style={{
      flex: 1,
      borderRadius: 10,
      margin: 8,
      marginTop: '5%',
      backgroundColor: color,
      flexDirection: 'row',
      paddingVertical: 10,
      justifyContent: 'center',
      height: 100,
    }}
    onPress={onPress}>
    <View style={{flex: 1}}>
      <Image
        source={image}
        resizeMode="contain"
        style={{
          height: 110,
          width: 100,
          zIndex: 1,
          bottom: 2,
          left: -10,
          position: 'absolute',
        }}
      />
    </View>
    <View
      style={{
        flexDirection: 'row',
        position: 'absolute',
        right: title === 'Whiskey' ? -10 : 0,
        bottom: title === 'Whiskey' ? 30 : 20,
      }}>
      <Text
        style={{
          transform: [{rotate: '-90deg'}],
          color: '#fff',
          fontFamily: 'Poppins-SemiBold',
          textAlign: 'left',
          alignSelf: 'flex-end',
        }}>
        {title}
      </Text>
    </View>
  </TouchableOpacity>
);

const ProductDetail = ({name, image, onPress}) => (
  <TouchableOpacity
    style={{
      flex: 1,
      backgroundColor: lightYellow,
      margin: 10,
      padding: 10,
      borderRadius: 10,
      height: 225,
    }}
    onPress={onPress}>
    <View style={{flex: 1, justifyContent: 'space-between'}}>
      <View
        style={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          backgroundColor: '#fff',
          borderRadius: 50,
          padding: 10,
        }}>
        <Image
          source={heart}
          style={{height: 20, aspectRatio: 1, resizeMode: 'contain'}}
        />
      </View>
      <Image
        source={image}
        style={{position: 'absolute', right: 10, top: -50}}
      />
    </View>
    <View style={{justifyContent: 'flex-end', marginVertical: '5%'}}>
      <Text style={{fontFamily: 'Poppins-SemiBold'}}>{name}</Text>
      <Text style={{fontFamily: 'Poppins-Regular', fontSize: 10}}>
        Barefoot wine
      </Text>
      <Text style={{fontFamily: 'Poppins-Regular', fontSize: 10}}>750 ml</Text>
    </View>
    <Text style={{fontFamily: 'Poppins-Medium', fontSize: 12}}>$ 8.54</Text>
  </TouchableOpacity>
);
