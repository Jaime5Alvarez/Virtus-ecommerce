import Switcher from "./Switcher";

export const Header = () => {
  return (
    <section className="bg-slate-200 dark:bg-slate-950 dark:text-white relative mb-[1rem] py-2 rounded-full font-mono text-3xl font-black">
      {" "}
      VIRTUS SHOP
      <span className="absolute right-5 top-2 hover:scale-110 duration-200 ease-in-out rounded-full">
        <Switcher />
      </span>
    </section>
  );
};
