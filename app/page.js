import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">   
      <div className="flex flex-col items-center justify-center mb-6">
        <h1 className="text-4xl mb-2">Welcome to the NBA Stats!</h1>
        <p className="text-xl">This is a website for the NBA Stats where the target audience are the basketball fans around the world.</p>
        <p className="text-xl">Click these links to see the basic information of the NBA stats from the past recently!</p>
      </div>
      <div>
        <div className="flex flex-col items-center justify-center text-2xl">
          <Link href="/players" className="mb-4 text-blue-500">Player Stats</Link>
          <Link href="/teams" className="mb-4 text-blue-500">Team Stats</Link>
          <Link href="/matches" className="mb-4 text-blue-500">Match Results</Link>
          <Link href="/schedule" className="mb-4 text-blue-500">Schedules</Link>
        </div>
      </div>
    </div>
  );
}
