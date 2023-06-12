import { Button } from '../components/Button';
import { Input } from '../components/Input';

import { Title } from '../components/Title';
import { HelpFlixLogo } from '../components/Logo';
import { DonateCardValue } from '../components/DonateCardValue';

export default function Address() {
  return (
    <main className="mt-10 flex flex-col w-full mb-5">
      <DonateCardValue value="50" />
      <Title title="Dados de Pagamento" />

      <div className="flex gap-5 flex-col">
        <Input label="Número do cartão" placeHolder="00000-000" required />
        <Input
          label="Nome inserido do cartão"
          placeHolder="00000-000"
          required
        />
        <div className="grid grid-cols-2 gap-5">
          <Input label="CVV" placeHolder="000" required />
          <Input label="Vencimento" placeHolder="0000" required />
        </div>

        <Input label="CPF" placeHolder="CPF" required />
        <Button name="Avançar" route="/confirm" />
      </div>
      <HelpFlixLogo />
    </main>
  );
}
