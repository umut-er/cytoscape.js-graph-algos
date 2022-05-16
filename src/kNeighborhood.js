export function kNeighborhood(root, k, direction) {
	var Q = [];
	var visited = {};
	var compoundVisited = {};
	var kneighbors = [];
	let cy = this.cy();
	var compoundBFS = cy.elements().compoundBFS(root, k, direction);
	let neighborNodes = compoundBFS.neighborNodes;
	let neighborEdges = compoundBFS.neighborEdges;

	for (let i = 0; i < neighborNodes.length; i++) {
		if (neighborNodes[i].isParent() === false && neighborNodes[i].id() !== root.id())
			neighborNodes[i].addClass('highlighted');
		else if (neighborNodes[i].id() !== root.id())
			neighborNodes[i].addClass('highlightedParent');
	}
	for (let i = 0; i < neighborEdges.length; i++) {
		neighborEdges[i].addClass('highlighted');
	}
	return {
		neighborNodes: neighborNodes,
		neighborEdges: neighborEdges
	};
};