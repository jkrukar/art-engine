"use strict";

const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const { MODE } = require(path.join(basePath, "src/blendMode.js"));

const buildDir = path.join(basePath, "/build");
const layersDir = path.join(basePath, "/layers");

const description =
  "This is the description of your NFT project, remember to replace this";
const baseUri = "ipfs://NewUriToReplace";

const outputJPEG = false; // if false, the generator outputs png's
/**
 * Set your tokenID index start number.
 * ⚠️ Be sure it matches your smart contract!
 */
const startIndex = 0;

// if you use an empty/transparent file, set the name here.
const emptyLayerName = "NONE";

//IF you need a provenance hash, turn this on
const hashImages = true;

const layerConfigurations = [
  {
    growEditionSizeTo: 5,
    // namePrefix: "Monkey", Use to add a name to Metadata `name:`
    layersOrder: [
      { name: "Background",
      },
      { name: "ThronePositioner",
        options: {
            bypassDNA: true,
          }
      },
      { 
        name: "Male Pose",
        trait: "Pose",
       },      
      { name: "Shoes",
      },
      
      { name: "Male Arms",
        options: {
            bypassDNA: true,
          }
      },
       { name: "Male Clothes",
      trait: "Clothes",
      },
      { name: "Thrones",
      },
      { name: "Male Heads",
      trait: "Head",
      },
      { name: "Items Left",
      },
      { name: "Items Right",
      },
      { name: "Hands",
        options: {
            bypassDNA: true,
          }
      },
            { name: "epithets",
      },
      { name: "titles",
      },
      { name: "collectionColumn",
        options: {
          bypassDNA:true,
        }
      },

    ],
  },
  // {
  //   growEditionSizeTo: 10,
  //   namePrefix: "Lion",
  //   resetNameIndex: true, // this will start the Lion count at #1 instead of #6
  //   layersOrder: [
  //     { name: "Background" },
  //     { name: "Hats" },
  //     { name: "Male Hair" },
  //   ],
  // },
];

/**
 * Incompatible items can be added to this object by a files cleanName
 * This works in layer order, meaning, you need to define the layer that comes
 * first as the Key, and the incompatible items that _may_ come after.
 * The current version requires all layers to have unique names, or you may
 * accidentally set incompatibilities for the _wrong_ item.
 */
const incompatible = {
  noThronePosition: ["Sitting Pose","blockThrones","chairs","highChairs"],
  highChairPosition: ["Standing Pose","blockThrones","chairs","noThrone"],
  chairPosition: ["Standing Pose","blockThrones","highChairs","noThrone"],
  blockThronePosition: ["Standing Pose","chairs","highChairs","noThrone"],
  "Standing Pose": ["Sitting Clothes","Sitting Shoes"],
  "Sitting Pose": ["Standing Clothes","Standing Shoes"],
  "background3": ["Sitting Pose","highChairPosition","chairPosition","blockThronePosition"],
  pose1MaleBody: ["Right2-3-5-7-9-10","Right4-6","Left3-7-9","Left4-5-6-10","peltSkirt3","peltSkirt4","peltSkirt5"],
  pose2MaleBody: ["Right1","Right4-6","Left3-7-9","Left4-5-6-10","peltSkirt3","peltSkirt4","peltSkirt5"],
  pose3MaleBody: ["Right1","Right4-6","Left1-2","Left4-5-6-10","peltSkirt1,2","peltSkirt4","peltSkirt5"],
  pose4MaleBody: ["Right2-3-5-7-9-10","Right1","Left1-2","Left3-7-9","peltSkirt1,2","peltSkirt3","peltSkirt5"],
  pose5MaleBody: ["Right1","Right4-6","Left1-2","Left3-7-9","peltSkirt1,2","peltSkirt3","peltSkirt4"],
  pose6MaleBody: ["Right2-3-5-7-9-10","Right1","Left1-2","Left3-7-9","leopard7,8,9","leopard10"],
  pose7MaleBody: ["Right1","Right4-6","Left1-2","Left4-5-6-10","leopard6","leopard10"],
  pose9MaleBody: ["Right1","Right4-6","Left1-2","Left4-5-6-10","leopard6","leopard10"],
  pose10MaleBody: ["Right1","Right4-6","Left1-2","Left3-7-9","leopard7,8,9","leopard6"],
  //   Red: ["Dark Long"],
  //   // directory incompatible with directory example
  //   White: ["rare-Pink-Pompadour"],
};

/**
 * Require combinations of files when constructing DNA, this bypasses the
 * randomization and weights.
 *
 * The layer order matters here, the key (left side) is an item within
 * the layer that comes first in the stack.
 * the items in the array are "required" items that should be pulled from folders
 * further in the stack
 */
const forcedCombinations = {
  // floral: ["MetallicShades", "Golden Sakura"],
  pose1MaleBody: ["pose1MaleArms","pose1Hands"],
  pose2MaleBody: ["pose2MaleArms","pose2Hands"],
  pose3MaleBody: ["pose3MaleArms","pose3Hands"],
  pose4MaleBody: ["pose4-6MaleArms","pose4-6Hands"],
  pose5MaleBody: ["pose5-10MaleArms","pose5-10Hands"],
  pose6MaleBody: ["pose4-6MaleArms","pose4-6Hands"],
  pose7MaleBody: ["pose7MaleArms","pose7Hands"],
  pose9MaleBody: ["pose9MaleArms","pose9Hands"],
  pose10MaleBody: ["pose5-10MaleArms","pose5-10Hands"],


  //   pose1MaleBody: ["pose1MaleArms","Right1"],
  // pose2MaleBody: ["pose2MaleArms","Right2-3-5-7-9-10"],
  // pose3MaleBody: ["pose3MaleArms","Right2-3-5-7-9-10"],
  // pose4MaleBody: ["pose4-6MaleArms","Right4-6"],
  // pose5MaleBody: ["pose5-10MaleArms","Right2-3-5-7-9-10"],
  // pose6MaleBody: ["pose4-6MaleArms","Right4-6"],
  // pose7MaleBody: ["pose7MaleArms","Right2-3-5-7-9-10"],
  // pose9MaleBody: ["pose9MaleArms","Right2-3-5-7-9-10"],
  // pose10MaleBody: ["pose5-10MaleArms","Right2-3-5-7-9-10"],
};

const shuffleLayerConfigurations = false;

/**
 * In the event that a filename cannot be the trait value name, for example when
 * multiple items should have the same value, specify
 * clean-filename: trait-value override pairs. Wrap filenames with spaces in quotes.
 */
const traitValueOverrides = {
  // Helmet: "Space Helmet",
  // "gold chain": "GOLDEN NECKLACE",
};

const debugLogs = true;

const format = {
  width: 1264,
  height: 1264,
};

const background = {
  generate: true,
  brightness: "80%",
};

const extraMetadata = {};

const extraAttributes = () => [
  // Optionally, if you need to overwrite one of your layers attributes.
  // You can include the same name as the layer, here, and it will overwrite
  //
  // {
  // trait_type: "Bottom lid",
  //   value: ` Bottom lid # ${Math.random() * 100}`,
  // },
  // {
  //   display_type: "boost_number",
  //   trait_type: "Aqua Power",
  //   value: Math.random() * 100,
  // },
  // {
  //   display_type: "boost_number",
  //   trait_type: "Health",
  //   value: Math.random() * 100,
  // },
  // {
  //   display_type: "boost_number",
  //   trait_type: "Mana",
  //   value: Math.floor(Math.random() * 100),
  // },
];

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

/**
 * Set to true to always use the root folder as trait_tybe
 * Set to false to use weighted parent folders as trait_type
 * Default is true.
 */
const useRootTraitType = true;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.width / format.height,
  imageName: "preview.png",
};

module.exports = {
  background,
  baseUri,
  buildDir,
  debugLogs,
  description,
  emptyLayerName,
  extraAttributes,
  extraMetadata,
  forcedCombinations,
  format,
  hashImages,
  incompatible,
  layerConfigurations,
  layersDir,
  outputJPEG,
  preview,
  rarityDelimiter,
  shuffleLayerConfigurations,
  startIndex,
  traitValueOverrides,
  uniqueDnaTorrance,
  useRootTraitType,
};
