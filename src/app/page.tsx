'use client';

import Head from 'next/head';
import * as React from 'react';
import { FaReact } from 'react-icons/fa';
import '@/lib/env';

import { theRockProject } from '@/lib/leopardProject';

export default function HomePage() {
  const [project, setProject] = React.useState<any>(null);

  React.useEffect(() => {
    console.log('theRockProject', theRockProject);

    theRockProject.attach('#project');
    setProject(theRockProject);
  }, []);
  return (
    <main>
      <Head>
        <title>Hi</title>
      </Head>
      <section className='bg-white w-full h-screen flex flex-col items-center justify-center'>
        <h1 className='flex flex-row space-x-2 items-center'>
          <span>LEOPARD 🐈 + REACT</span> <FaReact className='animate-spin' />
        </h1>
        <div id='project'></div>
        <div className='flex flex-row space-x-5'>
          <button
            className='bg-blue-300 px-5 py-2 rounded-full'
            onClick={() => {
              console.log('project', project);

              project.greenFlag();
            }}
          >
            Green Flag
          </button>
          <button
            className='bg-blue-300 px-5 py-2 rounded-full'
            id='flip'
            onClick={async () => {
              let i = 0;
              while (i < 20) {
                project.sprites.TheRock.direction += 18;
                await new Promise((resolve) => setTimeout(resolve, 100));
                i++;
              }
            }}
          >
            Flip
          </button>
          <button
            className='bg-blue-300 px-5 py-2 rounded-full'
            id='partyTime'
            onClick={() => {
              project.sprites.TheRock.say('party time');
            }}
          >
            party time
          </button>
        </div>
      </section>
    </main>
  );
}
