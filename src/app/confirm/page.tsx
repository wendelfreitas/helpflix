import emailIcon from '../../../public/img/email.svg';
import Image from 'next/image';
import checkSucces from '../.../../../../public/lotties/checkSucces.json';
import { Title } from '../components/Title';
import { HelpFlixLogo } from '../components/Logo';
import { DonateCardValue } from '../components/DonateCardValue';
import { SubTitle } from '../components/Subtitle';
import { LottieComponent } from '../components/Lottie';

export default function Address() {
  return (
    <main className="flex flex-col w-full mb-5">
      <LottieComponent
        animationData={checkSucces}
        style={{ height: 88, wdith: 88 }}
      />
      <Title className="mt-7" title="Deu tudo certo!" />

      <SubTitle className="my-7" subTitle="Agora você contribui" />
      <DonateCardValue value="50" />
      <div className="flex justify-center mt-8 mb-5">
        <Image src={emailIcon} width={62} height={62} alt="email icon" />
      </div>
      <p className="text-center text-sm text-dark-grey">
        Você irá receber um email com a confirmação de pagamento e o cadastro no
        site helpflix.com.br para gerenciar seus pagamentos.
      </p>
      <HelpFlixLogo className="mt-8" />
    </main>
  );
}
