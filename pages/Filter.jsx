import { Text, View, ScrollView, Pressable, TouchableOpacity, ToastAndroid } from 'react-native'
import React, {useContext, useState} from 'react'

import GlobalStyles from '../styles/global'
import FilterStyles from '../styles/filter'
import ThemeContext from '../contexts/ThemeContext'

import Categories from '../categories'

import { AntDesign } from '@expo/vector-icons';

const Category = ({category, state, setState}) => {
  const {APP_COLORS} = useContext(ThemeContext)

  return (
    <>
      <View>
        <Text style={[FilterStyles.text,{fontSize: 14,paddingTop: 10, color: APP_COLORS.themeOppositeColor}]}>{category.label.toUpperCase()} : <Text style={{fontWeight: "normal"}}>{state}</Text></Text>
      </View>
      <ScrollView style={FilterStyles.category} horizontal>
        {category.options.map(option=>{
          return(
            <Pressable 
              style={[FilterStyles.option, {
                backgroundColor: (state == option.value) ? '#ff7f2aff' : 'transparent',
                borderColor: (state == option.value) ? APP_COLORS.brandOrange : 'gray',
              }]}
              onPress={()=>{
                setState(option.value)
              }}
              key={option.id}
            >
              <Text style={{color: APP_COLORS.themeOppositeColor, textAlign: "center"}}>
                {option.label}
              </Text>
            </Pressable>
          )
          })}
      </ScrollView>
    </>
  )
}

const Filter = ({navigation}) => {
  const {APP_COLORS} = useContext(ThemeContext)

  const [level, setLevel] = useState('')
  const [religion, setReligion] = useState('')
  const [gender, setGender] = useState('')
  const [ownership, setOwnership] = useState('')
  const [occupation, setOccupation] = useState('')
  // const [fee, setFee]= useState('')

  const filterObject = {
    level, religion, gender, ownership, occupation
  }

  return (
    <View style={[GlobalStyles.container, {backgroundColor: APP_COLORS.backgroundColor}]}>
      <Text style={[GlobalStyles.pageTitle, {color: APP_COLORS.themeOppositeColor}]}>Filter</Text>
      <View style={GlobalStyles.logo}>
        <Text style={[GlobalStyles.logoText, {color: APP_COLORS.themeOppositeColor}]}>school</Text>
        <Text style={[GlobalStyles.logoText, {color: APP_COLORS.brandOrange}]}>Finder</Text>
      </View>
      <ScrollView style={GlobalStyles.pageContents}>
          <View style={{paddingTop: 0, paddingBottom: 100, paddingHorizontal: 5}}>
            <Category category={Categories.level} state={level} setState={setLevel}/>
            <Category category={Categories.religion} state={religion} setState={setReligion}/>
            <Category category={Categories.gender} state={gender} setState={setGender}/>
            <Category category={Categories.ownership} state={ownership} setState={setOwnership}/>
            <Category category={Categories.occupation} state={occupation} setState={setOccupation}/>
            {/* <Category category={Categories.school_fee} state={fee} setState={setFee}/> */}
          </View>

          {/* SPACER */}
          <View style={GlobalStyles.bottomSpacer}></View>
      </ScrollView>
      <View style={[FilterStyles.filterBtnContainer, {backgroundColor: APP_COLORS.floatingBtnBg}]}>
        <TouchableOpacity style={[FilterStyles.button, {backgroundColor: APP_COLORS.brandBlue}]} onPress={()=>{
          if(level === "" || religion === "" || gender === "" || ownership == "" || occupation == "") return ToastAndroid.show('Complete all filters', ToastAndroid.SHORT)
          navigation.navigate('Matches',  {state: {trigger: "filter", query: filterObject}});
        }}>
          <AntDesign name="filter" size={24} color="white" />
          <Text style={[FilterStyles.text,{textTransform: "uppercase"}]}>Filter</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Filter