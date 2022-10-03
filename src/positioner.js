"use strict";

const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);

console.log("hello?");

const {
  // background,
  // baseUri,
  // buildDir,
  // debugLogs,
  // description,
  // emptyLayerName,
  // extraAttributes,
  // extraMetadata,
  // forcedCombinations,
  // format,
  // hashImages,
  // incompatible,
  // layerConfigurations,
  // layersDir,
  // outputJPEG,
  rarityDelimiter,
  // shuffleLayerConfigurations,
  // startIndex,
  // traitValueOverrides,
  // uniqueDnaTorrance,
  // useRootTraitType,
} = require(path.join(basePath, "/src/config.js"));

//Relative positions are calculated from the center of images
const relativePositions = [
  {
    dependentTrait: "ThronePositioner",
    dependentTraitValues: ["noThronePosition","chairPosition","highChairPosition","blockThronePosition"],
    independentTrait: "Background",
    independentTraitValues: ["background1"],
    position: [-113, 172]
  },
  {
    dependentTrait: "ThronePositioner",
    dependentTraitValues: ["noThronePosition","chairPosition","highChairPosition","blockThronePosition"],
    independentTrait: "Background",
    independentTraitValues: ["background2"],
    position: [-22, 115]
  },
  {
    dependentTrait: "ThronePositioner",
    dependentTraitValues: ["noThronePosition","chairPosition","highChairPosition","blockThronePosition"],
    independentTrait: "Background",
    independentTraitValues: ["background3"],
    position: [-268, 173]
  },
  {
    dependentTrait: "Pose",
    dependentTraitValues: ["pose1MaleBody","pose2MaleBody","pose3MaleBody","pose4MaleBody","pose5MaleBody","pose6MaleBody","pose7MaleBody","pose9MaleBody","pose10MaleBody"],
    independentTrait: "ThronePositioner",
    independentTraitValues: ["noThronePosition"],
    position: [0, 0]
  },
  {
    dependentTrait: "Pose",
    dependentTraitValues: ["pose1MaleBody","pose2MaleBody","pose3MaleBody","pose4MaleBody","pose5MaleBody","pose6MaleBody","pose7MaleBody","pose9MaleBody","pose10MaleBody"],
    independentTrait: "ThronePositioner",
    independentTraitValues: ["chairPosition"],
    position: [0, 146.5]
  },
  {
    dependentTrait: "Pose",
    dependentTraitValues: ["pose1MaleBody","pose2MaleBody","pose3MaleBody","pose4MaleBody","pose5MaleBody","pose6MaleBody","pose7MaleBody","pose9MaleBody","pose10MaleBody"],
    independentTrait: "ThronePositioner",
    independentTraitValues: ["highChairPosition"],
    position: [0, 74]
  },
  {
    dependentTrait: "Pose",
    dependentTraitValues: ["pose1MaleBody","pose2MaleBody","pose3MaleBody","pose4MaleBody","pose5MaleBody","pose6MaleBody","pose7MaleBody","pose9MaleBody","pose10MaleBody"],
    independentTrait: "ThronePositioner",
    independentTraitValues: ["blockThronePosition"],
    position: [0, 4]
  },
  {
    dependentTrait: "Pose",
    dependentTraitValues: ["pose1MaleBody","pose2MaleBody","pose3MaleBody","pose4MaleBody","pose5MaleBody","pose6MaleBody","pose7MaleBody","pose9MaleBody","pose10MaleBody"],
    independentTrait: "Background",
    independentTraitValues: ["background2"],
    position: [-22, 116]
  },
  {
    dependentTrait: "Pose",
    dependentTraitValues: ["pose1MaleBody","pose2MaleBody","pose3MaleBody","pose4MaleBody","pose5MaleBody","pose6MaleBody","pose7MaleBody","pose9MaleBody","pose10MaleBody"],
    independentTrait: "Background",
    independentTraitValues: ["background3"],
    position: [-268, 175]
  },
  {
	  dependentTrait: "Thrones",
	  dependentTraitValues: ["blockThrone","vultureThrone","leopardChair","semaTawyChair","tiOxChair","commonChair","lionThrone"],
	  independentTrait: "Pose",
	  independentTraitValues: ["pose6MaleBody","pose7MaleBody","pose9MaleBody","pose10MaleBody"],
	  position: [26,25]
  },
  {
	  dependentTrait: "Male Arms",
	  dependentTraitValues: ["pose1MaleArms","pose2MaleArms","pose3MaleArms","pose4-6MaleArms","pose5-10MaleArms","pose7MaleArms","pose9MaleArms"],
	  independentTrait: "Pose",
	  independentTraitValues: ["pose1MaleBody","pose2MaleBody","pose3MaleBody","pose4MaleBody","pose5MaleBody","pose6MaleBody","pose7MaleBody","pose9MaleBody","pose10MaleBody"],
	  position: [0,0]
  },
  {
	  dependentTrait: "Hands",
	  dependentTraitValues: ["pose1Hands","pose2Hands","pose3Hands","pose4-6Hands","pose5-10Hands","pose7Hands","pose9Hands"],
	  independentTrait: "Pose",
	  independentTraitValues: ["pose1MaleBody","pose2MaleBody","pose3MaleBody","pose4MaleBody","pose5MaleBody","pose6MaleBody","pose7MaleBody","pose9MaleBody","pose10MaleBody"],
	  position: [0,0]
  },
  {
	  dependentTrait: "Shoes",
	  dependentTraitValues: ["shoes1_1_sit","shoes1_2_sit","shoes2_1_sit","shoes2_2_sit","shoes2_3_sit","shoes2_4_sit","shoes3_1_sit","shoes3_2_sit","shoes4_1_sit","shoes4_2_sit","shoes5_1_sit","shoes5_2_sit","shoes6_1_sit","shoes6_2_sit","shoes7_1_sit","shoes8_1_sit","shoes8_2_sit","shoes9_1_sit","shoes9_2_sit","shoes9_3_sit","shoes9_4_sit",
	  "shoes1_1_stand","shoes1_2_stand","shoes2_1_stand","shoes2_2_stand","shoes2_3_stand","shoes2_4_stand","shoes3_1_stand","shoes3_2_stand","shoes4_1_stand","shoes4_2_stand","shoes5_1_stand","shoes5_2_stand","shoes6_1_stand","shoes6_2_stand","shoes7_1_stand","shoes8_1_stand","shoes8_2_stand","shoes9_1_stand","shoes9_2_stand","shoes9_3_stand","shoes9_4_stand"],
	  independentTrait: "Pose",
	  independentTraitValues: ["pose1MaleBody","pose2MaleBody","pose3MaleBody","pose4MaleBody","pose5MaleBody","pose6MaleBody","pose7MaleBody","pose9MaleBody","pose10MaleBody"],
	  position: [23,250]
  },
  {
	  dependentTrait: "Items Right",
	  dependentTraitValues: ["Right1"],
	  independentTrait: "Pose",
	  independentTraitValues: ["pose1MaleBody"],
	  position: [150,-104]
  },
  {
	  dependentTrait: "Items Right",
	  dependentTraitValues: ["Right2-3-5-7-9-10"],
	  independentTrait: "Pose",
	  independentTraitValues: ["pose2MaleBody","pose5MaleBody","pose9MaleBody","pose10MaleBody"],
	  position: [310,-153]
  },
  {
	  dependentTrait: "Items Right",
	  dependentTraitValues: ["Right2-3-5-7-9-10"],
	  independentTrait: "Pose",
	  independentTraitValues: ["pose3MaleBody"],
	  position: [248,-76]
  },
  {
	  dependentTrait: "Items Right",
	  dependentTraitValues: ["Right2-3-5-7-9-10"],
	  independentTrait: "Pose",
	  independentTraitValues: ["pose7MaleBody"],
	  position: [272,-155]
  },
  {
	  dependentTrait: "Items Right",
	  dependentTraitValues: ["Right4-6"],
	  independentTrait: "Pose",
	  independentTraitValues: ["pose4MaleBody","pose6MaleBody"],
	  position: [-60,-68]
  },
  {
	  dependentTrait: "Items Left",
	  dependentTraitValues: ["Left1-2"],
	  independentTrait: "Pose",
	  independentTraitValues: ["pose1MaleBody","pose2MaleBody"],
	  position: [-103,51]
  },
  {
	  dependentTrait: "Items Left",
	  dependentTraitValues: ["Left3-7-9"],
	  independentTrait: "Pose",
	  independentTraitValues: ["pose3MaleBody"],
	  position: [16,-4]
  },
  {
	  dependentTrait: "Items Left",
	  dependentTraitValues: ["Left3-7-9"],
	  independentTrait: "Pose",
	  independentTraitValues: ["pose7MaleBody","pose9MaleBody"],
	  position: [5,3]
  },
  {
	  dependentTrait: "Items Left",
	  dependentTraitValues: ["Left4-5-6-10"],
	  independentTrait: "Pose",
	  independentTraitValues: ["pose4MaleBody","pose5MaleBody","pose6MaleBody","pose10MaleBody"],
	  position: [-171,-70]
  },
  {
	  dependentTrait: "Head",
	  dependentTraitValues: ["head1","head2","head3","head4","head5","head6","head7","head8","head9","head10"],
	  independentTrait: "Pose",
	  independentTraitValues: ["pose1MaleBody","pose2MaleBody","pose3MaleBody","pose4MaleBody","pose5MaleBody","pose6MaleBody","pose7MaleBody","pose9MaleBody","pose10MaleBody"],
	  position: [-128,-448]
  },
  {
	  dependentTrait: "Clothes",
	  dependentTraitValues: ["clothes1","clothes2","peltSkirt1,2","peltSkirt3","peltSkirt4","peltSkirt5","leopard6","leopard7,8,9","leopard10"],
	  independentTrait: "Pose",
	  independentTraitValues: ["pose1MaleBody","pose2MaleBody","pose3MaleBody","pose4MaleBody","pose5MaleBody","pose6MaleBody","pose7MaleBody","pose9MaleBody","pose10MaleBody"],
	  position: [0,0]  
	}
]

const absolutePositions = [
	{
	  trait: "collectionColumn",
	  // dependentTraitValues: ["GivingPraiseToHorus"],
	  position: [800,114]
	},
	{
	  trait: "titles",
	  // dependentTraitValues: ["BenevolentOne","DirectorOfThatWhichIsAndIsNot","FieryOne","GreatCompanionInTheHouseOfGold","GreatestOfTheGreat","HeIsLordOfTheEast","HeIsLordOfTheNorth","HeIsLordOfTheSouth","HeIsLordOfTheWest","KingOfKings","MasterOfSecrets","Mighty One","OneToWhomeTheGoldOfFavorWasRepeatedlyGiven","OverseerOfEverythingThatHeavenGivesAndEarthCreates","OverseerOfEverythingThatHeavenGivesAndEarthCreatesAndTheInundationBrings","PraisedOne","ReveredOne","RulerOfMagic","RulerOfPeopleBeyondMillions","rulerOfPeopleBeyondThousands","TheGoodOne"],
	  position: [901,114]
	},
	{
	  trait: "epithets",
	  // dependentTraitValues: ["EENFT"],
	  position: [1002,114]
	}
];

const traitToPositionDataMap = new Map();

// for(let i=0;i<absolutePositions.length;i++){
// 	let next = absolutePositions[i];
// 	for(let j=0; j<next.dependentTraitValues.length;j++){
// 		traitToPositionDataMap.set(next.dependentTrait, 
// 			{
// 				"traitValue": next.dependentTraitValues[j],
// 				"centerCoord": [0,0],
// 				"canvasCoord": next.position,
// 				"width": 0,
// 				"height": 0
// 			});
// 	}
// }

const FindIndependentTraitPosition = (relativePosition) => {

	for(const [key, value] of traitToPositionDataMap.entries())

		if(key == relativePosition.independentTrait){

			for(const independentTraitValue of relativePosition.independentTraitValues){

				if(independentTraitValue == value.traitValue){

					return [relativePosition,value];
			}
		}
	}

	return [null,null];
}

const FindRelativePosition = (trait, traitValue, filepath) => {

	for(const relativePosition of relativePositions){

		if(relativePosition.dependentTrait == trait){

			for(const dependentTraitValue of relativePosition.dependentTraitValues){

				if(traitValue == dependentTraitValue){

					let result = FindIndependentTraitPosition(relativePosition);

					if(result[0] != null)
						return result;
				}
			}

			//If we made it here, try using parent directories as keys instead

			const parentDirectories = filepath.split('/');

			for(const parentDirectory of parentDirectories){

				let directoryKey = parentDirectory.split(rarityDelimiter)[0];
				console.log("Trying directory: ",directoryKey," as dependent key");

				for(const dependentTraitValue of relativePosition.dependentTraitValues){

					if(directoryKey == dependentTraitValue){

						let result = FindIndependentTraitPosition(relativePosition);

						if(result[0] != null)
							return result;
					}
				}
			}
		}
	}

	return [null,null];
}

const FindAbsolutePosition = (trait) => {

	for(let i=0;i<absolutePositions.length;i++){

		if(absolutePositions[i].trait == trait){
			return [absolutePositions[i].position,[0,0]]
		}
	}

	return [null,null];
}

const GetGlobalPosition =  (_renderObject) => {
	
	let trait = _renderObject.layer.trait;
	let traitValue = _renderObject.layer.traitValue
	let filepath = _renderObject.layer.path

	let result = FindAbsolutePosition(trait);
	let centerCoord = [0,0];
	let canvasCoord = [0,0];

	if(result[0] == null)
	{
		result = FindRelativePosition(trait, traitValue,filepath);

		let dependentTraitRelativePosition = result[0];
		let independentTraitGlobalPosition = result[1];
		

		console.log("\n_renderObject:\n\t",JSON.stringify(_renderObject));
		console.log("\nresult:\n\t",JSON.stringify(result));

		if(dependentTraitRelativePosition != null){
			console.log("\ndependentTraitRelativePosition:\n\t",JSON.stringify(dependentTraitRelativePosition));
			console.log("\nindependentTraitGlobalPosition:\n\t",JSON.stringify(independentTraitGlobalPosition));
			centerCoord = [independentTraitGlobalPosition.centerCoord[0]+dependentTraitRelativePosition.position[0],independentTraitGlobalPosition.centerCoord[1]+dependentTraitRelativePosition.position[1]]
			canvasCoord = [centerCoord[0]-_renderObject.loadedImage.width/2,centerCoord[1]-_renderObject.loadedImage.height/2,]
		}else{
			canvasCoord = [0,0]
			centerCoord = [ _renderObject.loadedImage.width/2, _renderObject.loadedImage.height/2]
		}

	}
	else
	{
		canvasCoord = result[0]
	}

	

	console.log("GetGlobalPosition: ",trait,"/",traitValue);

	const positionData = {"traitValue": traitValue,
		"centerCoord": centerCoord,
		"canvasCoord": canvasCoord,
		"width": _renderObject.loadedImage.width,
		"height": _renderObject.loadedImage.height
	};

	console.log("\tpositionData: ",JSON.stringify(positionData));

	traitToPositionDataMap.set(trait,positionData);

	return positionData;
}
















module.exports = {
  GetGlobalPosition,
};