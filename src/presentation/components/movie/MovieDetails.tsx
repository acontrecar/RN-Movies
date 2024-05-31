import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {FullMovie} from '../../../core/entities/movie.entity';
import {Formatter} from '../../../config/helpers/formatter';

interface Props {
  movie: FullMovie;
}

export const MovieDetails = ({movie}: Props) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.row}>
          <Text>{movie.rating}</Text>
          <Text style={styles.genres}>- {movie.genres.join(', ')}</Text>
        </View>

        <Section title="Historia" content={movie.description} />
        <Section
          title="Presupuesto"
          content={Formatter.currency(movie.budget)}
        />

        <Text style={styles.sectionTitle}>Actores</Text>
      </View>
    </>
  );
};

const Section = ({title, content}: {title: string; content: string}) => (
  <>
    <Text style={styles.sectionTitle}>{title}</Text>
    <Text style={styles.sectionContent}>{content}</Text>
  </>
);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginBottom: 100,
  },
  row: {
    flexDirection: 'row',
  },
  genres: {
    marginLeft: 5,
  },
  sectionTitle: {
    fontSize: 23,
    marginTop: 10,
    fontWeight: 'bold',
  },
  sectionContent: {
    fontSize: 16,
  },
});
