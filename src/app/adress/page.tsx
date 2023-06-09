import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { SubTitle } from '../components/Subtitle';
import { Title } from '../components/Title';
import { HelpFlixLogo } from '../components/logo';

export default function Address() {
  return (
    <main className="mt-10 flex flex-col w-full mb-5">
      <Title title="Endereço" />
      <SubTitle subTitle="Porque pedimos seu endereço?" />
      <div className="flex gap-5 flex-col">
        <Input inputName="CEP" placeHolder="00000-000" required />
        <Input inputName="Rua" placeHolder="Rua" required />
        <div className="grid grid-cols-2 gap-5">
          <Input inputName="Número" placeHolder="0000" required />
          <Input inputName="complemento" placeHolder="0000" required />
        </div>

        <Input inputName="Bairro" placeHolder="Bairro" required />
        <Input inputName="cidade" placeHolder="cidade" required />

        <Input
          inputName="Data de nascimento"
          placeHolder="Data de nascimento"
          required
        />
        <Button name="Avançar" route="" />
      </div>
      <HelpFlixLogo />
    </main>
  );
}
