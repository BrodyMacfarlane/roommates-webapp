export type ImageOptions = {
  direction: 'vertical' | 'horizontal'
  src: string
}

export type ImageCollectionOptions = {
  description?: string
  images: ImageOptions[]
}

export type TextOptions = {
  text: string
  animation?: 'stagger'
}

export type SlideshowImageContent = ImageCollectionOptions // Filepath or ImageOptions object
export type SlideshowTextContent = string | TextOptions // Text or TextOptions object

export type SlideshowCollection = {
  type: 'text' | 'imageCollection'
  content: SlideshowTextContent[] | SlideshowImageContent[]
  title?: string
}
export type Slideshow = SlideshowCollection[]

export const slideshow: Slideshow = [
  {
    type: 'text',
    content: [
      '',
      'Hi baber.',
      'I got overwhelmed with ideas and attempted a few iterations of this kind of thing lol.',
      'This format seemed like a happy ✨marriage✨ (hehe) between effort and satisfaction.',
      "I didn't fit in anywhere close to all of the good moments, but I wanted to make sure I fit in most of the pics we have together from this past year.",
      'I hope you enjoy.',
      '',
      '',
      'Say.. do you remember what happened Last Christmas?',
      '(Fortunately, we were both spared from the same fate as George Michael lol #RIPGEORGE 💔🕺)',
    ],
  },
  {
    type: 'imageCollection',
    title: 'Christmas Day 2022',
    content: [
      {
        description: 'Facetiming ur mom.',
        images: [
          {
            direction: 'vertical',
            src: '2022-12-25',
          },
        ],
      },
    ],
  },
  {
    type: 'imageCollection',
    title: 'January 2023',
    content: [
      {
        description: 'Point Defiance & Gig Harbor',
        images: [
          {
            direction: 'horizontal',
            src: '2023-1-1',
          },
          {
            direction: 'vertical',
            src: '2023-1-1 2',
          },
          {
            direction: 'vertical',
            src: '2023-1-1 3',
          },
        ],
      },
      {
        description: 'Skiing @ Snoqualmie',
        images: [
          {
            direction: 'vertical',
            src: '2023-1-3',
          },
        ],
      },
      {
        description: 'Some Silly Shit',
        images: [
          {
            direction: 'horizontal',
            src: '2023-1-13',
          },
          {
            direction: 'vertical',
            src: '2023-1-16',
          },
        ],
      },
      {
        description: 'Sexiest Drummer',
        images: [
          {
            direction: 'vertical',
            src: '2023-1-21',
          },
        ],
      },
      {
        description: 'Cute Moments.. Just before..',
        images: [
          {
            direction: 'vertical',
            src: '2023-1-25',
          },
          {
            direction: 'vertical',
            src: '2023-1-25 2',
          },
          {
            direction: 'vertical',
            src: '2023-1-25 3',
          },
        ],
      },
      {
        description: 'The Quiggo Attack',
        images: [
          {
            direction: 'vertical',
            src: '2023-1-25 4',
          },
          {
            direction: 'vertical',
            src: '2023-1-25 5',
          },
          {
            direction: 'vertical',
            src: '2023-1-25 6',
          },
        ],
      },
      {
        description: 'U & I',
        images: [
          {
            direction: 'vertical',
            src: '2023-1-28',
          },
          {
            direction: 'vertical',
            src: '2023-1-29',
          },
        ],
      },
      {
        description: 'Wick Me Harder & GourmanDeezNutz',
        images: [
          {
            direction: 'vertical',
            src: '2023-1-31',
          },
          {
            direction: 'vertical',
            src: '2023-1-31 2',
          },
        ],
      },
    ],
  },
  {
    type: 'imageCollection',
    title: 'February 2023',
    content: [
      {
        description: 'Swaggy Ski Day @ Deer Valley',
        images: [
          {
            direction: 'vertical',
            src: '2023-2-11',
          },
        ],
      },
      {
        description: 'Just 2 devout mormons... Holy fuck, you are hot.',
        images: [
          {
            direction: 'vertical',
            src: '2023-2-18',
          },
          {
            direction: 'vertical',
            src: '2023-2-18 2',
          },
        ],
      },
      {
        description: 'Overrated Mexican food.. lol RIP 🪦',
        images: [
          {
            direction: 'horizontal',
            src: '2023-2-23',
          },
        ],
      },
    ],
  },
  {
    type: 'imageCollection',
    title: 'March 2023',
    content: [
      {
        description: 'Baby face.. lol + Some dank snuggles',
        images: [
          {
            direction: 'horizontal',
            src: '2023-3-3',
          },
          {
            direction: 'horizontal',
            src: '2023-3-9',
          },
        ],
      },
      {
        description:
          "Hotter than t-swizzle, so I bought you your favorite engagement ring you've ever had",
        images: [
          {
            direction: 'horizontal',
            src: '2023-3-17',
          },
          {
            direction: 'vertical',
            src: '2023-3-31',
          },
        ],
      },
    ],
  },

  {
    type: 'imageCollection',
    title: 'April 2023',
    content: [
      {
        description: 'I love spending time with u, cutie.',
        images: [
          {
            direction: 'vertical',
            src: '2023-4-8',
          },
          {
            direction: 'vertical',
            src: '2023-4-30',
          },
        ],
      },
    ],
  },

  {
    type: 'imageCollection',
    title: 'May 2023',
    content: [
      {
        description: 'Best person to sit outside and soak in the moment with.',
        images: [
          {
            direction: 'horizontal',
            src: '2023-5-1',
          },
        ],
      },
      {
        description:
          'Best person to get overstimulated with in a big ass auditorium.',
        images: [
          {
            direction: 'horizontal',
            src: '2023-5-5',
          },
        ],
      },
      {
        description:
          'You give the best bleps and the best kisses. (Quiggo agrees.)',
        images: [
          {
            direction: 'vertical',
            src: '2023-5-7',
          },
          {
            direction: 'vertical',
            src: '2023-5-12',
          },
          {
            direction: 'vertical',
            src: '2023-5-14',
          },
        ],
      },
      {
        description:
          'Some insanely good mems and vibey nights going to the old ranch easement & the snowcone shop with you.',
        images: [
          {
            direction: 'vertical',
            src: '2023-5-20',
          },
          {
            direction: 'vertical',
            src: '2023-5-27',
          },
        ],
      },
      {
        description:
          'Best 🍑 EVER!!!! but fr, moving in and living with you has been one of the best decisions of my life.',
        images: [
          {
            direction: 'vertical',
            src: '2023-5-28',
          },
          {
            direction: 'vertical',
            src: '2023-5-30',
          },
        ],
      },
    ],
  },

  {
    type: 'imageCollection',
    title: 'June 2023',
    content: [
      {
        description:
          'June had some goodies. First month of living together. ❤️',
        images: [
          {
            direction: 'vertical',
            src: '2023-6-3',
          },
          {
            direction: 'vertical',
            src: '2023-6-11',
          },
          {
            direction: 'vertical',
            src: '2023-6-17',
          },
        ],
      },
      {
        description:
          'Vibey hike by the U that you showed me. 🥰 I remember sitting at the rock "living room" looking back down in the valley towards our apartment.',
        images: [
          {
            direction: 'vertical',
            src: '2023-6-24',
          },
          {
            direction: 'vertical',
            src: '2023-6-24 2',
          },
        ],
      },
    ],
  },

  {
    type: 'imageCollection',
    title: 'July 2023',
    content: [
      {
        description: 'Viberzzzzzz!',
        images: [
          {
            direction: 'vertical',
            src: '2023-7-1',
          },
        ],
      },
      {
        description: 'Belly rub queen.',
        images: [
          {
            direction: 'vertical',
            src: '2023-7-18',
          },
        ],
      },
      {
        description:
          'Sun Valley was one of my fav trips ever with u. ❤️ A lot more pics of each of us on this trip on my phone.',
        images: [
          {
            direction: 'vertical',
            src: '2023-7-29',
          },
          {
            direction: 'vertical',
            src: '2023-7-30',
          },
        ],
      },
    ],
  },

  {
    type: 'imageCollection',
    title: 'August 2023',
    content: [
      {
        description: 'Some of my fav pics of us of all-time out in CO. :)',
        images: [
          {
            direction: 'vertical',
            src: '2023-8-8',
          },
          {
            direction: 'vertical',
            src: '2023-8-8 2',
          },
          {
            direction: 'vertical',
            src: '2023-8-8 3',
          },
        ],
      },
      {
        description: `I love you and Quig's "quiglationship".`,
        images: [
          {
            direction: 'vertical',
            src: '2023-8-22',
          },
        ],
      },
      {
        description: 'More belly rub queen lolol.',
        images: [
          {
            direction: 'vertical',
            src: '2023-8-31',
          },
        ],
      },
    ],
  },

  {
    type: 'imageCollection',
    title: 'September 2023',
    content: [
      {
        description: 'Everyone and everything loves u, boo. ❤️',
        images: [
          {
            direction: 'vertical',
            src: '2023-9-3',
          },
          {
            direction: 'vertical',
            src: '2023-9-3 2',
          },
        ],
      },
      {
        description: 'I love our chill BMR days. :)',
        images: [
          {
            direction: 'vertical',
            src: '2023-9-10',
          },
          {
            direction: 'vertical',
            src: '2023-9-10 2',
          },
        ],
      },
      {
        description: '🥰',
        images: [
          {
            direction: 'vertical',
            src: '2023-9-13',
          },
        ],
      },
      {
        description: 'Sweetest & best dog milf. :)',
        images: [
          {
            direction: 'vertical',
            src: '2023-9-17',
          },
          {
            direction: 'vertical',
            src: '2023-9-21',
          },
        ],
      },
      {
        description: 'Beauty of day with the prettiest gorl. 😘',
        images: [
          {
            direction: 'vertical',
            src: '2023-9-24',
          },
          {
            direction: 'vertical',
            src: '2023-9-24 2',
          },
        ],
      },
      {
        description: 'Beauty of a day with the prettiest gorl. 😘',
        images: [
          {
            direction: 'horizontal',
            src: '2023-9-24 3',
          },
          {
            direction: 'horizontal',
            src: '2023-9-24 4',
          },
          {
            direction: 'horizontal',
            src: '2023-9-24 5',
          },
        ],
      },
      {
        description: 'Another family pic, hehe. :)',
        images: [
          {
            direction: 'vertical',
            src: '2023-9-29',
          },
        ],
      },
      {
        description: 'Cutiest cuddly gorls.',
        images: [
          {
            direction: 'vertical',
            src: '2023-9-30',
          },
          {
            direction: 'vertical',
            src: '2023-10-1',
          },
        ],
      },
    ],
  },

  {
    type: 'imageCollection',
    title: 'October 2023',
    content: [
      {
        description: 'Kithing booth. 😘',
        images: [
          {
            direction: 'vertical',
            src: '2023-10-7',
          },
        ],
      },
      {
        description: `I love spending time with you & my fam & the doggos. ❤️`,
        images: [
          {
            direction: 'horizontal',
            src: '2023-10-8',
          },
          {
            direction: 'horizontal',
            src: '2023-10-8 2',
          },
          {
            direction: 'horizontal',
            src: '2023-10-8 3',
          },
        ],
      },
      {
        description: 'YASSS even more belly rub queen lolol.',
        images: [
          {
            direction: 'vertical',
            src: '2023-10-14',
          },
        ],
      },
      {
        description: 'Just 2 sexy ass mfs.',
        images: [
          {
            direction: 'horizontal',
            src: '2023-10-17',
          },
        ],
      },
      {
        description: 'Nona date was so vibey.',
        images: [
          {
            direction: 'vertical',
            src: '2023-10-28',
          },
          {
            direction: 'vertical',
            src: '2023-10-28 2',
          },
        ],
      },
      {
        description: '😘😘😘😘😘',
        images: [
          {
            direction: 'vertical',
            src: '2023-10-29',
          },
        ],
      },
    ],
  },

  {
    type: 'imageCollection',
    title: 'November 2023',
    content: [
      {
        description: 'Xanny Quiggo, rofl.',
        images: [
          {
            direction: 'vertical',
            src: '2023-11-12',
          },
        ],
      },
      {
        description: `I love spending time with you & your fam up in Washington. ❤️`,
        images: [
          {
            direction: 'vertical',
            src: '2023-11-17',
          },
        ],
      },
      {
        description: "OMG it's the 1969!!!!11!@@",
        images: [
          {
            direction: 'vertical',
            src: '2023-11-26',
          },
        ],
      },
    ],
  },

  {
    type: 'imageCollection',
    title: 'December 2023',
    content: [
      {
        description: 'Some dank times down in southern Utah.',
        images: [
          {
            direction: 'vertical',
            src: '2023-12-8',
          },
          {
            direction: 'vertical',
            src: '2023-12-8 2',
          },
        ],
      },
      {
        description: '& all the dank times cuddling cozily at home.  🥰❤️',
        images: [
          {
            direction: 'vertical',
            src: '2023-12-10',
          },
          {
            direction: 'vertical',
            src: '2023-12-18',
          },
          {
            direction: 'vertical',
            src: '2023-12-19',
          },
        ],
      },
      {
        description: 'No caption needed #dopplebangers',
        images: [
          {
            direction: 'vertical',
            src: '2023-12-26',
          },
        ],
      },
      {
        description:
          'You are seriously the best cuddle buddy. + bonus quiggo pic hehe ❤️',
        images: [
          {
            direction: 'vertical',
            src: '2023-12-28',
          },
          {
            direction: 'vertical',
            src: '2023-12-29 2',
          },
          {
            direction: 'vertical',
            src: '2023-12-30',
          },
        ],
      },
      {
        description: 'HOLYYYY, SEXY HEATHEN BABE 😍😍😍',
        images: [
          {
            direction: 'vertical',
            src: '2023-12-29',
          },
        ],
      },
    ],
  },

  {
    type: 'text',
    content: [
      "Well, that's it for the slideshow.  There were a lot of dank moments left out, and some that went undocumented, but I'm just sosososo grateful for you cutie.",
      "I feel so lucky every day to be together, and I hope we're always the bestest besties.",
      "You make me so happy, and I love our life that we've created together. ❤️",
      'Feel free to come back any time. I Love you 5ever sm. ❤️',
    ],
  },
]
