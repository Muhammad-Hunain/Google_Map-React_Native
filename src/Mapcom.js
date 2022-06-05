import React, { useState, useEffect } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Marker } from 'react-native-maps';
// import * as Location from 'react-native-location';
import Geolocation from '@react-native-community/geolocation';
// import GetLocation from 'react-native-get-location'


export default function App() {

const [long,setlong] = useState(78.1278411)
const [lat,setlat] = useState(17.4121531)

    //   useEffect(()=>{
    //     getLocation()
    //     Geolocation.getCurrentPosition({
    //         enableHighAccuracy: true,
    //         timeout: 1500,
    //     })
    //     .then((result)=>{
    //         console.log("Ok")})
    //     .catch((err)=>{
    //         console.log(err)
    //     })
    //   }, [])


    useEffect(()=>{
        Geolocation.getCurrentPosition(
            (position) => {
                console.log(position.coords);
                setlong(position.coords.longitude)
                setlat(position.coords.latitude)

                console.log(lat)
                console.log(long)
                
            },
            (error) => {
                // See error code charts below.
                console.log("Error " + error.code, error.message);
            },
            {
                enableHighAccuracy: false,
                timeout: 5000,
                maximumAge: 10000
            }
        );
      },[])

    //   useEffect(() => {
    //     (async () => {
       

    //       let location = await Geolocation.getCurrentPositionAsync({});

    //       console.log(location)

    //       await Location.watchPositionAsync({ accuracy: Location.Accuracy.Balanced, timeInterval: 300, distanceInterval: 1 }, loc => {console.log(loc.coords)
    //         setLocation(location.coords);});
    //     })();
    //   }, []);


    const data = [
        {
            latitude: 25.3976611,
            longitude: 68.362089,
            title: "Smit Hyderabad",
            description: "New course"
        },
        {
            latitude: 25.396632,
            longitude: 68.3596108,
            title: "Quaid e Azam",
            description: "New course"
        },
        {
            latitude: 30.396632,
            longitude: 70.3596108,
            title: "new",
            description: "New course"
        },
        {
            latitude: lat,
            longitude: long,
            title: "My Current change ",
            description: "New course"
        },
    ];

  

    return (
        <View style={styles.container}>
           

            <MapView
                initialRegion={{
                    latitude: lat,
                    longitude: long,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}

                style={styles.map} >

{data.map((marker, index) => (
                    <Marker
                        key={index}
                        coordinate={{ latitude: data[index]["latitude"], longitude: data[index]["longitude"] }}
                        title={marker.title}
                        description={marker.description}
                    />
                ))}
                  



            </MapView>
         


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 5,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});
