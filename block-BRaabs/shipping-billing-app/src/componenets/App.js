import React from 'react';
import '../../src/App.css';

class App extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      shipping: {
        address: '',
        city: '',
        country: '',
        zip: '',
      },
      isSame: false,
      errors: {
        address: '',
      },
    };
  }

  handleInput = ({ target }) => {
    // console.log(target);
    // console.log(name, value);
    let { name, value } = target;
    let errors = this.state.errors;
    // let isSame = this.state.isSame;

    if (name === 'address') {
      errors.address =
        value.length < 8 ? 'Address should be at least 8 characters' : '';
    }

    this.setState((prevState) => ({
      errors,
      shipping: {
        ...prevState.shipping, // spreading makes sure the existing shipping obj along with the 4 states inside it, is not overwritten when state is updated. Instead only the specific value of address is updated
        [name]: value, // Update the specific shipping field (address, city, etc.)
      },
    }));
  };

  isChecked = () => {
    this.setState((prevState) => ({
      isSame: !prevState.isSame,
    }));
  };

  // eslint-disable-next-line react/require-render-return
  render() {
    let addressError = this.state.errors.address;
    const { shipping, isSame } = this.state;
    const billingValues = isSame
      ? shipping
      : { address: '', city: '', country: '', zip: '' };
    return (
      <center>
        <h1>Controlled Component - using state</h1>
        <div className="container flex">
          <div className="box shipping">
            <h2>Shipping Address</h2>
            <form action="">
              {/* Address */}
              <label htmlFor="address">Address</label>
              <input
                type="text"
                value={this.state.shipping.address}
                onChange={this.handleInput}
                name="address"
              />
              <span className={addressError && 'error'}>{addressError}</span>
              {/* Zip */}
              <label htmlFor="zip">Zip/Postal Code</label>
              <input
                type="number"
                name="zip"
                value={this.state.shipping.zip}
                onChange={this.handleInput}
              />
              {/* City */}
              <label htmlFor="city">City</label>
              <input
                type="text"
                name="city"
                value={this.state.shipping.city}
                onChange={this.handleInput}
              />

              {/* Country */}
              <label htmlFor="country">Country</label>
              <input
                type="text"
                name="country"
                value={this.state.shipping.country}
                onChange={this.handleInput}
              />
            </form>
          </div>
          <div class="box billling">
            <h2>Billing Address</h2>
            <form action="">
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  onChange={this.isChecked}
                  checked={isSame}
                  name="isSame"
                />
                <label>Same as Shipping Address?</label>
              </div>

              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                value={billingValues.address}
                onChange={!isSame ? this.handleInput : null}
              />

              <label htmlFor="zip">Zip/Postal Code</label>
              <input
                type="number"
                name="zip"
                value={billingValues.zip}
                onChange={!isSame ? this.handleInput : null}
              />

              <label htmlFor="city">City</label>
              <input
                type="text"
                name="city"
                value={billingValues.city}
                onChange={!isSame ? this.handleInput : null}
              />

              <label htmlFor="country">Country</label>
              <input
                type="text"
                name="country"
                value={billingValues.country}
                onChange={!isSame ? this.handleInput : null}
              />
            </form>
          </div>
        </div>
      </center>
    );
  }
}

export default App;
