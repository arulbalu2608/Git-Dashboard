import React from 'react';
import { Row, Col, Alert } from 'react-bootstrap';
import UserCard from '../UserCard';
import RepoCard from '../RepoCard';
import { strings } from '../../helpers/constants';

const GitSection = (props) => {
  const { error, userData } = props
  return (
    <>
      {error && <Alert variant="danger">{error}</Alert>}
      {userData && (
        <>
          <div>
            <h3>{strings.userDetail}</h3>
            <UserCard user={userData} />
          </div>
          <div className='mt-3'>
            <h3>{`Repo Details (${userData?.repositories?.totalCount})`}</h3>
            <Row>
              {
                userData?.repositories.nodes?.map((data) => {
                  return (
                    <Col sm={6} md={4} className='my-3'>
                      <RepoCard repo={data} />
                    </Col>
                  )
                })
              }
            </Row>

          </div>
        </>
      )}</>
  )
}

export default GitSection