import React from 'react';
import {Jumbotron} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

const Profile = props => (
<div>
  <Jumbotron>
    <div className="row">
      <div className="col-sm-3">
        <img src={props.picture} alt="profile pic" />
      </div>
      <div className="col-sm-9">
        <div className="row">
          <h3>{props.username}</h3>
          <Button>Edit Profile</Button>
        </div>
        <div className="row">
          <h5>{props.posts}</h5>
          <p>posts</p>
          <h5>{props.followers}</h5>
          <p>followers</p>
          <h5>{props.following}</h5>
          <p>following</p>
        </div>
        <div className="row">
          <h4>{props.name}</h4>
        </div>
      </div>
    </div>
  </Jumbotron>
</div>
);

export default Profile;
