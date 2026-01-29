function Hero() {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 py-20 md:grid-cols-3">
      <div className="flex flex-col items-center rounded-xl bg-blue-200/40 p-4 transition-all duration-300 hover:scale-105 hover:cursor-pointer hover:bg-blue-200/60 hover:shadow-xl">
        <img
          className="h-50 w-70"
          src={`${import.meta.env.BASE_URL}images/ideas.png`}
          alt=""
        />
        <p className="text-lg text-neutral-900 dark:text-white">1. Submit project ideas</p>
        <span className="text-neutral-600 dark:text-neutral-400">User submit ther project ideas</span>
      </div>
      <div className="flex flex-col items-center rounded-xl bg-blue-200/40 p-4 transition-all duration-300 hover:scale-105 hover:cursor-pointer hover:bg-blue-200/60 hover:shadow-xl">
        <img
          className="h-50 w-70"
          src={`${import.meta.env.BASE_URL}images/review.png`}
          alt=""
        />
        <p className="text-lg text-neutral-900 dark:text-white">2. Managers review</p>
        <span className="text-neutral-600 dark:text-neutral-400">Manager review and approve</span>
      </div>
      <div className="flex flex-col items-center rounded-xl bg-blue-200/40 p-4 transition-all duration-300 hover:scale-105 hover:cursor-pointer hover:bg-blue-200/60 hover:shadow-xl">
        <img
          className="h-55 w-70"
          src={`${import.meta.env.BASE_URL}images/feedbeck.png`}
          alt=""
        />
        <p className="text-lg text-neutral-900 dark:text-white">3. Track status & feedback</p>
        <span className="text-neutral-600 dark:text-neutral-400">Tarck status and gain valuable feedback</span>
      </div>
    </div>
  );
}
export default Hero;
