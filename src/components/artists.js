import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import { CircleArrowButton, BtnContainer }  from '../components/CircleArrowButton';

const ArtistBaseContainer = styled.div`
  position: relative;
  display: flex;
`

const ArtistNormalContainer = styled(ArtistBaseContainer)`
  height: 550px;
`

const ArtistContainerHigher = styled(ArtistBaseContainer)`
  height: 750px;
`

const ArtistNameBase = styled.div`
  position: absolute;
  height: 30px;
  background-color: #4f4f4f;
`

const LuleoneNameContainer = styled(ArtistNameBase)`
  bottom: 0;
  width: 200px;
`

const KolankoNameContainer = styled(ArtistNameBase)`
  bottom: 0;
  right: 0;
  width: 200px;
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
  bottom: -30px;
  right: 16%;
  width: 205px;
`

const JpegNameContainer = styled(ArtistNameBase)`
  top: -30px;
  left: 0;
  width: 180px;
`

const MokerNameContainer = styled(ArtistNameBase)`
  top: -30px;
  left: 0;
  width: 180px;
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
`

const FAQContainer = styled(ContactCTAContainer)`
  padding: 69px 220px;
  /** @todo Fix when gfx exported */
  background: gray;
  height: 466px;

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
  -webkit-text-stroke-width: 5px;
  -webkit-text-stroke-color: #fff;
  font-size: 155px;
  width: 650px;
  margin-left: 40px;
  color: #fff;
  font-family: 'Unica One';
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 31px;
  line-height: 165px;
`

const OurCrewContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  div {
    display: flex;
    ${BtnContainer} {
      justify-content: flex-end;
      margin-bottom: 55px;
    }
  }
`

export const Artists = () => {
  const data = useStaticQuery(artistsImagesQuery)

  return (
    <>
      <ArtistNormalContainer
        data-sal="slide-right"
        data-sal-delay="200"
      >
        <Img
          fluid={data.luleoneHome.childImageSharp.fluid}
          style={{ flex: 1 }}
          alt='Luleone'
        />
        <OurCrewContainer
            style={{ flex: 2 }}>
            <div>
              <StyledSectionTitle 
              data-sal="slide-right"
              data-sal-delay="400"
              >
                Nasza ekipa
              </StyledSectionTitle>
              <CircleArrowButton label='Poznaj' />
            </div>
          <LuleoneNameContainer>
            <ArtistName>LULEONE</ArtistName>
          </LuleoneNameContainer>
        </OurCrewContainer>
      </ArtistNormalContainer>
      <ArtistNormalContainer           
        data-sal="slide-left"
        data-sal-delay="200"
      >
        <div style={{ flex: 1, position: "relative" }}>
          <KolankoNameContainer>
            <ArtistName>KOLANKO</ArtistName>
          </KolankoNameContainer>
        </div>
        <Img
          fluid={data.kolankoHome.childImageSharp.fluid}
          style={{ flex: 2 }}
        />
      </ArtistNormalContainer>
      <ArtistNormalContainer
        data-sal="slide-right"
        data-sal-delay="200"
      >
        <Img
          fluid={data.lapiLopiHome.childImageSharp.fluid}
          style={{ flex: "2", marginLeft: "140px" }}
        />
        <div style={{ flex: "1", position: "relative" }}>
          <LapiLopiNameContainer>
            <ArtistName>ŁAPI ŁOPI</ArtistName>
          </LapiLopiNameContainer>
        </div>
      </ArtistNormalContainer>
      <ArtistContainerHigher         
        data-sal="slide-left"
        data-sal-delay="200"
        >
        <div style={{ flex: "2" }}/>
          <Img
            fluid={data.pelikanHome.childImageSharp.fluid}
            style={{ flex: "1", position: "relative", marginLeft: '140px'}}
          />
          <PelikanNameContainer>
            <ArtistNameAlternative>PELIKAN</ArtistNameAlternative>
          </PelikanNameContainer>
      </ArtistContainerHigher>
      <ArtistNormalContainer
          data-sal="slide-right"
          data-sal-delay="200"
      >
      <div style={{ flex: "2", position: "relative", marginLeft: '140px' }}>
          <Img
            fluid={data.jpegHome.childImageSharp.fluid}
          />
          <JpegNameContainer>
            <ArtistName>JPEG13</ArtistName>
          </JpegNameContainer>
      </div>
      <div style={{ flex: "1"}}/>
      </ArtistNormalContainer>
      <ArtistContainerHigher style={{ height: '100%' }}>
      {/**
        @help
        Stuck here to place Moker in center vertically to Krzywy
        possible solutions: margin-bottom
       */}
          <div 
            data-sal="slide-right"
            data-sal-delay="200"
            style={{ flex: "1", 'display': 'flex', alignItems: 'flex-end', 'justifyContent': 'flex-end' }}>
              <div style={{ flex: '1', position: 'relative', marginLeft: '140px', marginBottom: '140px' }}>
                <Img 
                  fluid={data.mokerHome.childImageSharp.fluid}
                />
              <MokerNameContainer>
                <ArtistName>MOKER</ArtistName>
              </MokerNameContainer>
              </div>
          </div>
          <div 
              data-sal="slide-left"
            data-sal-delay="350"
            style={{ flex: "1", position: 'relative', marginRight: '140px' }}>
            <FAQContainer >
              <ContactCTAHeader>FAQ</ContactCTAHeader>
              <p>Masz pytania?</p>
              <p>Wszystkie odpowiedzi w zakładce!</p>
              <ContactCTABtn>DOWIEDZ SIĘ WIĘCEJ!</ContactCTABtn>
            </FAQContainer>
            <Img 
              fluid={data.krzywyHome.childImageSharp.fluid}
            />
            <KrzywyNameContainer>
              <ArtistName>KRZYWY</ArtistName>
            </KrzywyNameContainer>
          </div>
      {/**
        @help
        Stuck here to place Krzywy in the right upper corner 
        to Jaroni
       */}
      </ArtistContainerHigher>
      <ArtistContainerHigher>
        <div 
            data-sal="slide-right"
            data-sal-delay="200"
          style={{ flex: "1", position: "relative" }}>
          <Img fluid={data.jaroniHome.childImageSharp.fluid} />
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
