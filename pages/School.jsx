import { Text, View, ScrollView, TouchableOpacity, ImageBackground } from 'react-native'
import React, {useContext} from 'react'

import GlobalStyles from '../styles/global'
import SchoolStyles from '../styles/school'
import ThemeContext from '../contexts/ThemeContext'

import { Feather } from '@expo/vector-icons';

const School = () => {
  const {APP_COLORS} = useContext(ThemeContext)

  return (
    <View style={[GlobalStyles.container, {backgroundColor: APP_COLORS.backgroundColor}]}>
      <Text style={[GlobalStyles.pageTitle, {color: APP_COLORS.themeOppositeColor}]}>Arusha technical college</Text>
      <View style={GlobalStyles.logo}>
        <Text style={[GlobalStyles.logoText, {color: APP_COLORS.brandOrange}]}>P0101</Text>
      </View>
      <ScrollView style={GlobalStyles.pageContents}>
        {/* INTRODUCTION */}
        <View>
          <Text style={[SchoolStyles.cardTitle, {color: APP_COLORS.themeOppositeColor}]}>DESCRIPTION</Text>
          <Text style={[SchoolStyles.cardDescription, {fontSize:15}]}>Adipisicing elit. Nostrum itaque omnis rem ipsam asperiores fugiat quam deserunt maiores expedita eaque. Expedita, neque dolore impedit culpa aspernatur consequatur in dolorem repellat nihil officia maiores eum, doloribus veritatis quidem ipsam adipisci velit?</Text>
        </View>
        <View style={[SchoolStyles.section,SchoolStyles.introduction]}>
          <View>
            <Text style={[SchoolStyles.cardTitle, {color: APP_COLORS.themeOppositeColor}]}>SCHOOL FEES</Text>
            <Text style={[SchoolStyles.cardDescription, {color: APP_COLORS.brandOrange, fontSize: 18, fontWeight: "bold"}]}>TSH 1,500,000/= per year</Text>
          </View>
        </View>

        {/* CATEGORIES */}
        <View style={SchoolStyles.section}>
          <Text style={[SchoolStyles.sectionTitle, { color: APP_COLORS.themeOppositeColor}]}>Categories</Text>
          <ScrollView horizontal style={SchoolStyles.categories}>
            <View style={[SchoolStyles.card, SchoolStyles.categoryCard, {flex: 1,backgroundColor: APP_COLORS.cardsColor}]}>
              <Text style={[SchoolStyles.categoryCardKey, {color: APP_COLORS.themeOppositeColor}]}>Level</Text>
              <Text style={[SchoolStyles.categoryCardValue, {color: APP_COLORS.themeOppositeColor}]}>Primary</Text>
            </View>
            <View style={[SchoolStyles.card, SchoolStyles.categoryCard, {flex: 1,backgroundColor: APP_COLORS.cardsColor}]}>
              <Text style={[SchoolStyles.categoryCardKey, {color: APP_COLORS.themeOppositeColor}]}>Level</Text>
              <Text style={[SchoolStyles.categoryCardValue, {color: APP_COLORS.themeOppositeColor}]}>Primary</Text>
            </View>
            <View style={[SchoolStyles.card, SchoolStyles.categoryCard, {flex: 1,backgroundColor: APP_COLORS.cardsColor}]}>
              <Text style={[SchoolStyles.categoryCardKey, {color: APP_COLORS.themeOppositeColor}]}>Level</Text>
              <Text style={[SchoolStyles.categoryCardValue, {color: APP_COLORS.themeOppositeColor}]}>Primary</Text>
            </View>
            <View style={[SchoolStyles.card, SchoolStyles.categoryCard, {flex: 1,backgroundColor: APP_COLORS.cardsColor}]}>
              <Text style={[SchoolStyles.categoryCardKey, {color: APP_COLORS.themeOppositeColor}]}>Level</Text>
              <Text style={[SchoolStyles.categoryCardValue, {color: APP_COLORS.themeOppositeColor}]}>Primary</Text>
            </View>
            <View style={[SchoolStyles.card, SchoolStyles.categoryCard, {flex: 1,backgroundColor: APP_COLORS.cardsColor}]}>
              <Text style={[SchoolStyles.categoryCardKey, {color: APP_COLORS.themeOppositeColor}]}>Level</Text>
              <Text style={[SchoolStyles.categoryCardValue, {color: APP_COLORS.themeOppositeColor}]}>Primary</Text>
            </View>
            <View style={[SchoolStyles.card, SchoolStyles.categoryCard, {flex: 1,backgroundColor: APP_COLORS.cardsColor}]}>
              <Text style={[SchoolStyles.categoryCardKey, {color: APP_COLORS.themeOppositeColor}]}>Level</Text>
              <Text style={[SchoolStyles.categoryCardValue, {color: APP_COLORS.themeOppositeColor}]}>Primary</Text>
            </View>
          </ScrollView>
        </View>

        {/* IMAGES */}
        <View style={SchoolStyles.section}>
          <Text style={[SchoolStyles.sectionTitle, { color: APP_COLORS.themeOppositeColor}]}>Images</Text>
          <ScrollView horizontal style={SchoolStyles.images}>
            <View style={[SchoolStyles.schoolImage, {backgroundColor: APP_COLORS.brandOrange}]}>
              <Text style={{color: "white"}}>NO IMAGE</Text>
            </View>
            <View style={[SchoolStyles.schoolImage, {backgroundColor: APP_COLORS.brandOrange}]}>
              <Text style={{color: "white"}}>NO IMAGE</Text>
            </View>
                        <View style={[SchoolStyles.schoolImage, {backgroundColor: APP_COLORS.brandOrange}]}>
              <Text style={{color: "white"}}>NO IMAGE</Text>
            </View>
          </ScrollView>
        </View>

        {/* CONTACTS */}
        <View style={SchoolStyles.section}>
          <Text style={[SchoolStyles.sectionTitle, { color: APP_COLORS.themeOppositeColor}]}>Contacts</Text>
          <View style={[SchoolStyles.contactCard, {backgroundColor: APP_COLORS.cardsColor}]}>
            <View style={SchoolStyles.contact}>
              <Text style={[SchoolStyles.contactKey, {color: APP_COLORS.themeOppositeColor}]}>Email</Text>
              <Text style={[SchoolStyles.contactValue, {color: APP_COLORS.themeOppositeColor}]}>kajubufaraji@gmail.com</Text>
            </View>
            <View style={SchoolStyles.contact}>
              <Text style={[SchoolStyles.contactKey, {color: APP_COLORS.themeOppositeColor}]}>Mailbox</Text>
              <Text style={[SchoolStyles.contactValue, {color: APP_COLORS.themeOppositeColor}]}>P.O.Box 991</Text>
            </View>
            <View style={SchoolStyles.contact}>
              <Text style={[SchoolStyles.contactKey, {color: APP_COLORS.themeOppositeColor}]}>Social media</Text>
              <View style={SchoolStyles.socials}>
                <Text style={[SchoolStyles.contactValue, {color: APP_COLORS.themeOppositeColor}]}>kajubufaraji@gmail.com</Text>
                <Text style={[SchoolStyles.contactValue, {color: APP_COLORS.themeOppositeColor}]}>kajubufaraji@gmail.com</Text>
                <Text style={[SchoolStyles.contactValue, {color: APP_COLORS.themeOppositeColor}]}>kajubufaraji@gmail.com</Text>
              </View>
            </View>
          </View>
        </View>

        {/* RESULTS */}
        <View style={SchoolStyles.section}>
          <Text style={[SchoolStyles.sectionTitle, { color: APP_COLORS.themeOppositeColor}]}>Latest results</Text>
          <ScrollView>
            <View>

            </View>
          </ScrollView>
        </View>
      </ScrollView>

      {/* CALL BTN */}
      <View style={[SchoolStyles.callBtnContainer, {backgroundColor: APP_COLORS.floatingBtnBg}]}>
        <TouchableOpacity style={[SchoolStyles.callButton, {backgroundColor: APP_COLORS.brandBlue}]} onPress={()=>{
          navigation.navigate('Matches', filterObject);
        }}>
            <Feather name="phone-call" size={20} color="white" />
            <Text style={[{textTransform: "uppercase",color: "white", flexDirection: "row", alignItems: "center", gap: 10}]}>Call School</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default School