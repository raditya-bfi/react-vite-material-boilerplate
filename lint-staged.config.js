export default {
  '*.{ts,tsx}': ['yarn lint ./src', 'yarn format ./src', () => 'yarn tsc', 'git add --force'],
}
