'use client'
import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore, collection, addDoc } from 'firebase/firestore';


export default function Home() {
  const [email, setEmail] = useState<string>('');
  const [givenName, setGivenName] = useState<string>('');
  const [familyName, setFamilyName] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleGivenNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setGivenName(e.target.value);
  };

  const handleFamilyNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFamilyName(e.target.value);
  };

  const subscribeNewsletter = async (e: FormEvent) => {
    e.preventDefault();
    try {
      // Here we add the email, given name, and family name to a 'newsletter' collection in Firestore
      const db = getFirestore();
      await addDoc(collection(db, 'newsletter'), { email, givenName, familyName });
      setEmail('');
      setGivenName('');
      setFamilyName('');
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);  // Remove success message after 3 seconds
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('エラーが起きました...');
      }
    }
  };

  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyDWtTtIb28MxqSi5lK34ZARwJWSn9RGxuo",
      authDomain: "booksp-35b12.firebaseapp.com",
      projectId: "booksp-35b12",
      storageBucket: "booksp-35b12.appspot.com",
      messagingSenderId: "74382594038",
      appId: "1:74382594038:web:25473838ccf5bfdc8141d7",
      measurementId: "G-GL564C22CF"
    };

    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
  }, []);

  return (
    <main className="z-10 flex min-h-screen flex-col items-center justify-between px-5 py-12 sm:p-24">
      <div className="w-full leading-loose tracking-widest">
        <p>紹介</p>
        <br/>
        <p>BookSPは本に囲まれて書斎にいるかの如く、読書に明け暮れる体験をいつでも・どこでも可能にする、空間コンピューティング向けアプリケーションです。</p>
        <br/>
        <p>課題</p>
        <br/>
        <p>電子書籍の普及が進み、大半の新書はKindle版が提供され、スマホやKindleに代表される電子書籍リーダーで読める時代になりました。そのおかげで、本を詰めた重いバックパックを背負わなくとも、旅先や喫茶店などの非日常的環境で、好きな本の世界へ飛び込めるようにもなりました。その実現の為に汗水垂らしてた無数の先人たちに心から感謝しています。</p>
        <br/>
        <p>私たちはその巨人の肩に乗り、デジタルの読書体験をもう一歩先へ進めます。</p>
        <br/>
        <p>平面スクリーン上での読書体験に欠ける大きなものは、一覧性です。人は意識しているよりも多く、視覚情報から行動のきっかけを得ます。ステルス広告という言葉がある位です。他にも多々魅力がありますが、本単体並びに本を並べた時の一覧性の高さが、紙書籍が電子書籍に勝り、場所を取るにもかかわらず本棚を家に置く主な理由の一つではないでしょうか。</p>
        <br/>
        <p>解決策</p>
        <br/>
        <p>Apple 社の Vision Pro の発表によってもたらされた空間コンピューティングの可能性の中で、デジタルブックの一覧性の低さもまた、大きく向上させられると感じています。</p>
        <br/>
        <p>壁一面の本の中から、背表紙からその時惹かれた一冊を決め、指で背表紙の上辺を引っ張り出し、本を手に取る。手のひらで本を支えながら、利き手でページをパラパラめくってゆきます。その感覚、没入感の再現を最も大切にしながら、全力で開発を進めています。</p>
        <br/>
        <p>本が好きな人たちの中には色んな生活を送っている人がいます。本の量に対して場所が全く足らない方がいれば、書斎を設ける余裕はないが、喧騒の中で静かに一人で読書に明け暮れる空間と時間が欲しい方もいます。或いは、住処を転々とする方など、好きな本の背表紙にブワーッと囲まれて、気が向いたらすぐにその本を手に取れる物理的環境にずっと居たいけど、そうは現実が許さない方たちが沢山おります。</p>
        <br/>
        <p>Vision Pro とそのデバイスを補完する私たちのアプリケーションで、そんな多種多様な生活を送る世界中に散らば限られた資源の中で頑張る全ての読書家の心がより満たされる時代へとします。 </p>
        <br/>
        <p>それが BookSP を作る人たちの北極星です。</p>
        <br/>
        <br/>
        <form onSubmit={subscribeNewsletter}>
          <div className="flex space-x-2 mb-2">
            <label>
              <input className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:caret-red-600" type="text" value={familyName} onChange={handleFamilyNameChange} placeholder='苗字' required />
            </label>
            <label>
              <input className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:caret-red-600" type="text" value={givenName} onChange={handleGivenNameChange} placeholder='名前' required />
            </label>
          </div>
          <label>
            <input className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:caret-red-600" type="email" value={email} onChange={handleEmailChange} placeholder='メールアドレス' required />
          </label>
          <button className="w-full mt-4 p-2 bg-red-600 text-white rounded-md" type="submit">
            進捗をフォローする
          </button>
        </form>
        {error && <p>{error}</p>}
        {success && <p className='mt-2 font-semibold'>フォローしました！</p>}
      </div>
    </main>
  );
}