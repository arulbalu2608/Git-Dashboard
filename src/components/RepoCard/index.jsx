import React from 'react';
import Card from 'react-bootstrap/Card';
import { getFormattedDate } from '../../helpers/getFormattedDate';

const RepoCard = (props) => {
    // Destructuring properties from the repo prop for easier access.
    const {
        name,
        stargazerCount,
        issues, pullRequests,
        defaultBranchRef,
        forkCount,
        updatedAt,
    } = props.repo

    return (
        <Card className='cardHover'>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <p>Commits: {defaultBranchRef?.target?.history?.totalCount}</p>
                    <p>Pull Request: {pullRequests?.totalCount}</p>
                    <p>Issues: {issues?.totalCount}</p>
                    <p>Stargazer: {stargazerCount}</p>
                    <p>Forks: {forkCount}</p>
                    <p> updatedAt: {getFormattedDate(updatedAt)}</p>
                </Card.Text>
            </Card.Body>

        </Card>
    );
};

export default RepoCard;


