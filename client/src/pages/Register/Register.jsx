import {
  LoginContainer,
  TextContent,
  Form,
  FormInput,
  LoginButton,
} from "./Register.styled";
const Register = () => {
  return (
    <>
      <LoginContainer>
        <TextContent>
          <h2>Signup</h2>
          <p>We do not share your personal information with anyone</p>
        </TextContent>
        <Form>
          <FormInput>
            <label htmlFor="first">
              First Name<span aria-hidden="true">*</span>
            </label>
            <input required="true" type="text" id="first" />
          </FormInput>
          <FormInput>
            <label htmlFor="last">
              Last Name<span aria-hidden="true">*</span>
            </label>
            <input required="true" type="text" id="last" />
          </FormInput>
          <FormInput>
            <label htmlFor="email">
              Email<span aria-hidden="true">*</span>
            </label>
            <input required="true" type="text" id="email" />
          </FormInput>
          <FormInput>
            <label htmlFor="password">
              Password<span aria-hidden="true">*</span>
            </label>
            <input required="true" type="password" id="password" />
          </FormInput>
          <FormInput>
            <label htmlFor="conPass">
              Confirm Password<span aria-hidden="true">*</span>
            </label>
            <input required="true" type="password" id="conPass" />
          </FormInput>
          <LoginButton type="submit">Signup</LoginButton>
        </Form>
      </LoginContainer>
    </>
  );
};
export default Register;
