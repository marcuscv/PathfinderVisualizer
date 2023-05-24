// Returns nodes in the order that they were visited.
// Nodes will point back to their previous node to backtrack
// to compute the shortest path

export function dijkstra(grid, startNode, targetNode){
    const visitedNodesInOrder = [];
    startNode.distance = 0;
    const unvisitedNodes = getAllNodes(grid);
    while(!!unvisitedNodes.length){
        sortNodesByDistance(unvisitedNodes);
        const closestNode = unvisitedNodes.shift();
        //if the node is a wall, we skip it
        if(closestNode.isWall) continue;

        //we will check if the start node is trapped within walls
        //by checking if the closest node is at a distance of infinity
        if(closestNode.distance == Infinity) return visitedNodesInOrder;

        closestNode.isVisited = true;
        visitedNodesInOrder.push(closestNode);
        if(closestNode === targetNode) return visitedNodesInOrder;
        updateUnvisitedNeighbors(closestNode, grid);
    }
}

function sortNodesByDistance(unvisitedNodes){
    unvisitedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
}

function updateUnvisitedNeighbors(node, grid) {
    const unvisitedNeighbors = getUnvisitedNeighbors(node, grid);
    for(const neighbor of unvisitedNeighbors) {
        neighbor.distance = node.distance + 1;
        neighbor.previousNode = node;
    }
}

function getUnvisitedNeighbors(node, grid){
    const neighbors = [];
    const {col, row} = node;
    
}