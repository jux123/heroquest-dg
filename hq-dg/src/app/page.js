import Link from 'next/link'
import Header from '@/components/header';

export default function Home() {
  console.log("Hello world")
  return (
    <div className='center'>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Header />
      <p>Welcome to the adventure page!</p>
      <br />
      <br />
      <p><Link href="/adventure/123">Start your adventure!</Link></p>
    </div>
  );
}
