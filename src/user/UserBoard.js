import React from 'react';
import Layout from '../main/Layout';
import { Link } from 'react-router-dom';

import { isAuthenticated } from '../backEnd';

export default function UserBoard() {
  const {
    user: { _id, name, email, role }
  } = isAuthenticated();

  const userLinks = () => {
    return (
      <div className="card">
        <h4 className="card-header">User Links</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <Link className="nav-link" to="/cart">
              Shoping Cart
            </Link>
          </li>
          <li className="list-group-item">
            <Link className="nav-link" to={`/profile/${_id}`}>
              Update Profile
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  const userInfo = () => {
    return (
      <div className="card mb-5">
        <h3 className="card-header">User Information</h3>
        <ul className="list-group">
          <li className="list-group-item">{name}</li>
          <li className="list-group-item">{email}</li>
          <li className="list-group-item">
            {role === 1 ? 'Admin' : 'Regular User'}
          </li>
        </ul>
      </div>
    );
  };

  const purchaseHis = () => {
    return (
      <div className="card mb-5">
        <h3 className="card-header">Purcahse history</h3>
        <ul className="list-group">
          <li className="list-group-item">histoy</li>
        </ul>
      </div>
    );
  };

  return (
    <Layout title="Dashboard" description={`Hi ${name}`} className="container">
      <div className="row">
        <div className="col-3">{userLinks()}</div>
        <div className="col-9">
          {userInfo()}
          {purchaseHis()}
        </div>
      </div>
    </Layout>
  );
}