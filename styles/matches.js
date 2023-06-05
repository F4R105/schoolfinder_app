import { StyleSheet } from "react-native";

export default MatchesStyles = StyleSheet.create({
    searchQuery: {
        paddingVertical: 10,
        flexDirection: "row",
        justifyContent: "flex-end",
        flexWrap: "wrap",
        gap: 5
    },
    school: {
        backgroundColor: "gray",
        marginBottom: 10,
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        borderRadius: 8,
        paddingRight: 20
    },
    schoolImage: {
        width: 70,
        height: 70,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center"
    },
    schoolInfoContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    schoolName: {
        fontSize: 15,
    },
    schoolLevel: {
        color: "white",
        borderRadius: 100,
        textAlign: "center",
        marginTop: 5,
        padding: 3,
        fontSize: 12,
        maxWidth: 100
    }
})