import React from "react";
import Select from "react-select";

export default function InputSelect() {
  const options = [
    { value: "ram", label: "Ram" },
    { value: "shyam", label: "Shyam" },
    { value: "hari", label: "Hari" },
  ];

  const styles = {
    //this is for select input
    control: (styles, isFocused, isDisabled) => ({
      ...styles,
      border: "none",
      maxWidth: "485px",
      height: "56px",
      paddingInline: `1rem`,
      boxShadow: `0px 4px 4px rgba(51, 51, 51, 0.04),
    0px 4px 16px rgba(51, 51, 51, 0.08)`,
      //this is how to hover
      ":hover": {
        boxShadow: `0px 4px 4px rgba(51, 51, 51, 0.04),
    0px 4px 56px rgba(51, 51, 51, 0.16)`,
      },
    }),
    //for the individual option not the option context menu
    option: (styles) => ({ ...styles, maxWidth: "485px" }),

    //for the tags that appear when you select an option
    multiValue: (styles) => ({
      ...styles,
      backgroundColor: "#6E41E2",
      color: "white",
      borderRadius: "4px",
      paddingInline: "8px 4px",
      paddingBlock: "1px",
    }),
    //For the text in tags
    multiValueLabel: (styles) => ({
      ...styles,
      color: "white",
      fontSize: "16px",
    }),
    //for the remove cross in those tags.
    multiValueRemove: (styles) => ({
      ...styles,
      ":hover": {
        backgroundColor: "none",
      },
    }),
  };

  const handleChange = (selectedOption) => {
    console.log("handleChange", selectedOption);
  };

  // for multi select just write isMulti
  return (
    <Select options={options} onChange={handleChange} isMulti styles={styles} />
  );
}
