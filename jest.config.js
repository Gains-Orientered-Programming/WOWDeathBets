module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	moduleFileExtensions: ['ts', 'js', 'json'],
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest',
	},
	testMatch: ['**/*.steps.ts'],
	globals: { 'ts-jest': { tsConfig: 'tsconfig.json' } },
};
