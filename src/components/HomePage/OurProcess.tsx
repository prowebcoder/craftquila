import Image from "next/image";

export default function OurProcess() {
  return (
    <main className="flex responsive standard-padding items-center justify-between bg-black">
      <div className="flex-1 mr-10">
        <Image
          src="/tequila-our-process.jpg"
          alt="Our Process Bottle"
          className="mr-10"
          width={692}
          height={695}
        />
      </div>

      <div className="flex-1 ml-10 text-white">
        <h3 className="font-bold text-3xl">Our Process</h3>

        <p className="text-xs mt-10">
          Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis.
        </p>

        <ol className="mt-10 ml-5 list-decimal">
          <li className="mt-3">Choose Tequila Type</li>
          <li className="mt-3">Choose Additives</li>
          <li className="mt-3">Choose Bottle</li>
          <li className="mt-3">Upload Custom Label</li>
        </ol>
      </div>
    </main>
  );
}
