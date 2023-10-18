'use client';
import React from 'react';
import { useParams } from 'next/navigation';

const Page = () => {
	const params = useParams();
	const { characterName } = params;

	return <div>{characterName}</div>;
};

export default Page;
