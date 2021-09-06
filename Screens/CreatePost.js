import  React , { Component } from 'react';
import {View,Image,StyleSheet,Text,Platform, StatusBar,ImageBackground,ScrollView} from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import DropDownPicker from "react-native-dropdown-picker";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { SafeAreaView } from 'react-native-safe-area-context';

let customFonts = {"My own font":require('../assets/admiration-pains/Admiration-Pains.ttf')}

let images = require('./temp_images.json')

export default class CreatePost extends React.Component
{
    constructor(){
        super();
        this.state={
            post:false,
            priviewImage:"Image1",
            dropDownHeight:40,
        }
    }

    componentDidMount(){
        this.loadFontsAsync()
    }

   async loadFontsAsync(){
       await Font.loadAsync(customFonts)
       this.setState({
           post:true,
       })
   }
   
   
    render()
    {
        if(!this.state.post)
        {
            return <AppLoading/>
        }
        else{

            let PriviewImages = {
                Image1:require('../assets/image_1.jpg'),
                Image2:require('../assets/image_2.jpg'),
                Image3:require('../assets/image_3.jpg'),
                Image4:require('../assets/image_4.jpg'),
                Image5:require('../assets/image_5.jpg'),
                Image6:require('../assets/image_6.jpg'),
                Image7:require('../assets/image_7.jpg'),
            }

            return(
                <View style={styles.container}>
              <SafeAreaView style={styles.droidSafeArea} />
              <ImageBackground style={styles.backgroundImage} source={require('../MyImage.jpg')}>
              <View style={styles.appTitle}>
                <View style={styles.appIcon}>
                  <Image
                    source={require("../assets/logo.png")}
                    style={styles.iconImage}
                  ></Image>
                </View>
                <View style={styles.appTitleTextContainer}>
                  <Text style={styles.appTitleText}>New Post</Text>
                </View>
              </View>

              <View>
                <ScrollView>
                    <Image
                    source={PriviewImages(this.state.priviewImage)}
                    />

                    <View style={{ height: RFValue(this.state.dropdownHeight) }}>
                        <DropDownPicker
                          items={[
                            {label: "Image_1", value:"image_1"},
                            {label:"Image_2",value:"image_2"},
                            {label: "Image_3", value:"image_3"},
                            {label:"Image_4",value:"image_4"},
                            {label: "Image_5", value:"image_5"}
                          ]}
                          defaultValue = {this.state.priviewImage}
                          containerStyle={{
                            height: 40,
                            borderRadius: 20,
                            marginBottom: 10
                          }}
                          onOpen={()=>{
                            this.setState({
                                dropDownHeight : 170
                            })
                        }}
                        onClose={()=>{
                            this.setState({
                                dropDownHeight:40
                            })
                        }}
                        style={{ backgroundColor: "transparent" }}
                        itemStyle={{
                          justifyContent: "flex-start"
                        }}
                        dropDownStyle={{ backgroundColor: "#2f345d" }}
                        labelStyle={{
                          color: "white",
                          fontFamily: "Bubblegum-Sans"
                        }}
                        arrowStyle={{
                          color: "white",
                          fontFamily: "Bubblegum-Sans"
                        }}
                        onChangeItem={ item =>
                       this.setState({
                           previewImage:item.value
                       })   
                      }
                        />
                    </View>

                                <TextInput
                                style={styles.inputFont}
                                onChangeText ={author => this.setState({author})}
                                placeholder ={"Author"}
                                placeholderTextColor ="white"
                                />

                </ScrollView>
              </View>
              
              </ImageBackground>
              

            </View>
          )
        }
      }
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,

      },
      droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
      },
      appTitle: {
        flex: 0.07,
        flexDirection: "row"
      },
      appIcon: {
        flex: 0.3,
        justifyContent: "center",
        alignItems: "center"
      },
      iconImage: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
      },
      appTitleTextContainer: {
        flex: 0.7,
        justifyContent: "center"
      },
      appTitleText: {
        color: "white",
        fontSize: RFValue(28),
        fontFamily: "Bubblegum-Sans"
      },
      cardContainer: {
        flex: 0.93
      },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    }
    });
    