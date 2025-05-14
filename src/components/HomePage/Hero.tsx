import Image from "next/image";

import ActionButton from "@app/components/ActionButton";

export default function Hero() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-visible relative z-0">
      <Image
        src="/bg.jpg"
        alt="Tequila Bottle"
        className="mx-10 -mt-36"
        width={1240}
        height={1327}
        priority
      />

      <div className="static lg:absolute inset-x-0 -mt-96 lg:mt-0 lg:top-36">
        <div className="flex flex-col items-center justify-center -mt-96 lg:mt-0 lg:pt-16">
          <div className="flex responsive justify-around lg:pt-10">
            <h3 className="mx-32 font-bold text-7xl">Craft your</h3>
            <h3 className="mx-32 lg:mt-24 font-bold text-7xl">Uniqueness</h3>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center pt-24 lg:pt-5 lg:pr-36">
          <div className="flex responsive justify-around pt-5 lg:mr-36 lg:pr-36">
            <h3 className="text-3xl mr-36 -mt-24 text-gray-500">
              One sip at a time
            </h3>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center lg:pt-24">
          <div className="flex flex-row justify-around pr-10">
            <ActionButton label="Craft My Tequila &rarr;" />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center lg:pt-36">
          <div className="flex flex-row justify-around pr-10 pt-10 lg:pt-24">
            <p className="text-s text-gray-400">
              * Craft your own unique tequila masterpiece with
              TequilaCraft&apos;s personalized customization process, <br />{" "}
              where every sip tells your story.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center pt-5 px-36">
          <div className="flex responsive items-start justify-between px-24">
            <div className="flex-1"></div>
            <h3 className="font-bold text-4xl flex-1 lg:mr-10">
              Crafting Distinctive Tequila Experiences
            </h3>

            <p className="flex-1 text-xs text-gray-400 py-5 lg:ml-10">
              Sed ut perspiciatis unde omnis iste natus error voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis.
              <br />
              Sed ut perspiciatis unde omnis iste natus error voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis.
            </p>
            <div className="flex-1"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
