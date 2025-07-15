import tseslint from 'typescript-eslint';
import { Linter } from 'eslint';

const config = tseslint.configs.recommended as Linter.Config[];

export default (): Linter.Config[] => config.concat({});
