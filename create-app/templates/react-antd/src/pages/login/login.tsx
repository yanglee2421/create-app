// Redux Imports
import { useAppDispatch, sliceLogin } from "@/redux";

// Antd Imports
import {
  Button,
  Checkbox,
  Col,
  Divider,
  Form,
  Input,
  Row,
  Typography,
} from "antd";

export function Login() {
  // Redux Hooks
  const dispatch = useAppDispatch();
  const handleSignIn = () => {
    const action = sliceLogin.actions.usr({ role: "admin" });
    dispatch(action);
  };

  // Form Hooks
  const [form] = Form.useForm();

  const handleSubmit = (data: unknown) => {
    console.log(data);
    handleSignIn();
  };

  return (
    <>
      <Row>
        <Col xs={24} sm={12} md={16}></Col>
        <Col xs={24} sm={12} md={8}>
          <Typography.Title level={1}>login</Typography.Title>
          <Typography.Paragraph>lorem</Typography.Paragraph>
          <Form
            form={form}
            onFinish={handleSubmit}
            layout="vertical"
            size="large"
            autoComplete="off"
            noValidate
          >
            <Form.Item
              name="email"
              rules={[{ required: true, type: "email" }]}
              label="Email"
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="passwd"
              rules={[{ required: true, type: "string", min: 8, max: 16 }]}
              label="Password"
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              name="rememberMe"
              valuePropName="checked"
              initialValue={true}
            >
              <Checkbox>Remember Me</Checkbox>
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" type="primary" block>
                Sign In
              </Button>
            </Form.Item>
          </Form>
          <Divider>Or</Divider>
        </Col>
      </Row>
    </>
  );
}
