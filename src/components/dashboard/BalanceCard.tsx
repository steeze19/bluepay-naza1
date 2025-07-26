
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface BalanceCardProps {
  balance: number;
}

const BalanceCard = ({ balance }: BalanceCardProps) => {
  const navigate = useNavigate();

  return (
    <div className="bg-bluepay-blue text-white rounded-xl p-3 mb-2">
      <p className="text-sm mb-1">Available Balance</p>
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-2xl font-bold">₦{balance.toLocaleString()}</h3>
        <Button 
          className="bg-white text-bluepay-blue hover:bg-gray-100 font-semibold text-xs px-2 py-1 h-8"
          onClick={() => navigate("/withdraw")}
        >
          Withdraw
        </Button>
      </div>
      <div className="bg-white/10 rounded-lg p-2">
        <div className="flex justify-between items-center">
          <p className="text-xs">Daily spend target</p>
          <p className="text-xs font-semibold">₦200,000</p>
        </div>
        <div className="w-full bg-white/20 h-1 rounded-full mt-1">
          <div className="bg-white h-1 rounded-full" style={{width: "35%"}}></div>
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;
