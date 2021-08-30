export const addContact = (data) => {
  return {
    type: "ADD_CONTACT",
    payload: data,
  };
};

export const getContact = (id) => {
  return {
    type: "GET_CONTACT",
    payload: id,
  };
};
export const updateContact1 = (data) => {
  return {
    type: "UPDATE_CONTACT",
    payload: data,
  };
};

export const deleteContact = (id) => {
  return {
    type: "DELETE_CONTACT",
    payload: id,
  };
};
