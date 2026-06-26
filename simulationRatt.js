const accounts = [
  { id: 1, username: "Aziz", status: "active" },
  { id: 2, username: "Sara", status: "active" },
  { id: 3, username: "Mehdi", status: "active" },
];

const channels = [
  { id: 101, accountId: 1, name: "Code Academy" },
  { id: 102, accountId: 1, name: "AI Lab" },
  { id: 103, accountId: 2, name: "Travel World" },
  { id: 104, accountId: 3, name: "Fitness Pro" },
];

const videos = [
  { id: 1, channelId: 101, title: "JS Basics", duration: 45 },
  { id: 2, channelId: 101, title: "PHP OOP", duration: 90 },
  { id: 3, channelId: 102, title: "Intro AI", duration: 120 },
  { id: 4, channelId: 103, title: "Morocco Trip", duration: 60 },
  { id: 5, channelId: 104, title: "Workout Plan", duration: 80 },
];

function getMostActiveAccount(accounts, channels, videos) {
  // votre code

  let obj = {};
    let result = [];
  let arr = [];
  accounts.forEach((account) => {
    let currentaccount = channels.filter((acc) => acc.accountId === account.id);

    // console.log(currentaccount.flat())

    currentaccount.forEach(chanel => {
        
        // let channel =  channels.filter(chanel => chanel.accountId === currentaccount.id)
        // console.log(chanel, "channel");


        let video = videos.filter(vid => vid.channelId === chanel.id);
        // console.log(video, "video")
        video.forEach(vid => {
            // console.log(vid, "vide");
            if(!obj[vid.channelId]){
                obj[vid.channelId] = 0;
            }
            obj[vid.channelId] += vid.duration;
        })
        arr.push(video);
        // let video = videos.filter(vid => vid.channelId === channel.id);
        
    })
    // console.log(obj)
});
console.log(arr.flat(), "array")
}
getMostActiveAccount(accounts, channels, videos);





const accountS = [
  { id: 1, username: "Aziz", status: "active" },
  { id: 2, username: "Sara", status: "active" },
  { id: 3, username: "Mehdi", status: "active" },
  { id: 4, username: "Nora", status: "active" }
];

const strikes = [
  { id: 1, accountId: 1, reason: "Copyright" },
  { id: 2, accountId: 1, reason: "Spam" },
  { id: 3, accountId: 2, reason: "Fake content" },
  { id: 4, accountId: 2, reason: "Copyright" },
  { id: 5, accountId: 2, reason: "Spam" },
  { id: 6, accountId: 2, reason: "Violence" },
  { id: 7, accountId: 2, reason: "Misleading" },
  { id: 8, accountId: 3, reason: "Copyright" }
];




function disableAccountsWithStrikes(accounts, strikes) {
    // votre code


    let result = 
    accounts.forEach(account => {

        let strikess = strikes.filter(strike => strike.accountId === account.id);
        if(strikess.length > 4){
            account.status = 'disabled';
        }
    })
    // console.log(accounts);
}

// disableAccountsWithStrikes(accountS, strikes);




const channelS = [
  { id: 101, name: "Code Academy" },
  { id: 102, name: "AI Lab" },
  { id: 103, name: "Travel World" },
  { id: 104, name: "Fitness Pro" },
  { id: 105, name: "Food Time" }
];

const videoS = [
  { id: 1, channelId: 101 },
  { id: 2, channelId: 101 },
  { id: 3, channelId: 102 },
  { id: 4, channelId: 103 },
  { id: 5, channelId: 103 },
  { id: 6, channelId: 103 },
  { id: 7, channelId: 104 }
];

const subscriptions = [
  { userId: 1, channelId: 101 },
  { userId: 2, channelId: 101 },
  { userId: 3, channelId: 101 },
  { userId: 4, channelId: 102 },
  { userId: 5, channelId: 102 },
  { userId: 6, channelId: 103 },
  { userId: 7, channelId: 104 },
  { userId: 8, channelId: 104 },
  { userId: 9, channelId: 104 },
  { userId: 10, channelId: 104 }
];

const strikeS = [
  { id: 1, channelId: 103 },
  { id: 2, channelId: 105 }
];




function getTop3Channels(channels, videos, subscriptions, strikes) {
    // votre code

    let result = []
    channels.forEach(channel => {
        
        let score = 0;
        

        videos.forEach(video => {
            if(channel.id === video.channelId){
                // console.log(channel.id,  "=> ", video.channelId);

                score += 1;

            }
        })
        
        let challengeSubscription = subscriptions.filter(sub => sub.channelId === channel.id);
        score += challengeSubscription.length * 3;

        let challengeStrikes = strikes.filter(strike => strike.channelId === channel.id);

        score -= challengeStrikes.length * 5

        result.push({channel: channel.name, score});
    })

    let sorted = result.sort((a, b) => b.score - a.score).splice(0, 3);

    console.log(sorted);
}

getTop3Channels(channelS, videoS, subscriptions, strikeS);


