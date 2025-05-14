class EnumX {
  static of<T extends object>(e: T) {
    const values = Object.values(e);
    const map = new Map(values.map((k, i) => [k, values[i + 1]]));
    return {
      next: <K extends keyof T>(v: T[K]) => map.get(v),
    };
  }
}

export default EnumX;

// https://stackoverflow.com/questions/73588654/how-to-get-next-or-previous-enum-value-in-typescript
// https://www.typescriptlang.org/play?ssl=18&ssc=3&pln=18&pc=26#code/KYOwrgtgBAogzlA3gKClAglAvFARAQ1wBpUoAhbPAI2NIGFLcBjWgX2WSYBt84EZwEABpJScAC75xASyZQA9gDMAPABUowAB7jQAEwTyqAK2BNxAPgAUwAFxRVASlFo0TeSAlQAbvi5hgCDgA8sam4gB0Pn4B1g6kru6eEPgADpQgwADuUACyqZZR-nDhySmWlgDWRFDSTljmUADaVd6+RY3SUADUUACMALr9Dg4A3PFQAE7A4mATIM4uaBnadsoA0hraeggVwACeSvZWXnaqjWtD2A2l4QDm0wVxi+xo7OycifJcwOFc8reWUgCSBCcJKSzwBzhZbiCHFdAOEhoYHCMGKOFQmFw8JkRFAwSg8GQ6FaWHwcJ0PGjIA
