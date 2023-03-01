const fields = [
  {
    fieldName: "name",
    type: "text",
    required: true,
    pattern: "^[a-zA-Z]+$",
    errorMessage: "invalid name, please only use letter",
    placeholder: "Laura",
  },
  {
    fieldName: "lastname",
    type: "text",
    required: true,
    pattern: "^[A-Za-z]+$",
    errorMessage: "invalid last name, please only use letter",
    placeholder: "Schiller",
  },
  {
    fieldName: "phoneNumber",
    type: "tel",
    required: true,
    pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}",
    errorMessage: "invalid phone number, please only use number",
    placeholder: "226-781-3404",
  },
  {
    fieldName: "address",
    type: "text",
    required: true,
    pattern:
      "\\d+[ ](?:[A-Za-z0-9.-]+[ ]?)+(?:Avenue|Lane|Road|Boulevard|Drive|Street|Ave|Dr|Rd|Blvd|Ln|St|avenue|lane|road|boulevard|drive|street|ave|dr|rd|blvd|ln|st)\\.?",
    errorMessage: "invalid address, only letter and number are accepted",
    placeholder: "55 Adelaide Street",
  },
  {
    fieldName: "city",
    type: "text",
    required: true,
    pattern: "^[A-Za-z]+$",
    errorMessage: "invalid City, only letter are accepted",
    placeholder: "Toronto",
  },
  {
    fieldName: "postalCode",
    type: "text",
    required: true,
    pattern: "[A-Za-z][0-9][A-Za-z] [0-9][A-Za-z][0-9]",
    errorMessage:
      "invalid Postal Code, please follow the example format:  A0A 0A0",
    placeholder: "M5V 2T8",
  },
];

export default fields;
