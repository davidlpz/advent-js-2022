function executeCommands(commands) {
  let reg = Array(8).fill(0);
  let i = 0;

  const execute = {
    MOV: (values) => {
      const aux = values.split(',');
      const a = aux[0][0] === 'V' ? reg[aux[0].at(-1)] : parseInt(aux[0]);
      reg[aux[1].at(-1)] = a;
    },
    ADD: (values) => {
      const aux = values.split(',');
      const a = aux[0].at(-1);
      const b = aux[1].at(-1);
      reg[a] = (reg[a] + reg[b]) % 256;
    },
    INC: (values) => {
      reg[values.at(-1)] = (reg[values.at(-1)] + 1) % 256;
    },
    DEC: (values) => {
      reg[values.at(-1)] = (((reg[values.at(-1)] - 1) % 256) + 256) % 256;
    },
    JMP: (values) => {
      if (reg[0] > 0) {
        i = values - 1;
      }
    }
  };

  for (i; i < commands.length; i++) {
    const [instruction, values] = commands[i].split(' ');
    execute[instruction](values);
  }
  return reg;
}


console.log(
  executeCommands([
    'MOV 5,V00', // V00 es 5
    'MOV 10,V01', // V01 es 10
    'DEC V00', // V00 ahora es 4
    'ADD V00,V01' // V00 = V00 + V01 = 14
  ])
);

// Output: [14, 10, 0, 0, 0, 0, 0]

console.log(
  executeCommands([
    'MOV 255,V00', // V00 es 255
    'INC V00', // V00 es 256, desborda a 0
    'DEC V01', // V01 es -1, desborda a 255
    'DEC V01' // V01 es 254
  ])
);

// Output: [0, 254, 0, 0, 0, 0, 0]

console.log(
  executeCommands([
    'MOV 10,V00', // V00 es 10
    'DEC V00', // decrementa V00 en 1  <---┐
    'INC V01', // incrementa V01 en 1      |
    'JMP 1', // bucle hasta que V00 sea 0 ----┘
    'INC V06' // incrementa V06 en 1
  ])
);

// Output: [ 0, 10, 0, 0, 0, 0, 1, 0 ]