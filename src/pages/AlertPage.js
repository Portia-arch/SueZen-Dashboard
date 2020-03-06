import Page from 'components/Page';
import Typography from 'components/Typography';
import React from 'react';
import {
    Alert,
    Card,
    CardBody,
    CardHeader,
    Col,
    Row,
    UncontrolledAlert,
} from 'reactstrap';

const AlertPage = () => {
    return (
        <Page title="Alerts" breadcrumbs= {[{name: 'alerts', active: true}]}>
            <Row>
                <Col>
                <Card>
                    <CardHeader>
                        
                    </CardHeader>
                </Card>
                </Col>
            </Row>
        </Page>
    )
}