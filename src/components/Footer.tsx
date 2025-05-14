export default function Footer() {
  console.log("https://www.w3schools.com/css/css3_flexbox_responsive.asp");
  console.log("https://tailwindcss.com/docs/responsive-design");
  console.log("https://tailwindcss.com/docs/animation");

  return (
    <main className="flex flex-col pt-5">
      <div className="flex responsive standard-padding py-10 justify-between bg-gray-200">
        <div>
          <h3>Address</h3>

          <p>
            100 S BISCAYNE BLVD #3122,
            <br /> Miami FL, 33131
          </p>
        </div>

        <div>
          <h3>Contact</h3>

          <p>+1 561 376 6538</p>
          <p>support@craftquila.com</p>
        </div>
      </div>

      <div className="flex responsive standard-padding flex-row py-3 justify-between">
        <p>&copy; 2023 CraftQuilla</p>

        <a
          href="#"
          className="hover:text-gray-500 transition-colors duration-700 ease-in-out"
        >
          Terms & Conditions
        </a>
      </div>
    </main>
  );
}
