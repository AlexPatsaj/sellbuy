import React from 'react';
import PropTypes from 'prop-types';
import Select, { components } from 'react-select';
import makeAnimated from 'react-select/lib/animated';
import InputRange from 'react-input-range';

import { ICON_ARROW_DOWN, ICON_SEARCH, ICON_REMOVE } from '../static/Icons';

import styles from '../../static/comp-styles/general/Combobox.scss'

const customStyles = {
  menu: (base, state) => ({
    ...base,
    height: 60,
    padding: '5px 20px',
  }),
};

const DropdownIndicator = (props) => {
  return (
    <components.IndicatorsContainer {...props}>
      {ICON_ARROW_DOWN}
    </components.IndicatorsContainer>
  );
};

const ClearIndicator = (props) => {
  const { innerProps } = props;
  return (
    <div {...innerProps} className="sbp-combobox__indicator-clear">
      Reset
    </div>
  );
};

const SingleValue = ({ children, selectProps: { customProps: { label, multi } }, ...props }) => {
  return (
    <components.SingleValue {...props}>
      {children}
    </components.SingleValue>
  )
};

const Placeholder = () => {
  return null;
};

const ValueContainer  = (props) => {
  const {
    children,
    selectProps: { customProps: { label, measure } },
    ...rest,
  } = props;
  let value = props.getValue();
  value = value[0];
  return (
    <components.ValueContainer {...rest}>
      <span className="sbp-combobox__label">{label}</span>
      <div className="sbp-combobox__value-list">
        {value ? `${measure}${value.min} - ${measure}${value.max}` : null}
        {children}
      </div>
    </components.ValueContainer>
  );
};

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.formatLabelRange = this.formatLabelRange.bind(this);
  }

  handleChange(range) {
    this.props.setValue(range);
  }

  formatLabelRange(value) {
    const {
      selectProps: { customProps: { measure } },
    } = this.props;
    return `${measure}${value}`;
  }

  render() {
    let value = this.props.getValue();
    value = value[0] ? value[0] : { min: 0, max: 1000 };
    return (
      <components.Menu {...this.props}>
        <InputRange
          maxValue={1000}
          step={10}
          minValue={0}
          value={value}
          onChange={this.handleChange}
          formatLabel={this.formatLabelRange}
        />
      </components.Menu>
    );
  }
}

export default function SearchFilterRange(props) {
  return (
    <React.Fragment>
      <Select
        customProps={props}
        className="sbp-combobox"
        classNamePrefix="sbp-combobox"
        styles={customStyles}
        components={makeAnimated({
          DropdownIndicator,
          ClearIndicator,
          SingleValue,
          Placeholder,
          ValueContainer,
          Menu,
        })}
        isSearchable={false}
        isClearable
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
      />
      <style jsx global>{styles}</style>
    </React.Fragment>
  )
};

SearchFilterRange.propTypes = {
  label: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  measure: PropTypes.string,
};