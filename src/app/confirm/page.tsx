import emailIcon from '../../../public/img/email.svg';
import Image from 'next/image';

import { Title } from '../components/title';
import { HelpFlixLogo } from '../components/logo';
import { DonateCardValue } from '../components/donateCardValue';
import { SubTitle } from '../components/Subtitle';

export default function Address() {
  return (
    <main className="mt-10 flex flex-col w-full mb-5">
      <Title title="Deu tudo certo!" />

      <SubTitle subTitle="Agora você contribui" />
      <DonateCardValue value="50" />
      <div className="flex justify-center">
        <Image src={emailIcon} width={62} height={62} alt="email icon" />
      </div>
      <p className="text-center text-sm text-dark-grey">
        Você irá receber um email com a confirmação de pagamento e o cadastro no
        site helpflix.com.br para gerenciar seus pagamentos.
      </p>
      <HelpFlixLogo />
    </main>
  );
}
