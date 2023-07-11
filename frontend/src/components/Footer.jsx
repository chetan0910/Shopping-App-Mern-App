import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'

const Footer = () => {
  return (
    <>
      <footer> {/* footer is an HTML tag*/}
        <Container>
            <Row>
                <Col className='text-center'>
                    <span>
                        Copyright &copy; Techinfo YT
                    </span>
                </Col>
            </Row>
        </Container>

      </footer>
    </>
  )
}

export default Footer
