const API_KEY ='AIzaSyAr5N6qBtVngBhHMFk_IJvNO6P_E3M59u4';
const BASE_URL = "https://www.googleapis.com/youtube/v3";
const moreInfo =  '&part=snippet';
const CONTENT_DETAILS = 'contentDetails';
const STATS ='statistics';
 
//search for getting vedio list
async function fetchVideos(searchQuery, maxResults) {
    try {
      const response = await fetch(
        BASE_URL +
          "/search" +
          `?key=${API_KEY}` +
          "&part=snippet" +
          `&q=${searchQuery}` +
          `&maxResults=${maxResults}`
      );
      const data = await response.json();
      console.log(data.items);
    } catch (e) {
      console.log(e);
    }
  }
//   fetchVideos("icc", 5);
  

//to get more information of vedios 
const fetchVideoStats = async (vedioId, typrOfInfo)=>{
    try{
        const resObj= await fetch(BASE_URL + '/videos' + `?key=${API_KEY}` + `&part=${typeofInfo}` + `&id=${videold}`);
        const data = await resObj.json();
        console.log(data);
    }
    catch(e){
        console.log(e);
    }
}

// fetchVideoStats('o7X82vwBAbw',CONTENT_DETAILS);
const getChannelInfo = async(channelId)=>{
    try{
         const resObj = await fetch(BASE_URL + '/channels' + `?key=${API_KEY}` +moreInfo + `&id=${channelId}`);
        const data = await resObj.json();
        console.log(data);
        }
     
    catch(e){
          console.log(e);
    }
}

//error in 56 and 58
//comment session
//getChannelInfo('UCt2JXOLNxqry7B_4rRZME3Q');

const getComments = async (videoId, maxComments) => {
    try {
        const resObj = await fetch(BASE_URL + '/commentThreads' + `?key=${API_KEY}` + moreInfo + `&maxResults=${maxComments}` + `&videoId=${videoId}`);
        const data = await resObj.json();
        console.log(data);
    }
    catch (e) {
        console.log(e);
    }
}

// getComments('o7X82vwBAbw',10);


