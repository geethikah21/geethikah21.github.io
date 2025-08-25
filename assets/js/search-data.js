// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "news-texas-robotics-including-the-robocup-soccer-team-was-featured-on-the-austin-american-statesman",
          title: 'Texas Robotics (including the RoboCup soccer team) was featured on the Austin American...',
          description: "",
          section: "News",},{id: "news-i-graduated-from-ut-austin-with-a-bs-ms-in-computer-science",
          title: 'I graduated from UT Austin with a BS/MS in Computer Science!',
          description: "",
          section: "News",},{id: "projects-spot-simulator",
          title: 'Spot Simulator',
          description: "Summer Fellowship Project - Simulating Spot gRPC Protocols",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-spot-social-navigation",
          title: 'Spot Social Navigation',
          description: "Understanding Human Perceptions of Quadruped Robots",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-enabling-block-stacking-intuition-in-robots",
          title: 'Enabling Block-Stacking Intuition in Robots',
          description: "Robot Learning Course Project",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-hydration-monitoring-application",
          title: 'Hydration Monitoring Application',
          description: "Human Sensing/Signals Course Project",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-robocup-standard-platform-league",
          title: 'RoboCup Standard Platform League',
          description: "Soccer Robot League",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-replication-study-for-multi-agent-path-finding-algorithm",
          title: 'Replication Study for Multi-Agent Path Finding Algorithm',
          description: "Planning, Search, and Reasoning Under Uncertainty Course Project",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-a-search",
          title: 'A* Search',
          description: "Planning, Search, and Reasoning Under Uncertainty Course Assignment",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-hand-gesture-recognition",
          title: 'Hand Gesture Recognition',
          description: "Human Sensing/Signals Course Assignment",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-mfcc-feature-extraction-pipeline",
          title: 'MFCC Feature Extraction Pipeline',
          description: "Spoken Language Technologies Course Assignment",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%67%68%65%6D%6B%75%6D%61@%61%6E%64%72%65%77.%63%6D%75.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/geethikah21", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/geethika-hemkumar-87918b168", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
