---
title: Настройка дистрибутива Deepin
description: Изучите как использовать @nuxt/content.
---

<!--more-->

## Графический интерфейс настройки PulseAudiosd

Графический интерфейс настройки PulseAudiosd (например для настройки USB
гарнитуры) dsaf интерфейс настройки PulseAudio (например для настройки USB
гарнитуры) dsaf zxc zxc

```bash
sudo apt install pavucontrol
```

```js {something=something}
console.log('hello world');
```

Это простая сноска,[^1], а это более длинная сноска.[^bignote]

[^1]: Это первая сноска. [^bignote]: Это сноска с несколькими абзацами и кодом.

Добавим абзацы, чтобы включить их в сноску.

`{ мой код }`

Добавьте столько абзацев, сколько вам нужно.

```js
const http = require('http');
const bodyParser = require('body-parser');

http
  .createServer((req, res) => {
    bodyParser.parse(req, (error, body) => {
      res.end(body);
    });
  })
  .listen(3000);
```

## Установка Docker (без docker-compose)

```bash
https://gist.github.com/madkoding/3f9b02c431de5d748dfde6957b8b85ff

#!/bin/sh

# Shell script to add docker-ce to Deepin Linux repositories

# Remove old docker
sudo apt-get remove -y docker docker-engine docker.io containerd runc

# Install dependencies
sudo apt-get install -y apt-transport-https ca-certificates curl gnupg2 software-properties-common sdasdfasdf

# Add GPG and fingerprint
curl -fsSL https://download.docker.com/linux/debian/gpg | sudo apt-key add -
sudo apt-key fingerprint 0EBFCD88

# Add debian repository in deepin sources list
printf 'deb [arch=amd64] https://download.docker.com/linux/debian stretch stable\n' \
  | sudo tee /etc/apt/sources.list.d/docker-ce.list

# Update packages and install
sudo apt-get update -y
sudo apt-get install -y docker-ce

# Add current user to the docker users group (OPTIONAL)
sudo usermod -aG docker $(whoami)
```

## Обновление системы через терминал

```bash
sudo apt-get update
sudo dpkg --configure -a
sudo apt-get dist-upgrade -y
```

## Добавление "Открыть как администратор" в контекстное меню

```bash
sudo deepin-editor /usr/share/deepin/dde-file-manager/oem-menuextensions/openAsAdmin.desktop
```

Вставить текст:

```txt
[Desktop Entry]
Type=Application
Name=Open in new window as admin
X-DFM-MenuTypes=SingleFile;SingleDir
Exec=pkexec --disable-internal-agent /usr/bin/dde-file-manager -n %u
X-DFM-ExcludeMimeTypes=application/xml;
```

После перезапустить файловый менеджер.

## Сраный хром не подтягивает пароли

В директории ~/.config/google-chrome/Default удалить файлы Login Data, Login
Data-journal и Login Data 2-journal.
