import emailIcon from '../../../public/img/email.svg';
import Image from 'next/image';
import checkSucces from '../.../../../../public/lotties/checkSucces.json';
import { Title } from '../components/Title';
import { HelpFlixLogo } from '../components/Logo';
import { DonateCardValue } from '../components/DonateCardValue';
import { SubTitle } from '../components/Subtitle';
import Lottie from 'react-lottie-player';

export default function Address() {
  return (
    <main className="mt-10 flex flex-col w-full mb-5">
      <Title title="Deu tudo certo!" />
      <Lottie
        loop
        animationData={checkSucces}
        play
        style={{ width: 88, height: 88 }}
      />
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
