import { Button } from '../components/button';
import { Input } from '../components/Input';

import { Title } from '../components/title';
import { HelpFlixLogo } from '../components/logo';
import { DonateCardValue } from '../components/donateCardValue';

export default function Address() {
  return (
    <main className="mt-10 flex flex-col w-full mb-5">
      <DonateCardValue value="50" />
      <Title title="Dados de Pagamento" />

      <div className="flex gap-5 flex-col">
        <Input inputName="Número do cartão" placeHolder="00000-000" required />
        <Input
          inputName="Nome inserido do cartão"
          placeHolder="00000-000"
          required
        />
        <div className="grid grid-cols-2 gap-5">
          <Input inputName="CVV" placeHolder="000" required />
          <Input inputName="Vencimento" placeHolder="0000" required />
        </div>

        <Input inputName="CPF" placeHolder="CPF" required />
        <Button name="Avançar" route="/confirm" />
      </div>
      <HelpFlixLogo />
    </main>
  );
}
