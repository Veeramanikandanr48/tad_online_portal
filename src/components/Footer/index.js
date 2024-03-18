import React from 'react';
import {CDBBtn, CDBIcon } from 'cdbreact';

const Footer = () => {
  return (
      <div
        className="d-flex justify-content-between bg-dark w-100 text-white align-items-center mx-auto p-4 flex-wrap"
        style={{ width: '80%' }}
      >
        <div>
          <small className="ms-2">&copy;TAD Online Portal, 2024. All rights reserved.</small>
        </div>
        <div className="d-flex">
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="facebook-f" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="mx-3 p-2">
            <CDBIcon fab icon="twitter" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="instagram" />
          </CDBBtn>
        </div>
      </div>
  );
};

export default Footer