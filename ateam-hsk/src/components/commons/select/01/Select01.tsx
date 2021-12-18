import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

const names = ["밀링", "선반"];

const Select01 = (props: any) => {
  // const [method, setMethod] = React.useState([]);

  const handleChange = (event: any) => {
    const {
      target: { value },
    } = event;
    console.log("332", JSON.stringify(value.join()));
    props.setMethod(
      // On autofill we get a the stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    value.sort();

    const data = props.renderData?.filter(
      (el: any) =>
        JSON.stringify(el?.method) === JSON.stringify(value) ||
        el?.method.includes(value.join())
    );

    props.setMethodFilter(data);
    console.log("===", value);
  };

  console.log("23", props.method);
  console.log(props.method[0]);
  console.log(props.method[1]);
  console.log("77", props.methodFilter);

  return (
    <div>
      <FormControl sx={{ width: 130, fontSize: 12 }}>
        <InputLabel id="demo-multiple-checkbox-label">가공방식</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={props.method}
          onChange={handleChange}
          input={<OutlinedInput label="가공방식" />}
          renderValue={(selected) => "가공방식" + "(" + selected.length + ")"}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Select01;
