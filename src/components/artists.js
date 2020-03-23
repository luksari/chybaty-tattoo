import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import { CircleArrowButton, BtnContainer }  from '../components/CircleArrowButton';
import { device } from "../helpers/mediaQueries";

const ArtistBaseContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 25px;
  @media ${device.laptop} {
    flex-direction: row;
    padding: 0;
  }
`

const ArtistNormalContainer = styled(ArtistBaseContainer)`
  @media ${device.laptop} {
    height: 550px;
    padding: 0;
  }
`

const ArtistContainerHigher = styled(ArtistBaseContainer)`
  @media ${device.laptop} {
    height: 750px;
    padding: 0;
  }
`

const MokerContainer = styled(ArtistNormalContainer)`
  align-items: center;
  flex: 1 1 100%;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  @media ${device.laptop} {
    margin-bottom: 0;
    margin-left: 140px;
    margin-top: 140px;
    max-height: 550px;
    height: 100%;
  }
`

const JpegContainer = styled.div`
  flex: 2;
  position: relative;
  @media ${device.laptop} {
    margin-left: 140px;
  }
`;

const KrzywyContainer = styled(ArtistNormalContainer)`
  padding: 0;
  flex-direction: column;
  height: 600px;
  flex: 1 1 100%;
  @media ${device.tablet} {
    height: 730px;
    margin-right: 0;
  }
  @media ${device.laptop} {
    margin-right: 140px;
    flex-direction: column;
    height: 960px;
  }
`

const ArtistNameBase = styled.div`
  position: absolute;
  height: 30px;
  background-color: #4f4f4f;
`

const NameWrapper = styled.div`
  position: relative;
  flex: 1 1 100%;
  z-index: 10;
`

const KolankoNameWrapper = styled(NameWrapper)`
  order: 1;
  @media ${device.laptop} {
    order: 0;
  }
`;

const LuleoneNameContainer = styled(ArtistNameBase)`
  bottom: 0;
  width: 200px;
`

const KolankoNameContainer = styled(ArtistNameBase)`
  bottom: -30px;
  width: 200px;
  right: 0;
  @media ${device.laptop} {
    bottom: 0;
    right: 0;
  }
`
const LapiLopiNameContainer = styled(ArtistNameBase)`
  left: 0;
  top: 50%;
  width: 230px;
`

const JaroniNameContainer = styled(ArtistNameBase)`
  top: 0;
  right: 0;
  width: 180px;
`

const PelikanNameContainer = styled(ArtistNameBase)`
  bottom: 0;
  right: 15%;
  width: 205px;
  @media ${device.laptop} {
    bottom: -30px;
    right: 16%;
  }
`

const JpegNameContainer = styled(ArtistNameBase)`
  bottom: -25px;
  left: 25px;
  width: 180px;
  @media ${device.laptop} {
    top: -30px;
    left: 0;
  }
`

const MokerNameContainer = styled(ArtistNameBase)`
  bottom: 15px;
  left: 0;
  width: 180px;
  @media ${device.laptop} {
    top: 0;
  }
`

const KrzywyNameContainer = styled(ArtistNameBase)`
  bottom: 0px;
  right: 0;
  width: 180px;
`

const ArtistName = styled.p`
  text-align: center;
  font-size: 36px;
  letter-spacing: 8px;
  top: -20px;
  position: relative;
  color: white;
  margin: 0;
`

const ArtistNameAlternative = styled(ArtistName)`
  top: 7px;
`

const ContactCTAContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 20px 0;
`

const FAQContainer = styled(ContactCTAContainer)`
  /** @todo Fix when gfx exported */
  padding: 20px 0;
  background: gray;
  @media ${device.laptop} {
    height: 466px;
    padding: 40px 0;
  }


`

const ContactCTAHeader = styled.p`
  letter-spacing: 14px;
  padding-left: 14px;
  font-size: 70px;
  font-family: "Unica One", cursive;
  margin-bottom: 33px;
`

const ContactCTABtn = styled.button`
  color: white;
  font-size: 14px;
  letter-spacing: 3px;
  padding: 15px 45px;
  border: 1px solid #ffffff;
  border-radius: 51px;
  background-color: transparent;
  transition: all 0.3s linear;
  cursor: pointer;
  :hover {
    color: black;
    background-color: white;
  }
`

const StyledSectionTitle = styled.h2`
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-color: #fff;
  font-size: 155px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 500;
  width: 100%;
  font-size: 100px;
  -webkit-text-stroke-width: 2px;
  margin-left: 0px;
  letter-spacing: 15px;
  line-height: 121px;
  text-align: center;
  @media ${device.laptop} {
    width: 600px;
    font-size: 155px;
    -webkit-text-stroke-width: 5px;
    text-align: left;
    line-height: 165px;
    letter-spacing: 31px;
    margin-left: 40px;

  }
`

const OurCrewContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${device.laptop} {
      justify-content: flex-start;
  }
  section {
    display: flex;
    flex-direction: column;
    @media ${device.laptop} {
      flex-direction: row;
    }
    ${BtnContainer} {
      justify-content: flex-end;
      margin-bottom: 55px;
    }
  }
`

const ArtistImg = styled(Img)`
  flex: 1 1 100%;
  width: 100%;
  @media ${device.laptop} {
    flex: 1 1 100%;
    width: 100%;
  }
`

const ArtistImgWide = styled(ArtistImg).attrs({ style: { flex: '2 1 100%'}})`
  flex: 2 1 100%;
  width: 100%;
  @media ${device.tablet} {
    flex: 2 1 0;
    width: 100%;
  }
`

const MarginLeftImageWide = styled(ArtistImgWide)`
  margin-left: 0;
  @media ${device.laptop} {
    margin-left: 140px;
  }
`

const MainArtistContainer = styled(ArtistNormalContainer)`
  height: 100%;
  ${ArtistImg} {
    order: 1;
    flex: 100%;
    @media ${device.laptop} {
      height: 100%;
      order: 0;
    }
  }
  ${OurCrewContainer} {
    order: 0;
    @media ${device.laptop} {
      order: 1;
    }
  }
`

export const Artists = () => {
  const data = useStaticQuery(artistsImagesQuery)

  return (
    <>
      <MainArtistContainer
        data-sal="slide-right"
        data-sal-delay="200"
      >
        <ArtistImg
          fluid={data.luleoneHome.childImageSharp.fluid}
          alt='Luleone'
        />
        <OurCrewContainer>
            <section>
              <StyledSectionTitle 
              data-sal="slide-right"
              data-sal-delay="400"
              >
                Nasza ekipa
              </StyledSectionTitle>
              <CircleArrowButton label='Poznaj' />
            </section>
          <LuleoneNameContainer>
            <ArtistName>LULEONE</ArtistName>
          </LuleoneNameContainer>
        </OurCrewContainer>
      </MainArtistContainer>
      <ArtistNormalContainer
        data-sal="slide-left"
        data-sal-delay="200"
      >
        <KolankoNameWrapper>
          <KolankoNameContainer>
            <ArtistName>KOLANKO</ArtistName>
          </KolankoNameContainer>
        </KolankoNameWrapper>
        <ArtistImgWide
          fluid={data.kolankoHome.childImageSharp.fluid}
        />
      </ArtistNormalContainer>
      <ArtistNormalContainer
        data-sal="slide-right"
        data-sal-delay="200"
      >
        <MarginLeftImageWide
          fluid={data.lapiLopiHome.childImageSharp.fluid}
        />
        <div style={{ flex: "1 1 50%", position: "relative" }}>
          <LapiLopiNameContainer>
            <ArtistName>ŁAPI ŁOPI</ArtistName>
          </LapiLopiNameContainer>
        </div>
      </ArtistNormalContainer>
      <ArtistContainerHigher         
        data-sal="slide-left"
        data-sal-delay="200"
        >
        <div style={{ flex: '2 1 100%' }} />
          <ArtistImg
            fluid={data.pelikanHome.childImageSharp.fluid}
          />
          <PelikanNameContainer>
            <ArtistNameAlternative>PELIKAN</ArtistNameAlternative>
          </PelikanNameContainer>
      </ArtistContainerHigher>
      <ArtistNormalContainer
          data-sal="slide-right"
          data-sal-delay="200"
      >
      <JpegContainer>
          <ArtistImgWide
            fluid={data.jpegHome.childImageSharp.fluid}
          />
          <JpegNameContainer>
            <ArtistName>JPEG13</ArtistName>
          </JpegNameContainer>
      </JpegContainer>
      <div style={{ flex: "1"}}/>
      </ArtistNormalContainer>
      <ArtistContainerHigher style={{ height: '100%' }}>
          <MokerContainer 
            data-sal="slide-right"
            data-sal-delay="200"
            >
              <ArtistImg 
                fluid={data.mokerHome.childImageSharp.fluid}
              />
            <MokerNameContainer>
              <ArtistName>MOKER</ArtistName>
            </MokerNameContainer>
          </MokerContainer>
          <KrzywyContainer 
              data-sal="slide-left"
              data-sal-delay="350"
            >
            <FAQContainer >
              <ContactCTAHeader>FAQ</ContactCTAHeader>
              <p>Masz pytania?</p>
              <p>Wszystkie odpowiedzi w zakładce!</p>
              <ContactCTABtn>DOWIEDZ SIĘ WIĘCEJ!</ContactCTABtn>
            </FAQContainer>
            <ArtistImg 
              fluid={data.krzywyHome.childImageSharp.fluid}
            />
            <KrzywyNameContainer>
              <ArtistName>KRZYWY</ArtistName>
            </KrzywyNameContainer>
          </KrzywyContainer>
      </ArtistContainerHigher>
      <ArtistContainerHigher>
        <div 
            data-sal="slide-right"
            data-sal-delay="200"
          style={{ flex: "1", position: 'relative'}}>
          <ArtistImg fluid={data.jaroniHome.childImageSharp.fluid} />
          <JaroniNameContainer>
            <ArtistName>JARONI</ArtistName>
          </JaroniNameContainer>
        </div>
        <ContactCTAContainer>
          <ContactCTAHeader>KONTAKT</ContactCTAHeader>
          <p>Lorem ipsum</p>
          <p>dolor sit amet auwktaiurm</p>
          <ContactCTABtn>DOWIEDZ SIĘ WIĘCEJ</ContactCTABtn>
        </ContactCTAContainer>
      </ArtistContainerHigher>
    </>
  )
}

const artistsImagesQuery = graphql`
query {
  luleoneHome: file(relativePath: { eq: "luleone-home.png" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
  kolankoHome: file(relativePath: { eq: "kolanko-home.png" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
  lapiLopiHome: file(relativePath: { eq: "łapi-łopi-home.png" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
  jaroniHome: file(relativePath: { eq: "jaroni.png" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
  pelikanHome: file(relativePath: { eq: "pelikan-home.png" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
  jpegHome: file(relativePath: { eq: "jpeg13-home.png" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
  mokerHome: file(relativePath: { eq: "moker-home.png" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
  krzywyHome: file(relativePath: { eq: "krzywy-home.png" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

export default Artists
