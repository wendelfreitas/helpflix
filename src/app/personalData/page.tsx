import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { SubTitle } from '../components/Subtitle';
import { Title } from '../components/Title';
import { HelpFlixLogo } from '../components/Logo';

export default function PersonalData() {
  return (
    <main className="flex flex-col w-full mb-5">
      <Title title="Dados pessoais" />
      <SubTitle subTitle="Adicione seus dados abaixo" />
      <div className="flex gap-5 flex-col">
        <Input placeHolder="Nome" label="Nome" required />
        <Input placeHolder="Sobrenome" label="Sobrenome" required />
        <Input placeHolder="Telefone" label="Telefone" required />
        <Input placeHolder="Email" label="Email" required />
        <Input
          placeHolder="Data de nascimento"
          label="Data de nascimento"
          required
        />
        <Button className="mb-5" name="Avançar" route="/address" />
      </div>
      <HelpFlixLogo />
    </main>
  );
}
