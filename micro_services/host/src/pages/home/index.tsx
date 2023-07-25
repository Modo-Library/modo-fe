import Header from 'host/components/Header';

export default function HomePage() {
  return (
    <>
      <div className="absolute top-0 w-full full:w-[25rem]">
        <Header>
          <Header.Title>MODO</Header.Title>
          <Header.Menu />
        </Header>
      </div>
      메인 페이지
    </>
  );
}
