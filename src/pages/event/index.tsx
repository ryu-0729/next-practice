import React, {
  useReducer,
  ChangeEventHandler,
  useCallback,
} from 'react';
import { NextPage } from 'next';

import reducer, { Store } from '../../utils/reducers/event';

import EventForm from '../../components/units/events/EventForm';

const initialState: Store = {
  title: null,
  body: null,
};

const Event: NextPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  const onChangeTitleHandler = useCallback<ChangeEventHandler<HTMLInputElement>>(e => dispatch({ type: 'title', payload: e.target.value }), []);
  const onChangeBodyHandler = useCallback<ChangeEventHandler<HTMLInputElement>>(e => dispatch({ type: 'body', payload: e.target.value }), []);

  return (
    <>
      <div>
        <h1>hello! Next</h1>
      </div>
      <div>
        <EventForm 
          onChangeTitleHandler={onChangeTitleHandler}
          onChangeBodyHandler={onChangeBodyHandler}
        />
      </div>
    </>
  );
}

export default Event;
