import React from 'react'
import { FlexColumn, FlexRow } from '../utils/Utils'
import { CommonText } from '../utils/Headers'
import { HeroPortfolio } from '../portfolio/Index'

export const Hero = () => {
  return (
    <FlexRow width='100%' maxWidth='1280px' height='100%' margin='auto' verticalAlign='center' flexColumnWidthThreshold={900}>
        <HeroLeft />
        <HeroRight />
    </FlexRow>
  )
}

const HeroLeft = () => {
  return (
    <FlexColumn width='40%'>
        <CommonText fontSize='30px' fontWeight='700' color='white-90' lineHeight='30px'>
            Matheus Lasserre
        </CommonText>
        <CommonText fontSize='20px' fontWeight='400' color='white-90' lineHeight='24px'>
            FullStack Software Developer for over 5 years with expertise in Web Applications.
        </CommonText>
    </FlexColumn>
  )
}

const HeroRight = () => {
  return <FlexColumn width='60%' height='100%' styles={{
    overflow: 'hidden',
  }}>
      <HeroPortfolio />
    </FlexColumn>
}

