import axios from 'axios';

const submitContact = async (fields) => {
  const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/messages`;
  await axios.post(
    airtableURL,
    { fields },
    {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
      },
    }
  );
};

export default submitContact

