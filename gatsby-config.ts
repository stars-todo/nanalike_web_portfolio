import type { GatsbyConfig } from 'gatsby';

require('dotenv').config();

const config: GatsbyConfig = {
  siteMetadata: {
    title: `nanalike | 웹 포트폴리오`,
    description: `웹 퍼블리셔 나나의 웹 포트폴리오. 사용하기 쉬운 UI와 기억에 남는 UX를 개발하는 일을 해요.`,
    siteUrl: `https://nykim.net`,
    image: `/ogImage.png`
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['UA-102680245-1'],
        pluginConfig: {
          // Avoids sending pageview hits from custom paths
          // exclude: ['/preview/**', '/do-not-track/me/too/'],
        }
      }
    },
    `gatsby-plugin-sass`,
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1600
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
        ignore: [`**/\.*`, '.cache/']
      },
      __key: 'images'
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-transformer-yaml`,
      options: {
        typeName: `Yaml`
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: `${__dirname}/src/static/favicon.svg`
      }
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'ko-KR'
      }
    }
  ]
};

export default config;
