import React, { useEffect, useRef } from "react";
import "./CustomTextField.scss";
import { ComponentUtils } from "../utils";

function CustomTextField(props) {
  const componentUtils = new ComponentUtils();
  const onChange = (e) => {
    props.setSubmit?.(false);
    componentUtils.debounce(
      () => {
        e.preventDefault();
        props.setSubmit?.(true);
        props.onChange(e?.target?.value);
      },
      props.debounceDelay != null ? props.debounceDelay : 500
    );
  };

  const customRef = useRef(null);
  useEffect(() => {
    if (props.initialValue) customRef.current.value = props.initialValue;
  }, [props.initialValue]);
  return (
    <div className={`doc-custom-textfield ${props.className}`}>
      <label className="doc-custom-textfield__label">
        {props.label}{" "}
        {props.required === "required" ? (
          <strong className="doc-custom-textfield__label_required">*</strong>
        ) : (
          ""
        )}
      </label>
      <br />
      <input
        name={props.label}
        onChange={onChange}
        ref={(e) => {
          customRef.current = e;
          props.customRefFunction && props?.customRefFunction?.(e);
          if (props.customRef) props.customRef.current = e;
        }}
        placeholder={props.placeholder}
        oninvalid={props.oninvalid}
        onInput={props.onInput}
        className={`doc-custom-textfield__${props.className} doc-custom-textfield__textfield`}
        error={props.error}
        helperText={props.helperText}
        type={props.type}
        disabled={props.disabled}
        required={props.required}
        maxLength={props.maxLength}
        value={props.value}
        minLength={props.minLength}
        min={props.min}
        max={props.max}
        onKeyPress={(e) => {
          e.key === "Enter" && e.preventDefault();
        }}
      ></input>
      <div>
        {props.className === "error" ? (
          <span className="customSpan">{props.helperText}</span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
export default CustomTextField;
