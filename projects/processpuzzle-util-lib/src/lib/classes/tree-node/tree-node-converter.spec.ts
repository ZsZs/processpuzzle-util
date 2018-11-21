import { TestBed} from '@angular/core/testing';
import { TreeNode } from './tree-node';
import { TreeNodeConverter } from './tree-node-converter';

describe('TeeNode Converter', () => {
  const TREE_NODE_ONE_NAME = 'SampleNodeOne';
  const TREE_NODE_ONE_TITLE = 'Sample node one.';
  const TREE_NODE_TWO_NAME = 'SampleNodeTwo';
  const TREE_NODE_TWO_TITLE = 'Sample node two.';
  const CHILD_NODE_ONE_NAME = 'ChildNodeOne';
  const CHILD_NODE_ONE_TITLE = 'Child node one.';
  const CHILD_NODE_TWO_NAME = 'ChildNodeTwo';
  const CHILD_NODE_TWO_TITLE = 'Child node two.';
  const treeNodeOne = new TreeNode( TREE_NODE_ONE_NAME, TREE_NODE_ONE_TITLE );
  const treeNodeTwo = new TreeNode( TREE_NODE_TWO_NAME, TREE_NODE_TWO_TITLE );
  const childNodeOne = new TreeNode( CHILD_NODE_ONE_NAME, CHILD_NODE_ONE_TITLE );
  const childNodeTwo = new TreeNode( CHILD_NODE_TWO_NAME, CHILD_NODE_TWO_TITLE );
  treeNodeOne.addChild( childNodeOne );
  treeNodeOne.addChild( childNodeTwo );
  const treeNodeArray = [ treeNodeOne, treeNodeTwo ];
  const jsonObjectOne = {
    name: 'SampleNodeOne',
    title: 'Sample node one.',
    children: [{
      name: 'ChildNodeOne',
      title: 'Child node one.'
    },
    {
      name: 'ChildNodeTwo',
      title: 'Child node two.'
    }] as TreeNode[]
  };
  const jsonObjectTwo = { name: 'SampleNodeTwo', title: 'Sample node two.', children: [] as string[] };
  const jsonObjectArray = [ jsonObjectOne, jsonObjectTwo ];

  let treeNodeConverter: TreeNodeConverter;

  beforeEach(() => {
    TestBed.configureTestingModule({
    });

    treeNodeConverter = new TreeNodeConverter();
  });

  it( 'serialize() maps object to string', () => {
    expect( treeNodeConverter.serialize( treeNodeOne )).toEqual( jsonObjectOne );
  });
  //
  // it( 'deserialize() maps string to object', () => {
  //   expect( (jsonMapper as any).deserialize( jsonObjectOne, TreeNode )).toEqual( treeNodeOne );
  // });
  //
  // it( 'deserializeArray() maps string to array of objects', () => {
  //   expect( (jsonMapper as any).deserializeArray( jsonObjectArray, TreeNode )).toEqual( treeNodeArray );
  // });
});
