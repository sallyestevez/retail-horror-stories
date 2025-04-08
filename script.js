const storyText = document.getElementById("story-text");
const gameOptions = document.getElementById("game-options");
const backgroundMusic = document.getElementById("background-music");

const storyPaths = {
  music: "music/Deduction.mp3",
  start: {
    text: "You recently started a new retail job at Walmart! You find out that you've been scheduled to work on Black Friday... Not only is it your first Black Friday at Walmart, it's also your first time working on Black Friday ever! Do you think you'll survive the day, or do you chicken out?",
    music: "music/Deduction.mp3",
    background_image: "img/Background1.jpg",
    options: [
      {
        text: "Call out sick. I'm not doing that to myself.",
        next: "noWork",
      },
      {
        text: "Tell my manager I'm traveling for Thanksgiving, so I won't be able to work on Friday.",
        next: "noWork",
      },
      {
        text: "Decide to work on Black Friday. What's the worst that can happen?",
        next: "workYes",
      },
    ],
  },

  noWork: {
    text: "You're not working on Black Friday! Yay! Enjoy your day off!",
    music: "music/Period.mp3",
    background_image: "img/Background2.jpg",
    options: [
      {
        text: "Back to start!",
        next: "start",
      },
    ],
  },

  workYes: {
    text: "You're brave enough to work on Black Friday, it seems. You read your assigned schedule because you didn't do that earlier. It turns out you're opening on Black Friday!!! You have never opened before! Do you follow through?",
    music: "music/Deduction.mp3",
    background_image: "img/Background3.jpg",
    options: [
      {
        text: "Idk... I feel like quitting my job...",
        next: "quitting",
      },
      {
        text: "Let's open Walmart!",
        next: "yesOpening",
      },
    ],
  },

  quitting: {
    text: "You tell your boss about wanting to quit your job, but they try to convince you not to because a lot of employees have already said they're not coming in on Friday. What do you do?",
    music: "music/I'll Face Myself.mp3",
    background_image: "img/Background1.jpg",
    options: [
      {
        text: "Not quit + work on Friday. They probably need me.",
        next: "yesOpening",
      },
      {
        text: "I'm quitting. I don't want to be stressed over a job. Bye, Walmart!",
        next: "yesQuit",
      },
    ],
  },

  yesQuit: {
    text: "You have successfully quit your retail job and are now living that sweet unemployed life. That is, until you have to look for a new job. The holiday rush is coming so it'll probably be very easy for you to find a job.",
    music: "music/specialist (Reincarnation).mp3",
    background_image: "img/Background2.jpg",
    options: [
      {
        text: "Back to start!",
        next: "start",
      },
    ],
  },

  yesOpening: {
    text: "Well, you're actually opening Walmart. On Black Friday. Good luck!!!",
    music: "music/I'll Face Myself.mp3",
    background_image: "img/Background3.jpg",
    options: [
      {
        text: "Thanks!",
        next: "thanksgivingDay",
      },
    ],
  },

  thanksgivingDay: {
    text: "It's Thanksgiving Day, which means that you'll have to be at Walmart in a few hours. What do you do?",
    music: "music/Alone.mp3",
    background_image: "img/Background1.jpg",
    options: [
      {
        text: "Go to sleep early! I have to wake up early!",
        next: "sleepEarly",
      },
      {
        text: "Stay up late. I want to spend time with my family!",
        next: "sleepLate",
      },
    ],
  },

  sleepEarly: {
    text: "Your alarm goes off at 4 am. Thankfully, you feel great because you went to bed early! You get ready since you have to be at work by 5 am.",
    music: "music/Alone.mp3",
    background_image: "img/Background2.jpg",
    options: [
      {
        text: "I'm ready to go!",
        next: "goToWalmart",
      },
    ],
  },

  sleepLate: {
    text: "Your alarm goes off at 4 am. You got less than 2 hours of sleep! What do you do?",
    music: "music/Who's There.mp3",
    background_image: "img/Background3.jpg",
    options: [
      {
        text: "Power through. Drink a lot of coffee. I need to get to work!",
        next: "goToWalmart",
      },
      {
        text: "Go back to sleep. My sleep is more important.",
        next: "sleepIn",
      },
    ],
  },

  sleepIn: {
    text: "You sleep in. You really don't care about what's going on at your job. If you get fired it's whatever.",
    music: "music/Reverie.mp3",
    background_image: "img/Background1.jpg",
    options: [
      {
        text: "Back to start!",
        next: "start",
      },
    ],
  },

  goToWalmart: {
    text: "You make it to Walmart, and there's already a crowd of people waiting outside! Some people are yelling at you to open the store, even though it's supposed to open at 6. Do you do it?",
    music: "music/Theme of Junes.mp3",
    background_image: "img/Background2.jpg",
    options: [
      {
        text: "No! It's not time to open yet!",
        next: "noOpen",
      },

      {
        text: "Sure. Why not?",
        next: "yesOpen",
      },
    ],
  },

  noOpen: {
    text: "You ignore customers' pleas. It's not even 5:30 yet. They can wait until opening.",
    music: "music/Theme of Junes.mp3",
    background_image: "img/Background3.jpg",
    options: [
      {
        text: "Enter the store.",
        next: "insideStore",
      },
    ],
  },

  yesOpen: {
    text: "Right when you're about to open, a coworker sees what you're doing and tells you to stop.",
    music: "music/Theme of Junes.mp3",
    background_image: "img/Background1.jpg",
    options: [
      {
        text: "OK, time to enter the store and get ready.",
        next: "insideStore",
      },
    ],
  },

  insideStore: {
    text: "You and your coworkers spend time organizing the store before opening (as if it's not going to be unrecognizable in a few hours). Finally, it's time to open! Brace yourself for what's to come.",
    music: "music/Theme of Junes.mp3",
    background_image: "img/Background2.jpg",
    options: [
      {
        text: "Oh no.",
        next: "openingTime",
      },
      {
        text: "Happy Hunger Games, and may the odds be ever in your favor!",
        next: "openingTime",
      },
    ],
  },

  openingTime: {
    text: "People come rushing in right away. However, since the crowd is too large, not everyone can enter the store at the same time. A lady who was unable to enter the store tells you that the lines are too long. She wants to know if you can make them shorter.",
    music: "music/I'll Face Myself.mp3",
    background_image: "img/Background3.jpg",
    options: [
      {
        text: `"No, I can't make lines shorter. The lines are there for a reason!"`,
        next: "lineLady1",
      },
      {
        text: "Ignore her and walk away. I'm not dealing with this nonsense.",
        next: "section",
      },
    ],
  },

  lineLady1: {
    text: "Well, responding to her was a mistake! She now wants to go to the front of the line. When you tell her no, she asks to speak to the manager.",
    music: "music/I'll Face Myself -Battle-.mp3",
    background_image: "img/Background1.jpg",
    options: [
      {
        text: "Lie and say that you're the manager.",
        next: "managerLie",
      },

      {
        text: `"Ma'am, there are hundreds of people in this store. I cannot get the manager."`,
        next: "managerTruth",
      },
    ],
  },

  managerLie: {
    text: "You're able to convince her that you're the manager, and that she should wait her turn.",
    music: "music/specialist (Reincarnation).mp3",
    background_image: "img/Background2.jpg",
    options: [
      {
        text: "Problem solved!",
        next: "section",
      },
    ],
  },

  managerTruth: {
    text: "The lady gets mad when you tell her this and throws a tantrum. She sits on the floor and it doesn't look like she'll get up anytime soon. You really don't want to deal with this right now.",
    music: "music/Alone.mp3",
    background_image: "img/Background3.jpg",
    options: [
      {
        text: "Call security and leave it up to them.",
        next: "ladySecurity",
      },
      {
        text: "Walk away. I need to help other customers.",
        next: "section",
      },
      {
        text: "Drop everything and go home.",
        next: "ladyGoHome",
      },
    ],
  },

  ladySecurity: {
    text: "You call security and leave the rest up to them. Finally, you can get back to work.",
    music: "music/Theme of Junes.mp3",
    background_image: "img/Background1.jpg",
    options: [
      {
        text: "Get to work!",
        next: "section",
      },
    ],
  },

  ladyGoHome: {
    text: "Since the store had JUST opened and you were already dealing with insufferable people, you figured that the rest of today would be torture. You decide to go home. Unfortunately, you did not survive Walmart Black Friday.",
    music: "music/Alone.mp3",
    background_image: "img/Background2.jpg",
    options: [
      {
        text: "Back to start :(",
        next: "start",
      },
    ],
  },

  section: {
    text: "Now that that's done, what do you want to deal with? I mean, where do you want to work?",
    music: "music/Theme of Junes.mp3",
    background_image: "img/Background3.jpg",
    options: [
      {
        text: "Electronics section!",
        next: "electronics",
      },
      {
        text: "Home goods section!",
        next: "homeGoods",
      },
    ],
  },

  electronics: {
    text: "Ah yes, the electronics section. Home to Xbox bundles and $200 4K TVs. Now what?",
    music: "music/Theme of Junes.mp3",
    background_image: "img/Background1.jpg",
    options: [
      {
        text: "Help out with the TVs!",
        next: "tvs",
      },
      {
        text: "Help out with the Xbox bundles!",
        next: "xbox",
      },
    ],
  },

  tvs: {
    text: "Over at the TV section, you see two people fighting over a TV. Do you intervene?",
    music: "music/I'll Face Myself.mp3",
    background_image: "img/Background2.jpg",
    options: [
      {
        text: "Try to stop them from fighting. There is no fighting in this store!",
        next: "fightLoss",
      },
      {
        text: "Call security. I'm not trained to stop conflict.",
        next: "tvSecurity",
      },
      {
        text: "Go over to the Xboxes.",
        next: "xbox",
      },
    ],
  },

  fightLoss: {
    text: "You try to break up the fight, but uh oh! One of the guys fighting punches you in the face and breaks your nose!",
    music: "music/Who's There.mp3",
    background_image: "img/Background3.jpg",
    options: [
      {
        text: "Ow, my nose :(",
        next: "hospital",
      },
    ],
  },

  hospital: {
    text: "Unfortunately, you now have to go to the hospital. An ambulance comes to pick you up. You were not able to survive Walmart Black Friday.",
    music: "music/Reverie.mp3",
    background_image: "img/Background1.jpg",
    options: [
      {
        text: "Back to start :(",
        next: "start",
      },
    ],
  },

  tvSecurity: {
    text: "You call security, who comes in to stop the fight. Problem solved, I guess. You can move on.",
    music: "music/Theme of Junes.mp3",
    background_image: "img/Background2.jpg",
    options: [
      {
        text: "Go over to the Xboxes.",
        next: "xbox",
      },
    ],
  },

  xbox: {
    text: "You are now at the Xbox area, where they have a few Xbox + Halo Infinite bundles for $350! And by 'few' I mean 10. There are about 100 people waiting in line. What do you do?",
    music: "music/Deduction.mp3",
    background_image: "img/Background3.jpg",
    options: [
      {
        text: "Give them out first come, first serve of course!",
        next: "firstCome",
      },
      {
        text: "Throw the bundles at people. Whoever grabs one wins.",
        next: "throwXbox",
      },
    ],
  },

  throwXbox: {
    text: "The Xbox section is chaos. Everyone is trying to grab 1 of the 10 Xboxes. You could have done something else...",
    music: "music/specialist (Reincarnation).mp3",
    background_image: "img/Background1.jpg",
    options: [
      {
        text: "Ok, that's not my problem.",
        next: "notMyProblem",
      },
      {
        text: "You're right. I shouldn't have.",
        next: "helpCoworkers",
      },
    ],
  },

  firstCome: {
    text: "You give out all the Xbox bundles, but there are still people waiting in line. Which announcement do you make?",
    music: "music/Deduction.mp3",
    background_image: "img/Background2.jpg",
    options: [
      {
        text: "The Xbox bundles are no longer available!",
        next: "noLongerAvailable",
      },
      {
        text: "The Xboxes are gone. Leave! Get out of here!",
        next: "xboxGone",
      },
      {
        text: "It turns out we got an additional Xbox shipment! I'll go get them!",
        next: "moreXboxes",
      },
    ],
  },

  noLongerAvailable: {
    text: "Customers actually listened to you! They're leaving! Now what do you do?",
    music: "music/Electronica In Velvet Room.mp3",
    background_image: "img/Background3.jpg",
    options: [
      {
        text: "Stay in the electronics section.",
        next: "stayHere",
      },
      {
        text: "Go help my coworkers.",
        next: "helpCoworkers",
      },
    ],
  },

  xboxGone: {
    text: "For some reason customers think you're lying. They demand to go to the backrooms and see for themselves. You try to explain that you can't let them do that, but they start throwing insults at you. What's next?",
    music: "music/Who's There.mp3",
    background_image: "img/Background1.jpg",
    options: [
      {
        text: "Start crying :(",
        next: "cry",
      },
      {
        text: "Ignore them and walk away.",
        next: "xboxIgnore",
      },
    ],
  },

  moreXboxes: {
    text: `The "additional Xbox shipment" was a lie. "I'll be back" was also a lie. You left and didn't look back. The customers are waiting for their Xboxes! Management finds out about this and you get fired on the spot. You (technically) survived Black Friday, but at what cost?`,
    music: "music/Who's There.mp3",
    background_image: "img/Background2.jpg",
    options: [
      {
        text: "Darn :(",
        next: "start",
      },
    ],
  },

  notMyProblem: {
    text: "It seems like the store is getting busier and busier. There are too many customers and you can't keep up with them all. How are you feeling?",
    music: "music/Alone.mp3",
    background_image: "img/Background3.jpg",
    options: [
      {
        text: "Better than ever! I can take them!",
        next: "better",
      },
      {
        text: "I feel AWFUL. I don't have a single 'YIPPEE!' left in me.",
        next: "awful",
      },
    ],
  },

  better: {
    text: "You're doing a great job! What do you feel like doing now?",
    music: "music/Theme of Junes.mp3",
    background_image: "img/Background2.jpg",
    options: [
      {
        text: "I want to stay in the electronics section.",
        next: "stayHere",
      },
      {
        text: "I want to help my coworkers.",
        next: "helpCoworkers",
      },
      {
        text: "I want to help some customers over in the home goods section.",
        next: "helpCustomers",
      },
    ],
  },

  awful: {
    text: "You can't handle the pressure anymore. There is simply too much going on. You organize your belongings and leave. I'm sorry, but you did not survive Walmart Black Friday.",
    music: "music/Alone.mp3",
    background_image: "img/Background3.jpg",
    options: [
      {
        text: "Back to start :(",
        next: "start",
      },
    ],
  },

  cry: {
    text: "Customers can be so mean! You can't take it anymore and walk out of the store crying. You did not survive Walmart Black Friday.",
    music: "music/Alone.mp3",
    background_image: "img/Background1.jpg",
    options: [
      {
        text: "Back to start :(",
        next: "start",
      },
    ],
  },

  stayHere: {
    text: "Things are starting to slow down and the store isn't as chaotic anymore. You spend the next few hours helping customers, and before you know it, your shift is over! Congratulations! You survived Walmart Black Friday!",
    music: "music/Period.mp3",
    background_image: "img/Background2.jpg",
    options: [
      {
        text: "Yay!",
        next: "start",
      },
    ],
  },

  helpCoworkers: {
    text: "You go help your coworkers. They look like they really need it. Together, you get a lot of work done, and before you know it, it's time to leave! Congratulations! You've survived Walmart Black Friday!",
    music: "music/Period.mp3",
    background_image: "img/Background3.jpg",
    options: [
      {
        text: "Yay!",
        next: "start",
      },
    ],
  },

  homeGoods: {
    text: "You made your way over to the home goods section. What do you feel like doing?",
    music: "music/Theme of Junes.mp3",
    background_image: "img/Background1.jpg",
    options: [
      {
        text: "Organizing shelves!",
        next: "organizing",
      },
      {
        text: "Helping customers out!",
        next: "helpCustomers",
      },
    ],
  },

  organizing: {
    text: "Organizing shelves seems like the easiest thing to do as a first-time Black Friday employee. You're stuck organizing shelves for 8 hours, but at least customers don't bother you! 8 hours later, your shift is done and you can go home! Congratulations! You survived Walmart Black Friday!",
    music: "music/Period.mp3",
    background_image: "img/Background2.jpg",
    options: [
      {
        text: "Yay!",
        next: "start",
      },
    ],
  },

  helpCustomers: {
    text: "You've decided to help customers. Who approaches you first?",
    music: "music/Theme of Junes.mp3",
    background_image: "img/Background3.jpg",
    options: [
      {
        text: "Older lady holding a basket.",
        next: "olderLady",
      },
      {
        text: "Person with something in their hands.",
        next: "returns",
      },
      {
        text: "Middle-aged lady holding her cellphone.",
        next: "bestBuy",
      },
    ],
  },

  olderLady: {
    text: `The older lady with the basket approaches you and then brings you over to a display. All she has to say about this is "I don't understand this." She doesn't want to elaborate. What do you tell her?`,
    music: "music/Theme of Junes.mp3",
    background_image: "img/Background1.jpg",
    options: [
      {
        text: `"Can you please give me more information? I might be able to help you then."`,
        next: "throwBasket",
      },
      {
        text: "Make up an explanation. She can figure it out herself.",
        next: "acceptExplanation",
      },
    ],
  },

  throwBasket: {
    text: "She doesn't like this explanation, apparently. She throws her basket at you. How do you react?",
    music: "music/I'll Face Myself.mp3",
    background_image: "img/Background2.jpg",
    options: [
      {
        text: "Fight her!",
        next: "ladyFight",
      },
      {
        text: "Walk away!",
        next: "ladyWalkAway",
      },
    ],
  },

  ladyFight: {
    text: "You decide to fight her. Why did you? Security has to break you two apart, and you also get arrested. You did not survive Walmart Black Friday.",
    music: "music/Who's There.mp3",
    background_image: "img/Background3.jpg",
    options: [
      {
        text: "Back to start :/",
        next: "start",
      },
    ],
  },

  ladyWalkAway: {
    text: "You walk away while laughing to yourself. This was the right choice, because the lady stormed out of the store! What do you feel like doing now?",
    music: "music/Theme of Junes.mp3",
    background_image: "img/Background1.jpg",
    options: [
      {
        text: "Helping coworkers.",
        next: "helpCoworkers",
      },
      {
        text: "Organizing shelves.",
        next: "organizing",
      },
    ],
  },

  acceptExplanation: {
    text: "The lady accepts your explanation and leaves you alone! What do you feel like doing now?",
    music: "music/Theme of Junes.mp3",
    background_image: "img/Background2.jpg",
    options: [
      {
        text: "Helping coworkers.",
        next: "helpCoworkers",
      },
      {
        text: "Organizing shelves.",
        next: "organizing",
      },
    ],
  },

  returns: {
    text: "Someone walks up to you holding a knife set. They said they're here to make a return (on Black Friday???). Now what?",
    music: "music/Theme of Junes.mp3",
    background_image: "img/Background3.jpg",
    options: [
      {
        text: "Tell them to go home.",
        next: "returnsGoHome",
      },
      {
        text: "Point them in the direction of Returns & Exchanges.",
        next: "returnsExchanges",
      },
    ],
  },

  returnsGoHome: {
    text: "You tell them to go home and then walk away. You try to be productive the rest of your shift.",
    music: "music/Alone.mp3",
    background_image: "img/Background1.jpg",
    options: [
      {
        text: "I've been working for HOURS!",
        next: "notMyProblem",
      },
    ],
  },

  returnsExchanges: {
    text: "You point them in the direction of Returns & Exchanges. They thank you and quickly walk away. What do you do now?",
    music: "music/specialist (Reincarnation).mp3",
    background_image: "img/Background2.jpg",
    options: [
      {
        text: "Organize shelves.",
        next: "organizing",
      },
      {
        text: "Help my coworkers.",
        next: "helpCoworkers",
      },
    ],
  },

  bestBuy: {
    text: "The lady that comes up with you shows you her phone and asks you if Walmart can price match a microwave with Best Buy. You can't price match. What do you tell her?",
    music: "music/Theme of Junes.mp3",
    background_image: "img/Background3.jpg",
    options: [
      {
        text: `"Sorry, but we can't do that."`,
        next: "priceMatchNo",
      },
      {
        text: `"Yeah, we can price match."`,
        next: "priceMatchYes",
      },
    ],
  },

  priceMatchNo: {
    text: "The lady gets upset and calls 911 on you. The police arrive, and since there's no true emergency, they arrest her for misusing the emergency service. With that done, you're free to do your job. Congratulations! You've survived Walmart Black Friday!",
    music: "music/Period.mp3",
    background_image: "img/Background1.jpg",
    options: [
      {
        text: "Yay!",
        next: "start",
      },
    ],
  },

  priceMatchYes: {
    text: "Yes, you lied to the customer. But she won't realize you did until she's paying for the microwave.",
    music: "music/Electronica In Velvet Room.mp3",
    background_image: "img/Background2.jpg",
    options: [
      {
        text: "I'm such a great liar!",
        next: "notMyProblem",
      },
    ],
  },
};

function renderStory(path) {
  const currentPath = storyPaths[path];
  storyText.textContent = currentPath.text;

  // update music
  if (currentPath.music) {
    backgroundMusic.src = currentPath.music;
    backgroundMusic.play().catch((error) => {
      console.log("Error playing music:", error);
    });
  }

  gameOptions.innerHTML = ""; // Clear previous options
  currentPath.options.forEach((option) => {
    const button = document.createElement("button");
    button.className = "game-btn";
    button.textContent = option.text;
    button.onclick = () => renderStory(option.next);
    gameOptions.appendChild(button);
  });
}

window.addEventListener("load", () => {
  renderStory("start");
});
