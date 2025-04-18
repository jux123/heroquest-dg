'use client'

import { useParams } from 'next/navigation'

export default function AdventurePage() {
  const { slug } = useParams();

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Adventure {slug}</h1>
      <p>Welcome to the adventure page!</p>
    </div>
  );
}