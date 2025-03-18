import { useFinancialBalance } from "../contexts/FinancialBalanceContext";

const BalanceView = () => {
	const { balance } = useFinancialBalance();

	return (
		<div className="w-full text-center">
			<p>{`Balance: $${balance?.balance}`}</p>
		</div>
	);
};

export default BalanceView;