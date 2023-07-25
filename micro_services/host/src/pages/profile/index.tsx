import Navigation from 'host/components/Navigation';
import Header from 'host/components/Header';

export default function ProfilePage() {
  return (
    <>
      <Header>
        <Header.Title>MODO</Header.Title>
        <Header.Menu />
      </Header>
      프로필 페이지
      <Navigation />
    </>
  );
}
