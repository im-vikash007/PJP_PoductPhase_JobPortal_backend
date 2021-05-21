const mongoose = require("mongoose");

const userDetail = new mongoose.Schema({
  firstName: {
    type: String,
    rquired: true,
  },
  lastName: {
    type: String,
    rquired: true,
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Prefer not to say"],
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  yoe: { //year of experience
    type: Number,
    required: true,
  },
  profilePic: {
    data: Buffer,
    contentType: String
  },
  qualificationDetails: [
    {
      instituteName: {
        type: String,
      },
      startDate: {
        type: String,
      },
      endDate: {
        type: String,
      },
      degree: {
        type: String,
      },
      stream: {
        type: String,
      },
      percentage: {
        type: Number,
      },
    },
  ],
  skills: {
    type: [String],
  },
  workExperience: [
    {
      role: {
        type: String,
      },
      organization: {
        type: String,
      },
      location: {
        type: String,
      },
      startDate: {
        type: String,
      },
      endDate: {
        type: String,
      },
      description: {
        type: String,
      },
    },
  ],
  projectDetails: [
    {
      title: {
        type: String,
      },
      startDate: {
        type: String,
      },
      endDate: {
        type: String,
      },
      description: {
        type: String,
      },
    },
  ],
  certifications: [
    {
      courseName: {
        type: String,
      },
      issuingOrganization: {
        type: String,
      },
      issueDate: {
        type: String,
      },
      description: {
        type: String,
      },
    },
  ],
  awardsAndAchievement: {
    type: [String]
  },
  others: {
    relocate: {
      type: Boolean,
    },
    locationPreference: {
      type: String,
    },
    salaryExpectation: {
      type: Number,
    },
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("UserDetail", userDetail); // here User: name of collection in database as "users" ,capital letter is converted to lower in name of collection in mongodb
