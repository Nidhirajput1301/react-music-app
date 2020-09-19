export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // remove after finished developing....
  token: 'BQDgvkl0df4AIDkukVtr_RLTj-tTw-4FyNxL2mF6jebH3OD12rfOj68M_5MqzwBS4Jnf-JASyHQbLy81YSWqYyeEm70gVdvOX0x5NTX-21MwV3dElec4V53CyUANo8utZdZDX55Mrmx6j3hG1Mm5eGQ0upi6O_RwVAo',
};

const reducer = (state, action) => {
  console.log(action);

  // action -> type, [payload]

  switch(action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };

      case 'SET_TOKEN':
        return {
          ...state,
          token: action.token,
        };

      case 'SET_PLAYLISTS':
        return {
          ...state,
          playlists: action.playlists,
        }; 
      
      case 'SET_DISCOVER_WEEKLY':
        return {
          ...state,
          discover_weekly: action.discover_weekly,
        };


      default:
         return state;  
  }
}

export default reducer;