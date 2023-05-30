import axios from "axios"; // library for http requests

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID ThjWBc17KTp2Cdka6u3HIQ1s7nUfDsa0Qaqh1tZQk6Q",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
