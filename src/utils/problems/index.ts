import { Problem } from "../types/problem";
import { search2DMatrix } from "./search-a-2sd-matrix";
import { jumpGame } from "./jump-game";
import { reverseLinkedList } from "./reverse-linked-list";
import { twoSum } from "./two-sum";
import { validParentheses } from "./valid-parentheses";



interface ProblemMap {
	[key: string]: Problem;
}

export const problems: ProblemMap = {
	"two-sum": twoSum,
	"reverse-linked-list": reverseLinkedList,
	"jump-game": jumpGame,
	"search-a-2d-matrix": search2DMatrix,
	"valid-parentheses": validParentheses,
};