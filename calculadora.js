function agregar(valor) {
  document.getElementById('pantalla').value += valor;
}

function limpiar() {
  document.getElementById('pantalla').value = '';
}

function borrar() {
  const pantalla = document.getElementById('pantalla');
  pantalla.value = pantalla.value.slice(0, -1);
}

function calcular() {
  const pantalla = document.getElementById('pantalla');
  try {
    pantalla.value = eval(pantalla.value);
  } catch {
    pantalla.value = 'Error';
  }
}

function pruebas() {
  const casos = [
    { expresion: '2+3',   esperado: 5 },
    { expresion: '10-4',  esperado: 6 },
    { expresion: '3*4',   esperado: 12 },
    { expresion: '20/4',  esperado: 5 },
    { expresion: '10%3',  esperado: 1 },
  ];

  let resultados = '';
  casos.forEach(({ expresion, esperado }) => {
    const resultado = eval(expresion);
    const ok = resultado === esperado;
    resultados += `${ok ? '✅' : '❌'} ${expresion} = ${resultado} (esperado: ${esperado})\n`;
  });

  alert(resultados);
}
