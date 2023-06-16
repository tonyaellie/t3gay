import Link from 'next/link';

const Home = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <Link href="https://github.com/tonyaellie/t3gay" className="max-w-md">
          <h1 className="text-5xl font-bold">
            <span className="text-rainbow">T3</span>gay
          </h1>
          <p className="py-6 text-base-content/60">Coming soon</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
