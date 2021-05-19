const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    rquired: true,
    min: 6,
    max: 255,
  },
  lastName: {
    type: String,
    rquired: true,
    min: 6,
    max: 255,
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Prefer not to say"],
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
    max: 255,
    min: 6,
  },
  password: {
    type: String,
    required: true,
    max: 1024,
    min: 6,
  },
  phone: {
    type: Number,
    required: true,
  },
  yoe: {
    type: Number,
    required: true,
  },
  profilePic: {
    type: String,
  },
  qualificationDetails: [
    {
      instituteName: {
        type: String,
      },
      startDate: {
        type: Date,
      },
      endDate: {
        type: Date,
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
        type: Date,
      },
      endDate: {
        type: Date,
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
        type: Date,
      },
      endDate: {
        type: Date,
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
        type: Date,
      },
      description: {
        type: String,
      },
    },
  ],
  awards: {
    type: String,
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

module.exports = mongoose.model("User", userSchema); // here User: name of collection in database as "users" ,capital letter is converted to lower in name of collection in mongodb
