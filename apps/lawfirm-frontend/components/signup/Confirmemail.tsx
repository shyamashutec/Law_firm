import { useState } from 'react';
import { Auth } from 'aws-amplify';
import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
import { gql, useMutation } from '@apollo/client';

const VERIFY_EMAIL = gql`
  mutation ($email: String!) {
    verifyUserEmail(username: $email)
  }
`;
export function Confirmemail({ username }): ReactElement {
  const router = useRouter();
  const [code, setCode] = useState('');

  const [verify_email, { loading, error, data }] = useMutation(VERIFY_EMAIL);

  function handleChange(e) {
    setCode(e.target.value);
  }
  function handlesubmit(e) {
    e.preventDefault();
    Auth.confirmSignUp(username, code)
      .then(async () => {
        console.log('success', 'Succesfully confirmed!');
        await verify_email({
          variables: {
            email: username,
          },
        });

        router.push('/login');
      })
      .catch((err) => {
        console.log('error', 'Invalid code', err.message);
      });
  }
  return (
    <>
      <div className="w-2/6 m-auto bg-hero  flex flex-col justify-center items-center rounded-xl mt-16 shadow-2xl ">
        <div className="w-full flex justify-center items-center flex-col">
          <form onSubmit={(e) => handlesubmit(e)}>
            <label className="block text-sm font-medium text-gray-700 mt-3">
              Check your email
              <p>We've sent a six­ digit confirmation code</p>
            </label>
            <input
              type="number"
              placeholder="Enter confirmation code"
              className="w-full mt-5 mb-5 h-10 rounded-lg pl-2"
              onChange={(e) => handleChange(e)}
              value={code}
            />
            <button className="inline-flex items-center justify-center px-5 py-2 mt-3 mb-5 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
              submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Confirmemail;
