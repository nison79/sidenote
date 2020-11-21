//Import Images
import el1 from './images/el1.png'
import el2 from './images/el2.png'
import mother from './images/mother.png'
import mother2 from './images/mother2.png'
import dog from './images/dog.png'
import dog2 from './images/dog2.png'


export const ImageState = () => {
  return [
    {
      title: "Music-Player",
      mainImg: el1,
      secondaryImg: el2,
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
      mainImg: mother,
      url: "/work/mother",
      secondaryImg: mother2,
      awards: [
        {
          title: "Stella Ways",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "YouTube Clone",
      mainImg: dog,
      url: "/work/dog",
      secondaryImg: dog2,
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
