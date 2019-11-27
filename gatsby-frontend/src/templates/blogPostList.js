import React from "react"
import Layout from "../components/layout"
import Container from "@material-ui/core/Container"
import { Link } from "gatsby"
import styled from "styled-components"
import Button from "@material-ui/core/Button"

const Pagination = styled.div`
  display: flex;
  justify-content: flex-end;
`

const PageNumberWrapper = styled.div`
  border: 1px solid #eee;
  background: ${props => (props.isCurrentPage ? "#253A52" : "white")};
  color: ${props => (props.isCurrentPage ? "white" : "black")};
`
const PageNumber = styled(Link)`
  disply: block;
  padding: 8px 16px;
`

export default ({ pageContext }) => (
  <Layout>
    <Container maxWidth="md" style={{ padding: "1rem 0" }}>
      {pageContext.posts.map(post => (
        <div key={post.node.wordpress_id}>
          <h3 dangerouslySetInnerHTML={{ __html: post.node.title }} />
          <small>{post.node.date}</small>
          <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
          <Button variant="contained" color="default">
            <Link to={`/post/${post.node.slug}`}>Read more</Link>
          </Button>
        </div>
      ))}
      <Pagination>
        {Array.from({ length: pageContext.numberOfPages }).map(
          (page, index) => (
            <PageNumberWrapper
              key={index}
              isCurrentPage={index + 1 === pageContext.currentPage}
            >
              <PageNumber to={index === 0 ? "/blog" : `/blog/${index + 1}`}>
                {index + 1}
              </PageNumber>
            </PageNumberWrapper>
          )
        )}
      </Pagination>
    </Container>
  </Layout>
)
