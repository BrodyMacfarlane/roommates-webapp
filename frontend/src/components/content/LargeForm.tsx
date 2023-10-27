import Image, { StaticImageData } from 'next/image'

export default function LargeForm({
  form,
  image,
}: {
  form: JSX.Element
  image: StaticImageData
}) {
  return (
    <div className="relative md:rounded-lg md:overflow-hidden md:shadow-md grid grid-cols-1 md:grid-cols-2 items-center">
      <div className="relative min-h-[75vh] overflow-hidden hidden md:block w-full h-full">
        <div className="absolute top-0 left-0 z-[2] w-full h-full bg-primary opacity-30"></div>
        <Image
          className="relative z-[1] object-cover object-center"
          draggable={false}
          src={image}
          alt=""
          fill={true}
          placeholder="blur"
        />
      </div>
      <div className="bg-background h-full flex w-full justify-center items-center">
        {form}
      </div>
    </div>
  )
}
