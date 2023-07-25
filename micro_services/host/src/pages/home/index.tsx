import Navigation from 'host/components/Navigation';
import Header from 'host/components/Header';

export default function HomePage() {
  return (
    <>
      <Header>
        <Header.Title>MODO</Header.Title>
        <Header.Menu />
      </Header>
      메인 페이지
      <Navigation />
    </>
  );
}
