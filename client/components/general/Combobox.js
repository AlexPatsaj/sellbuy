import React from 'react';
import PropTypes from 'prop-types';
import Select, { components } from 'react-select';

import { ICON_ARROW_DOWN, ICON_SEARCH, ICON_REMOVE } from '../static/Icons';

import styles from '../../static/comp-styles/general/Combobox.scss'

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
      Clear All
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

const Placeholder = ({ selectProps: { customProps: { multi } } }) => {
  return (
    multi ? null : null
  )
};

const Option = (props) => {
  const filter = {};
  const {
    children,
    data,
    innerProps,
    isSelected,
  } = props;
  return (
    <components.Option {...props}>
      <div className="checkbox">
        <input type="checkbox" name={data.value} id={innerProps.id} checked={isSelected} />
        <label htmlFor={innerProps.id}>{children}</label>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 13 13">
          <title>Select</title>
          <path d="M4.5,11.5L0,7.2l1.4-1.4l3.1,2.9l7.1-7.3L13,2.9C13.1,2.9,4.5,11.5,4.5,11.5z"/>
        </svg>
      </div>
    </components.Option>
  );
};

const ValueContainer  = (props) => {
  const {
    children,
    selectProps: { customProps: { label, multi } },
    ...rest,
  } = props;
  const values = props.getValue();
  return (
    <components.ValueContainer {...rest}>
      <span className="sbp-combobox__label">{label}</span>
      <div className="sbp-combobox__value-list">
        {values.length ? `${values.length} selected: ` : null}
        {children}
      </div>
    </components.ValueContainer>
  );
};

const Menu = (props) => {
  const {
    children,
    selectProps: { customProps: { search } },
  } = props;
  return (
    <components.Menu {...props}>
      {
        search && (
          <div className="sbp-combobox__search">
            <input type="text" placeholder="Search" />
            <div className="sbp-combobox__search-btns">
              {ICON_SEARCH}
            </div>
          </div>
        )
      }
      {children}
    </components.Menu>
  );
};

export default function Combobox(props) {
  return (
    <React.Fragment>
      <Select
        customProps={props}
        options={props.options}
        className="sbp-combobox"
        classNamePrefix="sbp-combobox"
        components={{
          DropdownIndicator,
          ClearIndicator,
          SingleValue,
          Placeholder,
          Option,
          MultiValue: SingleValue,
          ValueContainer,
          Menu,
        }}
        isSearchable={false}
        isClearable
        isMulti
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
      />
      <style jsx global>{styles}</style>
    </React.Fragment>
  )
};

Combobox.propTypes = {
  multi: PropTypes.bool,
  search: PropTypes.bool,
  label: PropTypes.string,
  options: PropTypes.array,
};