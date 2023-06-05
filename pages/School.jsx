import { Text, View, ScrollView, TouchableOpacity, Linking } from 'react-native'
import React, {useContext} from 'react'

import GlobalStyles from '../styles/global'
import SchoolStyles from '../styles/school'
import ThemeContext from '../contexts/ThemeContext'

import { Feather } from '@expo/vector-icons';

const School = ({route}) => {
  const {APP_COLORS} = useContext(ThemeContext)
  const school = route.params.school

  return (
    <View style={[GlobalStyles.container, {backgroundColor: APP_COLORS.backgroundColor}]}>
      <View style={SchoolStyles.introduction}>
        <Text style={[SchoolStyles.schoolName, {color: APP_COLORS.themeOppositeColor}]}>{school.name}</Text>
        <Text style={[SchoolStyles.schoolId, {color: APP_COLORS.brandOrange}]}>{school.school_id}</Text>
      </View>
      <ScrollView style={GlobalStyles.pageContents}>
        <View>
          <Text style={[SchoolStyles.cardTitle, {color: APP_COLORS.themeOppositeColor}]}>DESCRIPTION</Text>
          <Text style={[SchoolStyles.cardDescription, {fontSize:15}]}>{school.description === "" ? "-" : school.description}</Text>
        </View>
        <View style={SchoolStyles.section}>
          <View>
            <Text style={[SchoolStyles.cardTitle, {color: APP_COLORS.themeOppositeColor}]}>SCHOOL FEES</Text>
            <Text style={[SchoolStyles.cardDescription, {color: APP_COLORS.brandOrange, fontSize: 18, fontWeight: "bold"}]}>{school.category.school_fee === "" ? "-" : `TSH ${school.category.school_fee}/= per year`}</Text>
          </View>
        </View>

        {/* CATEGORIES */}
        <View style={SchoolStyles.section}>
          <Text style={[SchoolStyles.sectionTitle, { color: APP_COLORS.themeOppositeColor}]}>Categories</Text>
          <ScrollView horizontal style={SchoolStyles.categories}>
            <View style={[SchoolStyles.card, SchoolStyles.categoryCard, {flex: 1,backgroundColor: APP_COLORS.cardsColor}]}>
              <Text style={[SchoolStyles.categoryCardKey, {color: APP_COLORS.themeOppositeColor}]}>Level</Text>
              <Text style={[SchoolStyles.categoryCardValue, {color: APP_COLORS.themeOppositeColor}]}>{school.category.level === "" ? "-" : school.category.level}</Text>
            </View>
            <View style={[SchoolStyles.card, SchoolStyles.categoryCard, {flex: 1,backgroundColor: APP_COLORS.cardsColor}]}>
              <Text style={[SchoolStyles.categoryCardKey, {color: APP_COLORS.themeOppositeColor}]}>Religion</Text>
              <Text style={[SchoolStyles.categoryCardValue, {color: APP_COLORS.themeOppositeColor}]}>{school.category.religion === "" ? "-" : school.category.religion}</Text>
            </View>
            <View style={[SchoolStyles.card, SchoolStyles.categoryCard, {flex: 1,backgroundColor: APP_COLORS.cardsColor}]}>
              <Text style={[SchoolStyles.categoryCardKey, {color: APP_COLORS.themeOppositeColor}]}>Gender</Text>
              <Text style={[SchoolStyles.categoryCardValue, {color: APP_COLORS.themeOppositeColor}]}>{school.category.gender === "" ? "-" : school.category.gender}</Text>
            </View>
            <View style={[SchoolStyles.card, SchoolStyles.categoryCard, {flex: 1,backgroundColor: APP_COLORS.cardsColor}]}>
              <Text style={[SchoolStyles.categoryCardKey, {color: APP_COLORS.themeOppositeColor}]}>Ownership</Text>
              <Text style={[SchoolStyles.categoryCardValue, {color: APP_COLORS.themeOppositeColor}]}>{school.category.ownership === "" ? "-" : school.category.ownership}</Text>
            </View>
            <View style={[SchoolStyles.card, SchoolStyles.categoryCard, {flex: 1,backgroundColor: APP_COLORS.cardsColor}]}>
              <Text style={[SchoolStyles.categoryCardKey, {color: APP_COLORS.themeOppositeColor}]}>Occupation</Text>
              <Text style={[SchoolStyles.categoryCardValue, {color: APP_COLORS.themeOppositeColor}]}>{school.category.occupation === "" ? "-" : school.category.occupation}</Text>
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
              <Text style={[SchoolStyles.contactKey, {color: APP_COLORS.themeOppositeColor}]}>Phone</Text>
              <Text style={[SchoolStyles.contactValue, {color: APP_COLORS.themeOppositeColor}]}>{school.contacts.phone === "" ? "-" : school.contacts.phone}</Text>
            </View>
            <View style={SchoolStyles.contact}>
              <Text style={[SchoolStyles.contactKey, {color: APP_COLORS.themeOppositeColor}]}>Email</Text>
              <Text style={[SchoolStyles.contactValue, {color: APP_COLORS.themeOppositeColor}]}>{school.contacts.email === "" ? "-" : school.contacts.email}</Text>
            </View>
            <View style={SchoolStyles.contact}>
              <Text style={[SchoolStyles.contactKey, {color: APP_COLORS.themeOppositeColor}]}>Mailbox</Text>
              <Text style={[SchoolStyles.contactValue, {color: APP_COLORS.themeOppositeColor}]}>{school.contacts.mailbox === "" ? "-" : school.contacts.mailbox}</Text>
            </View>
            {school.contacts.socials.length !== 0 && <View style={SchoolStyles.contact}>
              <Text style={[SchoolStyles.contactKey, {color: APP_COLORS.themeOppositeColor}]}>Social media</Text>
              <View style={SchoolStyles.socials}>
                <Text style={[SchoolStyles.contactValue, {color: APP_COLORS.themeOppositeColor}]}>kajubufaraji@gmail.com</Text>
                <Text style={[SchoolStyles.contactValue, {color: APP_COLORS.themeOppositeColor}]}>kajubufaraji@gmail.com</Text>
                <Text style={[SchoolStyles.contactValue, {color: APP_COLORS.themeOppositeColor}]}>kajubufaraji@gmail.com</Text>
              </View>
            </View>}
          </View>
        </View>

        {/* RESULTS */}
        <View style={SchoolStyles.section}>
          <Text style={[SchoolStyles.sectionTitle, { color: APP_COLORS.themeOppositeColor}]}>Latest results</Text>
          <ScrollView horizontal style={SchoolStyles.results}>
            {school.results.map(result => (
              <View style={[SchoolStyles.result, {backgroundColor: APP_COLORS.cardsColor}]}>
                <View style={{borderWidth: 1, borderColor: APP_COLORS.themeOppositeColor, maxWidth: 200, borderRadius: 10, padding: 5, gap: 8}}>
                  <Text style={[SchoolStyles.resultYear, {fontSize: 20, fontWeight: "bold", color: APP_COLORS.themeOppositeColor}]}>{result.year}</Text>
                  <View style={{flexDirection: "row", gap: 5}}>
                    <Text style={{color: APP_COLORS.themeOppositeColor}}>{school.category.level === "primary" ? "Grade A:" : "Division One:"}</Text>
                    <Text style={{color: APP_COLORS.brandOrange}}>{school.category.level === "primary" ? result.grades["A"] : result.results["division_one"]}</Text>
                  </View>
                  <View style={{flexDirection: "row", gap: 5}}>
                    <Text style={{color: APP_COLORS.themeOppositeColor}}>{school.category.level === "primary" ? "Grade B:" : "Division Two:"}</Text>
                    <Text style={{color: APP_COLORS.brandOrange}}>{school.category.level === "primary" ? result.grades["B"] : result.results["division_two"]}</Text>
                  </View>
                  <View style={{flexDirection: "row", gap: 5}}>
                    <Text style={{color: APP_COLORS.themeOppositeColor}}>{school.category.level === "primary" ? "Grade C:" : "Division Three:"}</Text>
                    <Text style={{color: APP_COLORS.brandOrange}}>{school.category.level === "primary" ? result.grades["C"] : result.results["division_three"]}</Text>
                  </View>
                  <View style={{flexDirection: "row", gap: 5}}>
                    <Text style={{color: APP_COLORS.themeOppositeColor}}>{school.category.level === "primary" ? "Grade D:" : "Division Four:"}</Text>
                    <Text style={{color: APP_COLORS.brandOrange}}>{school.category.level === "primary" ? result.grades["D"] : result.results["division_four"]}</Text>
                  </View>
                  <View style={{flexDirection: "row", gap: 5}}>
                    <Text style={{color: APP_COLORS.themeOppositeColor}}>{school.category.level === "primary" ? "Fail:" : "Fail:"}</Text>
                    <Text style={{color: APP_COLORS.brandOrange}}>{school.category.level === "primary" ? result.grades["E"] : result.results["fail"]}</Text>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* SPACER */}
        <View style={GlobalStyles.bottomSpacer}></View>
      </ScrollView>

      {/* CALL BTN */}
      {school.contacts.phone !== "" && <View style={[SchoolStyles.callBtnContainer, {backgroundColor: APP_COLORS.floatingBtnBg}]}>
        <TouchableOpacity style={[SchoolStyles.callButton, {backgroundColor: APP_COLORS.brandBlue}]} onPress={()=>{
          Linking.openURL(`tel:${school.contacts.phone}`)
        }}>
            <Feather name="phone-call" size={20} color="white" />
            <Text style={[{textTransform: "uppercase",color: "white", flexDirection: "row", alignItems: "center", gap: 10}]}>Call School</Text>
        </TouchableOpacity>
      </View>}
    </View>
  )
}

export default School