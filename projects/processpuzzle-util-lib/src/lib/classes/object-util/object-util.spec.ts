import { ObjectUtil } from './object-util';

describe('ObjectUtil behaviour', () => {
   const nullObject: any = null;
   const undefinedObject = undefined ;
   const notNullObject: any = 'something';
   const stringObject = 'some string';
   const numberObject = 128;
   const classInstance: Date = new Date();

   beforeEach(() => {});

   it('isNullOrUndefined() returns true when null or undefined, othervise false', () => {
      expect( ObjectUtil.isNullOrUndefined( nullObject ) ).toBeTruthy();
      expect( ObjectUtil.isNullOrUndefined( undefinedObject ) ).toBeTruthy();
      expect( ObjectUtil.isNullOrUndefined( notNullObject ) ).toBeFalsy();
   });

   it('isNull() returns true when null, othervise false', () => {
      expect( ObjectUtil.isNull( nullObject ) ).toBeTruthy();
      expect( ObjectUtil.isNull( undefinedObject ) ).toBeFalsy();
      expect( ObjectUtil.isNull( notNullObject ) ).toBeFalsy();
   });

   it('isUndefined() returns true when undefined, othervise false', () => {
      expect( ObjectUtil.isUndefined( nullObject ) ).toBeFalsy();
      expect( ObjectUtil.isUndefined( undefinedObject ) ).toBeTruthy();
      expect( ObjectUtil.isUndefined( notNullObject ) ).toBeFalsy();
   });

   it('isString() returns true when type of object is string, othervise false', () => {
      expect( ObjectUtil.isString( stringObject ) ).toBeTruthy();
      expect( ObjectUtil.isString( numberObject ) ).toBeFalsy();
      expect( ObjectUtil.isString( nullObject ) ).toBeFalsy();
      expect( ObjectUtil.isString( undefinedObject ) ).toBeFalsy();
   });

   it('isObject() returns true when valid object (class instance) or null, othervise false', () => {
      expect( ObjectUtil.isObject( classInstance ) ).toBeTruthy();
      expect( ObjectUtil.isObject( nullObject ) ).toBeTruthy();
      expect( ObjectUtil.isObject( stringObject ) ).toBeFalsy();
      expect( ObjectUtil.isObject( numberObject ) ).toBeFalsy();
      expect( ObjectUtil.isObject( notNullObject ) ).toBeFalsy();
      expect( ObjectUtil.isObject( undefinedObject ) ).toBeFalsy();
   });
});
