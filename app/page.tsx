const reqURL =
  process.env.NODE_ENV !== 'production' ? 'http://localhost:5000' : 'https://host.mobilelib.site';

export default function Home() {
  return (
    <main className="flex justify-around w-screen mx-auto items-center max-w-[1024px]">
      <iframe
        src={`${reqURL}/account/login`}
        title="MODO Library Service"
        className="w-[26rem] h-screen"
      />
      <div className="flex items-center justify-center flex-col gap-3">
        <h1>MODO</h1>
        <h2>모두의 도서관</h2>
      </div>
    </main>
  );
}
