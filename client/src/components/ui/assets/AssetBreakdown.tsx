import React, { useState } from "react";
import usePriceManager from "../../../managers/PriceManager";
import { Investment } from "../../../lib/globalTypes";

const DEFAULT_INVESTMENTS: Investment[] = [
  {
    id: "1",
    entry: "VOO",
    date: new Date(2025, 2, 14),
    type: "Stock",
    equity: "1.3",
    amount: "",
  },
  {
    id: "2",
    date: new Date(2025, 2, 16),
    type: "Crypto",
    entry: "Bitcoin",
    equity: "1.2",
    amount: "",
  },
  {
    id: "3",
    date: new Date(2025, 3, 11),
    entry: "Westpac Savings",
    type: "Savings",
    description: "Wage from job",
    amount: "11000",
    rate: "5",
  },
];

const AssetBreakdown = ({ className }: { className?: string }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [investments, setInvestments] = useState(DEFAULT_INVESTMENTS);
  const [updatedInvestments, isLoading] = usePriceManager(investments);
  const toggleEditMode = () => setIsEditMode(!isEditMode);

  const handleDeleteInvestment = (id: string) => {
    setInvestments(
      updatedInvestments.filter(
        (investment: Investment) => investment.id !== id
      )
    );
  };
  return (
    <div
      className={`border-[1px] border-gray-800 w-full h-[40rem] rounded-2xl bg-gradient-to-b from-zinc-950 to-zinc-900 shadow-lg ${className}`}
    >
      {/* Grid Title and Edit Button */}
      <div className="flex justify-between items-center text-neutral-100 px-6 py-8">
        <p className=" text-2xl">Portfolio</p>

        <button
          onClick={() => toggleEditMode()}
          className="transition transform hover:scale-105 duration-150 ease-in-out cursor-pointer"
        >
          <img
            src={isEditMode ? "/cross.png" : "/edit.png"}
            alt="Edit icon"
            width={512}
            height={512}
            className="w-[20px]"
          />
        </button>
      </div>

      {/* Portfolio */}
      <div className="max-h-[15rem] flex flex-col justify-center items-start w-full mt-3 gap-2 overflow-y-scroll scrollbar scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent px-3 pt-3 scrollbar-minimal">
                {isLoading ? (
                  <div>Loading your stack...</div>
                ) : (
                  updatedInvestments.map((investment: Investment) => (
                    <div
                      key={investment.id}
                      className="flex justify-between items-center w-full text-white"
                    >
                      {investment.type === "Savings" && (
                        <SavingsEntry investment={investment} />
                      )}
                      {investment.type === "Crypto" && (
                        <CryptoEntry investment={investment} />
                      )}
                      {investment.type === "Stock" && (
                        <StockEntry investment={investment} />
                      )}
      
                      <div className="flex justify-center items-center">
                        {isEditMode && (
                          <button
                            onClick={() => handleDeleteInvestment(investment.id)}
                            className="cursor-pointer ml-3"
                          >
                            <img
                              src="/trash.png"
                              alt="Delete icon"
                              width={512}
                              height={512}
                              className="w-[20px]"
                            />
                          </button>
                        )}
                      </div>
                    </div>
                  ))
                )}
              </div>
    </div>
  );
};

const SavingsEntry = ({ investment }: { investment: Investment }) => {
    return (
      <div className="flex justify-between items-center w-full text-white ">
        <div className="flex justify-start items-center w-full gap-5">
          <div className="flex gap-5">
            <div className="bg-gradient-to-tr from-black via-gray-900 to-green-900 rounded-xl p-1">
              <img
                src="/bank.png"
                alt="Bank icon"
                height={512}
                width={512}
                className="w-[2rem]"
              />
            </div>
          </div>
  
          <div className="w-[4.5rem] flex flex-col justify-center items-start">
            <p className="text-xs font-light text-stone-400">
              {investment.date.toLocaleDateString()}
            </p>
            <p
              className={
                investment.description ? "max-w-[4.5rem] break-words" : ""
              }
            >
              {investment.entry}
            </p>
          </div>
  
          <p className="max-w-[50%] border-l border-white pl-3 text-sm font-light overflow-hidden">
            {investment.description}
          </p>
        </div>
  
        <div className="flex flex-col justify-center items-end">
          <p className="text-end text-xs font-light text-stone-400">
            {investment.rate ? `${investment.rate}% p.a` : ""}
          </p>
          <p>{`$${Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(
            Number(investment.amount)
          )}`}</p>
        </div>
      </div>
    );
  };
  
  const CryptoEntry = ({ investment }: { investment: Investment }) => {
    return (
      <div className="flex justify-between items-center w-full text-white ">
        <div className="flex justify-start items-center w-full gap-5">
          <div className="flex gap-5">
            <div className="bg-gradient-to-tr from-black via-gray-900 to-purple-900 rounded-xl p-1">
              <img
                src="/crypto.png"
                alt="Crypto Icon"
                width={512}
                height={512}
                className="w-[2rem]"
              />
            </div>
          </div>
  
          <div className="w-[4.5rem] flex flex-col justify-center items-start">
            <p className="text-xs font-light text-stone-400">
              {investment.date.toLocaleDateString()}
            </p>
            <p className="max-w-[4.5rem]">{investment.entry}</p>
          </div>
  
          <p className="max-w-[50%] border-l border-white pl-3 text-sm font-light overflow-hidden">
            {`${investment.equity} coins`}
          </p>
        </div>
  
        <div className="flex flex-col justify-start items-center">
          <p>{`$${Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(
            Number(investment.amount)
          )}`}</p>
        </div>
      </div>
    );
  };
  
  const StockEntry = ({ investment }: { investment: Investment }) => {
    return (
      <div className="flex justify-between items-center w-full text-white ">
        <div className="flex justify-start items-center w-full gap-5">
          <div className="flex gap-5">
            <div className="bg-gradient-to-tr from-black via-gray-900 to-orange-900 rounded-xl p-1">
              <img
                src="/stock.png"
                alt="Stock Icon"
                width={512}
                height={512}
                className="w-[2rem]"
              />
            </div>
          </div>
  
          <div className="w-[4.5rem] flex flex-col justify-center items-start">
            <p className="text-xs font-light text-stone-400">
              {investment.date.toLocaleDateString()}
            </p>
            <p className="max-w-[4.5rem] break-words">{investment.entry}</p>
          </div>
  
          <p className="max-w-[50%] border-l border-white pl-3 text-sm font-light overflow-hidden">
            {`${investment.equity} shares`}
          </p>
        </div>
  
        <div className="flex flex-col justify-start items-center">
          <p>{`$${Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(
            Number(investment.amount)
          )}`}</p>
        </div>
      </div>
    );
  };

export default AssetBreakdown;
