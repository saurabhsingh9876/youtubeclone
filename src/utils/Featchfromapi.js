import axios from "axios";
//et BaseUrl='https://youtube-v31.p.rapidapi.com/'
 let BaseUrl='https://youtube-v31.p.rapidapi.com'
const options = {
    // method: 'GET',
    // url: BaseUrl,
    params: {
      // part: 'snippet',
      // videoId: 'M7FIvfx5J10',
      maxResults:'50'
    },
    headers: {
      // 'X-RapidAPI-Key':process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Key':'d415127334mshfaa7d3d5aa3a649p19b0e5jsn4f0542a54b58',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  
  try {
      const response = await axios.request(options);
      console.log(response.data);
  } catch (error) {
      console.error(error);
  }

  export const Featchfromapi=async(url)=>{
   const {data}=await axios.get(`${BaseUrl}/${url}`,options)
   return data;
  }
// import axios from "axios";

// const BaseUrl = 'https://youtube-v31.p.rapidapi.com';

// const options = {
//   url: BaseUrl,
//   params: {
//     part: 'snippet',
//     videoId: 'M7FIvfx5J10' // Replace with a valid YouTube video ID
//   },
//   headers: {
//     'X-RapidAPI-Key': 'your_rapidapi_key_here', // Replace with your RapidAPI key
//     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
//   }
// };

// async function fetchData() {
//   try {
//     const response = await axios.request(options);
//     console.log(response.data);
//   } catch (error) {
//     if (error.response) {
//       console.error("Response data:", error.response.data);
//       console.error("Status code:", error.response.status);
//     } else if (error.request) {
//       console.error("Request made, but no response received:", error.request);
//     } else {
//       console.error("Error setting up the request:", error.message);
//     }
//   }
// }

// export const Featchfromapi = async (url) => {
//   try {
//     const { data } = await axios.get(`${BaseUrl}/${url}`, options);
//     return data;
//   } catch (error) {
//     console.error(error);
//     throw error; // Re-throw the error to handle it at the calling location
//   }
// };

// // Call the fetchData function to make the initial request
// fetchData();
