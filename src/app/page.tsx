export default function HomePage() {
  return (
    <section className="flex justify-center items-center flex-col min-h-screen relative p-4 text-center overflow-hidden">
      <div className="w-full flex justify-center">
        <h1 
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold uppercase typewriter whitespace-normal sm:whitespace-nowrap"
          style={{ "--typewriter-width": "38ch", "--typewriter-steps": 38 } as React.CSSProperties}
        >
          Hi, I&apos;m a Full-Stack developer...
        </h1>
      </div>
    </section>
  );
}
