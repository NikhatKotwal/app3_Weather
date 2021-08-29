import React from "react";
import { Image, Text, View } from "react-native";
import { connect } from "react-redux";
import Styles from "../styles/Styles";


const Weather = (weather: any) => {
    return (
        <View style={Styles.container}>
            <View style={Styles.list}>
                <Text>
                    <Text style={Styles.btext}>Temparature: </Text>
                    <Text>{weather.weather.temperature}</Text>
                </Text>
            </View>
            <View style={Styles.list}>
                <Text>
                    <Text style={Styles.btext}>Weather: </Text>
                    <Text>{weather.weather.temperature} </Text>
                    {/* <Text>{JSON.stringify(weather.weather.weather_icons)}</Text> */}
                    {weather.weather.weather_icons.map((icon: any) => <Image key={icon} style={{ width: 20, height: 20 }} source={{ uri: icon }} />)}
                </Text>
            </View>
            <View style={Styles.list}>
                <Text>
                    <Text style={Styles.btext}>Wind speed: </Text>
                    <Text>{weather.weather.wind_speed}</Text>
                </Text>
            </View>
            <View style={Styles.list}>
                <Text>
                    <Text style={Styles.btext}>Precip: </Text>
                    <Text>{weather.weather.precip}</Text>
                </Text>
            </View>
        </View>
    )
}

const mapStateToProps = (state: any) => (
    { weather: state.reducer.weather.data.current }
)

export default connect(mapStateToProps)(Weather);