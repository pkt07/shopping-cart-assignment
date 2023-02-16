import {
  LoginContainer,
  TextContent,
  Form,
  FormInput,
  LoginButton,
} from "./Signin.styled";
const SignIn = () => {
  return (
    <>
      <LoginContainer>
        <TextContent>
          <h2>Login</h2>
          <p>Get access to your Orders, Wishlist and Recommendations</p>
        </TextContent>
        <Form>
          <FormInput>
            <label htmlFor="email">
              Email<span aria-hidden="true">*</span>
            </label>
            <input required="true" type="email" id="email" />
          </FormInput>
          <FormInput>
            <label htmlFor="password">
              Password<span aria-hidden="true">*</span>
            </label>
            <input required="true" type="password" id="password" />
          </FormInput>
          <LoginButton type="submit">Login</LoginButton>
        </Form>
      </LoginContainer>
    </>
  );
};
export default SignIn;
