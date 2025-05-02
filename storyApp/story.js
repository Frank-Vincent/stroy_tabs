"use strict"
const scaryKy = document.getElementById ("scary");
const romanticKy = document.getElementById ("romantic");
const funnyKy = document.getElementById ("funny");
const fantasyKy = document.getElementById ("fantasy");
const story = document.getElementsByClassName ("story");
const heading = document.getElementById ("heading");
const mainContent = document.getElementById ("mainContent");
const storyContainer = document.getElementsByClassName ("storyBoard");
const author = document.getElementById ("author");
const body = document.body;



heading.style.color = "blue";



let StoryBoard = {
    scary: {
        title: "The whisper in the Woods",
        story: "It was supposed to be just a weekend camping trip. Jenna and her friends laughed as they set up their tents deep inside Black Hollow Forest, a place locals avoided after sunset. The air was cool, the stars shone brightly, and the only sound was the crackle of the campfire. But around midnight, things changed.Jenna heard a whisper. Faint, almost like the wind, but it said her name. Jenna... She looked around, but her friends were fast asleep. She brushed it off as her imagination, until she heard it again—closer this time.When she stepped away from the firelight, everything fell silent. The woods, once alive with insects and owls, were unnaturally still. Suddenly, cold fingers brushed her shoulder. She spun around—nothing. But the whisper was right in her ear now. Come with me... Panic surged. She ran back to the campsite, but the tents were shredded, and her friends were gone. Only their shoes remained, scattered in the dirt. In the fire’s glow, she saw footprints—not human, larger and clawed—leading deeper into the woods.As she backed away, she saw glowing eyes in the dark. Dozens of them The whisper became a chorus: Join us... The last thing Jenna remembered was being dragged into the shadows, her screams swallowed by the silence of Black Hollow. No one found them. Only an abandoned campsite and faint whispers that still call out to curious souls foolish enough to enter Black Hollow.",
        author: "Frank Vincent"
    },
    romantic: {
        title: "Letters Across The Sea",
         story: "Isabella writes love letters to Elias a sailor lost at sea. Years pass, but she never stops waiting. One stormy night, Elias returns, clutching her old letters that kept him alive after a shipwreck. Their reunion under the stormy sky proves their love endured distance and time. As the sun rises, the sea shines golden, blessing the couple’s undying bond. Their love story becomes legend.",
         author: "Gubejah Dadi"
    },
    funny: {
        title: "The Great Chicken Caper",
         story: "Tommy tries teaching Cluckles, his grumpy rooster, to dance for a contest. Chaos erupts as animals join the frenzy—pigs, goats, and even cows. Neighbors witness the madness, and judges mistake it for a grand performance. Cluckles crashes into a pumpkin, sealing victory. Tommy wins free ice cream, and Cluckles becomes famous as the Disco King of the farm, puffing proudly on his perch. I have just begun to love you",
         author: "Frank"
    },
    fantasy: {
        title: "The Last Ember Dragon",
         story: "Liora finds the last dragon, Ashwing. The cruel king hunts them, but Liora awakens her ancient powers. Together, they defeat the army and free the kingdom. Dragons return to Eldoria’s skies, and Liora, riding Ashwing, restores peace and glory.",
         author: "Paul Mwita"
    }
};

function TheStory (genre) {
    if (StoryBoard.hasOwnProperty (genre)) {
        heading.textContent = StoryBoard[genre].title;
        mainContent.textContent = StoryBoard[genre].story;
        author.textContent = StoryBoard[genre].author;
    } else {
        alert (" Sorry, We Can't Find That Genre");
    }
};

// Event listeneres to display the stories 
scaryKy.addEventListener ("click", function () {
    TheStory("scary");
});

funnyKy.addEventListener ("click", function () {
    TheStory ("funny");
});

fantasyKy.addEventListener ("click", function () {
    TheStory ("fantasy");
});

romanticKy.addEventListener ("click", function () {
    TheStory ("romantic");
});






