import Image from 'next/image';
import { getCharacterEquipment } from 'src/api/blizzard-service/characterEquipment';
import { getCharacterProfile } from 'src/api/blizzard-service/characterProfile';
import { getCharacterSpecializations } from 'src/api/blizzard-service/characterSpecializations';
import { Talents } from './(talent-tree)/Talents';
import { CharacterProfileSummary } from 'src/types/blizzard/characterProfileSummary.t';
import ItemPanel from './(ItemPanel)';
import TabElement from './(tab)';
import { TabData } from './(tab)/type';
import { wowClassColors } from 'src/utils/wowClassColors';
import { CharacterSpecializations } from 'src/types/blizzard/characterSpecializations.t';
import { itemLevelColors, levelColors } from './Colors';
import StatPanel from './(StatPanel)';
import { getCharacterStats } from 'src/api/blizzard-service/characterStats';
import { calculatePayout } from 'src/utils/payoutAlogrithm';

const CharacterPage = async ({
	params,
}: {
	params: { region: string; realm: string; characterName: string };
}) => {
	const characterProfile = await getCharacterProfile(params);
	const characterSpecs = await getCharacterSpecializations(params);
	const characterEquipment = await getCharacterEquipment(params);
	const characterStats = await getCharacterStats(params);
	const categories: TabData[] = [
		{
			name: 'Character Panel',
			content: <ItemPanel items={characterEquipment} />,
			param: 'character-panel',
		},
		{
			name: 'Talents',
			content: (
				<Talents
					specializationGroup={characterSpecs.specialization_groups[0]}
					wowClass={characterProfile.character_class.name}
				/>
			),
			param: 'talents',
		},
		{
			name: 'Statistics',
			content: <StatPanel characterStats={characterStats} />,
			param: 'statistics',
		},
	];

	return (
		<div className="w-[1080px] my-0 mx-auto">
			<div className="flex-1 mx-0 my-auto">
				<div>
					<Header
						characterProfile={characterProfile}
						characterSpecs={characterSpecs}
					/>
				</div>
				<div>
					<TabElement params={params} categories={categories} />
				</div>
			</div>
		</div>
	);
};

const Header = ({
	characterProfile,
	characterSpecs,
}: {
	characterProfile: CharacterProfileSummary;
	characterSpecs: CharacterSpecializations;
}) => {
	const getMainSpec = () => {
		const mainSpec =
			characterSpecs.specialization_groups[0].specializations.reduce(function (
				prev,
				current
			) {
				return prev && prev.spent_points > current.spent_points
					? prev
					: current;
			});

		return mainSpec?.specialization_name;
	};

	return (
		<div className="w-full flex">
			<div className="max-w-[1016px] pt-[48px] px-0 ">
				<div className="flex flex-col relative max-w-[1016px]">
					<div className="mb-[36px] flex flex-col">
						<div className="flex flex-row flex-nowrap gap-5">
							<div
								style={{
									outlineColor: wowClassColors(
										characterProfile.character_class.name
									),
								}}
								className={
									'w-[100px] h-[100px] flex flex-row flex-nowrap rounded-sm outline outline-2'
								}
							>
								<div className="bg-blue-700 flex flex-row">
									<Image
										src={`/races/race_${characterProfile.race.name
											.toLowerCase()
											.replace(
												/\s/g,
												''
											)}_${characterProfile.gender.type.toLowerCase()}.jpeg`}
										alt="race image"
										className={'z-20 w-full h-full'}
										height={100}
										width={100}
									/>
								</div>
							</div>
							<div className="flex items-center">
								<div className="flex flex-col">
									<div className="font-bold text-2xl flex flex-row items-center gap-2">
										{characterProfile.name}
										<div className="rounded">
											<Image
												src={`/talents/icons/class_${characterProfile.character_class.name}.jpg`}
												width={30}
												height={30}
												alt="hej"
											/>
										</div>
									</div>
									<div>
										<span>
											{characterProfile.race.name +
												' ' +
												getMainSpec() +
												' ' +
												characterProfile.character_class.name}
										</span>
									</div>
								</div>
								<div className="ml-10 flex flex-row gap-5">
									<div
										style={{
											backgroundColor: levelColors(characterProfile.level)
												?.backgroundColor,
											color: levelColors(characterProfile.level)?.color,
										}}
										className={'rounded-sm px-4 py-1'}
									>
										Level {characterProfile.level}
									</div>
									<div
										style={{
											backgroundColor: itemLevelColors(
												characterProfile.equipped_item_level
											)?.backgroundColor,
											color: itemLevelColors(
												characterProfile.equipped_item_level
											)?.color,
										}}
										className="bg-green-200 text-green-700 rounded-sm px-4 py-1"
									>
										ILevel {characterProfile.equipped_item_level}
									</div>
									{characterProfile.is_ghost ? (
										<div className="bg-red-200 text-red-700 rounded-sm px-4 py-1">
											Dead
										</div>
									) : (
										<div className="flex flex-row gap-5">
											<div className="bg-green-200 text-green-700 rounded-sm px-4 py-1">
												Alive
											</div>
											<div className="bg-indigo-200 text-indigo-700 rounded-sm px-4 py-1">
												Payout {calculatePayout(characterProfile.level)}
											</div>
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CharacterPage;
