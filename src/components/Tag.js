import React from "react";
import { StyleSheet } from "react-native";
import TagInput from "react-native-tags-input";
import { COLOR_BACK, COLOR_FRONT, COLOR_TEXT } from "../css/consts";

export const Tag = ({ updateState, tags }) => {
  return (
    <TagInput
      updateState={updateState}
      tags={tags}
      placeholder="Name"
      label="Press space to add player"
      autoCorrect={false}
      keysForTag={" "}
      autoFocus
      labelStyle={styles.label}
      inputStyle={styles.input}
      tagStyle={styles.tag}
      tagTextStyle={styles.tagText}
    />
  );
};

const styles = StyleSheet.create({
  label: { color: COLOR_FRONT },
  input: { color: COLOR_TEXT },
  tag: {
    backgroundColor: COLOR_BACK,
    borderRadius: 4,
    borderColor: COLOR_BACK,
    height: 40,
    paddingHorizontal: 10,
  },
  tagText: {
    color: COLOR_TEXT,
    textTransform: "capitalize",
    fontSize: 18,
  },
});
