//console.log("this is my argument: " + process.argv[2]);

var inputString = process.argv[2];
var finalWord = ["","","","",""];

var letterA = ["  A A  ", "A     A", "A A A A", "A     A", "A     A"];
var letterB = ["B B B B", "B     B", "B B B  ", "B     B", "B B B B"];
var letterC = ["  C C C", "C      ", "C      ", "C      ", "  C C C"];
var letterD = ["D D D  ", "D     D", "D     D", "D     D", "D D D  "];
var letterE = ["E E E E", "E      ", "E E E  ", "E      ", "E E E E"];
var letterF = ["F F F F", "F      ", "F F F  ", "F      ", "F      "];
var letterG = ["  G G G", "G      ", "G   G G", "G     G", "  G G G"];
var letterH = ["H     H", "H     H", "H H H H", "H     H", "H     H"];
var letterI = ["I I I I", "   I   ", "   I   ", "   I   ", "I I I I"];
var letterJ = ["      J", "      J", "      J", "J     J", "J J J J"];
var letterK = ["K     K", "K   K  ", "K K    ", "K   K  ", "K     K"];
var letterL = ["L      ", "L      ", "L      ", "L      ", "L L L L"];
var letterM = ["M     M", "M M M M", "M  M  M", "M     M", "M     M"];
var letterN = ["N     N", "N N   N", "N   N N", "N    NN", "N     N"];
var letterO = ["  O O  ", "O     O", "O     O", "O     O", "  O O  "];
var letterP = ["P P P  ", "P     P", "P P P  ", "P      ", "P      "];
var letterQ = ["  Q Q  ", "Q     Q", "Q     Q", "Q   Q  ", "  Q   Q"];
var letterR = ["R R R  ", "R     R", "R R R  ", "R    R ", "R     R"];
var letterS = [" S S S ", "S      ", " S S S ", "      S", " S S S "];
var letterT = ["T T T T", "   T   ", "   T   ", "   T   ", "   T   "];
var letterU = ["U     U", "U     U", "U     U", "U     U", "  U U  "];
var letterV = ["V     V", "V     V", " V   V ", "  V V  ", "   V   "];
var letterW = ["W     W", "W     W", "W  W  W", "W  W  W", " W   W "];
var letterX = ["X     X", " X   X ", "   X   ", " X   X ", "X     X"];
var letterY = ["Y     Y", " Y   Y ", "   Y   ", "   Y   ", "   Y   "];
var letterZ = ["Z Z Z Z", "     Z ", "   Z   ", " Z     ", "Z Z Z Z"];

//finalWord[0] = finalWord[0] + letterA[0];
//console.log(finalWord);
//finalWord[0] = finalWord[0] + letterB[0];
//console.log(finalWord);

for(j=0; j<5; j++){ //iterate through the height of the word

	for(i=0; i<inputString.length; i++){ //iterate through the letters

		//add the letters into finalWord[] 
		if(inputString[i] == "A" || inputString[i] == "a"){

			finalWord[j] = finalWord[j] + letterA[j] + "  ";

		}else if(inputString[i] == "B" || inputString[i] == "b"){
			
			finalWord[j] = finalWord[j] + letterB[j] + "  ";
			
		}else if(inputString[i] == "C" || inputString[i] == "c"){
			
			finalWord[j] = finalWord[j] + letterC[j] + "  ";
			
		}else if(inputString[i] == "D" || inputString[i] == "d"){
			
			finalWord[j] = finalWord[j] + letterD[j] + "  ";
			
		}else if(inputString[i] == "E" || inputString[i] == "e"){
			
			finalWord[j] = finalWord[j] + letterE[j] + "  ";
			
		}else if(inputString[i] == "F" || inputString[i] == "f"){
			
			finalWord[j] = finalWord[j] + letterF[j] + "  ";

		}else if(inputString[i] == "G" || inputString[i] == "g"){
			
			finalWord[j] = finalWord[j] + letterG[j] + "  ";
			
		}else if(inputString[i] == "H" || inputString[i] == "h"){
			
			finalWord[j] = finalWord[j] + letterH[j] + "  ";
			
		}else if(inputString[i] == "I" || inputString[i] == "i"){
			
			finalWord[j] = finalWord[j] + letterI[j] + "  ";
					
		}else if(inputString[i] == "J" || inputString[i] == "j"){
			
			finalWord[j] = finalWord[j] + letterJ[j] + "  ";
			
		}else if(inputString[i] == "K" || inputString[i] == "k"){
			
			finalWord[j] = finalWord[j] + letterK[j] + "  ";
			
		}else if(inputString[i] == "L" || inputString[i] == "l"){
			
			finalWord[j] = finalWord[j] + letterL[j] + "  ";
			
		}else if(inputString[i] == "M" || inputString[i] == "m"){
			
			finalWord[j] = finalWord[j] + letterM[j] + "  ";
			
		}else if(inputString[i] == "N" || inputString[i] == "n"){
			
			finalWord[j] = finalWord[j] + letterN[j] + "  ";
			
		}else if(inputString[i] == "O" || inputString[i] == "o"){
			
			finalWord[j] = finalWord[j] + letterO[j] + "  ";
			
		}else if(inputString[i] == "P" || inputString[i] == "p"){
			
			finalWord[j] = finalWord[j] + letterP[j] + "  ";
			
		}else if(inputString[i] == "Q" || inputString[i] == "q"){
			
			finalWord[j] = finalWord[j] + letterQ[j] + "  ";
			
		}else if(inputString[i] == "R" || inputString[i] == "r"){
			
			finalWord[j] = finalWord[j] + letterR[j] + "  ";
			
		}else if(inputString[i] == "S" || inputString[i] == "s"){
			
			finalWord[j] = finalWord[j] + letterS[j] + "  ";
			
		}else if(inputString[i] == "T" || inputString[i] == "t"){
			
			finalWord[j] = finalWord[j] + letterT[j] + "  ";
			
		}else if(inputString[i] == "U" || inputString[i] == "u"){
			
			finalWord[j] = finalWord[j] + letterU[j] + "  ";
			
		}else if(inputString[i] == "V" || inputString[i] == "v"){
			
			finalWord[j] = finalWord[j] + letterV[j] + "  ";
			
		}else if(inputString[i] == "W" || inputString[i] == "w"){
			
			finalWord[j] = finalWord[j] + letterW[j] + "  ";
			
		}else if(inputString[i] == "X" || inputString[i] == "x"){
			
			finalWord[j] = finalWord[j] + letterX[j] + "  ";
			
		}else if(inputString[i] == "Y" || inputString[i] == "y"){
			
			finalWord[j] = finalWord[j] + letterY[j] + "  ";
			
		}else if(inputString[i] == "Z" || inputString[i] == "z"){
			
			finalWord[j] = finalWord[j] + letterZ[j] + "  ";
			
		}
	}
}

console.log(finalWord[0]);
console.log(finalWord[1]);
console.log(finalWord[2]);
console.log(finalWord[3]);
console.log(finalWord[4]);