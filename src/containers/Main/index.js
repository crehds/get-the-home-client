import { Container } from './styles';

const pathsWithPadding = ['/create-property', '/property-detail'];

function Main({ children, location }) {
  const withPadding = pathsWithPadding.includes(location.pathname);
  return <Container theme={{ withPadding }}>{children}</Container>;
}

export default Main;
