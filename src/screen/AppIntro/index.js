import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/Ionicons';

const AppIntro = ({navigation}) => {
  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    setShowRealApp(true);
    navigation.navigate('LoginScreen');
  };
  const onSkip = () => {
    setShowRealApp(true);
    navigation.navigate('LoginScreen');
  };

  const renderItem = ({item}) => {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
        }}>
        {item.key == 1 && (
          <TouchableOpacity 
          onPress={() => navigation.navigate('LoginScreen')}
          style={{marginTop: 10, paddingHorizontal: 10}}>
            <Text style={{textAlign: 'right', fontSize: 15}}>Skip</Text>
          </TouchableOpacity>
        )}
        {item.key == 2 && (
          <TouchableOpacity 
          onPress={() => navigation.navigate('LoginScreen')}
          style={{marginTop: 10, paddingHorizontal: 10}}>
            <Text style={{textAlign: 'right', fontSize: 15}}>Skip</Text>
          </TouchableOpacity>
        )}
        <View style={{alignItems: 'center'}}>
          <Image
            source={item.image}
            style={{height: '80%', width: '80%'}}
            resizeMode={'contain'}
          />
        </View>

        <View
          style={{
            width: '100%',
            height: '50%',
            backgroundColor: '#fff',
            //justifyContent: 'center',
            //alignItems: 'center',
            position: 'absolute', //Here is the trick
            bottom: 0, //Here is the trick
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            paddingVertical: 30,
            paddingHorizontal: 3,
          }}>
          <Text style={{fontSize: 22, fontWeight: 'bold', textAlign: 'center'}}>
            {item.title}
          </Text>
          <Text style={{fontSize: 16, textAlign: 'center', marginTop: 10}}>
            {item.text}
          </Text>
          {item.key == 3 && (
            <TouchableOpacity
            onPress={() => navigation.navigate('LoginScreen')}
              style={{
                zIndex: 10,
                padding: 10,
                backgroundColor: '#18721A',
                borderRadius: 10,
                //marginTop:40,
                position: 'absolute',
                top: '80%',
                alignSelf: 'center',
                width: 200,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: '#fff', fontWeight: '700', fontSize: 20}}>
                {'Get Started'}
              </Text>
            </TouchableOpacity>
          )}
          {item.key == 1 && (
            <TouchableOpacity
              onPress={() => slider.current.goToSlide(1, true)}
              style={{
                zIndex: 10,
                padding: 10,
                backgroundColor: '#18721A',
                borderRadius: 10,
                //marginTop:40,
                position: 'absolute',
                top: '80%',
                alignSelf: 'center',
                width: 200,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: '#fff', fontWeight: '700', fontSize: 20}}>
                {'Next'}
              </Text>
            </TouchableOpacity>
          )}
          {item.key == 2 && (
            <TouchableOpacity
              onPress={() => slider.current.goToSlide(2, true)}
              style={{
                zIndex: 10,
                padding: 10,
                backgroundColor: '#18721A',
                borderRadius: 10,
                //marginTop:40,
                position: 'absolute',
                top: '80%',
                alignSelf: 'center',
                width: 200,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: '#fff', fontWeight: '700', fontSize: 20}}>
                {'Next'}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </SafeAreaView>
    );
  };

  const slider = useRef();
  /*const renderPagination = (activeIndex ) => {
    return (
      <View style={{position: 'absolute', bottom: 16, left: 16, right: 16}}>
        <SafeAreaView>
          <View
            style={{
              height: 16,
              margin: 16,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Text>Skip</Text>

            {slides.length > 1 &&
              slides.map((_, i) => (
                <TouchableOpacity
                  key={i}
                  style={[
                    styles.dot,
                    i === activeIndex
                      ? {backgroundColor: 'black'}
                      : {backgroundColor: 'blue'},
                  ]}
                  onPress={() => slider.current.goToSlide(i, true)}
                />
              ))}
          </View>
        </SafeAreaView>
      </View>
    );
  };
  const slider = useRef();*/
  // renderDoneButton = () => {
  //    return (
  //      <View>
  //        <Text style={{color: '#18721A', fontWeight: 'bold', fontSize: 18}}>
  //          Done
  //        </Text>
  //      </View>
  //    );
  //  };
  // renderSkipButton = () => {
  //   return (
  //     <View>
  //       <Text style={{color: '#18721A', fontWeight: 'bold', fontSize: 18}}>
  //         Skip
  //       </Text>
  //     </View>
  //   );
  // };
  // renderNextButton = () => {
  //   return (
  //     <View>
  //       <Text style={{color: '#18721A', fontWeight: 'bold', fontSize: 18}}>
  //         Next
  //       </Text>
  //     </View>
  //   );
  // };

  return (
    <AppIntroSlider
      data={slides}
      renderItem={renderItem}
      //renderPagination={renderPagination}
      onDone={onDone}
      ref={(ref) => (slider.current = ref)}
      //renderDoneButton={renderDoneButton}
      //renderNextButton={renderNextButton}
      //renderSkipButton={renderSkipButton}
      onSkip={onSkip}
      showSkipButton={true}
      dotStyle={{marginLeft: -5, width: 30, backgroundColor: '#CCFFCE'}}
      activeDotStyle={{marginLeft: -5, width: 30, backgroundColor: '#18721A'}}
    />
  );
};

const slides = [
  {
    key: '1',
    title: 'Find Your Nearest Charging Station',
    text: 'Now you can find many of places to charge your ev with EV Charger',
    image: require('../../assets/images/ev-charging-systems.png'),
    backgroundColor: '#CEF1D0',
  },
  {
    key: '2',
    title: 'Book A Hassle Free Charging Slot',
    text: 'Check for open charging slot in Real Time. Book your slot as per your preferance',
    image: require('../../assets/images/ev-charging-systems.png'),
    backgroundColor: '#CFEEF1',
  },
  {
    key: '3',
    title: 'We Got You Covered With Our Fastest Sevices',
    text: 'Get our services and amazing offers & emergency services and support for 24*7',
    image: require('../../assets/images/ev-charging-systems.png'),
    backgroundColor: '#EEF2CF',
  },
];

const styles = StyleSheet.create({
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginHorizontal: 24,
  },
  button: {
    flex: 1,
    paddingVertical: 20,
    marginHorizontal: 8,
    borderRadius: 24,
    backgroundColor: '#1cb278',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default AppIntro;
