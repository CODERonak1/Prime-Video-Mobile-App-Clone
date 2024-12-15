import { StyleSheet, Text, View, FlatList, SectionList, Image, Pressable } from 'react-native'
import React, { Context } from 'react'
import ContentData from '../Data/ContentData'

const renderImageItem = ({ item }: { item: ContextItem }) => {
  return (
    <Pressable style={styles.itemContainer}>
      <Image source={{ uri: item.img }} style={styles.images} />
    </Pressable>
  );
};

// Render the section content as a horizontal FlatList
const renderSectionContent = ({ section }: { section: ContextSection }) => {
  return (
    <FlatList
      data={section.data}
      renderItem={renderImageItem}
      horizontal
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.horizontalListContainer}
    />
  );
};

// Main Content component
const Content = () => {
  return (
    <View style={styles.contentContainer}>
      <SectionList
        sections={ContentData}
        renderSectionHeader={({ section }) => (
          <Text style={styles.title}>{section.title}</Text>
        )}
        renderItem={() => null}
        renderSectionFooter={renderSectionContent}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({
  contentContainer: {
    marginTop: 70,
  },

  itemContainer: {
    marginHorizontal: 10,
    marginRight: 10,
  },

  images: {
    height: 200,
    width: 120,
    resizeMode: 'cover',
    borderRadius: 8,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 10,
    marginLeft: 20,
  },

  horizontalListContainer: {
    paddingBottom: 10,
  },

});