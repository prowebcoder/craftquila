import ActionButton from "@app/components/ActionButton";

export default function Header() {
  return (
    <main className="flex flex-row items-center justify-between px-10 pt-5 relative z-10 responsive standard-padding">
      <h3 className="flex">CraftQuila</h3>

      <div className="flex responsive">
        <a
          href="#"
          className="ml-5 mr-5 hover:text-gray-500 transition-colors duration-700 ease-in-out"
        >
          Our Process
        </a>
        <a
          href="#"
          className="ml-5 mr-5 hover:text-gray-500 transition-colors duration-700 ease-in-out"
        >
          About Us
        </a>
        <a
          href="#"
          className="ml-5 mr-5 hover:text-gray-500 transition-colors duration-700 ease-in-out"
        >
          Contact Us
        </a>
      </div>

      <ActionButton label="Craft My Tequila" />
    </main>
  );
}
