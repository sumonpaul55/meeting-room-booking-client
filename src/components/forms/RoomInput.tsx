import { Form, Input } from "antd"
import { Controller } from "react-hook-form"

type TInputProps = {
    name: string;
    defaultValue?: string;
    type?: string;
    placeholder?: string;
    label?: string;

}

const RoomInput = ({ name, defaultValue, type, label, placeholder }: TInputProps) => {
    return (
        <div className="mt-2">
            <Controller name={name} render={({ field, fieldState: { error } }) => {
                return <Form.Item label={label}>
                    <Input {...field} defaultValue={defaultValue} placeholder={placeholder} type={type} />
                    {
                        error && <p className="text-[red] mt-1">{error?.message}</p>
                    }
                </Form.Item>
            }}
            />
        </div>
    )
}

export default RoomInput