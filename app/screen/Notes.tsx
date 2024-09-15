import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';

type Movie = {
  id: string;
  title: string;
  releaseYear: string;
};

const Notes = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Movie[]>([]);

  const getMovies = async () => {
    try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      setData(json.movies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={{flex: 1, padding: 24, backgroundColor:'white'}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <View style={{borderWidth:1, borderColor: "#E0E0E0", padding:10, marginTop:5, borderRadius:15, backgroundColor:"#F5F5F5"}}>
              <Text>
              ID :  {item.id}
              </Text>
              <Text>
              Title :  {item.title}
              </Text>
               <Text>
              Release Year : {item.releaseYear}
            </Text>
            </View>
           
          )}
        />
      )}
    </View>
  );
};

export default Notes;