export const menuItems = [
  {
    header: 'Home',
    link: '/',
  },
  {
    header: 'Our Services',
    link: '/our-services',
  },
  {
    header: 'Blogs',
    link: '/blogs',
  },

  {
    header: 'Insurance',
    childs: [
      {
        name: 'We Accept',
        link: '/insurance-we-accept',
      },
      {
        name: 'Good Vibes',
        link: '/insurance-goodVibes',
      },
      {
        name: 'Packages & Promotion',
        link: '/insurance-package-promotion',
      },
    ],
  },
  {
    header: 'Clinic & Centers',
    link: '/clinic-centers',
  },
  {
    header: 'Health Screening',
    link: '/check-up',
  },
  {
    header: 'Packages',
    link: '/packages',
  },
  {
    header: 'About',
    childs: [
      {
        name: 'Bumrungrad',
        link: '/about-bumrungrad',
      },
      {
        name: 'Vision & Mision',
        link: '/about-vision-and-misson',
      },
      {
        name: 'Factsheet',
        link: '/about-factsheet',
      },
      {
        name: 'Accreditation & Awards',
        link: '/about-accreditation',
      },
      {
        name: 'Bumrungrad & Foundation',
        link: '/about-foundation',
      },
    ],
  },
  {
    header: 'Contact',
    link: '/contact-us',
    // childs: [
    //   {
    //     name: 'Locate Us',
    //     link: '/contact_us',
    //   },
    //   {
    //     name: 'Hospital Information',
    //     link: '/',
    //   },
    //   {
    //     name: 'Direction & Taxi',
    //     link: '/',
    //   },
    //   {
    //     name: 'Ambulance',
    //     link: '/',
    //   },
    // ],
  },
]
