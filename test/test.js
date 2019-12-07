'use strict';

//import { expect } from 'chai';
//import { titleCase } from './../index';

const { expect } = require('chai');
const utils = require('../index');

describe('#titleCase', () => {
    it('should convert lowercase string to proper case', () => {
        const res = utils.titleCase('i’m a little tea pot');
        expect(res).to.equal('I’m A Little Tea Pot');
    });

    it('should convert mixed case string to proper case', () => {
        const res = utils.titleCase('sHoRt AnD sToUt');
        expect(res).to.equal('Short And Stout');
    });

    it('should convert uppercase string to proper case', () => {
        const res = utils.titleCase('HERE IS MY HANDLE HERE IS MY SPOUT');
        expect(res).to.equal('Here Is My Handle Here Is My Spout');
    });
});