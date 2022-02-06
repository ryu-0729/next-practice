import React, {
  VFC,
  ChangeEventHandler
} from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

type Props = {
  onChangeTitleHandler: ChangeEventHandler<HTMLInputElement>,
  onChangeBodyHandler: ChangeEventHandler<HTMLInputElement>,
};

const EventForm: VFC<Props> = ({
  onChangeTitleHandler,
  onChangeBodyHandler,
}) => {
  return (
    <>
      <div>
        <h2>イベント登録フォーム</h2>
        <TextField 
          id="standard-basic"
          label="title"
          variant="standard"
          onChange={onChangeTitleHandler}
        />
        <TextField
          id="standard-basic"
          label="body"
          variant="standard"
          onChange={onChangeBodyHandler}
        />
        {/* TODO: クリックイベント未実装 */}
        <Button variant="contained">Contained</Button>
      </div>
    </>
  );
}

export default EventForm;
