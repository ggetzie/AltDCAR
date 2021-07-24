import React from 'react';

import { ScrollView, View, Text, Image } from 'react-native';
import getImage from './getImage';

function AppImage({img}) {
    // extract entryNum and imageNum from filename
    // filename is of the format e{entryNum}i{imageNum}
    const [entryNum, imageNum] = img.filename
        .match(/e(\d+)i(\d+)/).slice(1).map(s => Number(s));
    const imageObj = getImage(entryNum, imageNum);
    return (
        <>
            <Image 
                source={imageObj}
                style={{resizeMode: "contain", height: 200}}
            />
            <Text>{img.caption}</Text>
        </>
    )
}

function Reference({ refText }) {
    return (
        <Text>
            {refText}
        </Text>
     
    )
}

export default function EntryDetail({ entry }) {
    const entryText = entry.text.map((txt, i) => <Text key={i}>{txt}</Text>)
    const images = entry.images.map(img => <AppImage 
                                                key={img.filename.split('.')[0]} 
                                                img={img}
                                            />)
    const references = entry.references.map((r, i) => <Reference key={i} refText={r.text} />)
    return (
        <ScrollView>
            <Text>{entry.title}</Text>
            <Text>{entry.text}</Text>
            <Text>Images</Text>
            {images}
            <Text>References and Further Reading</Text>
            {references}
        </ScrollView>
    )
}