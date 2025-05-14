import Image from "next/image";

export default function OurFacts() {
  return (
    <main className="flex responsive standard-padding items-center justify-between pt-10">
      <div className="flex-1 mr-10">
        <h3 className="font-bold text-3xl">Our Process</h3>

        <p className="text-xs mt-10">
          Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis.
        </p>
      </div>

      <div className="flex flex-1 flex-col items-end ml-10">
        <div className="flex flex-row">
          <div className="flex flex-col mr-5">
            <h3 className="font-bold text-3xl">40K</h3>
            <p className="text-xs">Global Happy Clients</p>
          </div>

          <div className="flex flex-col ml-5">
            <h3 className="font-bold text-3xl">245</h3>
            <p className="text-xs">Global Happy Clients</p>
          </div>
        </div>

        <div className="flex flex-row mt-10">
          <div className="flex flex-col mr-5">
            <h3 className="font-bold text-3xl">550</h3>
            <p className="text-xs">Global Happy Clients</p>
          </div>

          <div className="flex flex-col ml-5">
            <h3 className="font-bold text-3xl">50K</h3>
            <p className="text-xs">Global Happy Clients</p>
          </div>
        </div>
      </div>
    </main>
  );
}
