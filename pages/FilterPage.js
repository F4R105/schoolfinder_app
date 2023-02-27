import React, {useState} from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, } from 'react-native'
import SelectDropdown from 'react-native-select-dropdown'
import { SelectList } from 'react-native-dropdown-select-list'

const Regions = ["Arusha", "Dodoma", "Kagera", "Dar-es-salaam","Kigoma", "Iringa", "Singida", "Tabora", "Morogoro","Kilimanjaro", "Tanga", "Mtwara", "Mbeya", "Mwanza"]
const Categories = [
  {choices: ["Public", "Private"]},
  {choices: ["International", "National"]},
  {label: "Gender", choices: ["Boys", "Girls", "Mixed"]},
  {label: "Religion", choices: ["Christian", "Islamic", "Mixed"]},
]

const RegionSelection = () => {
  const [selectedRegion, setSelectedRegion] = useState('')
  return (
    <SelectList 
      data={Regions}
      setSelected={selectedRegion => setSelectedRegion(selectedRegion)}
      searchPlaceholder="Choose region"
      boxStyles={{backgroundColor: "#543badff"}}
      inputStyles={{color: "white", padding: 10}}
      dropdownStyles={{backgroundColor: "#543badff"}}
      dropdownItemStyles={{backgroundColor: "#543badff", borderWidth: 2, borderBottomColor: "white"}}
      dropdownTextStyles={{color: "white"}}
    />
  )
}

const Category = ({choices}) => {
  return (
    <View style={styles.category}>
      {choices.map(choice=><View style={styles.choice}><Text style={{color: "white", textAlign: "center"}}>{choice}</Text></View>)}
    </View>
  )
}

const FilterPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Filter</Text>
        <Text style={styles.subheader}>Categories</Text>
      </View>
      <ScrollView>
          <RegionSelection />
          <View style={{paddingVertical: 30}}>
          {Categories.map(category=><Category choices={category.choices} />)}
          </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default FilterPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#050811ff'
  },
  headerContainer: {
    paddingTop: 40,
    paddingBottom: 20,
  },
  header: {
    fontSize: 25,
    fontWeight: "Bold", 
    color: "white"
  },
  subheader: {
    fontSize: 15,
    color: "white",
    textTransform: "uppercase",
    paddingVertical: 10
  },
  dropdown: {
    width: "100%",
    backgroundColor: "blue"
  },
  category: {
    paddingVertical: 20,
    flexDirection: "row"
  },
  choice: {
    minWidth: 130,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 100,
    padding: 10,
    marginRight: 10,
  }
})