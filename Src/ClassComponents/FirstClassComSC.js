import React, {Component} from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import {TabView, TabBar, SceneMap} from 'react-native-tab-view';
import tab from '../assets/tablet.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Accordion from 'react-native-collapsible/Accordion';

// Define your tab scenes
const FirstRoute = () => (
  <View style={{flex: 1}}>
    <ScrollView>
      <View
        style={{
          height: 45,
          backgroundColor: '#a8a9a9',
          marginTop: 10,
          padding: 10,
        }}>
        <Text style={{fontSize: 20}}>Medicine Overview</Text>
      </View>
      {/* set start */}
      <Text
        style={{
          fontSize: 17,
          marginLeft: 15,
          margin: 10,
          color: 'black',
          fontWeight: 'bold',
        }}>
        Introduction To Spamp-E 50 Amphotericin B
      </Text>
      <Text style={{fontSize: 15, padding: 15, color: 'grey'}}>
        Spamp-E 50 Injection is an antifungal medication containing the active
        constituent amphotericin B.It is used to treat serious infections caused
        by fungi. It is used to treat mucormycosis or black fungus, especially
        among patients who are recovering or have recovered from covid-19. Talk
        to your doctor if you have diabetes, kidney disorders, or allergic
        conditions before taking this medicine. It is essential to tell your
        healthcare provider about all the medicines you are taking recently,
        including supplements and herbal medicines. Spamp-E 50 Injection is not
        recommended in babies under one month old. Repict to your doctor if you
        experience any allergic reactions while taking this medicine.
      </Text>

      <View style={{height: 1, backgroundColor: 'grey'}}></View>
      {/* set start end  */}
      {/* set start 2 */}
      <Text
        style={{
          fontSize: 17,
          marginLeft: 15,
          margin: 10,
          color: 'black',
          fontWeight: 'bold',
        }}>
        Introduction To Spamp-E 50 Amphotericin B
      </Text>
      <Text style={{fontSize: 15, padding: 15, color: 'grey'}}>
        Spamp-E 50 Injection is an antifungal medication containing the active
        constituent amphotericin B.It is used to treat serious infections caused
        by fungi. It is used to treat mucormycosis or black fungus, especially
        among patients who are recovering or have recovered from covid-19. Talk
        to your doctor if you have diabetes, kidney disorders, or allergic
        conditions before taking this medicine. It is essential to tell your
        healthcare provider about all the medicines you are taking recently,
        including supplements and herbal medicines. Spamp-E 50 Injection is not
        recommended in babies under one month old. Repict to your doctor if you
        experience any allergic reactions while taking this medicine.
      </Text>

      <View style={{height: 1, backgroundColor: 'grey'}}></View>

      {/* set start end 2 */}
      {/* set start 3 */}
      <Text
        style={{
          fontSize: 17,
          marginLeft: 15,
          margin: 10,
          color: 'black',
          fontWeight: 'bold',
        }}>
        Introduction To Spamp-E 50 Amphotericin B
      </Text>
      <Text style={{fontSize: 15, padding: 15, color: 'grey'}}>
        Spamp-E 50 Injection is an antifungal medication containing the active
        constituent amphotericin B.It is used to treat serious infections caused
        by fungi. It is used to treat mucormycosis or black fungus, especially
        among patients who are recovering or have recovered from covid-19. Talk
        to your doctor if you have diabetes, kidney disorders, or allergic
        conditions before taking this medicine. It is essential to tell your
        healthcare provider about all the medicines you are taking recently,
        including supplements and herbal medicines. Spamp-E 50 Injection is not
        recommended in babies under one month old. Repict to your doctor if you
        experience any allergic reactions while taking this medicine.
      </Text>

      <View style={{height: 1, backgroundColor: 'grey'}}></View>

      {/* set start end 3 */}
      {/* word tab  */}
      <Text
        style={{
          fontSize: 17,
          marginLeft: 15,
          margin: 10,
          color: 'black',
          fontWeight: 'bold',
        }}>
        Word Of Advice
      </Text>

      <Text style={{fontSize: 15, padding: 15, color: 'grey'}}>
        1. Word of Advice for SPAMP-E 50 AMPHOTERICIN B 2. Word of Advice for
        SPAMP-E 50 AMPHOTERICIN B
      </Text>
      <Text
        style={{
          fontSize: 17,
          marginLeft: 15,
          margin: 10,
          color: 'black',
          fontWeight: 'bold',
        }}>
        Other Products
      </Text>
      {/* flatlist Image  */}
      <View style={{height: 300, flexDirection: 'row'}}>
        <View
          style={{
            flex: 0.5,
            margin: 10,
            borderRadius: 10,
            borderColor: 'black',
            borderWidth: 1,
          }}>
          <View
            style={{
              flex: 0.2,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                margin: 5,
                height: 40,
                width: 40,
                borderRadius: 40,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'blue',
              }}>
              <Text style={{fontSize: 17, color: 'white', fontWeight: 'bold'}}>
                RX
              </Text>
            </View>
            <View
              style={{
                height: 40,
                width: 70,
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'blue',
              }}>
              <Text style={{fontSize: 15, color: 'white', fontWeight: 'bold'}}>
                26% OFF
              </Text>
            </View>
          </View>

          <View
            style={{flex: 0.3, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{height: 75, width: 150}} source={tab} />
          </View>
          <View style={{flex: 0.3, paddingLeft: 10}}>
            <Text style={{fontSize: 15, fontWeight: 'bold', color: 'black'}}>
              CADITAM 20MG TABL...
            </Text>
            <Text style={{fontSize: 12, color: 'grey'}}>TAMOXIFEN CITRATE</Text>
            <Text style={{fontSize: 11, color: 'grey'}}>
              CADILA PHARMACEUTICALS...
            </Text>
            <Text style={{fontSize: 12, color: 'grey'}}>₹24 </Text>
            <Text
              style={{
                fontSize: 12,
                color: 'grey',
                textDecorationLine: 'line-through',
              }}>
              ₹324.65{' '}
            </Text>
          </View>
          <View
            style={{flex: 0.2, alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity
              style={{
                height: 35,
                width: 140,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'blue',
                borderRadius: 20,
              }}>
              <Text style={{color:"white"}}>Add to Card</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* 2nd  */}
        <View
          style={{
            flex: 0.5,
            margin: 10,
            borderRadius: 10,
            borderColor: 'black',
            borderWidth: 1,
          }}>
          <View
            style={{
              flex: 0.2,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                margin: 5,
                height: 40,
                width: 40,
                borderRadius: 40,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'blue',
              }}>
              <Text style={{fontSize: 17, color: 'white', fontWeight: 'bold'}}>
                RX
              </Text>
            </View>
            <View
              style={{
                height: 40,
                width: 70,
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'blue',
              }}>
              <Text style={{fontSize: 15, color: 'white', fontWeight: 'bold'}}>
                26% OFF
              </Text>
            </View>
          </View>

          <View
            style={{flex: 0.3, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={{height: 75, width: 150}} source={tab} />
          </View>
          <View style={{flex: 0.3, paddingLeft: 10}}>
            <Text style={{fontSize: 15, fontWeight: 'bold', color: 'black'}}>
              CADITAM 20MG TABL...
            </Text>
            <Text style={{fontSize: 12, color: 'grey'}}>TAMOXIFEN CITRATE</Text>
            <Text style={{fontSize: 11, color: 'grey'}}>
              CADILA PHARMACEUTICALS...
            </Text>
            <Text style={{fontSize: 12, color: 'grey'}}>₹24 </Text>
            <Text
              style={{
                fontSize: 12,
                color: 'grey',
                textDecorationLine: 'line-through',
              }}>
              ₹324.65{' '}
            </Text>
          </View>
          <View
            style={{flex: 0.2, alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity
              style={{
                height: 35,
                width: 140,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'blue',
                borderRadius: 20,
              }}>
              <Text style={{color:"white"}}>Add to Card</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  </View>
);

const SecondRoute = () => (
  <View style={{flex: 1}}>
    <ScrollView>
      <View
        style={{
          height: 45,
          backgroundColor: '#a8a9a9',
          marginTop: 10,
          padding: 10,
        }}>
        <Text style={{fontSize: 20}}>Patient Concerns</Text>
      </View>
      <Text
        style={{
          fontSize: 17,
          marginLeft: 15,
          margin: 10,
          color: 'black',
          fontWeight: 'bold',
        }}>
        Safety Advice
      </Text>
      {/* icon view  */}
      <View style={{flexDirection: 'row', margin: 10}}>
        <Icon
          name="human-pregnant"
          style={{marginRight: 10}}
          size={35}
          color="#645a75"
        />
        <Text style={{fontSize: 20}}>Pregnancy</Text>
        <View
          style={{
            height: 30,
            width: 80,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
            backgroundColor: 'green',
            marginLeft: 10,
          }}>
          <Text style={{color: 'lime'}}>Safe</Text>
        </View>
      </View>

      <View style={{justifyContent: 'center', padding: 20, bottom: 20}}>
        <Text style={{fontSize: 15, color: 'grey'}}>
          Inform your doctor about any medications you are taking or have taken
          before the treatment.
        </Text>
        <Text style={{fontSize: 15, color: 'grey'}}>
          Inform your doctor about any medications you are taking or have taken
          before the treatment.
        </Text>
      </View>
      <View style={{height: 1, backgroundColor: 'grey'}}></View>
      {/* second  */}
      <View style={{flexDirection: 'row', margin: 10}}>
        <Icon
          name="human-pregnant"
          style={{marginRight: 10}}
          size={35}
          color="#645a75"
        />
        <Text style={{fontSize: 20}}>Breast Feeding</Text>
        <View
          style={{
            height: 30,
            width: 80,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
            backgroundColor: 'pink',
            marginLeft: 10,
          }}>
          <Text style={{color: 'black'}}>Unsafe</Text>
        </View>
      </View>

      <View style={{padding: 20, bottom: 20}}>
        <Text style={{fontSize: 15, color: 'grey'}}>
          1. Dont consume this.{}
          2. Inform your doctor about any medications you are taking or have
          taken before the treatment.
        </Text>
      </View>
      <View style={{height: 1, backgroundColor: 'grey'}}></View>
      {/* end  */}
       {/* Third  */}
       <View style={{flexDirection: 'row', margin: 10}}>
        <Icon
          name="human-pregnant"
          style={{marginRight: 10}}
          size={35}
          color="#645a75"
        />
        <Text style={{fontSize: 20}}>Lungs</Text>
        <View
          style={{
            height: 30,
            width: 80,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
            backgroundColor: 'green',
            marginLeft: 10,
          }}>
          <Text style={{color: 'black'}}>Unsafe</Text>
        </View>
      </View>

      <View style={{padding: 20, bottom: 20}}>
        <Text style={{fontSize: 15, color: 'grey'}}>
          1. Dont consume this.{}
          2. Inform your doctor about any medications you are taking or have
          taken before the treatment.
        </Text>
      </View>
      <View style={{height: 1, backgroundColor: 'grey'}}></View>
      {/* end  */}


    </ScrollView>
  </View>
);
const thirdRoute = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Third Tab</Text>
  </View>
);



class FirstClassComSC extends Component {
  state = {
    index: 0,
    routes: [
      {key: 'first', title: 'Medicine OverView'},
      {key: 'second', title: 'Patient Concerns'},
      {key: 'third', title: 'In Depth Information'},
    ],
  };

  // Method to handle tab changes
  handleIndexChange = index => {
    this.setState({index});
  };

  // Method to render individual tabs
  renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: thirdRoute,
  });

  // Method to render tab bar
  renderTabBar = props => (
    <TabBar
      inactiveColor="black"
      activeColor="blue"
      {...props}
      indicatorStyle={{backgroundColor: 'blue'}}
      style={{backgroundColor: 'white'}}
      labelStyle={{color: 'black', fontSize: 11}}
    />
  );

  render() {
    return (
      <>
        <View style={{flex: 1}}>
          <View style={{flex: 0.1}}></View>
          <TabView
            navigationState={this.state}
            renderScene={this.renderScene}
            renderTabBar={this.renderTabBar}
            onIndexChange={this.handleIndexChange}
          />
        </View>
      </>
    );
  }
}

export default FirstClassComSC;
