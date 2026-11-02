function compoundInterest(principal, rate, years) {
  return principal * Math.pow(1 + rate, years);
}

const val = compoundInterest(1, 0.05, 216);
if (val > 30000) {
  console.log('✓ Econometric compounding multiplier verified');
  process.exit(0);
} else {
  process.exit(1);
}
