import React from "react";
import Select from "react-select";
import "./CustomMultiDropDown.scss";
export default function CustomMultiDropDown(props) {
  return (
    <div className={`doc-custom-multi-dropdown ${props.className}`}>
      <label className="doc-custom-multi-dropdown__label">
        {props.label}{" "}
        {props.required === "required" ? (
          <strong className="doc-custom-multi-dropdown__required">*</strong>
        ) : (
          ""
        )}
      </label>
      <Select
        styles={{ width: "38%" }}
        defaultValue={null}
        isMulti={props.isMulti}
        name={props.label}
        options={props.options}
        onChange={props.onChange}
        className={`doc-custom-multi-dropdown__${props.className} doc-custom-multi-dropdown__select`}
        classNamePrefix="select"
        required={props.required}
        value={props.value}
        onKeyPress={(e) => {
          e.key === "Enter" && e.preventDefault();
        }}
        getOptionLabel={props.getOptionLabel}
        getOptionValue={props.getOptionValue}
        {...props}
      />
      {props.className === "error" ? <span>{props.helperText}</span> : ""}
    </div>
  );
}
