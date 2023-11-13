"use client";
import { useEffect, useLayoutEffect, useMemo } from 'react'
import { useCookies } from 'next-client-cookies';

import Image from 'next/image'

// {theme}:{theme:string}
export default function PageComponent() {

  const cookies = useCookies();

  const setTheme = (theme:string) => {
    cookies.set('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);

  }


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
       
        <button className='btn btn-primary' >click</button>
        <button data-set-theme="" data-act-class="ACTIVECLASS" onClick={() => setTheme('light')}>light</button>
<button data-set-theme="dark" data-act-class="ACTIVECLASS" onClick={() => setTheme('dark')}>dark</button>
<button data-set-theme="pink" data-act-class="ACTIVECLASS" onClick={() => setTheme('pink')}>pink</button>
<button className="btn btn-primary" data-set-theme="mytheme" data-act-class="ACTIVECLASS" onClick={() => setTheme('mytheme')}>My Theme</button>

        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        </p>
       
      </div>
    </main>
  )
}
