class Atleta {
  constructor(nome, idade, peso, altura, notas) {
    (this.nome = nome),
      (this.idade = idade),
      (this.peso = peso),
      (this.altura = altura),
      (this.notas = notas);
  }

  calculaCategoria() {
    if (this.idade >= 9 && this.idade <= 11) {
      return "Infantil";
    }
    if (this.idade >= 12 && this.idade <= 13) {
      return "Juvenil";
    }
    if (this.idade >= 14 && this.idade <= 15) {
      return "Intermediário";
    }
    if (this.idade >= 16 && this.idade <= 30) {
      return "Adulto";
    } else {
      return "Sem categoria";
    }
  }

  calculaIMC() {
    return this.peso / (this.altura * this.altura);
  }

  calculaMediaValida() {
    let notasOrganizadas = this.notas.sort(function (a, b) {
      if (a > b) {
        return 1;
      }
      if (a < b) {
        return -1;
      } else {
        return 0;
      }
    });
    let notasAComputar = notasOrganizadas.slice(1, 4);
    let somaDasNotas = notasAComputar.reduce(function (notaAtual, notaAntiga) {
      return notaAntiga + notaAtual;
    }, 0);
    let media = somaDasNotas / notasAComputar.length;
    return media;
  }

  obtemNomeAtleta() {
    return this.nome;
  }

  obtemIdadeAtleta() {
    return this.idade;
  }

  obtemPesoAtleta() {
    return this.peso;
  }

  obtemNotasAtleta() {
    return this.notas;
  }

  obtemCategoria() {
    return this.calculaCategoria();
  }

  obtemIMC() {
    return this.calculaIMC();
  }

  obtemMediaValida() {
    return this.calculaMediaValida();
  }
}

let informacoesAtletas = [
  new Atleta("Cesar Abasca", 30, 80, 1.7, [10, 9.34, 8.42, 10, 7.88]),
  new Atleta("Fernando Puntel", 45, 75, 1.61, [8, 10, 10, 7, 9.33]),
  new Atleta("Daiane Jelinsky", 11, 45, 1.45, [7, 10, 9.5, 9.5, 8]),
  new Atleta("Bruno Castro", 13, 80, 1.53, [10, 10, 10, 9, 9.5]),
];

for (let i = 0; i < informacoesAtletas.length; i++) {
  console.log(`Nome: ${informacoesAtletas[i].obtemNomeAtleta()}`);
  console.log(`Idade: ${informacoesAtletas[i].obtemIdadeAtleta()}`);
  console.log(`Peso: ${informacoesAtletas[i].obtemPesoAtleta()}`);
  console.log(`Altura: ${informacoesAtletas[i].altura}`);
  console.log(`Notas: ${informacoesAtletas[i].obtemNotasAtleta().join(", ")}`);
  console.log(`Categoria: ${informacoesAtletas[i].obtemCategoria()}`);
  console.log(`IMC: ${informacoesAtletas[i].obtemIMC()}`);
  console.log(`Média Valida: ${informacoesAtletas[i].obtemMediaValida()}`);
  console.log("");
}
