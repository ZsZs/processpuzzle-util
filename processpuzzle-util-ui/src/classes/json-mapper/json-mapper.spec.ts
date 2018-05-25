import { TestBed } from '@angular/core/testing';

import { JsonMapper } from './json-mapper';
import { TreeNode } from '../tree-node/tree-node';

describe('JSON Mapper', () => {
  const TREE_NODE_ONE_NAME = 'SampleNodeOne';
  const TREE_NODE_ONE_TITLE = 'Sample node one.';
  const TREE_NODE_TWO_NAME = 'SampleNodeTwo';
  const TREE_NODE_TWO_TITLE = 'Sample node two.';
  const treeNodeOne = new TreeNode( TREE_NODE_ONE_NAME, TREE_NODE_ONE_TITLE );
  const treeNodeTwo = new TreeNode( TREE_NODE_TWO_NAME, TREE_NODE_TWO_TITLE );
  const treeNodeArray = [ treeNodeOne, treeNodeTwo ];
  const jsonObjectOne = { name: 'SampleNodeOne', title: 'Sample node one.', children: [] as string[] };
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

  it( 'deserializeArray() maps string to array of objects', () => {
    expect( (jsonMapper as any).deserializeArray( jsonObjectArray, TreeNode )).toEqual( treeNodeArray );
  });

  it( 'deserialize() maps string to object', () => {
    expect( (jsonMapper as any).deserialize( jsonObjectOne, TreeNode )).toEqual( treeNodeOne );
  });
});
