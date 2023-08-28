export const data = {
  projects: [
    // OMNIFOOD
    {
      id: "0.1",
      title: "Omnifood",
      description:
        "Responsive landing page for a fictional food delivery company. Built with modern HTML and CSS.",
      tech: ["HTML", "CSS"],
      link: [
        [
          {
            linkData: {
              label: "Github link",
              href: "https://github.com/Kitupala/Omnifood/",
              icon: "SiGithub",
            },
          },
        ],
        [
          {
            linkData: {
              label: "Netlify link",
              href: "https://omnifood-kimmo.netlify.app/",
              icon: "SiNetlify",
            },
          },
        ],
      ],
      image: "/images/omnifood.jpg",
    },

    // FORKIFY
    {
      id: "0.2",
      title: "Forkify",
      description:
        "Recipe application with API functionality. Built with vanilla JavaScript, HTML and CSS.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: [
        [
          {
            linkData: {
              label: "Github link",
              href: "https://github.com/Kitupala/forkify/",
              icon: "SiGithub",
            },
          },
        ],
        [
          {
            linkData: {
              label: "Netlify link",
              href: "https://forkify-kimmo.netlify.app/",
              icon: "SiNetlify",
            },
          },
        ],
      ],
      image: "/images/forkify.jpg",
    },

    // FAST REACT PIZZA CO.
    {
      id: "0.3",
      title: "Fast React Pizza Co.",
      description:
        "React app for ordering pizzas. App uses React Router and Redux Toolkit. Styling implemented using Tailwind CSS framework.",
      tech: ["HTML", "CSS", "JavaScript", "React"],
      link: [
        [
          {
            linkData: {
              label: "Github link",
              href: "https://github.com/Kitupala/fast-react-pizza/",
              icon: "SiGithub",
            },
          },
        ],
        [
          {
            linkData: {
              label: "Netlify link",
              href: "https://kitupala-fast-react-pizza.netlify.app/",
              icon: "SiNetlify",
            },
          },
        ],
      ],
      image: "/images/fastreactpizza.jpg",
    },

    // TODAY I LEARNED
    {
      id: "0.4",
      title: "Today I Learned",
      description:
        "Small app for listing facts. Implemented with HTML, CSS, JavaScript, React and Supabase.",
      tech: ["HTML", "CSS", "JavaScript", "React", "Supabase"],
      link: [
        [
          {
            linkData: {
              label: "Github link",
              href: "https://github.com/Kitupala/today-i-learned/",
              icon: "SiGithub",
            },
          },
        ],
        [
          {
            linkData: {
              label: "Netlify link",
              href: "https://today-i-learned-kimmo.netlify.app/",
              icon: "SiNetlify",
            },
          },
        ],
      ],
      image: "/images/todayilearned.jpg",
    },

    // ADDRESSBOOK
    {
      id: "0.5",
      title: "AddressBook",
      description:
        "My own React practice project. User can basically add, search, sort, edit and delete contacts. App uses Context API for state management.",
      tech: ["HTML", "CSS", "JavaScript", "React"],
      link: [
        [
          {
            linkData: {
              label: "Github link",
              href: "https://github.com/Kitupala/addressbook/",
              icon: "SiGithub",
            },
          },
        ],
        [
          {
            linkData: {
              label: "Netlify link",
              href: "https://kitupala-addressbook.netlify.app/",
              icon: "SiNetlify",
            },
          },
        ],
      ],
      image: "/images/addressbook.jpg",
    },

    // THE WILD OASIS
    {
      id: "0.6",
      title: "The Wild Oasis",
      description:
        "The biggest and most advanced React project so far. Internal booking SPA for the hotel company. Including React Router, React Query, React Hook Form, Context Api and styled-components, hosted by Supabase.",
      tech: ["HTML", "CSS", "JavaScript", "React", "Supabase"],
      link: [
        [
          {
            linkData: {
              label: "Github link",
              href: "https://github.com/Kitupala/the-wild-oasis/",
              icon: "SiGithub",
            },
          },
        ],
        [
          {
            linkData: {
              label: "Vercel link",
              href: "https://kitupala-the-wild-oasis.vercel.app/",
              icon: "SiVercel",
            },
          },
        ],
      ],
      image: "/images/wildoasis.jpg",
    },

    // KIMMO.IO V2.1
    {
      id: "0.7",
      title: "kimmo.io v2.1",
      description:
        "New site is almost finished! Some TLC and refactoring needed here and there. Next step planning on CTA and light mode...",
      tech: ["HTML", "CSS", "JavaScript", "React"],
      link: [
        [
          {
            linkData: {
              label: "Github link",
              href: "https://github.com/Kitupala/kimmo-io-v2/",
              icon: "SiGithub",
            },
          },
        ],
      ],
      image: "/images/kimmo-io-v2.png",
    },

    // kimmo.io v1.0
    // {
    //   id: "0.8",
    //   title: "kimmo.io v1.0",
    //   description:
    //     "Move along, there is nothing to see here!;) First version of this website from six months ago. Featured as a reference of my learning curve.",
    //   tech: ["HTML", "CSS", "JavaScript"],
    //   link: [
    //     [
    //       {
    //         linkData: {
    //           label: "Github link",
    //           href: "https://github.com/Kitupala/kimmo-io/",
    //           icon: "SiGithub",
    //         },
    //       },
    //     ],
    //     [
    //       {
    //         linkData: {
    //           label: "Netlify link",
    //           href: "https://kimmo-io.netlify.app/",
    //           icon: "SiNetlify",
    //         },
    //       },
    //     ],
    //   ],
    //   image: "/images/kimmoio.jpg",
    // },
  ],

  studies: [
    {
      id: "1.1",
      title: "The Ultimate React Course 2023: React, Redux & More",
      description:
        "Master modern React from beginner to advanced! Context API, React Query, Redux Toolkit, Tailwind, advanced patterns.",
      tech: ["HTML", "CSS", "JavaScript", "React"],
      platform: "Udemy",
      link: "https://www.udemy.com/course/the-ultimate-react-course/",
      length: "67 total hours",
      started: "June",
      completed: "Aug 2023",
      certificate: "/images/urc-cert.jpeg",
    },
    {
      id: "1.2",
      title: "Advanced CSS and Sass: Flexbox, Grid, Animations and More!",
      description:
        "The most advanced and modern CSS course on the internet: master flexbox, CSS Grid, responsive design, and so much more.",
      tech: ["HTML", "CSS"],
      platform: "Udemy",
      link: "https://www.udemy.com/course/advanced-css-and-sass/",
      length: "28 total hours",
      started: "Apr",
      completed: "May 2023",
      certificate: "/images/sass-cert.jpg",
    },
    {
      id: "1.3",
      title: "Complete Web & Mobile Designer in 2023: UI/UX, Figma + more",
      description:
        "Become a Designer in 2023! Master mobile and web design, User Interface + User Experience (UI/UX Design), HTML and CSS.",
      tech: ["HTML", "CSS", "Figma"],
      platform: "Udemy",
      link: "https://www.udemy.com/course/complete-web-designer-mobile-designer-zero-to-mastery/",
      length: "28 total hours",
      started: "Mar",
      completed: "Apr 2023",
      certificate: "/images/ui-ux-cert.jpg",
    },
    {
      id: "1.4",
      title: "Build Responsive Real-World Websites with HTML and CSS",
      description:
        "Learn modern HTML5, CSS3 and web design by building a stunning website for your portfolio! Includes flexbox and CSS Grid.",
      tech: ["HTML", "CSS"],
      platform: "Udemy",
      link: "https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/",
      length: "37.5 total hours",
      started: "Jan",
      completed: "Feb 2023",
      certificate: "/images/css-cert.jpg",
    },
    {
      id: "1.5",
      title: "Crash Course: Build a Full-Stack Web App in a Weekend!",
      description:
        "A quick, fun, and hands-on introduction to web development. Build a complete app with HTML, CSS, JavaScript, and React!",
      tech: ["HTML", "CSS", "JavaScript", "React"],
      platform: "Udemy",
      link: "https://www.udemy.com/course/full-stack-crash-course/",
      length: "12.5 total hours",
      started: "Dec 2022",
      completed: "Jan 2023",
      certificate: "/images/tid-cert.jpg",
    },
    {
      id: "1.6",
      title: "The Complete JavaScript Course 2023: From Zero to Expert!",
      description:
        "The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory. Many courses in one!",
      tech: ["HTML", "CSS", "JavaScript"],
      platform: "Udemy",
      link: "https://www.udemy.com/course/the-complete-javascript-course/",
      length: "68.5 total hours",
      started: "Nov 2022",
      completed: "Jan 2023",
      certificate: "/images/js-cert.jpg",
    },
    {
      id: "1.7",
      title: "Programming Fundamentals - AMKoodari",
      description:
        "AMKoodari is a training programme for everyone who would like to study a new profession, update their existing skill sets, change careers or otherwise learn new skills through their innate creativity.",
      tech: ["HTML", "CSS", "JavaScript"],
      platform: "XAMK",
      link: "https://amkoodari.fi/en?gclid=CjwKCAjwtfqKBhBoEiwAZuesiBOLeINMi9P8-m0iWoYfI8pC5vpO0dI_6_l1WwdGSUvy7CAKUEsHtRoCNVAQAvD_BwE",
      length: "7 credits",
      started: "Aug",
      completed: "Dec 2020",
      certificate: "/images/xamk-cert.png",
    },
  ],

  abilities: [
    {
      tech: [
        { id: "2.1", title: "HTML5", grade: 75 },
        { id: "2.2", title: "CSS3", grade: 85 },
        { id: "2.3", title: "Tailwind CSS", grade: 75 },
        { id: "2.4", title: "JavaScript", grade: 60 },
        { id: "2.5", title: "React", grade: 50 },
        { id: "2.6", title: "GitHub", grade: 50 },
        { id: "2.7", title: "Figma", grade: 40 },
        // { id: "2.8", title: "Apple / macOS", grade: 85 },
      ],
      soft: [
        {
          id: "3.1",
          description:
            "A long career as a professional musician has trained me to be a team player who quickly adopts new tasks and adapts to changing situations. However, I'm basically a systematic introvert who has lots of patience delve into things and for problem solving. I have a great passion for learning how to build things with code. Additionally, I'm interested in graphic design and making intuitive UI/UX experiences. Here is a summary of most important skills I've gained so far. ",
        },
        {
          id: "3.2",
          roster: [
            "creativity",
            "detail-oriented",
            "problem-solving",
            "patience",
            "motivation",
            "research skills",
            "teamwork",
            "adaptability",
          ],
        },
      ],
    },
  ],
};
