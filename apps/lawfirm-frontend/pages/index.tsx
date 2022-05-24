import { useEffect, useState } from 'react';
import Signup from '../components/signup/Signup';
import Confirmemail from '../components/signup/Confirmemail';
import React, { ReactElement } from 'react';
import { gql, useMutation } from '@apollo/client';
import Toastbar from '../components/Toastbar';

const ADD_USER = gql`
  mutation (
    $firstname: String!
    $lastname: String!
    $email: String!
    $gender: String!
    $phoneno: Int!
    $address: String!
    $pincode: Int!
    $password: String!
    $accepted_terms: Boolean!
    $email_verified: Boolean!
  ) {
    addUser(
      credentials: {
        firstname: $firstname
        lastname: $lastname
        email: $email
        gender: $gender
        phoneno: $phoneno
        address: $address
        pincode: $pincode
        password: $password
        accepted_terms: $accepted_terms
        email_verified: $email_verified
      }
    )
  }
`;
export function Index(): ReactElement {
  const [confirmEmail, setConfirmEmail] = useState(false);
  const [notify, setNotify] = useState({
    message: '',
    type: '',
    isOpen: false,
  });
  const [checked, setChecked] = useState(false);
  const [credentials, setCredentials] = useState({
    firstname: '',
    lastname: '',
    email: '',
    gender: '',
    phoneno: '',
    address: '',
    pincode: '',
    accepted_terms: checked,
    email_verified: false,
    password: '',
  });
  const [add_user, { loading, error, data }] = useMutation(ADD_USER);
  async function handleSubmit() {
    if (checked) {
      await add_user({
        variables: {
          firstname: credentials.firstname,
          lastname: credentials.lastname,
          email: credentials.email,
          gender: credentials.gender,
          phoneno: parseInt(credentials.phoneno),
          address: credentials.address,
          pincode: parseInt(credentials.pincode),
          password: credentials.password,
          accepted_terms: checked,
          email_verified: false,
        },
      })
        .then(() => {
          setConfirmEmail(true);
          setNotify({ message: 'confirmed', type: 'success', isOpen: true });
          console.log('success');
        })

        .catch((err) =>
          setNotify({
            message: 'something went wrong',
            type: 'error',
            isOpen: true,
          })
        );
    } else {
      window.alert('please accept the terms and conditions to proceed');
    }
  }
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <>
      {!confirmEmail ? (
        <>
          <Signup
            handleSubmit={handleSubmit}
            setCredentials={setCredentials}
            credentials={credentials}
            setChecked={setChecked}
          />
          {notify.isOpen && (
            <Toastbar
              message={notify.message}
              type={notify.type}
              setIsOpen={setNotify}
            />
          )}
        </>
      ) : (
        <Confirmemail
          username={credentials?.email ? credentials.email : null}
        />
      )}
    </>
  );
}
export default Index;
