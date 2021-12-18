import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

const Switch01 = (props: any) => {
  return (
    <FormGroup>
      <FormControlLabel
        control={<Switch onChange={props.switchToggle} />}
        label="상담중인 요청만 보기"
      />
    </FormGroup>
  );
};

export default Switch01;
