import {isNullOrUndefined} from 'util';
import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject
export class TreeNode {
   // private instance fields
   @JsonProperty( 'name', String ) private _name: string | undefined = undefined;
   @JsonProperty( 'title', String ) private _title: string | undefined = undefined;
   @JsonProperty( 'children', [TreeNode], false ) private _children: TreeNode[] = [];
   @JsonProperty( 'parent', TreeNode, true ) private _parent: TreeNode | null;
   private _referencedObject: any;

  // static methods
  public static parse( json: string ): TreeNode {
    const tree = JSON.parse( json );
    return tree;
  }


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

  public compareName( subjectNode: TreeNode, expectedName: string ) {
    return subjectNode.name === expectedName;
  }

  public compareReferencedObject( subjectNode: TreeNode, evaluator: ( referencedObject: any ) => boolean ) {
    return evaluator( subjectNode.referencedObject );
  }

  public compareTitle( subjectNode: TreeNode, expectedTitle: string ) {
    return subjectNode.title === expectedTitle;
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

  public findDescendantChild( compareNodeProperty: ( subjectNode: TreeNode, propertyValue: any ) => boolean, propertyValue: any ): TreeNode | null {
    let foundNode: TreeNode = null;
    if ( compareNodeProperty( this, propertyValue )) {
        foundNode = this;
    } else {
      this._children.forEach( (child) => {
         const node = child.findDescendantChild( compareNodeProperty, propertyValue );
         if ( !isNullOrUndefined( node )) {
           foundNode = node;
         }
      });
    }
    return foundNode;
  }

  public findDescendantChildByName( name: string ): TreeNode | null {
    return this.findDescendantChild( this.compareName, name );
  }

  public findDescendantChildByTitle( title: string ): TreeNode | null {
    return this.findDescendantChild( this.compareTitle, title );
  }

  public findDescendantChildByReferencedObject( evaluator: ( referencedObject: any ) => boolean ): TreeNode | null {
    return this.findDescendantChild( this.compareReferencedObject, evaluator );
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

  // protected, private helper methods

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
