import { StyleSheet, StatusBar } from "react-native";

export default GlobalStyles = StyleSheet.create({
    container: {
        paddingTop: StatusBar.currentHeight + 10,
        paddingHorizontal: 10,
        flex: 1
    },
    pageTitle: {
        fontSize: 25,
        fontWeight: "bold"
    },
    logo: {
        flexDirection: "row"
    },
    logoText: {
        fontSize: 18,
        fontWeight: "bold"
    },
    pageContents: {
        flex: 1,
        paddingVertical: 10,
    },
    bottomSpacer: {
        height: 250
    }
})