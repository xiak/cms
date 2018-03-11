import RenderAuthorized from '../components/Authorized';
import { getAuthority } from './authority';

const Authority = getAuthority();
let Authorized = RenderAuthorized(Authority); // eslint-disable-line
// Reload the rights component
const reloadAuthorized = () => {
  Authorized = RenderAuthorized(Authority);
};
export { Authority, reloadAuthorized };
export default Authorized;
