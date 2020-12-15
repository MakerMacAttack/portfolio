import axios from 'axios';

const submitContact = async (fields) => {
  const airtableURL = `https://api.airtable.com/v0/appMDdUOw44Hx9OCV/messages`;
  await axios.post(
    airtableURL,
    { fields },
    {
      headers: {
        Authorization: `Bearer keyNjK8uUlpY2OP8b`,
      },
    }
  );
};

export default submitContact


// ${ process.env.REACT_APP_AIRTABLE_BASE }
// ${ process.env.REACT_APP_AIRTABLE_KEY }