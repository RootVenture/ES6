import { uniq } from 'lodash';
import insane from 'insane';
import jsonp from 'jsonp';
import { apiKey, url, sayHi } from './src/config';
import User, { createURL, gravatar } from './src/user';

const user = new User('Ray Wu', 'raywu@gmail.com', 'raywu.com');
console.log(user);

const profile = createURL(user.name);
const image = gravatar(user.email);

console.log(profile, image);
