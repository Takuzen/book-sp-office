import Link from 'next/link';

export default function Home() {
  return (
    <main className="z-10 flex min-h-screen flex-col items-center justify-between px-5 py-12 sm:p-24">
      <div className="w-full text-center tracking-widest text-2xl">
        <h1 className=''>BookSP</h1>
      </div>

      <div className="w-full text-center tracking-widest">
        <h3 className='text-2xl sm:hidden leading-loose'>
          壁一面の本を、<br/>
          いつでも、どこへでも。
        </h3>
        <h3 className='text-2xl hidden sm:inline '>
          壁一面の本を、いつでも、どこへでも。
        </h3>
        <Link href="/ja/whitepaper">
          <h3 className='text-xl mt-10 underline underline-offset-8'>白書</h3>
        </Link>
      </div>

      <div className="w-full text-center flex flex-row gap-7 justify-center sm:gap-0 sm:justify-evenly">
          <div className='text-yellow-500'>
            <h1 className='text-xl sm:text-2xl'>
            Apple Vision Pro と同時リリース
            </h1>
          </div>
      </div>
    </main>
  );
}