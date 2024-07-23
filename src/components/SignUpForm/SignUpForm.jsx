import "./SignUpForm.css"
import {Button, Form, Input, Typography} from "antd";

const SignUpForm = () =>
{
    const [form] = Form.useForm();

    return (
        <div className={"sign-up-form"}>
            <div className={"title"}>
                <h1>Sign Up</h1>
                <span>Please fill the details to create your account</span>
            </div>

            <Form
                form={form}
                layout="vertical"
                autoComplete="off">
                <Form.Item
                    name="Full Name"
                    label="Full Name"
                    rules={[{ required: true }, { type: 'string', warningOnly: true }]}
                >
                    <Input placeholder="Enter your full name" />
                </Form.Item>

                <Form.Item
                    name="Email"
                    label="Full Name"
                    rules={[{ required: true }, { type: 'email', warningOnly: true }]}
                >
                    <Input placeholder="youremail@example.com"  />
                </Form.Item>

                <Form.Item
                    name="Password"
                    label="Password"
                    rules={[{ required: true }, { type: 'string', warningOnly: true }]}
                >
                    <Input type={"password"} placeholder="Enter your password"/>
                </Form.Item>

                <Form.Item
                    name="Re-type Password"
                    label="Re-type Password"
                    rules={[{ required: true }, { type: 'string', warningOnly: true }, ({getFieldValue}) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('Password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('The new password that you entered do not match!'));
                        },
                    })]}
                >
                    <Input type={"password"} placeholder="Re Enter your password" />
                </Form.Item>

                <Button block type="primary" htmlType="submit">
                    Sign Up
                </Button>
                <div className={"link"}>
                    <Typography.Text >Already have an account? <Typography.Link href={"#"}>Sign in</Typography.Link></Typography.Text>
                </div>

            </Form>
        </div>
    )
}

export default SignUpForm
