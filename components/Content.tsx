import { StyleSheet, Text, View, FlatList, SectionList, Image, Pressable } from 'react-native';
import React from 'react';
import ContentData from '../Data/ContentData';

// defining the types
interface ContentItem {
  name: string,
  id: string,
  img: string
}

interface ContentType {
  title: string,
  data: ContentItem[]
}

// rendering the image with pressable
const renderImageItem = ({ item }: { item: ContentItem }) => {
  return (
    <Pressable
      android_ripple={{ color: '#ffffff60', foreground: true }}
      style={styles.itemBtn}
    >
      <Image source={{ uri: item.img }} style={styles.images} />
      {/* <Text>Just demo</Text> */}
    </Pressable>
  );
};

// rendering the section content
const renderSectionContent = ({ section }: { section: ContentType }) => {
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

// main section content
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
    marginTop: 30,
  },

  itemBtn: {
    marginHorizontal: 10,
    marginRight: 5,
    overflow: 'hidden',
    borderRadius: 4,
  },

  images: {
    height: 200,
    width: 140,
    resizeMode: 'cover',
    borderRadius: 4,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 10,
    marginLeft: 20,
  },

  horizontalListContainer: {
    paddingBottom: 18,
  },
});
