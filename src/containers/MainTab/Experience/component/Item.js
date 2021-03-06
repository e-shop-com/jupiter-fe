import React from 'react';
import { Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';

const ItemTitle = styled.Text`
  margin-top: 6px;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 4px;
  width: 160px;
`;
const ItemSubtitle = styled.Text`
  font-size: 11px;
  color: #424242;
  margin-bottom: 10px;
  width: 160px;
  line-height: 16px;
`;

const OverflowText = styled.Text`
  position: absolute;
  left: 10px;
  top: 10px;
  font-weight: bold;
  color: #FFF;
  z-index: 100;
  background-color: rgba(1,1,1,0);
`;

const PIXEL_RATE = Dimensions.get('screen').width / 375;

const Item = ({
  experience_title, experience_brief_decription, experience_feature3, card_img, experience_id, navigation, experience,
}) => {
  console.log(card_img);
  return (
  <TouchableOpacity
    activeOpacity={1}
    onPress={() => {
      experience.setCurrentTab(1);
      experience.setCurrentExperienceID(experience_id);
      navigation.navigate('experienceDetail');
    }}
    style={styles.itemContainer}
  >
    <OverflowText>{experience_feature3}</OverflowText>
    <Image
      source={{ uri: card_img }}
      style={styles.itemPic}
      defaultSource={require('../../../../app-assets/loading/loading.16.9.png')}
    />
    <ItemTitle>{experience_title}</ItemTitle>
    <ItemSubtitle>{experience_brief_decription}</ItemSubtitle>
  </TouchableOpacity>
)};

const styles = StyleSheet.create({
  itemContainer: {
    width: 170 * PIXEL_RATE,
    borderWidth: 0,
    borderColor: 'red',
    marginBottom: 10,
  },
  itemPic: {
    width: 170 * PIXEL_RATE,
    height: 107 * PIXEL_RATE,
  },
});

export default inject(stores => ({
  experience: stores.experience,
}))(observer(Item));
