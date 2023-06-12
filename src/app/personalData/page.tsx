import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { SubTitle } from '../components/Subtitle';
import { Title } from '../components/Title';
import { HelpFlixLogo } from '../components/Logo';

export default function PersonalData() {
  return (
    <main className="mt-10 flex flex-col w-full mb-5">
      <Title title="Dados pessoais" />
      <SubTitle subTitle="Adicione seus dados abaixo" />
      <div className="flex gap-5 flex-col">
        <Input placeHolder="Nome" inputName="Nome" required />
        <Input placeHolder="Sobrenome" inputName="Sobrenome" required />
        <Input placeHolder="Telefone" inputName="Telefone" required />
        <Input placeHolder="Email" inputName="Email" required />
        <Input
          placeHolder="Data de nascimento"
          inputName="Data de nascimento"
          required
        />
        <Button name="Avançar" route="/address" />
      </div>
      <HelpFlixLogo />
    </main>
  );
}
