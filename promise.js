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

loginUser("isaac")
.then(user => getUserVideos(user.email))
.then(videos => videoDetials(videos[0]))
.then(detail => console.log(detail));

console.log("finish");
