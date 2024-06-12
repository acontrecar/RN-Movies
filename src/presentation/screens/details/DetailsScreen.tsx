import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {RootStackParams} from '../../navigation/Navigation';
import {useMovie} from '../../hooks/useMovie';
import {MovieHeader} from '../../components/movie/MovieHeader';
import {MovieDetails} from '../../components/movie/MovieDetails';
import {ScrollView} from 'react-native-gesture-handler';
import {FullScreenLoader} from '../../components/loaders/FullScreenLoader';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

export const DetailsScren = ({route}: Props) => {
  const {movieId} = route.params;

  const {isLoading, movie, cast = []} = useMovie(movieId);

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return (
    <ScrollView>
      <MovieHeader
        title={movie!.title}
        originalTitle={movie!.originalTitle}
        poster={movie!.poster}
      />

      <MovieDetails movie={movie!} cast={cast} />
    </ScrollView>
  );
};
