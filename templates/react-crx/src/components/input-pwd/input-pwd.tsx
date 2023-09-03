// MUI Imports
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  OutlinedInputProps,
} from "@mui/material";
import { VisibilityOutlined, VisibilityOffOutlined } from "@mui/icons-material";

// Form Imports
import { useFormContext, useController } from "react-hook-form";

// React Imports
import { useMemo, useState } from "react";

export type InputPwdProps = OutlinedInputProps & { name: string };

export function InputPwd(props: InputPwdProps) {
  // ** Props
  const { name, label, required, fullWidth = true, sx, ...restProps } = props;

  // ** Form
  const { control } = useFormContext();

  // ** Field
  const { field, fieldState } = useController({
    name,
    control,
    defaultValue: "",
  });
  const { value } = field;
  const model = value ? String(value) : "";
  const { error } = fieldState;

  // Show Password
  const [isShowPasswd, setIsShowPasswd] = useState(false);
  const type = isShowPasswd ? "text" : "password";

  // Toggle Icon Element
  const toggleIconEl = useMemo(() => {
    return <ToggleIcon value={isShowPasswd} onChange={setIsShowPasswd} />;
  }, [isShowPasswd]);

  return (
    <FormControl fullWidth={fullWidth} error={!!error} sx={sx}>
      <InputLabel required>{label}</InputLabel>
      <OutlinedInput
        {...restProps}
        {...field}
        value={model}
        type={type}
        required={required}
        label={label}
        fullWidth={fullWidth}
        endAdornment={toggleIconEl}
      />
      {error && <FormHelperText>{error.message}</FormHelperText>}
    </FormControl>
  );
}

interface ToggleIconProps {
  value: boolean;
  onChange(v: boolean): void;
}

function ToggleIcon(props: ToggleIconProps) {
  // ** Props
  const { value, onChange } = props;

  // Icon Element
  const iconEl = useMemo(() => {
    return value ? <VisibilityOutlined /> : <VisibilityOffOutlined />;
  }, [value]);

  // ** Change
  const handleClick = () => onChange(!value);

  return (
    <InputAdornment position="end">
      <IconButton onClick={handleClick}>{iconEl}</IconButton>
    </InputAdornment>
  );
}
