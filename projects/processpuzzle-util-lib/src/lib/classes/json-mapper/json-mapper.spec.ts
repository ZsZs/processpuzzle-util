import { TestBed } from '@angular/core/testing';

import { JsonMapper } from './json-mapper';
import { TreeNode } from '../tree-node/tree-node';

describe('JSON Mapper', () => {
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
      title: 'Child node one.',
      children: [] as TreeNode[]
    },
    {
      name: 'ChildNodeTwo',
      title: 'Child node two.',
      children: [] as TreeNode[]
    }] as TreeNode[]
  };
  const jsonObjectTwo = { name: 'SampleNodeTwo', title: 'Sample node two.', children: [] as string[] };
  const jsonObjectArray = [ jsonObjectOne, jsonObjectTwo ];

  let jsonMapper: JsonMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonMapper]
    });

    jsonMapper = TestBed.get( JsonMapper );
  });

  it( 'serialize() maps object to string', () => {
    expect( jsonMapper.serialize( treeNodeOne )).toEqual( jsonObjectOne );
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
