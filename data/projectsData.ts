interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  // {
  //   title: 'A Search Engine',
  //   description: `What if you could look up any information in the world? Webpages, images, videos
  //   and more. Google has many features to help you find exactly what you're looking
  //   for.`,
  //   imgSrc: '/static/images/google.png',
  //   href: 'https://www.google.com',
  // },
  // {
  //   title: 'The Time Machine',
  //   description: `Imagine being able to travel back in time or to the future. Simple turn the knob
  //   to the desired date and press "Go". No more worrying about lost keys or
  //   forgotten headphones with this simple yet affordable solution.`,
  //   imgSrc: '/static/images/time-machine.jpg',
  //   href: '/blog/the-time-machine',
  // },
  {
    title: 'Projects are yet to be added',
    description: `Website under construction. Do not click learn more.`,
    imgSrc: '/static/images/doge-removebg.png',
    href: 'https://youtu.be/xvFZjo5PgG0?si=oOTwrE-Px4219JTp',
  },
]

export default projectsData
