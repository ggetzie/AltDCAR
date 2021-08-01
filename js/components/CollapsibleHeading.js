import { Pressable } from "react-native";

export default function CollapsibleHeading({ initialState, title, titleStyle }, children) {
    const [collapsed, setCollapsed] = useState(initialState)

    return (
        <>
            <Pressable onPress={() => setCollapsed(!collapsed)}>
                <Text style={titleStyle}>
                    {title}
                </Text>
            </Pressable>
            {!collapsed && 
                <View>
                    {children}
                </View>
            }
        </>
    )
}