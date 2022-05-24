import { UserDB } from './index';

async function createUser(credentials): Promise<any> {
  return (await UserDB.create(credentials)).toObject();
}

async function getUserId(email): Promise<any> {
  return await UserDB.findOne({ email: email });
}

async function updateUserById(user, updatingValue): Promise<any> {
  return await UserDB.updateOne({ _id: user._id }, updatingValue);
}
export { createUser, getUserId, updateUserById };
