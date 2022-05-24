import { Auth } from 'aws-amplify';
import { createUser, getUserId, updateUserById } from './index';

/**
 * Register user
 */

async function addUser({ credentials }) {
  const data = await Auth.signUp({
    username: credentials.email,
    password: credentials.password,
    attributes: {
      email: credentials.email,
      name: `${credentials.firstname} ${credentials.lastname}`,
      phone_number: `+91${credentials.phoneno}`,
    },
  })
    .then(() => {
      return 'success';
    })

    .catch((err) => {
      throw new Error(err.message);
    });
  if (data === 'success') {
    var result = await createUser(credentials)
      .then(() => 'success')
      .catch((err) => {
        throw new Error(err.message);
      });
  }
  return result;
}

/**
 * Update user details by id
 */

async function verifyUserEmail({ username }) {
  var result = await getUserId(username).then((data) => data);

  if (result) {
    if (!result.email_verified) {
      var res = await updateUserById(result, { email_verified: true }).then(
        () => {
          return 'success';
        }
      );
    } else {
      throw new Error('Already confirmed');
    }
  } else {
    throw new Error('User not Found');
  }
  return res;
}

export { addUser, verifyUserEmail };
