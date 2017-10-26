import {isNullOrUndefined} from 'util';
import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject
export class TreeNode {
  // static methods
  public static parse( json: string ): TreeNode {
    const tree = JSON.parse( json );
    return tree;
  }

  // private instance fields
  @JsonProperty( 'name', String ) private _name: string | undefined = undefined;
  @JsonProperty( 'title', String ) private _title: string | undefined = undefined;
  @JsonProperty( 'children', [TreeNode], false ) private _children: TreeNode[] = [];
  @JsonProperty( 'parent', TreeNode, true ) private _parent: TreeNode | null;
  private _referencedObject: any;

  // constructors
  constructor( nodeName: string, nodeTitle: string, nodeReferencedObject?: any ) {
    this._name = nodeName;
    this._title = nodeTitle;
    this._referencedObject = nodeReferencedObject;
  }

  // public accessors and mutators
  public addChild( childNode: TreeNode ): void {
    this._children.push( childNode );
    childNode.parent = this;
  }

  public detach(): void {
    if ( !isNullOrUndefined( this._parent )) {
       this._parent.removeChild( this );
    }
  }

  public findChildByName( name: string ): TreeNode | null {
    let foundNode = null;
    this._children.forEach( (child) => {
      if ( child.name === name ) { foundNode = child; }
    });
    return foundNode;
  }

  public findChildByTitle( title: string ): TreeNode | null {
    let foundNode = null;
    this._children.forEach( (child) => {
      if ( child.title === title ) { foundNode = child; }
    });
    return foundNode;
  }

  public findDescendantChildByName( name: string ): TreeNode | null {
    let foundNode = null;
    this._children.forEach( (child) => {
      if ( child.name === name ) {
        foundNode = child;
      } else if ( this.hasChildren() ) {
        this.children.forEach( (childNode) => {
          const node = childNode.findDescendantChildByName( name );
          if ( !isNullOrUndefined( node )) { foundNode = node; }
        });
      }
    });
    return foundNode;
  }

  public findDescendantChildByTitle( title: string ): TreeNode | null {
    let foundNode = null;
    this._children.forEach( (child) => {
      if ( child.title === title ) {
        foundNode = child;
      } else if ( this.hasChildren() ) {
        this.children.forEach( (childNode) => {
          const node = childNode.findDescendantChildByTitle( title );
          if ( !isNullOrUndefined( node )) { foundNode = node; }
        });
      }
    });
    return foundNode;
  }

  public findDescendantChildByReferencedObject( evaluator: ( referencedObject: any ) => boolean ): TreeNode | null {
    if ( evaluator( this.referencedObject )) {
      return this;
    }

    this._children.forEach( (child) => {
       const node = child.findDescendantChildByReferencedObject( evaluator );
       if ( !isNullOrUndefined( node )) {
          return node;
       }
    });
    return null;
  }

  public hasChildren(): boolean {
    return this._children.length > 0;
  }

  public parents( includeCurrent?: boolean ): TreeNode[] {
    const parents = new Array<TreeNode>();
    let parent = this._parent;

    if ( !isNullOrUndefined( includeCurrent ) && includeCurrent ) {
      parents.push( this );
    }

    while ( !isNullOrUndefined( parent )) {
      parents.push( parent );
      parent = parent.parent;
    }
    return parents;
  }

  public parentReferencedObjects( includeCurrent?: boolean ): any[] {
    const referencedObjects = new Array();

    if ( !isNullOrUndefined( includeCurrent ) && includeCurrent ) {
      referencedObjects.push( this._referencedObject );
    }

    this.parents().forEach( (parent) => {
      referencedObjects.push( parent.referencedObject );
    });
    return referencedObjects;
  }

  public parentTitles( includeCurrent?: boolean ): string[] {
    const titles = new Array<string>();

    if ( !isNullOrUndefined( includeCurrent ) && includeCurrent ) {
      titles.push( this._title );
    }

    this.parents().forEach( (parent) => titles.push( parent.title ));
    return titles;
  }

  public removeChild( childNode: TreeNode ) {
    this._children = this._children.slice( this._children.lastIndexOf( childNode ) - 1, 1 );
    childNode.parent = null;
  }

  // properties
  // @formatter:off
  public get children(): TreeNode[] { return this._children; }
  public get name(): string { return this._name; }
  public get parent(): TreeNode | null { return this._parent; }
  public set parent( parent: TreeNode | null ) { this._parent = parent; }
  public get referencedObject(): any { return this._referencedObject; }
  public set referencedObject( anObject: any ) { this._referencedObject = anObject; }
  public get title(): string { return this._title; }
  // @formatter:on
}
