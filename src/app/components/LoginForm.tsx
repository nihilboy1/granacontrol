"use client";
import { AccessButtons } from "./AccessButtons";
import { Input } from "./Input";
import { Envelope, Password } from "@phosphor-icons/react/dist/ssr";

export function LoginForm() {
  return (
    <form action="" className="gap-2 flex flex-col">
      <Input Icon={Envelope} placeholder="Informe seu Email" />
      <Input Icon={Password} placeholder="Informe sua Senha" />
      <AccessButtons
        mainButtonText="Entrar"
        secondaryText="Criar uma Conta"
        href="/createaccount"
      />
    </form>
  );
}
