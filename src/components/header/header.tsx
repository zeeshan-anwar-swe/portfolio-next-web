import { fetchDummyData } from "@/redux/slice/portfolio-slice";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import Link from "next/link";

function Header() {
	const dispatch = useDispatch<any>();

	const storeData = useSelector((state: any) => {
		return state.dummy;
	});

	const [bgColor, setBgColor] = useState("bg-c-yellow");

	useEffect(() => {
		dispatch(fetchDummyData());
		storeData.color === "c-pink"
			? setBgColor("hover:bg-c-pink")
			: storeData.color === "c-yellow"
			? setBgColor("hover:bg-c-yellow")
			: setBgColor("hover:bg-c-green");
	}, [storeData.color]);

	return (
		storeData && (
			<div
				className={`w-full h-full box text-${storeData.color} mx-auto flex flex-col justify-between sticky top-0 z-20`}>
				<div className="lg:mt-32 md:mt-48 mt-32">
					<h1
						className={`xl:text-5xl lg:text-4xl md:text-4xl text-${storeData.color} text-2xl font-medium leading-[1.4]`}>
						{storeData.dummy.header.headLine}
					</h1>

					<p className="mt-10 lg:text-lg lg:pr-16 md:pr-48">
						{storeData.dummy.header.discription}
					</p>

					<button
						className={`mt-10 font-base lg:font-normal rounded-full border-${storeData.color} px-4 py-2 lg:px-8 lg:py-4 lg:mt-20 ${bgColor}  hover:text-c-purple trans`}>
						Let's work together!
					</button>
				</div>

				<div>
					<p className="text-gray-400 mt-10">
						find me at
						<Link
							className="text-white ml-2"
							href={storeData.dummy.header.twitter}>
							Twitter
						</Link>
						<Link
							className="text-white mx-2"
							href={storeData.dummy.header.github}>
							GitHub
						</Link>
						and
						<Link
							className="text-white mx-2"
							href={storeData.dummy.header.linkedin}>
							LinkedIn
						</Link>
					</p>

					<p>
						Download
						<Link
							className="text-white mx-2"
							href={storeData.dummy.header.resume}>
							my resume
						</Link>
						(PDF 893kb)
					</p>
				</div>
			</div>
		)
	);
}

export default Header;
