import { DatePicker, Form } from "antd";
import { Controller } from "react-hook-form"


type TDateProps = {
    label: string;
    name: string;
    defalutValue?: string
}

const RoomDatePicker = ({ name, label }: TDateProps) => {
    return (
        <Controller name={name} render={({ field, fieldState: { error } }) => {
            return <Form.Item label={label}>
                <DatePicker {...field} style={{ width: "100%" }} size='large' />
                {
                    error && <p style={{ color: "red", marginTop: "4px" }}>{error?.message}</p>
                }
            </Form.Item>
        }}

        />
    )
}

export default RoomDatePicker