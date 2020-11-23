//Import Images
import m1 from './images/m1.png'
import m2 from './images/m2.png'
import m3 from './images/m3.png'
import i1 from './images/i1.png'
import i2 from './images/i2.png'
import i3 from './images/i3.png'



export const ImageState = () => {
  return [
    {
      title: "Music-Player",
      mainImg: m2,
      secondaryImg: m1,
      thirdImg :m3,
      siteName: "Chill-Player",
      urlSite: "https://chill-player.netlify.app/" ,
      url: "/work/girl",
      awards: [
        {
          title: "Chill Music",
          description:
            "“Enjoy fresh music with attitude. Lower the background music and let your spirit lift up”",
        },
        {
          title: "Relaxing Beats",
          description:
            "“Music to share with your friends and colleagues, a collection of laid back beats with enormous impact.”",
        },
        {
          title: "Built With ReactJs",
          description:
            "“Build with love with ReactJs-Router-Styled Components-Framer Motion for a great UI experience”",
        },
      ],
    },
    {
      title: "Ignite Games",
      mainImg: i3,
      url: "/work/mother",
      secondaryImg: i2,
      thirdImg:i1,
      siteName: "Ignite-Games",
      urlSite: "https://ignitegames.netlify.app/" ,
      awards: [
        {
          title: "Search Your Loved Ones",
          description:
            "“We all have some favorite games to search and explore their history”",
        },
        {
          title: "Clean & Fast ",
          description:
            "“GameRaw provided us the database to explore some of our properties we want to include in our app”",
        },
        {
          title: "Popular-Upcoming-Searched",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "YouTube Clone",
      mainImg: m1,
      url: "/work/dog",
      secondaryImg: m1,
      awards: [
        {
          title: "Phivos in action",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "A Cat Lover",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay ",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
  ];
};
