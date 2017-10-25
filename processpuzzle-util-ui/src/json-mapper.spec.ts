import { TestBed } from '@angular/core/testing';

import { JsonMapper } from './json-mapper';
import { TreeNode } from './tree-node';

describe('JSON Mapper', () => {
  const TREE_NODE_NAME = 'SampleNode';
  const TREE_NODE_TITLE = 'Sample node.';
  const treeNode = new TreeNode( TREE_NODE_NAME, TREE_NODE_TITLE );
  const jsonObject = { name: 'SampleNode', title: 'Sample node.', children: [] };

  let jsonMapper: JsonMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonMapper]
    });

    jsonMapper = TestBed.get( JsonMapper );
  });

  it( 'serialize() maps object to string', () => {
    expect( jsonMapper.serialize( treeNode )).toEqual( jsonObject );
  });

  it( 'deserialize() maps string to object', () => {
    expect( (jsonMapper as any).deserialize( jsonObject, TreeNode )).toEqual( treeNode );
  });
});
