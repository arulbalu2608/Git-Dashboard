import React from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
const UserCard = (props) => {

    // Destructuring properties from the 'user' prop for easier access.

    const {
        login,
        name,
        avatarUrl,
        following,
        followers,
        email,
        repositories,
        contributionsCollection,
        public_repo,
    } = props.user

    return (
        <Card >
            <Row>
                <Col sm={12} md={4}>
                    <Image src={avatarUrl} thumbnail />
                </Col>
                <Col className='d-flex align-items-center' sm={12} md={8}>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            <p>Username: {login}</p>
                            <p>Email: {!!email ? email : "N/A"}</p>
                            <p> Followers: {followers?.totalCount}</p>
                            <p>Following: {following?.totalCount}</p>
                            <p>Public Repositories: {public_repo?.totalCount}</p>
                            <p>Total Repositories: {repositories?.totalCount}</p>
                            <p>Total Contributions: {contributionsCollection?.contributionCalendar?.totalContributions}</p>
                        </Card.Text>
                    </Card.Body>
                </Col>
            </Row>

        </Card>
    );
};

export default UserCard;
