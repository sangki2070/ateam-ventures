import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

const names = ["알루미늄", "탄소강", "구리", "스테인리스강", "강철"];

const Select02 = (props: any) => {
  // const [personName, setPersonName] = React.useState([]);

  const handleChange = (event: any) => {
    const {
      target: { value },
    } = event;
    props.setMaterial(
      // On autofill we get a the stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    value.sort();

    const data = props.renderData?.filter(
      (el: any) =>
        JSON.stringify(el?.material) === JSON.stringify(value) ||
        el?.material.includes(value.join())
    );

    props.setMaterialFilter(data);
  };

  console.log("90", props.materialFilter);

  return (
    <div>
      <FormControl sx={{ width: 110, fontSize: 12, marginLeft: 2 }}>
        <InputLabel id="demo-multiple-checkbox-label">재료</InputLabel>
        <Select
          id="demo-multiple-checkbox"
          multiple
          value={props.material}
          onChange={handleChange}
          input={<OutlinedInput label="재료" />}
          renderValue={(selected) => "재료" + "(" + selected.length + ")"}
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

export default Select02;
