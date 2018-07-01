function walkArray(node, visitor) {

  for (let i = 0; i < node.children.length; i++) {
    let treeNode = node.children[i];
    visitor(treeNode);
    if (treeNode.children) {
      walkArray(treeNode, visitor);
    }
  }

}

function flattenArray(root) {

  const flatten = [];

  walkArray(root, function(node) {
    flatten.push(node);
  });

  return flatten;

}

exports.walkArray = walkArray;

exports.flattenArray = flattenArray;
