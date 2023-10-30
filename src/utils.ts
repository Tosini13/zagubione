export const getIconSrc = (name: string) => `/icons/${name}`;

export const getDBFileSrc = (
  collection: string,
  recordId: string,
  filename: string,
  thumb?: string
) =>
  `${process.env.REACT_APP_POCKET_BASE_SERVER_URL}/api/files/${collection}/${recordId}/${filename}?thumb=${thumb}`;
