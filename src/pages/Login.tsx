import Button from "../components/Button";
import Input from "../components/Input";
import { getIconSrc } from "../utils";

type LoginPropsType = {};

const Login: React.FC<LoginPropsType> = ({}) => (
  <div
    data-testid="login"
    className="flex flex-col justify-center min-h-section-minus-header max-w-sm mx-auto"
  >
    <div className="flex flex-col gap-y-10 justify-center">
      <form className="flex flex-col gap-y-5">
        <Input
          className="border border-secondary-label"
          placeholder="email"
          type="email"
          name="email"
        />
        <Input
          className="border border-secondary-label"
          placeholder="password"
          type="password"
          name="password"
        />
        <Button type="submit">Log in</Button>
      </form>
      <div className="flex items-center justify-between">
        <div className="border-b border-secondary-label/30 grow" />
        <p className="px-2">or</p>
        <div className="border-b border-secondary-label/30 grow" />
      </div>
      <div className="flex flex-col gap-y-5">
        <Button
          icon={getIconSrc("google-icon.svg")}
          className="bg-white text-primary shadow-md hover:shadow-lg"
          iconClassName="h-6"
        >
          Log in with google
        </Button>
        <Button
          icon={getIconSrc("facebook-icon.svg")}
          className="bg-blue-500 text-white shadow-md hover:shadow-lg"
          iconClassName="h-6"
        >
          Log in with facebook
        </Button>
      </div>
    </div>
  </div>
);

export default Login;
