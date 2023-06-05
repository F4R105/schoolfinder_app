import { StyleSheet } from "react-native";

export default HomeStyles = StyleSheet.create({
    searchContainer: {
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
        gap: 5
    },
    searchInput: {
        backgroundColor: "white",
        flex: 1,
        fontSize: 20,
        padding: 10,
        borderRadius: 100
    },
    searchBtn: {
        padding: 14,
        borderRadius: 100,
        width: 100,
    },
    searchBtnText: {
        color: "white",
        fontSize: 15,
        textAlign: "center",
        textTransform: "uppercase"
    }
})