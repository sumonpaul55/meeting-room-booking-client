import { Form, Select } from 'antd'
import { Controller } from 'react-hook-form';

type TSelectProps = {
    label: string;
    name: string;
    options: { value: string; label: string }[] | undefined;
    defalutValue?: string;
    disabled?: boolean;
    mode?: "multiple" | undefined;
    placeholder?: string;
}
const RoomSelect = ({ label, name, options, defalutValue, disabled, mode, placeholder }: TSelectProps) => {
    return (
        <Controller name={name} render={({ field, fieldState: { error } }) => {
            return <Form.Item label={label}>
                <Select
                    mode={mode}
                    defaultValue={defalutValue}
                    placeholder={placeholder}
                    style={{ width: "100%" }}
                    {...field}
                    options={options}
                    size='large'
                    disabled={disabled}
                />
                {
                    error && <p style={{ color: "red", marginTop: "4px" }}>{error?.message}</p>
                }
            </Form.Item>
        }} />
    )
}

export default RoomSelect