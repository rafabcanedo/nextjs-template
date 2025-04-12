import Input from '@/components/input';

export default function Home() {
  return (
    <div className="p-6 space-y-4">
      <Input label="Nome" placeholder="Digite seu nome" />

      <Input label="Email" variant="sm" placeholder="Digite seu email" />

      <Input label="Senha" variant="lg" placeholder="Digite sua senha" type="password" />

      <Input
        label="Usuário"
        state="error"
        errorMessage="Este campo é obrigatório"
        placeholder="Digite seu usuário"
      />

      <Input label="Telefone" state="disabled" placeholder="Campo desabilitado" />
    </div>
  );
}
