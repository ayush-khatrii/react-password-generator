import React, { createContext, useContext, useState } from "react";

const PasswordContext = createContext();

export const usePasswordContext = () => {
	return useContext(PasswordContext);
};

const uppercaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseList = "abcdefghijklmnopqrstuvwxyz";
const numbersList = "0123456789";
const symbolsList = "!@#$&*()_-.?";

export const PasswordProvider = ({ children }) => {
	const [password, setPassword] = useState("");
	const [isCopied, setIsCopied] = useState(false);
	const [passLength, setpassLength] = useState(8);
	const [number, setNumber] = useState(true);
	const [lowercase, setLowercase] = useState(true);
	const [uppercase, setUppercase] = useState(true);
	const [symbol, setSymbol] = useState(true);

	const generatePassword = () => {
		let generatedPassword = "";

		if (uppercase) {
			generatedPassword += uppercaseList;
		}

		if (lowercase) {
			generatedPassword += lowercaseList;
		}

		if (symbol) {
			generatedPassword += symbolsList;
		}

		if (number) {
			generatedPassword += numbersList;
		}

		let tempPassword = "";
		const generatedPassLength = generatedPassword.length;

		for (let i = 0; i < passLength; i++) {
			let charIndex = Math.floor(Math.random() * generatedPassLength);
			tempPassword += generatedPassword[charIndex];
		}

		setPassword(tempPassword);
	};

	const handleCopy = () => {
		navigator.clipboard.writeText(password);
		setIsCopied(true);

		setTimeout(() => {
			setIsCopied(false);
		}, 1000);
	};

	return (
		<PasswordContext.Provider
			value={{
				password,
				isCopied,
				passLength,
				number,
				lowercase,
				uppercase,
				symbol,
				setpassLength,
				setNumber,
				setLowercase,
				setUppercase,
				setSymbol,
				generatePassword,
				handleCopy,
			}}
		>
			{children}
		</PasswordContext.Provider>
	);
};
