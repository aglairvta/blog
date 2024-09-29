---
title: 'YouTube premium na smart tv samsung'
description: 'Conheça como bloquear anúncios do YouTube na sua smart TV Samsung, que não é Android.'
pubDate: '29-09-2024'
tags: ['tecnologia']
---

Conheça como bloquear anúncios do YouTube na sua smart TV Samsung, que não é Android.

Você sabia que é possível ter os recursos Premium na sua Smart TV da Samsung, mesmo que ela não tenha suporte direto ao Android?

É claro que em uma TV Android, que suporta a instalação de APKs, o processo se torna mais prático, pois há alternativas open source que fornecem essas experiências, como o [SmartTube](https://github.com/yuliskov/SmartTube). Mas e quando a TV não é Android, é apenas smart, e você não possui uma TV Box? É disso que falaremos hoje.

Para continuar, você deve conhecer essas duas ferramentas:

**Tizenbrew**

O Tizenbrew é uma ferramenta de desenvolvimento open source que ajuda a criar e testar aplicativos para o sistema operacional Tizen da Samsung.

- [Repositório](https://github.com/reisxd/TizenBrew?tab=readme-ov-file)

- [Manual](https://github.com/reisxd/TizenBrew/blob/main/docs/README.md)

**TizenTube**

O TizenTube é um aplicativo de streaming open source que permite aos usuários assistir a vídeos online em dispositivos Tizen, como smart TVs da Samsung.

- [Repositório](https://github.com/reisxd/TizenTube)

## Ok, e como instalar? 

Você pode seguir o manual indexado acima por conta própria ou continuar aqui no blog, onde compartilharei a forma mais prática, com base na minha experiência.

*Utilizei o método com instalador*:

- Funciona apenas na Tizen 3.0 a 6.0 (2017 a 2021).
  
- Se você tiver uma TV mais recente, use o atualizador TizenBrew, o método USB Demo Package ou o método de linha de comando.
  
#### Passo a passo

- Altere o endereço IP da TV para 127.0.0.1 e ative o modo desenvolvedor, seguindo este [tutorial](https://developer.samsung.com/smarttv/develop/getting-started/using-sdk/tv-device.html#Connecting-the-TV-and-SDK).
  
- Em seguida, acesse pelo navegador da sua TV este endereço: https://tizentube.vercel.app/installer
  
- Após, basta clicar em 'Instalar TizenBrew' e aguardar a instalação.
  
> Há diferentes métodos de instalação com os quais você pode se sentir mais confortável. Visite o projeto e tire suas próprias conclusões.