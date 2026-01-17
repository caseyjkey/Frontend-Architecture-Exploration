import { graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import { Layout } from '../components/Layout'

const IndexWrapper = styled.main``

const PostWrapper = styled.div``

const Image = styled(GatsbyImage)`
    border-radius: 5px;
`

export default function App({ data }) {
    return (
        <div>
            <Layout>
                <IndexWrapper>
                    {/* <Dump data={data}></Dump> */}
                    {data.allMdx.nodes.map(
                        ({ id, excerpt, frontmatter, fields }) => (
                            <PostWrapper key={id}>
                                <Link to={fields.slug}>
                                    {!!frontmatter.cover ? (
                                        <Image
                                            image={frontmatter.cover.childImageSharp}
                                            layout="fullWidth"
                                        />
                                    ) : null }
                                    <h1>{frontmatter.title}</h1>
                                    <p>{frontmatter.date}</p>
                                    <p>{excerpt}</p>
                                </Link> 
                            </PostWrapper>
                        ))}
                </IndexWrapper>
            </Layout>
        </div>
    )
}

export const query = graphql`
    query SITE_INDEX_QUERY {
        allMdx(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { published: { eq: true } } }
        ) {
            nodes {
                id
                excerpt(pruneLength: 250)
                frontmatter {
                    title
                    date(formatString: "YYYY MMMM Do")
                    cover {
                        publicURL
                        childImageSharp {
                            gatsbyImageData(layout: FULL_WIDTH)
                        }
                    }
                }
                fields {
                    slug
                }
            }
        }
    }
`