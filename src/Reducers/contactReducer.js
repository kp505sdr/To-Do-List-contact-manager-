const initialState = {
  contacts: [
    { 
      id: 1,
      name: "Karan Sahani",
      email: "karandp505@gmail.com",
      phone: "8115784664",
      
     
    },
   
  
   
  
  
  
  

  ],

  UpdateContact: null, //make for update data by user ID
};

// ===========================================================================
const ContactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [
          {
            id: action.payload.id,
            name: action.payload.name,
            email: action.payload.email,
            phone: action.payload.phone,
          },
          ...state.contacts,
        ],
      };
    // =============================================================================

    case "GET_CONTACT": //fetching data by uniq ID for Update
      let arr = state.contacts.filter(
        (EditContact) => EditContact.id == action.payload
      );
      arr = arr.values();
      let myNewValue;
      for (let val of arr) {
        //for convert [{}] to {}
        myNewValue = val;
      }
      return {
        ...state,
        UpdateContact: myNewValue, //store data in UpdateContact state
      };
    // =======================================================================

    case "UPDATE_CONTACT": //for submit edited details
      return {
        ...state,
        contacts: state.contacts.map((data) =>
          data.id == action.payload.id ? action.payload : data
        ),
      };

    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id != action.payload
        ),
      };
    default:
      return state;
  }
};
export default ContactReducer;
