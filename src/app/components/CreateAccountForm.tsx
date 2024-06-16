'use client'

import { Input } from "./Input";
import { User, Envelope, Password } from "@phosphor-icons/react/dist/ssr";
import { AccessButtons } from "./AccessButtons";

export function CreateAccountForm() {
  return (
    <form action="" className="gap-2 flex flex-col">
      <Input Icon={User} placeholder="Informe seu Nome de Usuário" />
      <Input Icon={Envelope} placeholder="Informe seu Email" />
      <Input Icon={Password} placeholder="Informe uma Senha" />
      <Input Icon={Password} placeholder="Confirme a Senha" />
      <AccessButtons
        mainButtonText="Criar Conta e Entrar"
        secondaryText="Voltar à página de Login"
        href="/"
      />
    </form>
  );
}
