import React from 'react'
import { MantineProvider } from '@mantine/core';
import { HeaderAction } from '../HeaderAction';
import { FooterLinks } from '../FooterLinks';
import { linksFooter } from '../../Helpers/LinksFooter';
import { links } from '../../Helpers/Links'
import { ImageCarousel } from './ImageCarousel';
import { AboutStarloop } from './AboutStarloop';
import { GamesWeWorkedWith } from './GamesWeWorkedWith';
import { Services } from './Services';
import { TrustedBy } from './TrustedBy';
import { ClientStories } from './ClientStories';
export const HomePage = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS
    theme={{
      fontFamily: 'Verdana, sans-serif',
      fontFamilyMonospace: 'Monaco, Courier, monospace',
      headings: { fontFamily: 'Teko,Roboto, Greycliff CF, sans-serif' },
    }}
    >
      <HeaderAction links={ links } />
      <ImageCarousel/>
      <AboutStarloop />
      <GamesWeWorkedWith />
      <Services />
      <TrustedBy />
      <ClientStories />

      <FooterLinks data={ linksFooter }/>
    </MantineProvider>
  )
}
