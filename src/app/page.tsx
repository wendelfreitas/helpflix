import { Button } from './components/Button';
import { Title } from './components/Title';
import { SubTitle } from './components/Subtitle';
import { HelpFlixLogo } from './components/Logo';

export default function Home() {
  return (
    <main className="mt-12 flex flex-col mb-5 w-full">
      <Title className="mb-5" title="Faça sua doação" />
      <SubTitle
        className="mb-10"
        subTitle="Faça a assinatura do bem e ajude o Pão do Povo da Rua mensalmente!"
      />
      <ul className="flex gap-5 justify-center pb-10">
        <li>
          <input
            type="radio"
            id="deposit10"
            name="radioCard"
            value="10"
            className="hidden peer"
            required
          />
          <label
            htmlFor="deposit10"
            className="flex items-center flex-col w-24 h-24 p-3 text-medium-gray text-sm bg-white border-2 border-light-grey rounded-lg cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"
          >
            <p className="text-center">Assine</p>
            <span className="text-base text-black text-center font-bold peer-checked:text-blue-600">
              10 Reais
            </span>
            <p className="text-center">por mês</p>
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="deposit30"
            name="radioCard"
            value="30"
            className="hidden peer"
            required
          />
          <label
            htmlFor="deposit30"
            className="flex items-center flex-col w-24 h-24 p-3 text-medium-gray text-sm bg-white border-2 border-light-grey rounded-lg cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"
          >
            <p className="text-center">Assine</p>
            <span className="text-base text-black text-center font-bold peer-checked:text-blue-600">
              30 Reais
            </span>
            <p className="text-center">por mês</p>
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="deposit50"
            name="radioCard"
            value="50"
            className="hidden peer"
            required
          />
          <label
            htmlFor="deposit50"
            className="flex items-center flex-col w-24 h-24 p-3 text-medium-gray text-sm bg-white border-2 border-light-grey rounded-lg cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"
          >
            <p className="text-center">Assine</p>
            <span className="text-base text-black text-center font-bold peer-checked:text-blue-600">
              50 Reais
            </span>
            <p className="text-center">por mês</p>
          </label>
        </li>
      </ul>
      <p className="text-dark-grey text-md mb-2  ">
        Caso prefira, digite o valor desejado para a assinatura:
      </p>
      <input
        type="text"
        className="border border-light-grey h-11 rounded-lg placeholder-light-grey px-4"
        placeholder="Nome"
      />
      <div className="py-5 ">
        <label htmlFor="switch" className="flex gap-6">
          <div className="relative items-center cursor-pointer ">
            <input
              id="switch"
              type="checkbox"
              value=""
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </div>
          <p className="text-sm text-dark-grey">
            Desejo doar apenas uma vez, não assinar.
          </p>
        </label>
      </div>

      <Button name="Avançar" route="/personalData" />

      <HelpFlixLogo />
    </main>
  );
}
