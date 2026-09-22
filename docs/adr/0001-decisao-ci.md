# ADR 001: Uso do Github Actions para Integração Contínua

## Contexto
O projeto precisa rodar testes automaticamente a cada Pull Request.
Existem várias ferramentas de CI no mercado (Jenkins, CircleCI, Github Actions).

## Decisão
Vamos usar o GitHub Actions.

## Motivo
Já hospedamos o código no GitHub, então não é preciso integrar com plataforma. É gratuito para repositórios públicos e a configuração fica no próprio repositório, versionada junto com o código.

## Comsequências
Ficamos dependentes do ecossistema GitHub. Se um dia migrarmos de plataforma de hospedagem, o pipeline de CI precisará ser recriado.