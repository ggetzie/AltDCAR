export default function getImage(entryNum, imageNum) {
    const imageIndex = [
        [
            require('./res/entries/images/e0i0.jpg'),
            require('./res/entries/images/e0i1.jpg')
        ]
    ];
    return imageIndex[entryNum][imageNum];
}