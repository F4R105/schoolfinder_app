import { StyleSheet } from "react-native";

export default SchoolStyles = StyleSheet.create({
    card: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        elevation: 8,
        borderRadius: 8,
    },
    cardTitle: {
        fontWeight: "bold",
        marginBottom: 5
    },
    cardDescription: {
        color: "gray",
    },
    introduction: {
        marginBottom: 15,
    },
    schoolName: {
        fontSize: 25,
        fontWeight: "bold"
    },
    schoolId: {
        fontSize: 20,
        fontWeight: "bold"
    },
    section: {
        marginTop: 35,
    },
    sectionTitle: {
        textTransform: "uppercase",
        fontWeight: "bold",
        marginBottom: 10
    },
    categories: {
        paddingVertical: 10
    },
    categoryCard: {
        minWidth: 150,
        marginRight: 10
    },
    categoryCardKey: {
        fontSize: 13
    },
    categoryCardValue: {
        fontSize: 14,
        textTransform: "uppercase",
        fontWeight: "bold"
    },
    images: {
        paddingVertical: 10
    },
    schoolImage: {
        width: 200,
        aspectRatio: "1/1",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 15
    },
    contactCard: {
        borderRadius: 8,
        padding: 10
    },
    contact: {
        marginBottom: 25
    },
    contactKey: {
        fontSize: 13,
        fontWeight: "bold"
    },
    contactValue: {
        fontSize: 15
    },
    socials: {

    },
    results: {
        paddingVertical: 10
    },
    result: {
        padding: 5,
        marginRight: 15,
        minWidth: 180, 
        borderRadius: 10
    },
    callBtnContainer: {
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        elevation: 8
    },
    callButton: {
        width: "90%",
        height: "60%",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
        flexDirection: "row",
    }
})