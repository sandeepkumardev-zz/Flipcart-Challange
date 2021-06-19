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

function Filter({ Data }) {
  const classes = useStyles();
  const [size, setSize] = React.useState("");
  const [brand, setBrand] = React.useState("");

  const [priceLow, setpriceLow] = React.useState(false);
  const [priceHigh, setpriceHigh] = React.useState(false);
  const [genderMale, setgenderMale] = React.useState(false);
  const [genderFemale, setgenderFemale] = React.useState(false);

  const [products, setProducts] = React.useState(Data);

  var priceLowtoHigh = Data.sort((a, b) => a.price - b.price);
  var priceHightoLow = Data.sort((a, b) => b.price - a.price);
  var male = Data.filter((item) => item.gender === "Male");
  var female = Data.filter((item) => item.gender === "Female");

  console.log(priceLowtoHigh, priceHightoLow);

  const Clear = () => {
    setSize("");
    setBrand("");
    setpriceLow(false);
    setpriceHigh(false);
    setgenderMale(false);
    setgenderFemale(false);
    setProducts(Data);
  };

  const PriceLowtoHigh = () => {
    setpriceLow(true);
    setpriceHigh(false);
    if (genderMale) {
      var newList = male.sort((a, b) => (a.price > b.price ? 1 : -1));
      setProducts(newList);
    } else if (genderFemale) {
      var newList2 = female.sort((a, b) => (a.price > b.price ? 1 : -1));
      setProducts(newList2);
    } else {
      setProducts(priceLowtoHigh);
    }
  };

  const PriceHightoLow = () => {
    setpriceLow(false);
    setpriceHigh(true);
    if (genderMale) {
      var newList = male.sort((a, b) => (a.price > b.price ? -1 : 1));
      setProducts(newList);
    } else if (genderFemale) {
      var newList2 = female.sort((a, b) => (a.price > b.price ? -1 : 1));
      setProducts(newList2);
    } else {
      setProducts(priceHightoLow);
    }
  };

  const Male = () => {
    setgenderMale(true);
    setgenderFemale(false);

    if (size) {
      var newList = male.filter((item) => item.size === size);
      setProducts(newList);
    } else {
      setProducts(male);
    }
  };
  const Female = () => {
    setgenderMale(false);
    setgenderFemale(true);
    if (size) {
      var newList = female.filter((item) => item.size === size);
      setProducts(newList);
    } else {
      setProducts(female);
    }
  };

  const Size = (event) => {
    var value = event.target.value;
    setSize(value);
    if (genderMale) {
      var newList = male.filter((item) => item.size === value);
      setProducts(newList);
    } else if (genderFemale) {
      var newList2 = female.filter((item) => item.size === value);
      setProducts(newList2);
    } else {
      const list = Data.filter((item) => item.size === value);
      setProducts(list);
    }
  };

  const Brand = (event) => {
    var value = event.target.value;
    setBrand(value);
    const list = Data.filter((item) => item.brand === value);
    setProducts(list);
  };

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
      <MainPage data={products} />
    </>
  );
}

export default Filter;
