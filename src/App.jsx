import { useEffect } from "react";
import { usePasswordContext } from "./context/PasswordContext ";

const App = () => {
	const {
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
	} = usePasswordContext();

	useEffect(() => {
		generatePassword();
	}, [passLength]);

	// Track of all checkboxes state
	const allCheckBoxes = !number && !lowercase && !uppercase && !symbol;

	return (
		<div className='flex justify-center items-center h-screen md:px-0 px-5'>
			<div className='w-full  max-w-xl p-4 border  border-gray-700 -lg shadow sm:p-6 md:p-8 bg-[#0e131c]  text-slate-200 rounded'>
				<div className='space-y-6'>
					<div className='flex  items-center justify-between'>
						<h1 className='text-2xl font-bold text-white'>
							Password Generator
						</h1>
					</div>

					<div className='flex text-center items-center bg-[#090c11] justify-between p-3 rounded'>
						<span>{password}</span>
						<button
							onClick={handleCopy}
							className='px-3 py-2 rounded bg-[#0e131c	]'
						>
							{isCopied ? "Copied!" : "Copy"}
						</button>
					</div>

					<div className='flex text-xl gap-5 justify-center items-center text-center'>
						<label className='  font-medium '>Password length</label>
						<span className=' border border-slate-800 px-4 py-2'>
							{passLength}
						</span>
					</div>

					<div
						className={`slider-container ${allCheckBoxes ? "disabled" : ""}`}
					>
						<div className='slider'>
							<input
								className={`range-slider h-11 w-full ${
									allCheckBoxes ? "disabled" : ""
								}`}
								type='range'
								min={8}
								max={20}
								defaultValue={passLength}
								onChange={(e) => {
									setpassLength(e.currentTarget.value);
								}}
								disabled={allCheckBoxes}
							/>
						</div>
					</div>

					{/* CheckBoxes */}
					<div className='grid lg:grid-rows-4 md:grid-rows-4 gap-5  '>
						<div className='flex items-start'>
							<div className='flex items-center h-5'>
								<input
									id='box1'
									type='checkbox'
									checked={uppercase}
									onChange={() => setUppercase(!uppercase)}
									className='w-4 h-4 bottom-2order  bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700'
								/>
							</div>
							<label
								htmlFor='box1'
								className='ml-2 text-sm font-medium text-gray-300'
							>
								Include Uppercase Letters (A-Z)
							</label>
						</div>

						<div className='flex items-start'>
							<div className='flex items-center h-5'>
								<input
									id='box2'
									type='checkbox'
									checked={lowercase}
									onChange={() => setLowercase(!lowercase)}
									className='w-4 h-4 border border-gray-300  bg-gray-50'
								/>
							</div>
							<label
								htmlFor='box2'
								className='ml-2 text-sm font-medium text-gray-300'
							>
								Include Lowercase Letters (a-z)
							</label>
						</div>

						<div className='flex items-start'>
							<div className='flex items-center h-5'>
								<input
									id='box3'
									checked={number}
									type='checkbox'
									onChange={() => setNumber(!number)}
									className='w-4 h-4 border border-gray-300  bg-gray-50'
								/>
							</div>
							<label
								htmlFor='box3'
								className='ml-2 text-sm font-medium text-gray-300'
							>
								Include Numbers (0-9)
							</label>
						</div>

						<div className='flex items-start'>
							<div className='flex items-center h-5'>
								<input
									id='box4'
									type='checkbox'
									checked={symbol}
									onChange={() => setSymbol(!symbol)}
									className='w-4 h-4 border border-gray-300  bg-gray-50'
								/>
							</div>
							<label
								htmlFor='box4'
								className='ml-2 text-sm font-medium text-gray-300'
							>
								Include Symbols (!@#$)
							</label>
						</div>
					</div>

					<button
						onClick={generatePassword}
						disabled={allCheckBoxes}
						className={`rounded text-xl w-full text-white bg-blue-700 transition ease-in duration-100 hover:bg-blue-600 p-3 ${
							allCheckBoxes ? "disabled" : ""
						}`}
					>
						Generate
					</button>
				</div>
			</div>
		</div>
	);
};

export default App;
