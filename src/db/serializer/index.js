export const getDataUser = (data) => {
  if (!data) return;

  return {
    email: data.email,
  };
};
