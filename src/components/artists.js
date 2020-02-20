import React, { useRef, useEffect, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import posed from "react-pose"
import { useOnScreen } from '../helpers/useOnScreen';

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

const AnimatedSectionTitle = posed.h2({
  enter: { 
    x: 0,
    delay: 200,
  },
  exit: { x: '100vw' }
});

const StyledSectionTitle = styled(AnimatedSectionTitle)`
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 5px;
  -webkit-text-stroke-color: #fff;
  font-size: 155px;
  width: 656px;
  color: #fff;
  font-family: 'Unica One';
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 31px;
  line-height: 165px;
`

export const Artists = () => {
  const data = useStaticQuery(artistsImagesQuery)
  const titleContainerRef = useRef()
  const isTitleIntersected = useOnScreen(titleContainerRef, '-300px');
  const [didElementShown, setDidElementShown] = useState(false);

  useEffect(() => {
    if(isTitleIntersected) {
      setDidElementShown(true);
    }
  }, [isTitleIntersected])

  return (
    <>
      <ArtistNormalContainer>
        <Img
          fluid={data.luleoneHome.childImageSharp.fluid}
          style={{ flex: "1" }}
        />
        <div style={{ flex: "2" }} ref={titleContainerRef}>
        <StyledSectionTitle 
          initialPose='exit'
          pose={isTitleIntersected || didElementShown ? 'enter' : 'exit'}>
            Nasza ekipa
        </StyledSectionTitle>
          <LuleoneNameContainer>
            <ArtistName>LULEONE</ArtistName>
          </LuleoneNameContainer>
        </div>
      </ArtistNormalContainer>
      <ArtistNormalContainer>
        <div style={{ flex: "1", position: "relative" }}>
          <KolankoNameContainer>
            <ArtistName>KOLANKO</ArtistName>
          </KolankoNameContainer>
        </div>
        <Img
          fluid={data.kolankoHome.childImageSharp.fluid}
          style={{ flex: "2" }}
        />
      </ArtistNormalContainer>
      <ArtistNormalContainer>
        <Img
          fluid={data.lapiLopiHome.childImageSharp.fluid}
          style={{ flex: "2", marginLeft: "70px" }}
        />
        <div style={{ flex: "1", position: "relative" }}>
          <LapiLopiNameContainer>
            <ArtistName>ŁAPI ŁOPI</ArtistName>
          </LapiLopiNameContainer>
        </div>
      </ArtistNormalContainer>
      <ArtistContainerHigher>
        <div style={{ flex: "2"}}></div>
          <Img
            fluid={data.pelikanHome.childImageSharp.fluid}
            style={{ flex: "1", position: "relative", "marginLeft": '65px'}}
          />
          <PelikanNameContainer>
            <ArtistNameAlternative>PELIKAN</ArtistNameAlternative>
          </PelikanNameContainer>
      </ArtistContainerHigher>
      <ArtistContainerHigher>
      <div style={{ flex: "0.65", position: "relative", 'marginLeft': '140px' }}>
          <Img
            fluid={data.jpegHome.childImageSharp.fluid}
            style={{ flex: "1", position: "relative" }}
          />
          <JpegNameContainer>
            <ArtistName>JPEG13</ArtistName>
          </JpegNameContainer>
      </div>
      </ArtistContainerHigher>
      <ArtistContainerHigher>
        <div style={{ flex: "1", position: "relative" }}>
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
}
`

export default Artists
