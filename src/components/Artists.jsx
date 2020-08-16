import React from "react"
import { graphql, useStaticQuery, Link, navigate } from "gatsby"
import styled from "styled-components"
import { CircleArrowButton, BtnContainer }  from './CircleArrowButton';
import { device } from "../helpers/mediaQueries";
import { CustomImage } from './CustomImage';
import { StyledAnchorLink } from "../components/StyledAnchorLink";
import { Routes } from "../helpers/routes";

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

const EvolContainer = styled(ArtistNormalContainer)`
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

const MigotContainer = styled(ArtistNormalContainer)`
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
  z-index: 2;
`

const NameWrapper = styled.div`
  position: relative;
  flex: 1 1 100%;
  z-index: 10;
`

const KrzywyNameWrapper = styled(NameWrapper)`
  order: 1;
  @media ${device.laptop} {
    order: 0;
  }
`;

const LuleoneNameContainer = styled(ArtistNameBase)`
  bottom: 0;
  width: 200px;
`

const KrzywyNameContainer = styled(ArtistNameBase)`
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

const MichalNameContainer = styled(ArtistNameBase)`
  top: 0;
  right: 0;
  width: 180px;
`

const SzoszekNameContainer = styled(ArtistNameBase)`
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

const EvolNameContainer = styled(ArtistNameBase)`
  bottom: 15px;
  left: 0;
  width: 180px;
  @media ${device.laptop} {
    top: 0;
  }
`

const MigotNameContainer = styled(ArtistNameBase)`
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

const ContactCTABtn = styled(Link)`
  color: white;
  font-size: 14px;
  letter-spacing: 3px;
  padding: 15px 45px;
  border: 1px solid #ffffff;
  border-radius: 51px;
  background-color: transparent;
  transition: all 0.3s linear;
  cursor: pointer;
  text-transform: uppercase;
  text-decoration: none;
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

const ArtistImg = styled(CustomImage).attrs({ isClickable: true })`
  flex: 1 1 100%;
  width: 100%;
  height: 100%;
  @media ${device.laptop} {
    flex: 1 1 100%;
    width: 100%;
  }

`

const ArtistImgWide = styled(ArtistImg)`
  flex: 2 1 100%;
  width: 100%;
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
    <div id='crew'>
      <MainArtistContainer
        data-sal="slide-right"
        data-sal-delay="200"
      >
        <ArtistImg
          fluid={data.luleoneHome.childImageSharp.fluid}
          alt='Luleone'
          onClick={() => navigate('/artists/luleone')}
        />
        <OurCrewContainer>
            <section>
              <StyledSectionTitle 
              data-sal="slide-right"
              data-sal-delay="400"
              >
                Nasza ekipa
              </StyledSectionTitle>
              <StyledAnchorLink to={Routes.FAQ()}>
                <CircleArrowButton label='Poznaj' />
              </StyledAnchorLink>
            </section>
          <LuleoneNameContainer>
            <ArtistName>LULEONE</ArtistName>
          </LuleoneNameContainer>
        </OurCrewContainer>
      </MainArtistContainer>
      <ArtistNormalContainer
        id='next-artist'
        data-sal="slide-left"
        data-sal-delay="200"
      >
        <KrzywyNameWrapper>
          <KrzywyNameContainer>
            <ArtistName>KRZYWY</ArtistName>
          </KrzywyNameContainer>
        </KrzywyNameWrapper>
        <ArtistImgWide
          onClick={() => navigate('/artists/krzywy')}
          fluid={data.krzywyHome.childImageSharp.fluid}
        />
      </ArtistNormalContainer>
      <ArtistNormalContainer
        data-sal="slide-right"
        data-sal-delay="200"
      >
        <MarginLeftImageWide
          onClick={() => navigate('/artists/lapi-lopi')}
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
            onClick={() => navigate('/artists/szoszek')}
            fluid={data.szoszekHome.childImageSharp.fluid}
          />
          <SzoszekNameContainer>
            <ArtistNameAlternative>SZOSZEK</ArtistNameAlternative>
          </SzoszekNameContainer>
      </ArtistContainerHigher>
      <ArtistNormalContainer
          data-sal="slide-right"
          data-sal-delay="200"
      >
      <JpegContainer>
          <ArtistImgWide
            onClick={() => navigate('/artists/jpeg13')}
            fluid={data.jpegHome.childImageSharp.fluid}
          />
          <JpegNameContainer>
            <ArtistName>JPEG13</ArtistName>
          </JpegNameContainer>
      </JpegContainer>
      <div style={{ flex: "1"}}/>
      </ArtistNormalContainer>
      <ArtistContainerHigher style={{ height: '100%' }}>
          <EvolContainer 
            data-sal="slide-right"
            data-sal-delay="200"
            >
              <ArtistImg 
                fluid={data.evolHome.childImageSharp.fluid}
              />
            <EvolNameContainer>
              <ArtistName>EVOL</ArtistName>
            </EvolNameContainer>
          </EvolContainer>
          <MigotContainer 
              data-sal="slide-left"
              data-sal-delay="350"
            >
            <FAQContainer id='faq'>
              <ContactCTAHeader>FAQ</ContactCTAHeader>
              <p>Masz pytania?</p>
              <p>Wszystkie odpowiedzi w zakładce!</p>
              <ContactCTABtn to='/faq'>DOWIEDZ SIĘ WIĘCEJ!</ContactCTABtn>
            </FAQContainer>
            <ArtistImg 
            onClick={() => navigate('/artists/migot')}
              fluid={data.migotHome.childImageSharp.fluid}
            />
            <MigotNameContainer>
              <ArtistName>MIGOT</ArtistName>
            </MigotNameContainer>
          </MigotContainer>
      </ArtistContainerHigher>
      <ArtistContainerHigher>
        <div 
            data-sal="slide-right"
            data-sal-delay="200"
          style={{ flex: "1", position: 'relative'}}>
          <ArtistImg fluid={data.michalHome.childImageSharp.fluid} onClick={() => navigate('/artists/michal')} />
          <MichalNameContainer>
            <ArtistName>MICHAŁ</ArtistName>
          </MichalNameContainer>
        </div>
        <ContactCTAContainer>
          <ContactCTAHeader>KONTAKT</ContactCTAHeader>
          <p>Skontaktuj się z nami</p>
          <ContactCTABtn to='/contact'>Dowiedz się więcej</ContactCTABtn>
        </ContactCTAContainer>
      </ArtistContainerHigher>
    </div>
  )
}

const artistsImagesQuery = graphql`
query {
  luleoneHome: file(relativePath: { regex: "/luleone_main/" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
  krzywyHome: file(relativePath: { regex: "/krzywy_main/" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
  jpegHome: file(relativePath: { regex: "/jpg_main/" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
  lapiLopiHome: file(relativePath: { regex: "/lapilopi_main/" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
  szoszekHome: file(relativePath: { regex: "/szoszek_main/" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
  migotHome: file(relativePath: { regex: "/migot_main/" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
  evolHome: file(relativePath: { regex: "/evol_main/" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
  michalHome: file(relativePath: { regex: "/michal_main/" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`;
