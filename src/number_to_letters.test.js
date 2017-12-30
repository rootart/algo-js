import { generateHeadAndTail, solution, translateToLetters } from './number_to_letters';


describe('test assignment to which translates list of numbers to string', ()=>{

    it('generateHeadAndTail function', () => {
        expect(generateHeadAndTail([[1],[2]])).toEqual([[[1, 2], []]]);
        expect(generateHeadAndTail([[1],[2, 3]])).toEqual([[[1, 2], [3]], [[1, 23], []]]);
    });

    it('solution function', ()=>{
        const expected = [ [ 12, 3 ], [ 1, 23 ], [ 1, 2, 3 ] ];
        expect(solution([1, 2, 3])).toEqual(expected);
    });

    it('with translateToLetters', () => {
        const solutionsList = translateToLetters(solution([1, 2, 3]));
        expect(solutionsList).toContain('abc');
        expect(solutionsList).toContain('lc');
        expect(solutionsList).toContain('aw');
    });
});
