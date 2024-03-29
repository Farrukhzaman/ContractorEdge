'use client'
// import { useRouter } from 'next/router'
import he from 'he'
import { useRouter } from 'next/navigation'

import { SLUGS } from '../slug'
import AboutHero from './AboutHero'
import AccordionWrapper from './AccordionWrapper'
import ContactHero from './ContactHero'
import ContentBoxComponent from './ContentBox'
import ContentComponent from './ContentComponent'
import ContentComponentMultiImages from './ContentComponentMultiImages'
import DataFetcher from './DataFetch'
import FullWidthImagecomp from './FullWidthImage'
import HeroHome from './HeroHome'
import IconBoxWrapper from './IconsBoxeswrapper'
import ImageBoxesWrapper from './ImageBoxesWrapper'
import InnerHero from './innerHeroMid'
import MapIframe from './MapBox'
import { MarqeeWrapper } from './MarqueeWrapper'
import OurStory from './OurStory'
import TeamMemberWrapper from './TeamWrapper'

export const CMSWrapper = block => {
  const router = useRouter()
  const generateKey = id => {
    return `${id}-${router.forward}`
  }
  const getComponent = () => {
    if (!block) {
      return null
    }
    if (block.blockType === SLUGS.blocks.hero) {
      return <HeroHome key={generateKey(Number)} {...block} />
    }

    if (block.blockType === SLUGS.blocks.accordion) {
      return <AccordionWrapper {...block} />
    }
    // if (block.blockType === SLUGS.blocks.imageBox) {
    //   return <ImageBoxWithText key={generateKey(Number)} {...block} />
    // }
    if (block.blockType === SLUGS.blocks.imageBox) {
      return <ImageBoxesWrapper key={generateKey(Number)} {...block} />
    }

    if (block.blockType === SLUGS.blocks.contentimagebox) {
      return <ContentComponent key={generateKey(Number)} {...block} />
    }

    if (block.blockType === SLUGS.blocks.ourstory) {
      return <OurStory key={generateKey(Number)} {...block} />
    }

    if (block.blockType === SLUGS.blocks.iconBox) {
      return <IconBoxWrapper key={generateKey(Number)} {...block} />
    }

    if (block.blockType === SLUGS.blocks.contentmultiimagebox) {
      return <ContentComponentMultiImages key={generateKey(Number)} {...block} />
    }

    if (block.blockType === SLUGS.blocks.innerbannerbox) {
      return <InnerHero key={generateKey(Number)} {...block} />
    }

    if (block.blockType === SLUGS.blocks.abouthero) {
      return <AboutHero key={generateKey(Number)} {...block} />
    }

    if (block.blockType === SLUGS.blocks.fullwidthimage) {
      return <FullWidthImagecomp key={generateKey(Number)} {...block} />
    }

    if (block.blockType === SLUGS.blocks.marQues) {
      return <MarqeeWrapper key={generateKey(Number)} {...block} />
    }

    if (block.blockType === SLUGS.blocks.TeamBlocks) {
      return <TeamMemberWrapper key={generateKey(Number)} {...block} />
    }

    if (block.blockType === SLUGS.blocks.ContactHero) {
      return <ContactHero key={generateKey(Number)} {...block} />
    }

    if (block.blockType === SLUGS.blocks.fullwidthimage) {
      return <FullWidthImagecomp key={generateKey(Number)} {...block} />
    }

    if (block.blockType === SLUGS.blocks.contentbox) {
      return <ContentBoxComponent key={generateKey(Number)} {...block} />
    }
    // if (block.blockType === SLUGS.blocks.fetchcontent) {
    //   return <DataFetcher key={generateKey(Number)} {...block} />
    // }

    if (block.blockType === SLUGS.blocks.fetchcontent) {
      return <DataFetcher key={generateKey(Number)} {...block} />
      // return DataFetcher(null)
    }

    if (block.blockType === SLUGS.blocks.mapbox) {
      return <MapIframe key={generateKey(Number)} {...block} />
      // return DataFetcher(null)
    }

    return null
  }

  return <div id={block.sectionId}>{getComponent()}</div>
}
