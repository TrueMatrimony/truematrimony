const { Schema, models, model } = require("mongoose");

const registerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    mobilenum: {
      type: Number,
      required: true,
    },
    whatsappmobilenum: {
      type: Number,
    },
    email: {
      type: String,
      required: true,
    },
    profession: {
      type: String,
    },
    monthlyIncome: {
      type: String,
    },
    address: {
      type: String,
      required: true,
    },
    towncity: {
      type: String,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    nationality: {
      type: String,
      required: true,
    },
    pincode: {
      type: String,
      required: true,
    },
    height: {
      type: String,
    },
    weight: {
      type: String,
    },
    color: {
      type: String,
    },
    religion: {
      type: String,
    },
    community: {
      type: String,
    },
    subcaste: {
      type: String,
    },
    raasi: {
      type: String,
    },
    star: {
      type: String,
    },
    marriagecategory: {
      type: String,
    },
    password: {
      type: String,
    },
    cpassword: {
      type: String,
    },
  }
  // { toJSON: { virtuals: true } }
);

// registerSchema.virtual("created_at_formatted").get(function () {
//   return changeDateFormat(this.dob);
// });

// function changeDateFormat(date_str) {
//   const date = new Date(date_str);
//   const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];
//   return `${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;
// }

const RegisterModel =  models.userprofile || model("userprofile", registerSchema);

export default RegisterModel;
