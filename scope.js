function funcGlobal() {
  let a = 1;

  function funcDeep() {
    let b = 2;

    function funcDeeper() {
      let c = 3;

      console.log('funcDeeper(): ', a, b, c);
    }
    funcDeeper();
    console.log('funcDeep(): ', a, b);
  }
  funcDeep();
  console.log('funcGlobal(): ', a);
}
funcGlobal();