import { AccessHeader } from "../components/AccessHeader";
import { ConnectWithGoogle } from "../components/ConnectWithGoogle";
import { CreateAccountForm } from "../components/CreateAccountForm";

export default function CreateAccount() {
  return (
    <main className="p-6 flex flex-col max-w-[37rem] mx-auto">
      <AccessHeader description="Informe um endereço de email válido e uma senha para criar sua conta" />
      <CreateAccountForm />
      <ConnectWithGoogle />
    </main>
  );
}
