import React from 'react';
import { 
    ScrollView, 
    View, 
    Text, 
    Image, 
    SafeAreaView,
    StyleSheet,
    Dimensions,
    Button,
 } from 'react-native';
import getImage from './getImage';
import Markdown from 'react-native-markdown-display';

const WIDTH = Dimensions.get('window').width - 20;

function AppImage({img}) {
    // extract entryNum and imageNum from filename
    // filename is of the format e{entryNum}i{imageNum}
    const [entryNum, imageNum] = img.filename
        .match(/e(\d+)i(\d+)/).slice(1).map(s => Number(s));
    const imageObj = getImage(entryNum, imageNum);
    return (
        <View style={styles.imageView}>
            <Image 
                source={imageObj.small}
                style={styles.entryImage}
            />
            <Text style={styles.captionText}>
                {img.caption}
            </Text>
        </View>
    )
}

function Reference({ refText }) {
    return (
        <Markdown>
            {refText}
        </Markdown>
    )
}

function SectionHead({text}) {
    return (
        <View style={styles.sectionHead}>
            <Text style={styles.headingText}>{text}</Text>
        </View>
    )
}

export default function EntryDetail({ entry, handleBack }) {
    const paragraphs = entry.text.map((txt, i) => <Text key={i} style={styles.entryText}>{txt}</Text>)
    const images = entry.images.map(img => <AppImage 
                                                key={img.filename.split('.')[0]} 
                                                img={img}
                                            />)
    const references = entry.references.map((r, i) => <Reference key={i} refText={r.text} />)
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <SectionHead text={entry.title} />
                {paragraphs}
                <SectionHead text="Images" />
                {images}
                <SectionHead text="References and Further Reading" />
                {references}
            </ScrollView>
            <Button onPress={handleBack} title="Back" />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5
    },
    scrollView: {
        marginHorizontal: 10,
    },
    headingText: {
        fontSize: 25,
        fontWeight: '500'
    },
    sectionHead: {
        marginBottom: 5,
        marginTop: 10,
    },
    entryText: {
        fontSize: 15,
        marginBottom: 5,
    },
    entryImage: {
        resizeMode: 'contain',
        width: WIDTH,
        maxHeight: 400,
        marginBottom: 5
    },
    imageView:{
        marginBottom: 10
    },
    captionText: {
        fontSize: 12,
        fontWeight: "100",
        padding: 10
    }
})