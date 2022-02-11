export type Store = {
  title: string | null,
  body: string | null
};

export type Action = {
  type: 'title' | 'body'
  payload: string
};

const reducer = (state: Store, action: Action): Store => {
  switch (action.type) {
    case 'title':
      return {...state, title: action.payload};
    case 'body':
      return {...state, body: action.payload};
    default:
      return state;
  }
};

export default reducer;
