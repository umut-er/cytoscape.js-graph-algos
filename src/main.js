import {kNeighborhood} from "./kNeighborhood.js";
import {compoundBFS} from "./compoundBFS.js";
import {commonStream} from "./commonStream.js"
import {pathsBetween} from "./pathsBetween.js";
import {pathsFromTo} from "./pathsFromTo.js";
import { commonStreamNodeGroups } from "./commonStreamNodeGroups.js";

//register the algorithms as cytoscape collection function
export default function register(cytoscape) {
	cytoscape('collection', 'kNeighborhood', kNeighborhood);
	cytoscape('collection', 'compoundBFS', compoundBFS);
	cytoscape('collection', 'commonStream', commonStream);
	cytoscape('collection', 'pathsBetween', pathsBetween);
	cytoscape('collection', 'pathsFromTo', pathsFromTo);
	cytoscape('collection', 'commonStreamNodeGroups', commonStreamNodeGroups);
}
if (typeof cytoscape !== 'undefined') {
	register(cytoscape);
}
