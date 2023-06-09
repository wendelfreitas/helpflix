import React from 'react';

interface DonateCardValueProps {
  value: string;
}
export const DonateCardValue = ({ value }: DonateCardValueProps) => {
  return (
    <div className="h-24 rounded-lg border-2 border-blue-600 flex flex-col px-2.5 py-4 mb-5">
      <p className="text-xs text-dark-grey">Valor da doação</p>
      <p>
        R$ <span className="text-black text-2xl font-bold">{value} Reais</span>
      </p>
      <p className="text-blue-600 font-bold text-lg">
        Para tornar um mundo melhor
      </p>
    </div>
  );
};
