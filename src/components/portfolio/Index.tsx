import React from 'react'
import portfolioData from '~/components/portfolio/data/portfolio.json'
import { Carousel } from '../utils/Carousel'
import { CommonText } from '../utils/Headers'
import { FlexColumn } from '../utils/Utils'



type HeroPortfolioData = [{
    image: string,
    title: string,
    description: string,
    link: string
}]

export const HeroPortfolio = () => {
    const sampleComponent = portfolioData.map((item, index) => {
        const imageChildren = item.images.map((image, index) => {
            return (
                <img key={`${index}-${item.title}-image`} src={image} alt={item.title} style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    aspectRatio: '16/9',
                }}/>
            )
        })
        return (
            <FlexColumn key={`${index}-${item.title}-column`} width='100%' maxWidth='unset'>
                <Carousel children={imageChildren} key={`${index}-${item.title}-carousel`}/>
                <CommonText fontSize='20px' fontWeight='700' color='white-90' lineHeight='24px'>
                    {item.title}
                </CommonText>
                <CommonText fontSize='14px' fontWeight='400' color='white-90' lineHeight='16px'>
                    {item.description}
                </CommonText>
            </FlexColumn>
        )
    })
    
  return (
    <Carousel children={sampleComponent} key='portfolio-carousel'/>
  )
}
// Image carousel + image opener
// default carousel