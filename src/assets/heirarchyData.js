export const heirarchyData = () => {
  return {
    schoolDropdown: {
      label: "Select school",
      id: "school",
      modelValue: null,
      options: [
        { value: null, text: "Please select an option" },
        "School 1",
        "School 2",
        "School 3",
        "School 4",
        "School 5",
      ],
      isRequired: true,
      classes: "dropdown-select",
    },
    classDropdown: {
      label: "Select class",
      id: "class",
      modelValue: null,
      options: [
        { value: null, text: "Please select an option" },
        "Class 1",
        "Class 2",
        "Class 3",
        "Class 4",
        "Class 5",
        "Class 6",
        "Class 7",
        "Class 8",
        "Class 9",
        "Class 10",
      ],
      isRequired: true,
      classes: "dropdown-select",
    },
    sectionDropdown: {
      label: "Select section",
      id: "section",
      modelValue: null,
      options: [
        { value: null, text: "Please select an option" },
        "section A",
        "section B",
        "section C",
        "section D",
        "section E",
      ],
      isRequired: true,
      classes: "dropdown-select",
    },
    genderDropdown: {
      label: "Select gender",
      id: "gender",
      modelValue: null,
      options: [
        { value: null, text: "Please select an option" },
        "Boys",
        "Girls",
      ],
      isRequired: true,
      classes: "dropdown-select",
    },
  };
};
