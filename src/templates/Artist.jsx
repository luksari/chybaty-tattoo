import React from 'react';
import { Layout } from "../components/Layout";
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Image from 'gatsby-image';
import { CircleArrowButton } from '../components/CircleArrowButton';
import { ArtistPhotosGrid } from '../components/ArtistPhotosGrid';
import { device } from "../helpers/mediaQueries";
import { StyledAnchorLink } from '../components/StyledAnchorLink';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`

const Heading = styled.h1`
  color: #fff;
  text-transform: uppercase;
  font-weight: 400;
  grid-column: 1/-1;
  margin-bottom: 0;
  text-align: center;
  letter-spacing: 8px;  
  font-size: 86px;
  @media ${device.tablet} {
    font-size: 122px;
    letter-spacing: 15px;
  }
  @media ${device.laptop} {
    font-size: 155px;
    letter-spacing: 36px;
    margin-left: -135px;
    z-index: 1;
    margin-top: 75px;
  }
`;

const ProfileImage = styled(Image)`
  flex: 1 1 100%;
  @media ${device.laptop} {
    width: 100%;
  }
  @media ${device.laptop} {
    width: 100%;
  }
`

const HeaderWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media ${device.laptop} {
    flex-wrap: nowrap;
  }
`

const MainParagraph = styled.p`
  color: #fff;
  font-family: 'Exo 2', sans-serif;
  line-height: 24px;
  font-weight: 400;
  letter-spacing: 2.1px;
  margin-bottom: 0;
  grid-column: 1/-1;
  grid-row: 3/3;
  text-align: center;
  width: 70%;
  font-size: 14px;
  @media ${device.tablet} {
    font-size: 16px;
  }
  @media ${device.laptop} {
    width: 100%;
    grid-column: 2/2;
    text-align: start;
  }
`

const SideWrapper = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-row-gap: 15px;
  height: 100%;
  z-index: 1;
  background: #000000aa;
  justify-items: center;
  margin-bottom: 72px;
  @media ${device.laptop} {
    margin-bottom: 150px;
    grid-row-gap: 25px;
    margin-top: 0;
    height: 80%;
    padding: 35px;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto auto auto;
    max-width: 60%;
    margin-left: -50px;
    background: none;
    padding: 0;
  }
  @media ${device.laptopL} {
    margin-left: -75px;
    margin-right: 75px;
    max-width: 40%;
  }
`

const Categories = styled.p`
  margin: 0;
  font-size: 20px;
  color: #4b4b4b;
  font-family: 'Exo 2', sans-serif;
  grid-row: 2/2;
  grid-column: 1/1;
  width: 100%;
  margin-bottom: 0;
  text-align: center;
  @media ${device.laptopL} {
    grid-column: 2/2;
    text-align: start;
    margin-bottom: -15px;
  }
`

const SocialLink = styled.a`
  color: #fff;
  font-family: 'Exo 2', sans-serif;
  text-decoration: none;
  width: auto;
  position: relative;
  &::after {
    position: absolute;
    content: '';
    width: 75%;
    height: 2px;
    background: #fff;
    bottom: -5px;
    left: 0;
    transform: scaleX(0);
    transform-origin: 0 0;
    transition: transform 150ms ease-out;
  }
  &:hover {
    &::after {
      transform: scaleX(1);
    }
  }
  @media ${device.laptop} {
    text-align: center;
  }
`

const SocialLinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  grid-column: 1/-1;
  grid-row: 4/4;
  font-size: 14px;
  width: 100%;
  @media ${device.tablet} {
    font-size: 16px;
  }
  @media ${device.laptop} {
    justify-content: flex-start;
    grid-column: 2/2;
  }
`

const PositionedAnchorLink = styled(StyledAnchorLink)`
  align-self: start;
  grid-row: 5/5;
  @media ${device.laptop} {
    margin-left: -20px;
    grid-row: 2/-1;
  }
`

export default ({ data }) => {
  const artist = data.allSitePage.edges[0].node.context;
  const artistPhotos = data.photos.edges;
  const backPhotos = data.backPhotos.edges;
  const artistProfile = data.file.childImageSharp.fluid;
  return (
    <Layout title={artist.name}>
      <Wrapper>
        <HeaderWrapper>
          <ProfileImage fluid={artistProfile} />
          <SideWrapper>
            <Heading>{artist.name}</Heading>
            <Categories>{artist.categories}</Categories>
            <PositionedAnchorLink to='#image_2'>
              <CircleArrowButton label='Zobacz prace'/>
            </PositionedAnchorLink>
            <MainParagraph>{artist.mainDescription}</MainParagraph>
            <SocialLinkWrapper>
              <SocialLink href={`https://${artist.socialLink}`}>{artist.socialLink}</SocialLink>
            </SocialLinkWrapper>
          </SideWrapper>
        </HeaderWrapper>
        <ArtistPhotosGrid 
          backPhotos={backPhotos}
          photos={artistPhotos}
        />
      </Wrapper>
    </Layout>
  );
}

export const query = graphql`
  query($path: String!, $imagesRegex: String!, $profilePicture: String!, $backImagesRegex: String!) {
    allSitePage(filter: { path: { eq: $path } }) {
      edges {
        node {
          context {
            name
            mainDescription
            socialLink
            categories
          }
        }
      }
    },
    photos: allFile(sort: {fields: name}, filter: { absolutePath: { regex: $imagesRegex }}) {
      edges {
        node {
          name,
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    backPhotos: allFile(sort: {fields: name}, filter: { absolutePath: { regex: $backImagesRegex }}) {
      edges {
        node {
          name,
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    file(absolutePath: { regex: $profilePicture }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
