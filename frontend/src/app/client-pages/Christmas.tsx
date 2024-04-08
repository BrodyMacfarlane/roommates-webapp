'use client'

import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion'
import localFont from "next/font/local"

import NextImage from 'next/image'

import { SpeakerIcon, SpeakerMuteIcon } from '@/components/icons/speaker'
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react'
import {
  christmasTextContainer,
  christmasText,
  enterFromRightSide,
  enterFromSideContainer,
  singleChristmasImage,
  christmasImageContainer,
} from '@/util/animation'
import { Button } from '@/components/animated/button'
import { HiPlay } from 'react-icons/hi'
import { Separator } from '@/components/ui/separator'
import moment from 'moment'
import { cn } from '@/lib/utils'
import {
  ImageCollectionOptions,
  ImageOptions,
  SlideshowCollection,
  SlideshowImageContent,
  SlideshowTextContent,
  TextOptions,
  slideshow,
} from '@/data/christmas-slideshow'

const polaroidBgColors = [
  'bg-[#fdf9f1]',
  'bg-[#f1fcf6]',
  'bg-[#e2f8fe]',
  'bg-[#fceef5]',
]

const handwriting = localFont({
  src: [
    {
      path: '../../assets/christmas/fonts/handwriting.ttf',
      weight: '400',
    },
  ],
  variable: '--font-handwriting',
})

const stayOnTextDuration = 1 * 1000
const stayOnImageDuration = 4 * 1000
const speedPerWord = 0.4
const speedPerImage = 4 * 1000

const baseAudioDir = 'christmas/audio'
const audioFiles = ['just because.mp3', 'lover.mp3', 'only.mp3']

const imagePreloadArray: string[][] = slideshow.map((collectionOrText) => {
  if (collectionOrText.type === 'imageCollection') {
    let flatArr = []
    const deepArr = (collectionOrText.content as ImageCollectionOptions[]).map(
      (imageContent) => imageContent.images.map((image) => image.src)
    )
    for (const imgArr of deepArr) {
      for (const img of imgArr) {
        flatArr.push(img)
      }
    }
    return flatArr
  } else return collectionOrText.content.map((v) => '')
})

const PreloadedImages = ({
  slideIndex,
  setFirstThreeImagesOnNextSlideArePreloaded,
}: {
  slideIndex: number
  setFirstThreeImagesOnNextSlideArePreloaded: Dispatch<SetStateAction<boolean>>
}) => {
  const imagesToPreload = imagePreloadArray[slideIndex + 1]
  const [loadedImages, setLoadedImages] = useState([false, false, false])

  useEffect(() => {
    if (imagesToPreload)
      setLoadedImages(
        imagesToPreload.slice(0, 3).map((imgSrc) => (imgSrc ? false : true))
      )
  }, [imagesToPreload])

  useEffect(() => {
    if (loadedImages.every((v) => v === true)) {
      setFirstThreeImagesOnNextSlideArePreloaded(true)
    }
  }, [loadedImages, setFirstThreeImagesOnNextSlideArePreloaded])

  function toggleImageLoaded(i: number) {
    if (i <= 2) {
      setLoadedImages((prev) => {
        let n = [...prev]
        n[i] = true
        return n
      })
    }
  }

  if (imagesToPreload)
    return (
      <div className="relative hidden">
        {imagesToPreload.map((imgSrc, i) => {
          if (imgSrc) {
            return (
              <NextImage
                onLoad={() => toggleImageLoaded(i)}
                alt=""
                key={`preload-${imgSrc}`}
                src={`/christmas/img/${imgSrc}.jpeg`}
                fill
                sizes="(min-width: 0px) 40svh, 80px"
                priority={i <= 5}
              />
            )
          }
        })}
      </div>
    )

  return <></>
}

const toggleAudioIsMute = ({
  setAudioIsPaused,
  setAudioIsMute,
}: {
  setAudioIsPaused: Dispatch<SetStateAction<boolean>>
  setAudioIsMute: Dispatch<SetStateAction<boolean>>
}) => {
  setAudioIsPaused(false)
  setAudioIsMute((v) => !v)
}

const AudioButton = ({
  setAudioIsPaused,
  setAudioIsMute,
  audioIsMute,
}: {
  setAudioIsPaused: Dispatch<SetStateAction<boolean>>
  setAudioIsMute: Dispatch<SetStateAction<boolean>>
  audioIsMute: boolean
}) => {
  const handleClick = () =>
    toggleAudioIsMute({ setAudioIsPaused, setAudioIsMute })
  const icon = audioIsMute ? <SpeakerMuteIcon /> : <SpeakerIcon />

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{
        scale: 1.04,
        transition: {
          duration: 0.1,
        },
      }}
      whileTap={{
        scale: 1,
        transition: {
          duration: 0.1,
        },
      }}
      className="fixed bottom-6 right-6 md:bottom-6 md:right-6 flex justify-center items-center shadow-md bg-primary text-white rounded-full"
    >
      <button className="w-full h-full p-4" onClick={handleClick}>
        {icon}
      </button>
    </motion.div>
  )
}

const ImageCard = ({
  image,
  variant,
  animationProps,
  bgColor,
  position,
}: {
  image: ImageOptions
  variant: 'single' | 'double' | 'triple'
  animationProps?: HTMLMotionProps<'div'>
  bgColor?: string
  position?: { x: number | string; y: number | string }
}) => {
  return (
    <motion.div
      className="absolute w-full h-full flex justify-center items-center"
      style={{
        top: position ? position.y : 0,
        left: position ? position.x : 0,
      }}
      {...animationProps}
    >
      <div
        className={cn(
          'shadow-md rounded-xl',
          bgColor ? bgColor : polaroidBgColors[0]
        )}
      >
        <div
          className={cn(
            'relative',
            image.direction === 'vertical'
              ? variant === 'single'
                ? 'w-[40svh] h-[60svh]'
                : 'w-[30svh] h-[45svh] md:w-[40svh] md:h-[60svh]'
              : 'w-[40svh] h-[30svh] md:w-[60svh] md:h-[40svh]'
          )}
        >
          <NextImage
            src={`/christmas/img/${image.src}.jpeg`}
            alt=""
            fill
            className={cn(
              'w-full h-full object-contain',
              variant === 'single' ? 'px-4 pt-8' : 'px-2 pt-4'
            )}
            sizes="(min-width: 0px) 40svh, 80px"
            priority
          />
        </div>
        <div className="py-2 md:py-6 text-center">
          <p>{moment(image.src, 'YYYY-MM-DD').format('MMMM DD, YYYY')}</p>
        </div>
      </div>
    </motion.div>
  )
}

const SingleImage = ({ images }: { images: ImageOptions[] }) => {
  const animationProps: HTMLMotionProps<'div'> = {
    variants: singleChristmasImage,
    transition: {
      duration: 1.2,
    },
  }

  const randomColorIndex = Math.floor(Math.random() * polaroidBgColors.length)
  const bgColor = polaroidBgColors[randomColorIndex]

  return (
    <motion.div
      className="relative w-full h-full"
      initial="initial"
      animate="animate"
      exit={{ x: -1500 }}
      transition={{ duration: 0.75 }}
    >
      <ImageCard
        key={images[0].src}
        image={images[0]}
        variant="single"
        animationProps={animationProps}
        bgColor={bgColor}
      />
    </motion.div>
  )
}

const DoubleImage = ({ images }: { images: ImageOptions[] }) => {
  const animationProps: HTMLMotionProps<'div'> = {
    variants: singleChristmasImage,
    transition: {
      duration: 1.2,
    },
  }

  const randomColorIndex = Math.floor(Math.random() * polaroidBgColors.length)
  const bgColor = polaroidBgColors[randomColorIndex]
  const bgColor2 =
    polaroidBgColors[(randomColorIndex + 1) % polaroidBgColors.length]

  return (
    <motion.div
      className="relative w-full h-full"
      initial="initial"
      animate="animate"
      exit={{ x: -1500 }}
      transition={{ duration: 0.75 }}
      variants={christmasImageContainer({})}
    >
      <ImageCard
        position={{ x: '-15vw', y: -100 }}
        key={images[0].src}
        image={images[0]}
        variant="double"
        bgColor={bgColor}
        animationProps={animationProps}
      />
      <ImageCard
        position={{ x: '15vw', y: 75 }}
        key={images[1].src}
        image={images[1]}
        variant="double"
        bgColor={bgColor2}
        animationProps={animationProps}
      />
    </motion.div>
  )
}

const TripleImage = ({ images }: { images: ImageOptions[] }) => {
  const animationProps: HTMLMotionProps<'div'> = {
    variants: singleChristmasImage,
    transition: {
      duration: 1.2,
    },
  }

  const randomColorIndex = Math.floor(Math.random() * polaroidBgColors.length)
  const bgColor = polaroidBgColors[randomColorIndex]
  const bgColor2 =
    polaroidBgColors[(randomColorIndex + 1) % polaroidBgColors.length]
  const bgColor3 =
    polaroidBgColors[(randomColorIndex + 2) % polaroidBgColors.length]
  return (
    <motion.div
      className="relative w-full h-full"
      initial="initial"
      animate="animate"
      exit={{ x: -1500 }}
      transition={{ duration: 0.75 }}
      variants={christmasImageContainer({})}
    >
      <ImageCard
        position={{ x: 0, y: -150 }}
        key={images[0].src}
        image={images[0]}
        variant="triple"
        bgColor={bgColor}
        animationProps={animationProps}
      />
      <ImageCard
        position={{ x: '-20vw', y: 0 }}
        key={images[1].src}
        image={images[1]}
        variant="triple"
        bgColor={bgColor2}
        animationProps={animationProps}
      />
      <ImageCard
        position={{ x: '20vw', y: 100 }}
        key={images[2].src}
        image={images[2]}
        variant="triple"
        bgColor={bgColor3}
        animationProps={animationProps}
      />
    </motion.div>
  )
}

const ImagesHandler = ({ images }: { images: ImageOptions[] }) => {
  switch (images.length) {
    case 1:
      return (
        <SingleImage
          key={images.map((img) => img.src).join('')}
          images={images}
        />
      )
    case 2:
      return (
        <DoubleImage
          key={images.map((img) => img.src).join('')}
          images={images}
        />
      )
    case 3:
      return (
        <TripleImage
          key={images.map((img) => img.src).join('')}
          images={images}
        />
      )
    default:
      return <></>
  }
}

const ImageSlide = ({
  content,
  nextSlide,
  title,
}: {
  content: SlideshowImageContent[]
  nextSlide: () => void
  title: SlideshowCollection['title']
}) => {
  const [contentIndex, setContentIndex] = useState<number>(0)

  useEffect(() => {
    const contentDuration = content[contentIndex].images.length * speedPerImage

    const fullDuration = contentDuration + stayOnImageDuration

    const contentLength = content.length
    const timer = setTimeout(() => {
      if (contentIndex + 1 < contentLength) setContentIndex((i) => i + 1)
      else nextSlide()
    }, fullDuration)

    return () => clearTimeout(timer)
  }, [contentIndex])

  return (
    <motion.div
      className="absolute w-[100vw] h-[100svh] overflow-hidden"
      transition={{ duration: 0.75 }}
      exit={{ x: -1500 }}
    >
      <AnimatePresence>
        <motion.div
          key={title}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed z-10 bg-background/50 w-full flex flex-col justify-center items-center text-center p-2 top-0 left-0"
        >
          <motion.h4
            initial="hidden"
            animate="visible"
            variants={christmasText}
            transition={{ delay: 1 }}
          >
            {title}
          </motion.h4>
          <motion.p
            key={content[contentIndex].description}
            initial="hidden"
            animate="visible"
            variants={christmasText}
            transition={{ delay: 2, duration: 0.5 }}
          >
            {content[contentIndex].description}
          </motion.p>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        <ImagesHandler
          key={content[contentIndex].images.map((img) => img.src).join(',')}
          images={content[contentIndex].images}
        />
      </AnimatePresence>
    </motion.div>
  )
}

function isTextOptions(content: SlideshowTextContent): content is TextOptions {
  return (
    typeof content === 'object' && 'animation' in content && 'text' in content
  )
}

const TextSlide = ({
  content,
  nextSlide,
}: {
  content: SlideshowTextContent[]
  nextSlide: () => void
}) => {
  const [contentIndex, setContentIndex] = useState<number>(0)

  useEffect(() => {
    const contentDuration =
      typeof content[contentIndex] === 'string'
        ? (content[contentIndex] as string).split(' ').length *
          (speedPerWord * 1000)
        : 2500

    const fullDuration =
      content[contentIndex] === 'Hi baber.'
        ? 5000
        : contentDuration + stayOnTextDuration

    const contentLength = content.length
    const timer = setTimeout(() => {
      if (contentIndex + 1 < contentLength) setContentIndex((i) => i + 1)
      else nextSlide()
    }, fullDuration)

    return () => clearTimeout(timer)
  }, [contentIndex])

  if (typeof content[contentIndex] === 'string') {
    return (
      <div
        key={content[contentIndex] as string}
        className="text-center max-w-lg flex flex-wrap justify-center items-center gap-3 container"
      >
        <motion.span
          initial="hidden"
          animate="visible"
          variants={christmasText}
        >
          {content[contentIndex] as string}
        </motion.span>
      </div>
    )
  } else if (isTextOptions(content[contentIndex])) {
    const textOptions = content[contentIndex] as TextOptions
    return (
      <motion.div
        className="text-center max-w-lg flex flex-wrap justify-center items-center gap-3 container"
        initial="hidden"
        animate="visible"
        variants={christmasTextContainer({ stagger: speedPerWord, delay: 0 })}
      >
        {textOptions.text.split(' ').map((word, i) => {
          return (
            <motion.span variants={christmasText} key={`${word}-${i}`}>
              {word}
            </motion.span>
          )
        })}
      </motion.div>
    )
  }
}

const SlideComponent = ({
  type,
  content,
  nextSlide,
  title,
}: {
  type: string
  content: SlideshowTextContent[] | SlideshowImageContent[]
  nextSlide: () => void
  title: SlideshowCollection['title']
}) => {
  switch (type) {
    case 'text':
      return (
        <TextSlide
          content={content as SlideshowTextContent[]}
          nextSlide={nextSlide}
        />
      )
    case 'imageCollection':
      return (
        <ImageSlide
          content={content as SlideshowImageContent[]}
          nextSlide={nextSlide}
          title={title}
        />
      )
  }
}

const SlideshowAndText = () => {
  const [slideIndex, setSlideIndex] = useState<number>(0)
  const [nextSlideCalled, setNextSlideCalled] = useState<boolean>(false)
  const [
    firstThreeImagesOnNextSlideArePreloaded,
    setFirstThreeImagesOnNextSlideArePreloaded,
  ] = useState<boolean>(false)

  const nextSlide = useCallback(() => {
    setNextSlideCalled(true)
  }, [slideshow, slideIndex])

  useEffect(() => {
    if (
      nextSlideCalled &&
      firstThreeImagesOnNextSlideArePreloaded &&
      slideIndex + 1 < slideshow.length
    ) {
      setNextSlideCalled(false)
      setFirstThreeImagesOnNextSlideArePreloaded(false)
      setSlideIndex((i) => i + 1)
    }
  }, [
    nextSlideCalled,
    firstThreeImagesOnNextSlideArePreloaded,
    slideIndex,
    slideshow,
  ])

  return (
    <div
      className={`${handwriting.variable} flex min-h-[100svh] overflow-hidden justify-center items-center font-handwriting uppercase text-2xl md:text-3xl`}
    >
      <AnimatePresence>
        <SlideComponent
          key={`${slideIndex}-${slideshow[slideIndex].content
            .map((c) => c.toString())
            .join('')}`}
          type={slideshow[slideIndex].type}
          content={slideshow[slideIndex].content}
          nextSlide={nextSlide}
          title={slideshow[slideIndex].title}
        />
        <PreloadedImages
          slideIndex={slideIndex}
          setFirstThreeImagesOnNextSlideArePreloaded={
            setFirstThreeImagesOnNextSlideArePreloaded
          }
        />
      </AnimatePresence>
    </div>
  )
}

const TitleScreen = ({
  audioIsMute,
  setAudioIsMute,
  setTitleScreen,
}: {
  audioIsMute: boolean
  setAudioIsMute: Dispatch<SetStateAction<boolean>>
  setTitleScreen: Dispatch<SetStateAction<boolean>>
}) => {
  const icon = audioIsMute ? (
    <SpeakerMuteIcon className="h-4 w-4" />
  ) : (
    <SpeakerIcon className="h-4 w-4" />
  )

  // preloadNextSetOfImages(-1)

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center container"
    >
      <div className="space-y-6">
        <motion.div
          variants={enterFromSideContainer({ stagger: 1 })}
          initial="initial"
          animate="animate"
        >
          <motion.h1 variants={enterFromRightSide}>Hi.</motion.h1>
          <motion.h1 variants={enterFromRightSide}>I LOVE you.</motion.h1>
          <motion.h1 variants={enterFromRightSide}>
            Happy Holidays. 🎄
          </motion.h1>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4 }}
          className="text-xl"
        >
          A tribute to 2023 with my bestie, lover, baber, boo.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.5 }}
        >
          <Separator />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5 }}
          className="w-full flex flex-col font-bold gap-2"
        >
          <Button
            onClick={() => setAudioIsMute((v) => !v)}
            variant="outline"
            className="gap-1"
          >
            <span>{icon}</span>
            <span>
              Sound is currently&nbsp;
              <span className="font-extrabold text-primary">
                {audioIsMute ? 'Off' : 'On'}
              </span>
            </span>
          </Button>
          <Button
            onClick={() => setTitleScreen(false)}
            size="lg"
            className="gap-1"
          >
            <span className="text-2xl">
              <HiPlay />
            </span>
            Play
          </Button>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function ChristmasClientPage() {
  const [audioIsPaused, setAudioIsPaused] = useState<boolean>(true)
  const [currentAudioIndex, setCurrentAudioIndex] = useState(0)
  const [audioIsMute, setAudioIsMute] = useState<boolean>(true)
  const [titleScreen, setTitleScreen] = useState(true)

  const [audio, setAudio] = useState<HTMLAudioElement | undefined>()

  useEffect(() => {
    if (Audio)
      setAudio(new Audio(`${baseAudioDir}/${audioFiles[currentAudioIndex]}`))
  }, [])

  useEffect(() => {
    if (!audio) return
    const newAudio = audio
    newAudio.muted = audioIsMute
    setAudio(newAudio)
  }, [audio, audioIsMute, titleScreen])

  useEffect(() => {
    if (!audio) return
    const listener = () => {
      const newAudioIndex = (currentAudioIndex + 1) % audioFiles.length
      const newAudio = audio
      setCurrentAudioIndex(newAudioIndex)
      audio.src = `${baseAudioDir}/${audioFiles[newAudioIndex]}`
      setAudio(newAudio)
    }
    audio.addEventListener('ended', listener)

    if (!audioIsPaused) audio.play()

    return () => audio.removeEventListener('ended', listener)
  }, [audio, audioIsPaused, currentAudioIndex])

  useEffect(() => {
    if (!titleScreen && audio) audio.play()
  }, [audio, titleScreen, currentAudioIndex])

  return (
    <>
      <section className="relative px-0 mx-0">
        <h1 className="sr-only">Christmas/Holidays Whateva U Know</h1>
        <AnimatePresence>
          {titleScreen ? (
            <TitleScreen
              key="title"
              audioIsMute={audioIsMute}
              setAudioIsMute={setAudioIsMute}
              setTitleScreen={setTitleScreen}
            />
          ) : (
            <motion.div key="slideshow" exit={{ opacity: 0 }}>
              <SlideshowAndText />
              <AudioButton
                setAudioIsMute={setAudioIsMute}
                setAudioIsPaused={setAudioIsPaused}
                audioIsMute={audioIsMute}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  )
}
