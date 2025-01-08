import { BinarySearchTree, TreeNode } from './lib/bst';

/**
 * Returns the values in the BST in numerical order, smallest to largest.
 */
export function traverse(bst: BinarySearchTree): number[] {
  return traverseRecursive(bst.root);
}

function traverseRecursive(node: TreeNode | undefined): number[] {
  if (node === undefined) {
    return [];
  }

  const left = traverseRecursive(node?.left);
  const right = traverseRecursive(node?.right);
  const combine = [...left, node?.value, ...right];
  return combine;
  // const nodeArray = [];
  // nodeArray.push(traverseRecursive(node.left));
  // nodeArray.push(traverseRecursive(node.right));
  // nodeArray.push(node.value);
  // return [
  //   ...traverseRecursive(node.left),
  //   node.value,
  //   ...traverseRecursive(node.right),
  // ];
}
