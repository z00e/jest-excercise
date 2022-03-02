import { chunk } from "../utils";


describe('test `chunk` function', () => {
    it('without `chunkSize` arg', function () {
        expect( chunk( ['a', 'b', 'c', 'd'] ) ).toEqual( [ [ 'a' ], [ 'b' ], [ 'c' ], [ 'd' ] ] );
    });

    it('with `chunkSize` arg', function () {
        expect( chunk( ['a', 'b', 'c', 'd'], 2 ) ).toEqual( [ [ 'a', 'b' ], [ 'c', 'd' ] ] );
    });
})
