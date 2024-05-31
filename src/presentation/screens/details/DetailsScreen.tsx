import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Text, View} from 'react-native';
import {RootStackParams} from '../../navigation/Navigation';
import {useMovie} from '../../hooks/useMovie';
import {MovieHeader} from '../../components/movie/MovieHeader';
import {MovieDetails} from '../../components/movie/MovieDetails';
import {ScrollView} from 'react-native-gesture-handler';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

export const DetailsScren = ({route}: Props) => {
  const {movieId} = route.params;
  console.log(movieId);

  const {isLoading, movie} = useMovie(movieId);

  if (isLoading) {
    return <Text>Loading</Text>;
  }

  return (
    <ScrollView>
      <MovieHeader
        title={movie!.title}
        originalTitle={movie!.originalTitle}
        poster={movie!.poster}
      />

      <MovieDetails movie={movie!} />
    </ScrollView>
  );
};
