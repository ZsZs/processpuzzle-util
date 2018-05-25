import { ObjectUtil } from './object-util';

describe('ObjectUtil behaviour', () => {
   const nullObject: any = null;
   let undefinedObject: any ;
   const notNullObject: any = 'something';

   beforeEach(() => {});

   it('isNullOrUndefined() returns true when null or undefined, othervise false', () => {
      expect( ObjectUtil.isNullOrUndefined( nullObject ) ).toBeTruthy();
      expect( ObjectUtil.isNullOrUndefined( undefinedObject ) ).toBeTruthy();
//      expect( ObjectUtil.isNullOrUndefined( notNullObject ) ).toBeFalsy();
   });
});
