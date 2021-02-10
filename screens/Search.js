import React, { useState } from 'react';
import {TextInput, TouchableOpacity,View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Header from "../components/Header"
import MyCard from '../components/MyCard';

function Search(props) {

    const [value,setValue] = useState("")
    const[cardData,setCardData] = useState([])

    
    const fetchData = ()=>{
        fetch(`http://www.omdbapi.com/?t=${value}&apikey=f63a0d7f`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setCardData(data)
        }).catch(err=>{
            console.log(err)
        })
    }
    
    const viewTitle=cardData.Title;
    return (
        <TouchableOpacity
        onPress={()=>navigation.navigate("Home",{id:viewTitle})}
        >
            <View>
                <Header />
                <View style={{flexDirection:"row",backgroundColor:"#00aaff",padding:5}}>
                <TextInput
                placeholder="Enter the movie name"
                style={{
                    width:"80%",
                    backgroundColor:"#0079b5",
                    fontSize:24,
                    color:"white",
                    borderRadius:20,
                    textDecorationLine:"none"
                }}
                onChangeText={(text)=>setValue(text)}
                value={value} 
                />
                <FontAwesome 
                name="search"
                style={{marginLeft: 10, borderRadius: 20, padding: 6, backgroundColor: "#1d7891" }} size={34} color="white"
                onPress={()=>fetchData()}
                />
                </View>
                <MyCard 
                Title={cardData.Title}
                Year={cardData.Year}                
                poster={cardData.Poster}
                imdbrating={cardData.imdbRating}
                   type={cardData.Type}
                actors={cardData.Actors}
                genres={cardData.Genre}
                disc={cardData.Plot}
                />
                
            </View>
        </TouchableOpacity>
    );
}

export default Search;