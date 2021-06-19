import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MainPage from "../MainPage";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "50px",
    backgroundColor: "#F1F3F6",
    "& .MuiButton-root": {
      margin: "5px",
      padding: "0px 4px",
    },
  },
  formControl: {
    margin: "0px 8px",
    minWidth: 100,
  },
}));

function Filter({ Data, setData }) {
  const classes = useStyles();
  const [size, setSize] = React.useState("");
  const [brand, setBrand] = React.useState("");

  const [priceLow, setpriceLow] = React.useState(false);
  const [priceHigh, setpriceHigh] = React.useState(false);
  const [genderMale, setgenderMale] = React.useState(false);
  const [genderFemale, setgenderFemale] = React.useState(false);

  const [allproducts] = React.useState(Data);
  const [filtered, setFiltered] = React.useState(null);

  const Clear = () => {
    setSize("");
    setBrand("");
    setpriceLow(false);
    setpriceHigh(false);
    setgenderMale(false);
    setgenderFemale(false);
    setData(allproducts);
  };

  const PriceLowtoHigh = () => {
    setpriceLow(true);
    setpriceHigh(false);
    const filtered = [...Data].sort((a, b) => (a.price > b.price ? 1 : -1));
    setFiltered(filtered);
  };

  const PriceHightoLow = () => {
    setpriceLow(false);
    setpriceHigh(true);
    const filtered = [...Data].sort((a, b) => (a.price > b.price ? -1 : 1));
    setFiltered(filtered);
  };

  const Male = () => {
    setgenderMale(true);
    setgenderFemale(false);
    const filtered = [...allproducts].filter((item) => item.gender === "Male");
    setFiltered(filtered);
  };
  const Female = () => {
    setgenderMale(false);
    setgenderFemale(true);
    const filtered = [...allproducts].filter(
      (item) => item.gender === "Female"
    );
    setFiltered(filtered);
  };

  const Size = (event) => {
    var value = event.target.value;
    setSize(value);
    const filtered = [...Data].filter((product) => product.size === value);
    setFiltered(filtered);
  };

  const Brand = (event) => {
    var value = event.target.value;
    setBrand(value);
    const filtered = [...allproducts].filter(
      (product) => product.brand === value
    );
    setFiltered(filtered);
  };

  React.useEffect(() => {
    if (filtered) {
      setData(filtered);
    }
  }, [filtered, setData]);

  return (
    <>
      <Toolbar className={classes.root}>
        <Button variant="contained" color="inherit" onClick={Clear}>
          Clear All
        </Button>
        <Button
          variant="contained"
          color={priceLow ? "primary" : "inherit"}
          onClick={PriceLowtoHigh}
        >
          Price - Low to High
        </Button>
        <Button
          variant="contained"
          color={priceHigh ? "primary" : "inherit"}
          onClick={PriceHightoLow}
        >
          Price - High to Low
        </Button>
        <Button
          variant="contained"
          color={genderMale ? "primary" : "inherit"}
          onClick={Male}
        >
          Male
        </Button>
        <Button
          variant="contained"
          color={genderFemale ? "primary" : "inherit"}
          onClick={Female}
        >
          Female
        </Button>

        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Size</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={size}
            onChange={Size}
          >
            <MenuItem value="S">S</MenuItem>
            <MenuItem value="M">M</MenuItem>
            <MenuItem value="L">L</MenuItem>
            <MenuItem value="XL">XL</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Brands</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={brand}
            onChange={Brand}
          >
            <MenuItem value="NorthStar">NorthStar</MenuItem>
            <MenuItem value="Enzymotec">Enzymotec</MenuItem>
            <MenuItem value="BlackRock">BlackRock</MenuItem>
          </Select>
        </FormControl>
      </Toolbar>
      <MainPage data={Data} />
    </>
  );
}

export default Filter;
