export default function getImage(entryNum, imageNum) {
    const imageIndex = [
        [
            {
                full: require('../res/entries/images/e0i0.jpg'),
                small: require('../res/entries/images/e0i0-small.jpg'),
            },
            {
                full: require('../res/entries/images/e0i1.jpg'),
                small: require('../res/entries/images/e0i1-small.jpg'),
            }
            
        ]
    ];
    return imageIndex[entryNum][imageNum];
}