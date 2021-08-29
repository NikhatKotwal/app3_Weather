import React from "react";
import { Button, Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { getCountryWeather } from "../redux/action";
import Styles from "../styles/Styles";

type Props = {
    getCountryWeather: Function
    country: any
    navigation: {
        navigate: Function
    }
}

const Country = ({ getCountryWeather, country, navigation }: Props) => {
    const handleClick = () => {
        getCountryWeather(country.capital, navigation)
    }
    return (
        <View style={Styles.container}>
            <View>
                <View style={Styles.list}>
                    <Text>
                        <Text style={Styles.btext}>Country: </Text>
                        <Text>{country.name}</Text>
                    </Text>
                </View>
                <View style={Styles.list}>
                    <Text>
                        <Text style={Styles.btext}>Capital: </Text>
                        <Text>{country.capital}</Text>
                    </Text>
                </View>
                <View style={Styles.list}>
                    <Text>
                        <Text style={Styles.btext}>Population: </Text>
                        <Text>{country.population}</Text>
                    </Text>
                </View>
                <View style={Styles.list}>
                    <Text>
                        <Text style={Styles.btext}>Lattitude: </Text>
                        <Text>{country.latlng[0]}</Text>
                    </Text>
                </View>
                <View style={Styles.list}>
                    <Text>
                        <Text style={Styles.btext}>Longitude: </Text>
                        <Text>{country.latlng[1]}</Text>
                        {/* {JSON.stringify(country.flag)} */}
                    </Text>
                </View>
                <View>
                    <Image style={Styles.flag} source={{
                        uri: `${country.flag}`
                    }} />
                </View>

            </View>

            <View style={Styles.bt}>
                <Button
                    title="Capital Weather"
                    onPress={handleClick} />
            </View>
        </View>
    )
}

const mapStateToProps = (state: any) => (
    { country: state.reducer.country }
)

export default connect(mapStateToProps, { getCountryWeather })(Country);