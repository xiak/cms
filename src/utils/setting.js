const protocol = 'http';
const rootUrl = '127.0.0.1';
const version = 'v1';
const port = '8218';
export const appUrl = `${protocol}://${rootUrl}:${port}`;
export const apiUrl = `${appUrl}/${version}`;
export const picUploadUrl = `//${rootUrl}:${port}/${version}`;
export const fileUploadUrl = `//${rootUrl}:${port}/${version}`;
export const pictureUrl = `${appUrl}/attachment`;

export default {
  appUrl,
  apiUrl,
  picUploadUrl,
  fileUploadUrl,
  pictureUrl,
};
