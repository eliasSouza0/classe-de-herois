# 🦸‍♂️ Classe de Heróis 🦸‍♀️

Este projeto implementa uma classe genérica que representa um herói de uma aventura, com várias propriedades e um método de ataque customizado.

## 🛠️ Estrutura da Classe

A classe `Hero` possui as seguintes propriedades:

- **Nome:** Nome do herói.
- **Idade:** Idade do herói.
- **Tipo:** Tipo do herói (ex: guerreiro, mago, monge, ninja).

Além disso, a classe tem um método chamado `atacar` que exibe uma mensagem de ataque customizada de acordo com o tipo do herói.

## ⚔️ Método Atacar

O método `atacar` exibe a mensagem: `O {tipo} está atacando com {ataque}`, onde:

- `{tipo}` é concatenado com o tipo do herói.
- `{ataque}` segue uma descrição diferente conforme o tipo do herói:
  - 🧙‍♂️ Se `mago` -> no ataque exibir `magia`.
  - 🗡️ Se `guerreiro` -> no ataque exibir `espada`.
  - 🥋 Se `monge` -> no ataque exibir `artes marciais`.
  - 🥷 Se `ninja` -> no ataque exibir `shuriken`.


