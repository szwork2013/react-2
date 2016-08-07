import * as types from './actionTypes';

export function increaseAction(num = 1) {
	return {
		type: types.TEST_INCREASE,
		num
	};
};

export function themeAction() {
	return {
		type: types.TEST_THEME,
	};
};