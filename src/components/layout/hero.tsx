function Hero() {
  return (
    <div className="mx-auto max-w-7xl py-20  grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="flex flex-col  items-center bg-blue-200/40 rounded-xl p-4  hover:cursor-pointer hover:bg-blue-200/60 transition-all duration-300 hover:scale-105 hover:shadow-xl ">
        <img
          className="w-70 h-50"
          src="/images/ideas.png"
          alt=""
        />
        <p className="text-neutral-900 dark:text-white text-lg ">
          1. Submit project ideas
        </p>
        <span className="text-neutral-600 dark:text-neutral-400">
          User submit ther project ideas
        </span>
      </div>
      <div className="flex  flex-col items-center bg-blue-200/40 rounded-xl p-4  hover:cursor-pointer hover:bg-blue-200/60 transition-all duration-300 hover:scale-105 hover:shadow-xl ">
        <img
          className="w-70 h-50"
          src="/images/review.png"
          alt=""
        />
        <p className="text-neutral-900 dark:text-white text-lg">
          2. Managers review
        </p>
        <span className="text-neutral-600 dark:text-neutral-400">
          Manager review and approve
        </span>
      </div>
      <div className="flex flex-col items-center  bg-blue-200/40 rounded-xl p-4  hover:cursor-pointer hover:bg-blue-200/60 transition-all duration-300 hover:scale-105 hover:shadow-xl  ">
        <img
          className="w-70 h-55 "
          src="/images/feedbeck.png"
          alt=""
        />
        <p className="text-neutral-900 dark:text-white text-lg">
          3. Track status & feedback
        </p>
        <span className="text-neutral-600 dark:text-neutral-400 ">
          Tarck status and gain valuable feedback
        </span>
      </div>
    </div>
  );
}
export default Hero;
