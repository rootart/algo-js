import solution from './max_difference';

describe('finding max difference value for buying/selling in the given array', () =>{
    it('test for empty array', ()=>{
        expect(solution([])).toEqual([0, 0, 0]);
    });

    it('array with one element', ()=>{
        expect(solution([])).toEqual([0, 0, 0]);
    });

    it('array with multiple', ()=>{
        expect(solution([-1, 3, 4, 8, 9])).toEqual([0, 4, 10]);
    });
});
