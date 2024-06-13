import { AccessHeader } from "./components/AccessHeader";
import { ConnectWithGoogle } from "./components/ConnectWithGoogle";
import { LoginForm } from "./components/LoginForm";

export default function Login() {
  return (
    <main className="p-6 flex flex-col max-w-[37rem] mx-auto">
      <AccessHeader description="Informe suas credenciais e acesse o App" />
      <LoginForm />
      <ConnectWithGoogle />
    </main>
  );
}
