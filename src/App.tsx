import { MantineProvider } from '@mantine/core';
import { FooterLinks } from './Components/FooterLinks';
import { HeaderAction } from './Components/HeaderAction';
import { HeroImageRight } from './Components/HeroImageRight'
import { HeroText } from './Components/HeroText';
import { JobDescription } from './Components/JobDescription'
import { links } from './Helpers/Links'
import { linksFooter } from './Helpers/LinksFooter';

//const links = [{link: 'a', label: 'e'}, { link: 'b', label: '2', links: [{link:'c', label: 'c' }]}]

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <HeaderAction links={ links } />
      <HeroImageRight />
      <JobDescription />
      <HeroText />
      <FooterLinks data={ linksFooter }/>
    </MantineProvider>
  );
}