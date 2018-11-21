import {JsonConverter, JsonCustomConvert} from 'json2typescript';

import { TreeNode } from './tree-node';
import { JsonMapper } from '../json-mapper/json-mapper';

@JsonConverter
export class TreeNodeConverter implements JsonCustomConvert<TreeNode> {
  private jsonMapper = new JsonMapper();
  private children: any[] = [];
  private lastParentNode: TreeNode;
  private childNodesConverter: TreeNodeConverter;
  private treeNodeString: any = {};

  public serialize( treeNode: TreeNode ): any {
    if ( treeNode.hasChildren() ) {
      this.lastParentNode = treeNode;
      this.childNodesConverter = new TreeNodeConverter();
      treeNode.children.forEach( childNode => {
        this.children.push( this.childNodesConverter.serialize( childNode ));
      });
      this.treeNodeString = this.jsonMapper.serialize( treeNode );
      this.treeNodeString['children'] = this.children;
    } else {
      this.treeNodeString = this.jsonMapper.serialize( treeNode );
    }
    return this.treeNodeString;
  }

  public deserialize( treeNodeObj: any): TreeNode {
    const currentNode = ( this.jsonMapper as any).deserialize( treeNodeObj, TreeNode );
    return currentNode;
  }
}
