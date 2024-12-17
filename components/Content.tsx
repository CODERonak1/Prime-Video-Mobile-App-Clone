import { StyleSheet, Text, View, FlatList, SectionList, Image, Pressable } from 'react-native';
import React from 'react';
import ContentData from '../Data/ContentData';
import { useNavigation } from '@react-navigation/native';

// defining the types
interface ContentItem {
  name: string,
  id: string,
  img: string,
  videoUrl: string
}

interface ContentType {
  title: string,
  data: ContentItem[]
}

// rendering the image with pressable
const renderImageItem = ({ item, navigation }: { item: ContentItem, navigation: any }) => {

  return (
    <View>
      {/* pressable for making the image clickable */}
      <Pressable
        android_ripple={{ color: '#ffffff60', foreground: true }}
        style={styles.itemBtn}
        onPress={() => navigation.navigate("VideoPage", { videoUrl: item.videoUrl, name: item.name })}
      >
        {/* content images */}
        <Image source={{ uri: item.img }} style={styles.images} />
        {/* <Text>Just demo</Text> */}
      </Pressable>
    </View>
  );
};

// rendering the section content
const renderSectionContent = ({ section, navigation }: { section: ContentType, navigation: any }) => {
  return (
    <FlatList
      data={section.data}
      renderItem={({ item }) => renderImageItem({ item, navigation })}
      horizontal
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.horizontalListContainer}
    />
  );
};

// main section content
const Content = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.contentContainer}>
      <SectionList
        sections={ContentData}
        renderSectionHeader={({ section }) => (
          <Text style={styles.title}>{section.title}</Text>
        )}
        renderItem={() => null}
        renderSectionFooter={({ section }) => renderSectionContent({ section, navigation })}
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