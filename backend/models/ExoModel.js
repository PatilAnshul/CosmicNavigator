const mongoose = require ('mongoose');

const Schema = mongoose.Schema
const exodb = mongoose.connection.useDb('FSD-BDT')


const exoSchema = new Schema({
    "Name": { 
      type: String, 
      required: true 
    },
    "Mass (MJ)": { 
      type: Number, 
      required: true 
    },
    "Period (days)": { 
      type: Number, 
      required: true
    },
    "Semi-major axis (AU)": { 
      type: Number, 
      required: true 
    },
    "Discovery method": { 
      type: String, 
      required: true 
    },
    "Year": { 
      type: Number, 
      required: true 
    },
    "Distance (ly)": { 
      type: Number, 
      required: true 
    },
    "Host star mass (M☉)": { 
      type: Number, 
      required: true 
    },
    "Host star temp (K)": { 
      type: Number, 
      required: true 
    },
    "Remarks": { 
      type: String, 
      required: false 
    }
  },
  { timestamps: true },
  { collection: 'exoplanets' });

const exoplanet = exodb.model('Exoplanets', exoSchema)
module.exports = exoplanet;