console.log("start");

function loginUser(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("we are in setimeout func");
      resolve({ UserEmail: email });
    }, 3000);
  });
}

function getUserVideos(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("we are in getUserVideos func");
      resolve([ "video1", "video2", "videos3" ]);
    }, 2000);
  });
}
function videoDetials(video) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("we are in VideosDetial func");
        resolve( "title of the video");
      }, 3000);
    });
  }

 async function displayData(){
     try {
        const logUser = await loginUser("Yeboah");
        const videos = await getUserVideos(logUser.UserEmail) //then awaited response from the logUser function as param
        const detail = await videoDetials(videos[0])
        console.log(detail);
     } catch (error) {
         console.log("failed to display data asynchroneously")
     }
   
 }

 displayData();
console.log("end");//great job bro :)
