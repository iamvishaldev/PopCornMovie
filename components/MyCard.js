import React from 'react';
import { View ,Text,Image} from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

function MyCard(props) {
    //console.log(props)
    return (
        <View>
             <View style={{
            backgroundColor: "#82ccdd",
            margin: 3,marginTop:25, padding: 3,
            height:"80%",
            justifyContent:"center",
            alignItems:"center",
            borderRadius: 10,
            elevation: 1
        }}>
            <View>
                <View style={{ flexDirection: "row", }}>
                    <Image
                        style={{
                            width: "45%", height: "100%",
                            margin:10,
                            bottom:10,
                            resizeMode: "contain",
                            borderRadius: 10
                        }}
                        source={{ uri: props.poster }} />
                    <View style={{ width: "50%", padding: 5 }}>
                        <Title style={{
                            color: "white"
                        }} >
                            <MaterialIcons name="movie" size={24} color="black" />
                            {props.Title} ({props.year})
                             </Title>
                        <Text style={{
                            color: "white",
                        }}>
                            <FontAwesome name="imdb" size={24} color="black" />
                                {props.imdbrating}
                            <Text
                            style={{
                                color: "white"
                            }}>
                                <Text style={{ color: "black", fontWeight: "bold" }}>
                                    Type :-</Text> {props.type}</Text>
                        </Text>
                        <Text style={{
                            color: "white"
                        }} numberOfLines={2} ellipsizeMode="tail"><Text style={{ color: "black", fontWeight: "bold" }}>Actors :-</Text>{props.actors}</Text>
                        <Text
                            style={{
                                color: "white"
                            }}
                            numberOfLines={2} ellipsizeMode="tail">
                                <Text style={{ color: "black", fontWeight: "bold" }}>
                                    Genres :-</Text> {props.genres}</Text>
                        <Paragraph
                            style={{
                                color: "white"
                            }}
                            numberOfLines={3} ellipsizeMode="tail" >
                            <Text style={{
                                color: "black",
                                fontWeight: "bold"
                            }}>Storyline :-</Text>
                            {props.disc}
                        </Paragraph>
                    </View>
                </View>
            </View>
        </View>
        </View>
    );
}

export default MyCard;