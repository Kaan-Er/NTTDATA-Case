import {post} from '.';
import {TestProps} from './types';

/**
 * It takes in an email and password, and returns a promise that resolves to an object with a token and
 * user
 * @param email - The email address of the user
 * @param password - string
 * @returns The result of the post request.
 */
export const test: TestProps = async (email, password) => {
  const data = {
    email,
    passwd: password,
  };
  const result = await post('/test/', '', data);
  return result;
};
