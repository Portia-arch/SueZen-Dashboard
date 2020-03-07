
import bg18Image from 'assets/img/bg/background_1920-18.jpg';
import Page from 'components/Page';
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardLink,
  CardText,
  CardTitle,
  Col,
  Row,
} from 'reactstrap';

const CardPage = () => {
  return (
    <Page title="Cards" breadcrumbs={[{ name: 'cards', active: true }]}>
      <Row>
            <Col md={6} sm={6} xs={12} className="mb-3">
          <Card>
            <CardImg top src={bg18Image} />
            <CardBody>
              <CardTitle>Card with list group</CardTitle>
              <CardText>
                This example shows how to use card with list group{' '}
              </CardText>
            </CardBody>
          
            <CardBody>
              <CardLink tag="a" href="#">
                Go to details
              </CardLink>
            </CardBody>
          </Card>
        </Col>

        <Col md={6} sm={6} xs={12} className="mb-3">
          <Card>
            <CardImg top src={bg18Image} />
            <CardBody>
              <CardTitle>Card with list group</CardTitle>
              <CardText>
                This example shows how to use card with list group{' '}
              </CardText>
            </CardBody>

            <CardBody>
              <CardLink tag="a" href="#">
                Go to details
              </CardLink>
            </CardBody>
          </Card>
        </Col>

        <Col md={6} sm={6} xs={12} className="mb-3">
          <Card>
            <CardImg top src={bg18Image} />
            <CardBody>
              <CardTitle>Card with list group</CardTitle>
              <CardText>
                This example shows how to use card with list group{' '}
              </CardText>
            </CardBody>

            <CardBody>
              <CardLink tag="a" href="#">
                Go to details
              </CardLink>
            </CardBody>
          </Card>
        </Col>

        <Col md={6} sm={6} xs={12} className="mb-3">
          <Card>
            <CardImg top src={bg18Image} />
            <CardBody>
              <CardTitle>Card with list group</CardTitle>
              <CardText>
                This example shows how to use card with list group{' '}
              </CardText>
            </CardBody>

            <CardBody>
              <CardLink tag="a" href="#">
                Go to details
              </CardLink>
            </CardBody>
          </Card>
        </Col>
      
      </Row>
    </Page>
  );
};

export default CardPage;
