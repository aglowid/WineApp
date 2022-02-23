import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../colors';
const {bgYellow, yellow, lightGrey} = colors;

const back = require('../assets/images/back.png');
const bottle = require('../assets/images/bigBottle.png');
const Detail = ({navigation}) => {
  return (
    <ScrollView
      style={{backgroundColor: '#fff', flex: 1, paddingHorizontal: '5%'}}
      contentContainerStyle={{flex: 1}}>
      <BGImage />
      <Header onPress={() => navigation.goBack()} />
      <View style={{flex: 1, marginVertical: '5%'}}>
        <Image
          source={bottle}
          style={{
            position: 'absolute',
            right: 0,
            height: 450,
            resizeMode: 'contain',
          }}
        />
        <View style={{flex: 1}}>
          <Text style={{fontFamily: 'Poppins-Bold', fontSize: 20}}>
            CHARDONNAY
          </Text>
          <Text style={{fontFamily: 'Poppins-Medium', fontSize: 12}}>
            Barefoot wine
          </Text>
        </View>

        <View style={{flex: 1}}>
          <Text style={{fontFamily: 'Poppins-Regular', fontSize: 10}}>
            Tastes like...
          </Text>
          <Text style={{fontFamily: 'Poppins-Medium', fontSize: 12}}>
            Apple, Rich, Vanilla
          </Text>
        </View>

        <View style={{flex: 1}}>
          <Text style={{fontFamily: 'Poppins-Regular', fontSize: 12}}>
            Wine Type...
          </Text>
          <Text style={{fontFamily: 'Poppins-Medium', fontSize: 12}}>
            White Wine
          </Text>
        </View>

        <View style={{flex: 1}}>
          <Text style={{fontFamily: 'Poppins-Regular', fontSize: 12}}>
            Size
          </Text>
          <View
            style={{
              backgroundColor: '#fff',
              padding: 10,
              width: '40%',
              borderRadius: 10,
              shadowOffset: {width: 1, height: 5},
              shadowColor: '#00000070',
              shadowOpacity: 0.2,
              shadowRadius: 5,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontFamily: 'Poppins-Regular', fontSize: 12}}>
              1.5 L
            </Text>
            <View style={{transform: [{rotate: '-90deg'}]}}>
              <Image source={back} />
            </View>
          </View>
        </View>

        <View style={{flex: 1}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: `${lightGrey}60`,
              justifyContent: 'space-between',
              width: '40%',
              borderRadius: 10,
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fff',
                paddingHorizontal: 15,
                paddingVertical: 10,
                borderRadius: 10,
                shadowOffset: {width: 1, height: 5},
                shadowColor: '#00000070',
                shadowOpacity: 0.2,
                shadowRadius: 5,
              }}>
              <Text style={{fontFamily: 'Poppins-Regular', fontSize: 15}}>
                +
              </Text>
            </View>
            <View>
              <Text style={{fontFamily: 'Poppins-Regular', fontSize: 15}}>
                02
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fff',
                paddingHorizontal: 15,
                paddingVertical: 10,
                borderRadius: 10,
                shadowOffset: {width: 1, height: 5},
                shadowColor: '#00000070',
                shadowOpacity: 0.2,
                shadowRadius: 5,
              }}>
              <Text style={{fontFamily: 'Poppins-Regular', fontSize: 15}}>
                -
              </Text>
            </View>
          </View>
        </View>

        <View style={{flex: 2}}>
          <Text style={{fontFamily: 'Poppins-SemiBold'}}>About</Text>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
              fontSize: 10,
              color: '#00000060',
              marginTop: '2%',
            }}>
            Packing big, bold flavor with a smooth finish, Barefoot Chardonnay
            brings tempting flavors to evry bottle, with notes of crisp, grren
            apples and seet peaches. Accented with hints of honey and vanilla,
            our medium bottled chardonnay pairs perfectly with fresh fruit,
            pasta, chicken and salmon.
          </Text>
        </View>
        <View
          style={{
            backgroundColor: yellow,
            justifyContent: 'center',

            borderRadius: 15,
            flex: 0.5,
            flexDirection: 'row',
          }}>
          <Text
            style={{
              flex: 1,
              alignSelf: 'center',
              textAlign: 'center',
              fontFamily: 'Poppins-Regular',
            }}>
            Total - $ 16.80
          </Text>
          <View
            style={{
              flex: 1,
              backgroundColor: '#fff',
              marginHorizontal: 5,
              marginVertical: 4,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 14,
            }}>
            <Text>Add to cart</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Detail;

const Header = ({onPress}) => (
  <TouchableOpacity
    style={{
      paddingTop: '12%',
      height: 100,
      flexDirection: 'row',
      alignItems: 'center',
    }}
    onPress={onPress}>
    <View
      style={{
        backgroundColor: '#fff',
        padding: 5,
        borderRadius: 10,
        height: 45,
        width: 45,
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: {width: 1, height: 5},
        shadowColor: '#00000070',
        shadowOpacity: 0.2,
        shadowRadius: 5,
      }}>
      <Image source={back} />
    </View>
  </TouchableOpacity>
);

const BGImage = () => (
  <View style={{position: 'absolute'}}>
    <Circle />
    {/* {[1, 2, 3].map(() => ( */}
    {/* ))} */}
  </View>
);

const Circle = () => (
  <View style={{flex: 1}}>
    <View
      style={{
        flex: 1,
        height: 300,
        width: 300,
        borderRadius: 200,
        backgroundColor: bgYellow,
        left: -75,
        top: -50,
      }}
    />
    <View
      style={{
        height: 400,
        width: 400,
        borderRadius: 200,
        backgroundColor: bgYellow,
        right: -100,
        top: -50,
      }}
    />
  </View>
);
