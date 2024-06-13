import { AccessHeader } from "../components/AccessHeader";
import { ConnectWithGoogle } from "../components/ConnectWithGoogle";
import { SubscribeForm } from "../components/SubscribeForm";

export default function Subscribe() {
  return (
    <main className="p-6 flex flex-col max-w-[37rem] mx-auto">
      <AccessHeader description="Informe um endereço de email válido e uma senha para criar sua conta" />
      <SubscribeForm />
      <ConnectWithGoogle />
    </main>
  );
}
