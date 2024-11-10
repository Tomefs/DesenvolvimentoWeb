let express = require('express');
let app = express();
let PORT = 3000;

let data = {
  Military: [
    {
      id: "1",
      name: "Military Police Regiment",
      description: [
        "The Military Police Regiment is the most prestigious military sector",
        "due to their work, which allows citizens to live safely within the inner",
        "Wall and results in abundant resources. Therefore, it has higher authority",
        "over other military sectors. However, in reality, it is the most corrupted",
        "military sector due to a lack of oversight compared to the other sectors of",
        "the military. Due to their misuse and abuse of power, the",
        "Military Police Regiment is also at odds with the Garrison and especially with",
        "the Scout Regiment. Only the top cadets from trainee corps can apply for the",
        "Military Police Regiment.",
      ].join(" "),
    },
  ],

  Scouts: [
    {
      id: "2",
      name: "Scouting Legion",
      description: [
        "The Scout Regiment is the primary titan killing force as it is the branch of the Military",
        "most actively involved in direct Titan combat, Titan study, human expansion, and outside exploration.",
        "They have the best soldiers (not to be compared with the Top Trainees who joins the Military Police),",
        "and are the most skilled in using the omni-directional mobility gear. But, despite having little success,",
        "they still symbolise 'the hope of mankind' with their insignia being known as 'the Wings of Freedom'.",
        "They hope that someday, their efforts will change the world and they will be able to recover what has been",
        "taken away from humanity.",
      ].join(" "),
    },
  ],

  Guard: [
    {
      id: "3",
      name: "Stationary Guard",
      description: [
        "The Garrison Regiment is the largest of the Military divisions which protects and maintains",
        "order within the Walls. Given the fatality rate of the Scout Regiment and the limited entry",
        "of the Military Police Regiment, most soldiers join the Garrison. As they often have close",
        "contact with both Titans and human civilians, they are proficient over a wide variety of tasks",
        "such as Titan combat (defensive battles), cannons, security detail, crowd control, and rifle usage.",
      ].join(" "),
    },
  ],

  Trainee: [
    {
      id: "4",
      name: "Trainee Squad",
      description: [
        "The Trainee Corps is the military organisation introduced in the group",
        "is the regiment we use to train cadets to become soldiers. It is currently",
        "active with graduations being held every Sunday.",
        "The cadets upon graduation is split in half, the top half will be allowed",
        "to join the Military Police Regiment, the remaining half will be allowed to",
        "join only the Scout Regiment, Garrison Regiment and becoming a Trainee Instructor.",
        "At the moment, the Instructors have been disbanded and the branch officers are the hosts",
      ].join(" "),
    },
  ],

  Sinopse: [
    {
      id: "5",
      name: "Attack on Titan",
      description: [
        "When man-eating Titans first appeared 100 years ago, humans found",
        "safety behind massive walls that stopped the giants in their",
        "tracks. But the safety they have had for so long is threatened",
        "when a colossal Titan smashes through the barriers, causing a",
        "flood of the giants into what had been the human's safe zone.",
        "During the carnage that follows, soldier Eren Jaeger sees one of",
        "the creatures devour his mother, which leads him to vow that he",
        "will kill every Titan. He enlists some friends who survived to",
        "help him, and that group is humanity's last hope for avoiding",
        "extinction at the hands of the monsters.",
      ].join(" "),
    },
  ],
};


app.get('/api/:key', (message, response) => {
  const key = message.params.key;
  const content = data[key];

  if (content) {
    response.json(content);
  } else {
    response.status(404).json({ error: "Category not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
